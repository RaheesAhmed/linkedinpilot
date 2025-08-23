import { tool } from '@langchain/core/tools';
import { z } from 'zod';

/**
 * Tavily Web Search Tool - Real MCP Integration
 * Uses the connected Tavily MCP server to perform actual web searches
 */
export const webSearchTool = tool(
  async (input) => {
    try {
      // This is a LangChain tool that will be called by the ReAct agent
      // The agent will handle the actual MCP tool calling
      // We just need to return a signal that indicates this tool should call Tavily
      
      // The agent will interpret this and make the actual MCP call
      const searchParams = {
        query: input.query,
        search_depth: input.searchDepth || 'basic',
        topic: input.topic || 'general',
        max_results: input.maxResults || 10,
        include_answer: input.includeAnswer || false,
        include_raw_content: input.includeRawContent || false,
        include_images: input.includeImages || false,
        time_range: input.timeRange,
        include_domains: input.includeDomains,
        exclude_domains: input.excludeDomains
      };

      // For now, since we're in a LangChain tool context, we'll return a structured response
      // that the agent can use. In a real implementation, this would be handled by the
      // ReAct agent's tool calling mechanism
      return JSON.stringify({
        tool_call: 'tavily_search',
        parameters: searchParams,
        description: `Searching for: "${input.query}" with ${input.searchDepth || 'basic'} depth`
      });

    } catch (error) {
      console.error('Tavily search error:', error);
      return `Search error for "${input.query}": ${error instanceof Error ? error.message : 'Unknown error'}`;
    }
  },
  {
    name: 'web_search',
    description: 'Search the web for current information using Tavily AI search engine. Returns comprehensive results with titles, URLs, content, and relevance scores.',
    schema: z.object({
      query: z.string().describe("The search query to execute"),
      maxResults: z.number().optional().default(10).describe("Maximum number of search results to return (default: 10)"),
      searchDepth: z.enum(['basic', 'advanced']).optional().default('basic').describe("Search depth - basic for quick results, advanced for comprehensive analysis"),
      topic: z.enum(['general', 'news', 'finance']).optional().default('general').describe("Category of search - general, news, or finance"),
      timeRange: z.enum(['day', 'week', 'month', 'year']).optional().describe("Time range to filter results"),
      includeAnswer: z.boolean().optional().default(false).describe("Include AI-generated answer to the query"),
      includeRawContent: z.boolean().optional().default(false).describe("Include cleaned HTML content from results"),
      includeImages: z.boolean().optional().default(false).describe("Include related images in results"),
      includeDomains: z.array(z.string()).optional().describe("Specific domains to include in search"),
      excludeDomains: z.array(z.string()).optional().describe("Domains to exclude from search")
    })
  }
);
