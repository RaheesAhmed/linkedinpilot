import { ChatOpenAI } from "@langchain/openai";
import { createReactAgent } from "@langchain/langgraph/prebuilt";
import { MultiServerMCPClient } from "@langchain/mcp-adapters";
import { tools } from "../tools";

/**
 * LinkedIn Pilot ReAct Agent
 * A professional AI agent for LinkedIn automation and assistance
 */
export class LinkedInPilotAgent {
  private agent: any;
  private model: any;
  private mcpClient: MultiServerMCPClient | null = null;
  private initialized: boolean = false;
  private mcpTools: any[] = [];
  private mcpInitialized: boolean = false;

  constructor() {
    this.model = new ChatOpenAI({
      model: "gpt-4o",
      temperature: 0.7,
      maxTokens: 4000,
    });
    
    // Start MCP initialization immediately and initialize agent
    this.initializeEverything();
  }

  /**
   * Initialize everything immediately including MCP and agent
   */
  private async initializeEverything() {
    try {
      // Initialize MCP first
      await this.initializeMCPClient();
      
      // Create agent with all tools immediately
      const allTools = [...tools, ...this.mcpTools];
      this.agent = createReactAgent({
        llm: this.model,
        tools: allTools,
        stateModifier: this.getSystemPrompt(),
      });
      
      this.initialized = true;
      console.log(`Agent ready with ${allTools.length} tools (${this.mcpTools.length} from MCP)`);
      
    } catch (error) {
      console.error("Error during initialization:", error);
      
      // Fallback to local tools only
      this.agent = createReactAgent({
        llm: this.model,
        tools,
        stateModifier: this.getSystemPrompt(),
      });
      
      this.initialized = true;
      console.log("Agent ready with local tools only");
    }
  }

  /**
   * Initialize MCP client once and cache tools
   */
  private async initializeMCPClient() {
    if (this.mcpInitialized) return;

    try {
      console.log("Initializing MCP client with Tavily (one-time setup)...");
      
      // Initialize MCP client with Tavily server
      this.mcpClient = new MultiServerMCPClient({
        mcpServers: {
          "web-search": {
            command: "npx",
            args: ["-y", "tavily-mcp@latest"],
            transport: "stdio",
            env: {
              TAVILY_API_KEY: process.env.TAVILY_API_KEY || "",
            },
          }
        }
      });

      // Get MCP tools and cache them
      this.mcpTools = await this.mcpClient.getTools();
      this.mcpInitialized = true;
      console.log(`MCP tools cached: ${this.mcpTools.length} tools available`);
      
    } catch (error) {
      console.error("Error initializing MCP client:", error);
      this.mcpTools = []; // Fallback to empty array
      this.mcpInitialized = true; // Mark as initialized even if failed
      console.log("MCP initialization failed, using local tools only");
    }
  }

  public async ensureInitialized() {
    // Wait for initialization to complete if it's still in progress
    while (!this.initialized) {
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }

  private getSystemPrompt(): string {
    // Check if we're in a browser environment and get custom system prompt from localStorage
    if (typeof window !== 'undefined') {
      const customPrompt = localStorage.getItem('openai_system_prompt');
      if (customPrompt && customPrompt.trim()) {
        return customPrompt.trim();
      }
    }
    
    // Default LinkedIn Pilot system prompt
    return `You are LinkedIn Pilot, a professional AI assistant specialized in LinkedIn automation and career development.

Your capabilities include:
- Web research for industry trends and company information using Tavily search
- Content creation and optimization for LinkedIn posts
- Profile analysis and improvement suggestions
- Job market research and opportunity identification
- Professional networking strategies
- LinkedIn best practices and compliance guidance

When users ask for web research or current information, use the tavily-search tool to get real-time data. Always provide accurate, professional, and actionable insights. Maintain a professional tone suitable for business environments.

Important: Always respect LinkedIn's terms of service and promote ethical networking practices.`;
  }

  /**
   * Process a user message and return the agent's response
   */
  async processMessage(message: string): Promise<AsyncIterable<any>> {
    await this.ensureInitialized();
    
    const inputs = { 
      messages: [{ role: "user", content: message }] 
    };

    return this.agent.stream(inputs, {
      streamMode: "values",
    });
  }

  /**
   * Stream messages for real-time token streaming
   */
  async streamMessages(inputs: { messages: Array<{ role: string; content: string }> }) {
    await this.ensureInitialized();
    
    return this.agent.stream(inputs, {
      streamMode: "messages",
    });
  }

  /**
   * Get a single response without streaming
   */
  async getSingleResponse(message: string): Promise<string> {
    await this.ensureInitialized();
    
    const stream = await this.processMessage(message);
    let finalResponse = "";

    for await (const { messages } of stream) {
      const msg = messages[messages?.length - 1];
      if (msg?.content && typeof msg.content === 'string') {
        finalResponse = msg.content;
      }
    }

    return finalResponse;
  }

  /**
   * Cleanup MCP client resources
   */
  async cleanup() {
    if (this.mcpClient) {
      try {
        await this.mcpClient.close();
      } catch (error) {
        console.error("Error closing MCP client:", error);
      }
    }
  }

  /**
   * Get the agent's graph for visualization
   */
  getGraph() {
    return this.agent.getGraph();
  }

  /**
   * Get available tools information including MCP tools
   */
  getAvailableTools() {
    const localTools = tools.map(tool => ({
      name: tool.name,
      description: tool.description,
      source: 'local'
    }));
    
    const mcpToolsInfo = this.mcpTools.map(tool => ({
      name: tool.name,
      description: tool.description,
      source: 'mcp'
    }));
    
    return {
      local: localTools,
      mcp: mcpToolsInfo,
      total: localTools.length + mcpToolsInfo.length
    };
  }

  /**
   * Check if MCP tools are ready
   */
  isMCPReady(): boolean {
    return this.mcpInitialized;
  }

  /**
   * Get MCP initialization status
   */
  getMCPStatus() {
    return {
      initialized: this.mcpInitialized,
      toolsCount: this.mcpTools.length,
      hasClient: this.mcpClient !== null
    };
  }
}

// Export singleton instance
export const linkedInAgent = new LinkedInPilotAgent();
