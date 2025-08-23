import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Settings, 
  Brain, 
  Rocket, 
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Play
} from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Settings,
    title: "Configure Your Profile",
    description: "Tell LinkedinPilot about your industry, niche, target audience, and content preferences. Set your automation goals and engagement style.",
    features: ["Industry selection", "Content preferences", "Automation settings", "Goal configuration"]
  },
  {
    step: "02", 
    icon: Brain,
    title: "AI Takes Control",
    description: "Our intelligent agent analyzes your profile, researches trending topics in your niche, and starts generating high-quality content automatically.",
    features: ["Profile optimization", "Content generation", "Trend analysis", "Voice matching"]
  },
  {
    step: "03",
    icon: Rocket,
    title: "Autonomous Growth",
    description: "LinkedinPilot posts at optimal times, responds to comments, engages with your network, and continuously optimizes for better performance.",
    features: ["Auto-posting", "Smart responses", "Strategic engagement", "Performance optimization"]
  },
  {
    step: "04",
    icon: BarChart3,
    title: "Track & Scale",
    description: "Monitor your engagement improvements, follower growth, and content performance. Scale your presence across multiple LinkedIn accounts if needed.",
    features: ["Analytics dashboard", "Growth tracking", "Multi-account support", "ROI measurement"]
  }
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 px-4 bg-gradient-to-br from-white via-gray-50/30 to-purple-50/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/10 via-transparent to-green-100/10 pointer-events-none"></div>
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-to-br from-green-200/20 to-blue-200/20 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/60 backdrop-blur-sm border border-emerald-200/60 rounded-full text-sm text-emerald-700 font-semibold shadow-lg">
            <Play className="w-4 h-4" />
            How It Works
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            From Setup to Success in 4 Simple Steps
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
            Get your LinkedIn automation running in minutes, then watch as AI transforms 
            your dormant followers into an engaged professional community.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const stepColors = [
              { bg: 'from-blue-50/60 to-indigo-50/60', border: 'border-blue-200/60', icon: 'from-blue-500 to-indigo-600', text: 'from-blue-600 to-indigo-600', stepBg: 'from-blue-100/80 to-indigo-100/80' },
              { bg: 'from-purple-50/60 to-violet-50/60', border: 'border-purple-200/60', icon: 'from-purple-500 to-violet-600', text: 'from-purple-600 to-violet-600', stepBg: 'from-purple-100/80 to-violet-100/80' },
              { bg: 'from-emerald-50/60 to-green-50/60', border: 'border-emerald-200/60', icon: 'from-emerald-500 to-green-600', text: 'from-emerald-600 to-green-600', stepBg: 'from-emerald-100/80 to-green-100/80' },
              { bg: 'from-orange-50/60 to-amber-50/60', border: 'border-orange-200/60', icon: 'from-orange-500 to-amber-600', text: 'from-orange-600 to-amber-600', stepBg: 'from-orange-100/80 to-amber-100/80' }
            ];
            const color = stepColors[index];
            
            return (
              <div 
                key={index}
                className={`bg-white/60 backdrop-blur-sm border-2 ${color.border} rounded-2xl p-8 hover:bg-white/80 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105`}
              >
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${color.icon} shadow-lg`}>
                      <IconComponent className="h-10 w-10 text-white" />
                    </div>
                    <div className="space-y-2">
                      <div className={`px-3 py-1.5 bg-gradient-to-r ${color.stepBg} ${color.border} border rounded-full text-xs font-bold bg-gradient-to-r bg-clip-text text-transparent ${color.text}`}>
                        Step {step.step}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <p className="text-gray-600 text-lg leading-relaxed font-medium">
                      {step.description}
                    </p>
                    
                    <div className="space-y-3">
                      {step.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <div className="p-1 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full">
                            <CheckCircle2 className="h-4 w-4 text-white" />
                          </div>
                          <span className="text-gray-700 font-semibold">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
