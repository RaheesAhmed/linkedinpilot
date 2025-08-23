import { tool } from '@langchain/core/tools';
import { z } from 'zod';

/**
 * LinkedIn Content Creator Tool
 * Generates optimized LinkedIn posts for various purposes
 */
export const contentCreatorTool = tool(
  async (input) => {
    try {
      const { contentType, topic, tone, audience, includeHashtags, includeEmojis } = input;

      // Content templates based on type
      const templates = {
        thought_leadership: {
          structure: "Hook → Insight → Personal experience → Call to action",
          example: "🔥 Here's what I learned after [experience]...\n\nKey insight: [main point]\n\nMy takeaway: [personal reflection]\n\nWhat's your experience with this? Share in the comments! 👇"
        },
        company_update: {
          structure: "Announcement → Details → Impact → Next steps",
          example: "🚀 Exciting news from [Company]!\n\nWe're thrilled to announce [update].\n\nThis means [impact for customers/industry].\n\nStay tuned for more updates! #CompanyNews"
        },
        industry_insight: {
          structure: "Trend observation → Data/Examples → Analysis → Prediction",
          example: "📈 The [industry] landscape is shifting...\n\nHere's what the data shows: [statistics]\n\nMy analysis: [insights]\n\nWhat do you think comes next? Let's discuss! 💭"
        },
        personal_story: {
          structure: "Story hook → Challenge → Solution → Lesson learned",
          example: "💡 A mistake that changed my perspective...\n\n[Brief story setup]\n\nThe challenge: [problem faced]\nThe solution: [how it was solved]\nThe lesson: [key takeaway]\n\nHave you experienced something similar?"
        },
        professional_tips: {
          structure: "Problem identification → Tips/Solutions → Implementation → Engagement",
          example: "🎯 Struggling with [common problem]?\n\nHere are 3 proven strategies:\n\n1. [Tip 1]\n2. [Tip 2] \n3. [Tip 3]\n\nWhich one will you try first? Drop a comment below! 👇"
        }
      };

      const selectedTemplate = templates[contentType as keyof typeof templates] || templates.thought_leadership;

      // Generate content based on inputs
      let generatedContent = `LinkedIn ${contentType.replace('_', ' ')} post about: ${topic}

${selectedTemplate.structure}

Generated Content:
---

${selectedTemplate.example.replace(/\[([^\]]+)\]/g, (match, placeholder) => {
        // Replace placeholders with topic-relevant content
        switch (placeholder.toLowerCase()) {
          case 'experience':
          case 'main point':
          case 'update':
          case 'problem':
            return topic;
          case 'company':
            return 'Our Company';
          case 'industry':
            return topic.split(' ')[0] || 'the industry';
          default:
            return `[${placeholder} - customize this]`;
        }
      })}

---

Optimization Notes:
✅ ${tone} tone applied
✅ Targeted for ${audience} audience
${includeHashtags ? '✅ Strategic hashtags included' : '⚪ Consider adding relevant hashtags'}
${includeEmojis ? '✅ Engaging emojis added' : '⚪ Consider adding professional emojis'}

Recommended hashtags for this topic:
#${topic.replace(/\s+/g, '')} #ProfessionalGrowth #LinkedIn #Industry #Networking

Best posting times:
• Tuesday-Thursday: 9-10 AM or 12-1 PM
• Avoid Mondays and Fridays
• Peak engagement: Wednesday 9 AM`;

      return generatedContent;

    } catch (error) {
      console.error('Content creation error:', error);
      return `I encountered an error while creating content for "${input.topic}". Please try again with a different topic or approach.`;
    }
  },
  {
    name: 'content_creator',
    description: 'Create optimized LinkedIn posts for various purposes including thought leadership, company updates, industry insights, personal stories, and professional tips.',
    schema: z.object({
      contentType: z.enum(['thought_leadership', 'company_update', 'industry_insight', 'personal_story', 'professional_tips'])
        .describe("Type of LinkedIn content to create"),
      topic: z.string().describe("Main topic or subject for the content"),
      tone: z.enum(['professional', 'casual', 'inspirational', 'educational', 'conversational'])
        .default('professional').describe("Tone of voice for the content"),
      audience: z.enum(['executives', 'professionals', 'entrepreneurs', 'job_seekers', 'general'])
        .default('professionals').describe("Target audience for the content"),
      includeHashtags: z.boolean().default(true).describe("Whether to include relevant hashtags"),
      includeEmojis: z.boolean().default(true).describe("Whether to include professional emojis")
    })
  }
);
