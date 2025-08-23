import { contentCreatorTool } from './content-creator';
import { profileAnalyzerTool } from './profile-analyzer';

/**
 * All available local tools for the LinkedIn Pilot Agent
 * Web search will be provided by Tavily MCP integration
 */
export const tools = [
  contentCreatorTool,
  profileAnalyzerTool
];

// Export individual tools for direct access
export { contentCreatorTool } from './content-creator';
export { profileAnalyzerTool } from './profile-analyzer';

// Tool registry for easy reference
export const toolRegistry = {
  content_creator: contentCreatorTool,
  profile_analyzer: profileAnalyzerTool
};

// Tool metadata for UI and documentation
export const toolMetadata = [
  {
    name: 'tavily-search',
    title: 'Tavily Web Search',
    description: 'Search the web using Tavily AI search engine (MCP)',
    category: 'Research',
    icon: '🔍',
    useCases: [
      'Industry trend research',
      'Company information gathering',
      'Market analysis',
      'Real-time news and updates'
    ]
  },
  {
    name: 'content_creator',
    title: 'Content Creator',
    description: 'Generate optimized LinkedIn posts for various purposes',
    category: 'Content',
    icon: '✍️',
    useCases: [
      'Thought leadership posts',
      'Company announcements',
      'Industry insights',
      'Personal storytelling',
      'Professional tips'
    ]
  },
  {
    name: 'profile_analyzer',
    title: 'Profile Analyzer',
    description: 'Analyze and optimize LinkedIn profiles',
    category: 'Optimization',
    icon: '📊',
    useCases: [
      'Profile optimization',
      'Performance scoring',
      'Improvement recommendations',
      'Industry benchmarking'
    ]
  }
];

export default tools;
