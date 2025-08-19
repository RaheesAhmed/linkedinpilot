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
    <section id="how-it-works" className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full text-sm text-green-700 font-medium">
            <Play className="w-4 h-4" />
            How It Works
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
            From Setup to Success in 4 Simple Steps
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Get your LinkedIn automation running in minutes, then watch as AI transforms 
            your dormant followers into an engaged professional community.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const stepColors = [
              { bg: 'bg-blue-50', border: 'border-blue-200', icon: 'bg-blue-600', text: 'text-blue-600' },
              { bg: 'bg-purple-50', border: 'border-purple-200', icon: 'bg-purple-600', text: 'text-purple-600' },
              { bg: 'bg-green-50', border: 'border-green-200', icon: 'bg-green-600', text: 'text-green-600' },
              { bg: 'bg-orange-50', border: 'border-orange-200', icon: 'bg-orange-600', text: 'text-orange-600' }
            ];
            const color = stepColors[index];
            
            return (
              <div 
                key={index}
                className={`bg-white border-2 ${color.border} rounded-2xl p-8 hover:shadow-lg transition-all duration-200`}
              >
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className={`p-4 rounded-2xl ${color.icon}`}>
                      <IconComponent className="h-10 w-10 text-white" />
                    </div>
                    <div className="space-y-2">
                      <div className={`px-3 py-1 ${color.bg} ${color.border} border rounded-full text-xs ${color.text} font-bold`}>
                        Step {step.step}
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <p className="text-slate-600 text-lg leading-relaxed">
                      {step.description}
                    </p>
                    
                    <div className="space-y-3">
                      {step.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                          <span className="text-slate-600 font-medium">{feature}</span>
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
