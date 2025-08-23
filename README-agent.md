# LinkedIn Pilot ReAct Agent

A professional AI agent built with LangGraph that specializes in LinkedIn automation and career development assistance.

## Features

### 🔍 Web Search (Tavily MCP Integration)
- Real-time web search using Tavily AI search engine
- Industry trend research and market analysis
- Company information gathering
- News and current events tracking

### ✍️ Content Creation
- Generate optimized LinkedIn posts
- Multiple content types: thought leadership, company updates, industry insights
- Professional tone and audience targeting
- Strategic hashtag recommendations

### 📊 Profile Analysis
- Comprehensive LinkedIn profile optimization
- Performance scoring and benchmarking
- Actionable improvement recommendations
- Industry-specific insights

## Architecture

### LangGraph ReAct Agent
- Built using `@langchain/langgraph` prebuilt ReAct agent
- OpenAI GPT-4o model for intelligent reasoning
- Streaming responses for real-time interaction

### MCP Integration
- Tavily search integration via `@langchain/mcp-adapters`
- Real-time web search capabilities
- Automatic fallback to local tools if MCP unavailable

### Tool Architecture
```
├── Local Tools
│   ├── Content Creator - LinkedIn post generation
│   └── Profile Analyzer - Profile optimization
└── MCP Tools
    └── Tavily Search - Web search and research
```

## Installation

1. Install dependencies:
```bash
npm install @langchain/langgraph @langchain/openai @langchain/core @langchain/mcp-adapters zod
```

2. Set up environment variables:
```bash
OPENAI_API_KEY=your-openai-api-key
TAVILY_API_KEY=your-tavily-api-key
```

3. The agent automatically initializes the Tavily MCP server on first use.

## Usage

### Basic Usage
```typescript
import { linkedInAgent } from './lib/agent/react-agent';

// Single response
const response = await linkedInAgent.getSingleResponse("Search for AI trends in LinkedIn marketing");

// Streaming response
const stream = await linkedInAgent.processMessage("Create a thought leadership post about remote work");
for await (const { messages } of stream) {
  const msg = messages[messages?.length - 1];
  if (msg?.content) {
    console.log(msg.content);
  }
}
```

### API Integration
The agent is integrated with Next.js API routes:

```typescript
// POST /api/agent
{
  "message": "Search for latest LinkedIn algorithm updates",
  "streaming": false
}
```

### Demo Interface
Access the interactive demo at `/demo` to test the agent's capabilities.

## Tool Usage Examples

### Web Search
- "Search for LinkedIn best practices 2024"
- "Find recent updates about LinkedIn algorithm changes"
- "Research company culture trends in tech industry"

### Content Creation
- "Create a thought leadership post about AI in recruitment"
- "Generate a company update about our new product launch"
- "Write professional tips for effective networking"

### Profile Analysis
- "Analyze my LinkedIn profile for optimization opportunities"
- "Compare my profile against industry benchmarks"
- "Suggest improvements for better visibility"

## System Prompt

The agent is configured with a specialized system prompt that emphasizes:
- Professional LinkedIn expertise
- Ethical networking practices
- Compliance with LinkedIn terms of service
- Actionable, business-focused insights

## Error Handling

- Graceful fallback when MCP services are unavailable
- Comprehensive error logging for debugging
- User-friendly error messages
- Automatic retry mechanisms for transient failures

## Performance

- Async initialization for optimal startup time
- Efficient tool routing and execution
- Streaming responses for real-time feedback
- Resource cleanup for MCP connections

## Development

### Adding New Tools
1. Create tool in `lib/tools/`
2. Add to tools array in `lib/tools/index.ts`
3. Update metadata for UI integration

### Testing
- Use `/demo` page for interactive testing
- Check console logs for MCP initialization status
- Monitor tool execution and response quality

## Troubleshooting

### MCP Connection Issues
- Check TAVILY_API_KEY environment variable
- Verify network connectivity
- Review console logs for initialization errors

### Tool Execution Problems
- Ensure all dependencies are installed
- Check OpenAI API key and quota
- Verify tool schemas and parameters

## Contributing

Follow the established patterns:
- Professional, business-focused tools
- Comprehensive error handling
- Clear documentation and examples
- Ethical AI practices
