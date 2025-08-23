import { NextRequest, NextResponse } from 'next/server';
import { linkedInAgent } from '@/lib/agent/react-agent';

export async function POST(request: NextRequest) {
  try {
    const { message, streaming = false } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    if (streaming) {
      // Return streaming response
      const encoder = new TextEncoder();
      const stream = new ReadableStream({
        async start(controller) {
          try {
            const agentStream = await linkedInAgent.processMessage(message);
            
            for await (const { messages } of agentStream) {
              const msg = messages[messages?.length - 1];
              if (msg?.content) {
                const chunk = encoder.encode(`data: ${JSON.stringify({ 
                  type: 'content', 
                  content: msg.content,
                  role: msg.role || 'assistant'
                })}\n\n`);
                controller.enqueue(chunk);
              } else if (msg?.tool_calls?.length > 0) {
                const chunk = encoder.encode(`data: ${JSON.stringify({ 
                  type: 'tool_calls', 
                  tool_calls: msg.tool_calls
                })}\n\n`);
                controller.enqueue(chunk);
              }
            }
            
            controller.enqueue(encoder.encode('data: [DONE]\n\n'));
            controller.close();
          } catch (error) {
            console.error('Streaming error:', error);
            controller.error(error);
          }
        },
      });

      return new Response(stream, {
        headers: {
          'Content-Type': 'text/event-stream',
          'Cache-Control': 'no-cache',
          'Connection': 'keep-alive',
        },
      });
    } else {
      // Return single response
      const response = await linkedInAgent.getSingleResponse(message);
      return NextResponse.json({ response });
    }
  } catch (error) {
    console.error('Agent API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const tools = linkedInAgent.getAvailableTools();
    return NextResponse.json({ 
      status: 'LinkedIn Pilot Agent is ready',
      availableTools: tools.length,
      tools: tools
    });
  } catch (error) {
    console.error('Agent status error:', error);
    return NextResponse.json(
      { error: 'Agent not available' },
      { status: 500 }
    );
  }
}
