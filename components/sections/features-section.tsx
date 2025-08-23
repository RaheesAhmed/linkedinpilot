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
    <section id="features" className="py-24 px-4 bg-gradient-to-br from-gray-50/50 via-white to-indigo-50/30 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/10 via-transparent to-purple-100/10 pointer-events-none"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center space-y-8 mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/60 backdrop-blur-sm border border-indigo-200/60 rounded-full text-sm text-indigo-700 font-semibold shadow-lg">
            <Sparkles className="w-4 h-4" />
            AI-Powered Features
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
            Everything You Need to{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Dominate LinkedIn
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
            One powerful AI agent handles everything from content creation to strategic engagement, 
            transforming your LinkedIn presence completely autonomously.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const colors = [
              { bg: 'from-blue-50/60 to-indigo-50/60', border: 'border-blue-200/60', icon: 'from-blue-500 to-indigo-600', text: 'from-blue-600 to-indigo-600' },
              { bg: 'from-purple-50/60 to-violet-50/60', border: 'border-purple-200/60', icon: 'from-purple-500 to-violet-600', text: 'from-purple-600 to-violet-600' },
              { bg: 'from-emerald-50/60 to-green-50/60', border: 'border-emerald-200/60', icon: 'from-emerald-500 to-green-600', text: 'from-emerald-600 to-green-600' },
              { bg: 'from-orange-50/60 to-amber-50/60', border: 'border-orange-200/60', icon: 'from-orange-500 to-amber-600', text: 'from-orange-600 to-amber-600' },
              { bg: 'from-indigo-50/60 to-blue-50/60', border: 'border-indigo-200/60', icon: 'from-indigo-500 to-blue-600', text: 'from-indigo-600 to-blue-600' },
              { bg: 'from-pink-50/60 to-rose-50/60', border: 'border-pink-200/60', icon: 'from-pink-500 to-rose-600', text: 'from-pink-600 to-rose-600' },
              { bg: 'from-teal-50/60 to-cyan-50/60', border: 'border-teal-200/60', icon: 'from-teal-500 to-cyan-600', text: 'from-teal-600 to-cyan-600' },
              { bg: 'from-violet-50/60 to-purple-50/60', border: 'border-violet-200/60', icon: 'from-violet-500 to-purple-600', text: 'from-violet-600 to-purple-600' },
              { bg: 'from-cyan-50/60 to-blue-50/60', border: 'border-cyan-200/60', icon: 'from-cyan-500 to-blue-600', text: 'from-cyan-600 to-blue-600' }
            ];
            const color = colors[index % colors.length];
            
            return (
              <div 
                key={index} 
                className={`bg-white/60 backdrop-blur-sm border ${color.border} rounded-2xl p-8 hover:bg-white/80 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105`}
              >
                <div className="space-y-6">
                  <div className="flex items-start justify-between">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${color.icon} shadow-lg`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <span className={`px-3 py-1.5 bg-gradient-to-r ${color.bg} ${color.border} border rounded-full text-xs font-semibold bg-gradient-to-r bg-clip-text text-transparent ${color.text}`}>
                      {feature.badge}
                    </span>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-medium">
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
              <h3 className="text-3xl font-bold text-gray-900">
                Ready for Any Industry
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed font-medium">
                Whether you&apos;re in AI development, marketing, finance, or any other field, 
                LinkedinPilot adapts to your niche and creates content that resonates with your audience.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: "Technology", gradient: "from-blue-500 to-indigo-600", bg: "from-blue-100/80 to-indigo-100/80", border: "border-blue-200/60" },
                { name: "Business", gradient: "from-purple-500 to-violet-600", bg: "from-purple-100/80 to-violet-100/80", border: "border-purple-200/60" },
                { name: "Finance", gradient: "from-emerald-500 to-green-600", bg: "from-emerald-100/80 to-green-100/80", border: "border-emerald-200/60" },
                { name: "Healthcare", gradient: "from-orange-500 to-amber-600", bg: "from-orange-100/80 to-amber-100/80", border: "border-orange-200/60" },
                { name: "Education", gradient: "from-indigo-500 to-blue-600", bg: "from-indigo-100/80 to-blue-100/80", border: "border-indigo-200/60" },
                { name: "Creative", gradient: "from-pink-500 to-rose-600", bg: "from-pink-100/80 to-rose-100/80", border: "border-pink-200/60" }
              ].map((industry) => (
                <span key={industry.name} className={`px-4 py-2.5 bg-gradient-to-r ${industry.bg} ${industry.border} border rounded-full text-sm font-bold bg-gradient-to-r bg-clip-text text-transparent ${industry.gradient} shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}>
                  {industry.name}
                </span>
              ))}
              <span className="px-4 py-2.5 bg-white/60 backdrop-blur-sm border-2 border-dashed border-gray-300/60 text-gray-700 rounded-full text-sm font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                + Your Industry
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
