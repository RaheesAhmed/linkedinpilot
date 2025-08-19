import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Zap, 
  Target, 
  MessageSquare, 
  TrendingUp, 
  Clock, 
  Users, 
  BarChart3,
  Sparkles,
  Shield,
  Workflow,
  Globe
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Content Generation",
    description: "Generate high-quality, niche-specific LinkedIn posts that resonate with your audience and drive engagement.",
    badge: "Core Feature",
  },
  {
    icon: MessageSquare,
    title: "Intelligent Responses",
    description: "AI responds to comments contextually, maintaining your voice and building genuine relationships.",
    badge: "Smart AI",
  },
  {
    icon: TrendingUp,
    title: "Viral Content Detection",
    description: "Monitor trending topics and automatically create your version of viral content in your niche.",
    badge: "Growth Hack",
  },
  {
    icon: Clock,
    title: "Optimal Timing",
    description: "Post when your followers are most active for maximum engagement and reach.",
    badge: "Automation",
  },
  {
    icon: Users,
    title: "Strategic Networking",
    description: "Send personalized connection requests and engage with relevant posts in your industry.",
    badge: "Relationship",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Track engagement improvements, follower growth, and content performance with detailed insights.",
    badge: "Data-Driven",
  },
  {
    icon: Target,
    title: "Profile Optimization",
    description: "AI analyzes your profile and provides actionable recommendations for better visibility.",
    badge: "Optimization",
  },
  {
    icon: Workflow,
    title: "Multi-Industry Support",
    description: "Customizable for any niche - Tech, Finance, Healthcare, Marketing, or your custom industry.",
    badge: "Versatile",
  },
  {
    icon: Shield,
    title: "LinkedIn-Safe Automation",
    description: "Conservative automation limits and human-like behavior patterns to protect your account.",
    badge: "Secure",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-8 mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-sm text-blue-700 font-medium">
            <Sparkles className="w-4 h-4" />
            AI-Powered Features
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-slate-900 leading-tight">
            Everything You Need to{' '}
            <span className="text-blue-600">Dominate LinkedIn</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            One powerful AI agent handles everything from content creation to strategic engagement, 
            transforming your LinkedIn presence completely autonomously.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const colors = [
              { bg: 'bg-blue-50', border: 'border-blue-200', icon: 'bg-blue-600', text: 'text-blue-600' },
              { bg: 'bg-purple-50', border: 'border-purple-200', icon: 'bg-purple-600', text: 'text-purple-600' },
              { bg: 'bg-green-50', border: 'border-green-200', icon: 'bg-green-600', text: 'text-green-600' },
              { bg: 'bg-orange-50', border: 'border-orange-200', icon: 'bg-orange-600', text: 'text-orange-600' },
              { bg: 'bg-indigo-50', border: 'border-indigo-200', icon: 'bg-indigo-600', text: 'text-indigo-600' },
              { bg: 'bg-pink-50', border: 'border-pink-200', icon: 'bg-pink-600', text: 'text-pink-600' },
              { bg: 'bg-teal-50', border: 'border-teal-200', icon: 'bg-teal-600', text: 'text-teal-600' },
              { bg: 'bg-violet-50', border: 'border-violet-200', icon: 'bg-violet-600', text: 'text-violet-600' },
              { bg: 'bg-cyan-50', border: 'border-cyan-200', icon: 'bg-cyan-600', text: 'text-cyan-600' }
            ];
            const color = colors[index % colors.length];
            
            return (
              <div 
                key={index} 
                className={`bg-white border ${color.border} rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="space-y-6">
                  <div className="flex items-start justify-between">
                    <div className={`p-4 rounded-2xl ${color.icon}`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <span className={`px-3 py-1 ${color.bg} ${color.border} border rounded-full text-xs ${color.text} font-medium`}>
                      {feature.badge}
                    </span>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-slate-900">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-slate-900">
                Ready for Any Industry
              </h3>
              <p className="text-xl text-slate-600 leading-relaxed">
                Whether you&apos;re in AI development, marketing, finance, or any other field, 
                LinkedinPilot adapts to your niche and creates content that resonates with your audience.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: "Technology", color: "bg-blue-100 text-blue-700 border-blue-200" },
                { name: "Business", color: "bg-purple-100 text-purple-700 border-purple-200" },
                { name: "Finance", color: "bg-green-100 text-green-700 border-green-200" },
                { name: "Healthcare", color: "bg-orange-100 text-orange-700 border-orange-200" },
                { name: "Education", color: "bg-indigo-100 text-indigo-700 border-indigo-200" },
                { name: "Creative", color: "bg-pink-100 text-pink-700 border-pink-200" }
              ].map((industry) => (
                <span key={industry.name} className={`px-4 py-2 ${industry.color} border rounded-full text-sm font-semibold`}>
                  {industry.name}
                </span>
              ))}
              <span className="px-4 py-2 bg-slate-100 border-2 border-dashed border-slate-300 text-slate-600 rounded-full text-sm font-semibold">
                + Your Industry
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
