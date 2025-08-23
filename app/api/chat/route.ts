import { NextRequest, NextResponse } from 'next/server';
import { linkedInAgent } from '@/lib/agent/react-agent';
import { isAIMessageChunk } from '@langchain/core/messages';

export async function POST(request: NextRequest) {
  try {
    const { message, files, memoryContext } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Create streaming response
    const encoder = new TextEncoder();
    
    const stream = new ReadableStream({
      async start(controller) {
        try {
          await linkedInAgent.ensureInitialized();
          
          // Prepare messages for the agent
          let contextMessages = [];
          
          // Add memory context if available
          if (memoryContext) {
            contextMessages.push({
              role: "system" as const,
              content: `Previous conversation context: ${memoryContext}`
            });
          }
          
          // Add current user message
          let userContent = message;
          if (files && files.length > 0) {
            userContent += `\n\nAttached files:\n${files.map((f: any) => `- ${f.name}: ${f.content.substring(0, 200)}...`).join('\n')}`;
          }
          
          contextMessages.push({
            role: "user" as const,
            content: userContent
          });

          console.log('Starting LangGraph stream...');
          
          // Stream from the LangGraph agent
          const agentStream = await linkedInAgent.streamMessages({
            messages: contextMessages
          });

          let hasContent = false;

          for await (const [message, metadata] of agentStream) {
            try {
              // Handle AI message chunks (streaming tokens)
              if (isAIMessageChunk(message)) {
                if (message.content) {
                  hasContent = true;
                  const chunk = encoder.encode(`data: ${JSON.stringify({
                    type: 'content',
                    content: message.content,
                    role: 'assistant'
                  })}\n\n`);
                  controller.enqueue(chunk);
                }
                
                // Handle tool call chunks
                if (message.tool_call_chunks && message.tool_call_chunks.length > 0) {
                  const chunk = encoder.encode(`data: ${JSON.stringify({
                    type: 'tool_calls',
                    tool_calls: message.tool_call_chunks
                  })}\n\n`);
                  controller.enqueue(chunk);
                }
              }
              
              // Handle tool messages
              else if (message.getType?.() === 'tool') {
                const chunk = encoder.encode(`data: ${JSON.stringify({
                  type: 'tool_result',
                  content: message.content,
                  tool_name: message.name
                })}\n\n`);
                controller.enqueue(chunk);
              }
              
              // Handle regular messages
              else if (message.content && message.getType?.() === 'ai') {
                hasContent = true;
                const chunk = encoder.encode(`data: ${JSON.stringify({
                  type: 'content',
                  content: message.content,
                  role: 'assistant'
                })}\n\n`);
                controller.enqueue(chunk);
              }
            } catch (chunkError) {
              console.error('Error processing chunk:', chunkError);
              // Continue processing other chunks
            }
          }

          if (!hasContent) {
            // Send fallback message if no content was streamed
            const chunk = encoder.encode(`data: ${JSON.stringify({
              type: 'content',
              content: 'I apologize, but I was unable to generate a response. Please try again.',
              role: 'assistant'
            })}\n\n`);
            controller.enqueue(chunk);
          }

          // Send completion signal
          controller.enqueue(encoder.encode('data: [DONE]\n\n'));
          controller.close();

        } catch (error) {
          console.error('Chat streaming error:', error);
          
          // Send error message to client
          const errorChunk = encoder.encode(`data: ${JSON.stringify({
            type: 'error',
            error: error instanceof Error ? error.message : 'An unexpected error occurred'
          })}\n\n`);
          controller.enqueue(errorChunk);
          
          controller.enqueue(encoder.encode('data: [DONE]\n\n'));
          controller.close();
        }
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Connection': 'keep-alive',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });

  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ 
    status: 'LinkedIn Pilot Chat API is ready',
    streaming: true,
    endpoint: '/api/chat'
  });
}
