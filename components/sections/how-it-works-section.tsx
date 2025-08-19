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
    <section id="how-it-works" className="section-padding">
      <div className="container-pilot">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">
            <Play className="mr-2 h-4 w-4" />
            How It Works
          </Badge>
          <h2 className="text-pilot-lg pilot-gradient-text">
            From Setup to Success in 4 Simple Steps
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get your LinkedIn automation running in minutes, then watch as AI transforms 
            your dormant followers into an engaged professional community.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card 
                key={index}
                className="bg-card text-card-foreground rounded-lg border shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-1 p-8 animate-slide-up relative overflow-hidden group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Step Number Background */}
                <div className="absolute -top-4 -right-4 text-8xl font-bold text-muted/10 font-display transition-all duration-300 group-hover:scale-110 group-hover:text-primary/10">
                  {step.step}
                </div>
                
                <CardHeader className="pb-6 relative">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-xl pilot-gradient group-hover:scale-110 transition-transform">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div className="space-y-1">
                      <Badge variant="outline" className="text-xs font-mono">
                        Step {step.step}
                      </Badge>
                      <CardTitle className="text-xl font-display group-hover:text-primary transition-colors">
                        {step.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6 relative">
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                  
                  <div className="space-y-3">
                    {step.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>

                {/* Connection Line for Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-accent"></div>
                    <ArrowRight className="absolute -right-2 -top-2 h-4 w-4 text-primary" />
                  </div>
                )}
              </Card>
            );
          })}
        </div>

        {/* Bottom Timeline for Mobile */}
        <div className="lg:hidden mt-12 flex justify-center">
          <div className="flex items-center space-x-2">
            {steps.map((_, index) => (
              <div key={index} className="flex items-center">
                <div className="w-8 h-8 rounded-full pilot-gradient flex items-center justify-center text-white text-sm font-bold">
                  {index + 1}
                </div>
                {index < steps.length - 1 && (
                  <ArrowRight className="h-4 w-4 text-primary mx-2" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <Card className="bg-card text-card-foreground rounded-lg border shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-1 p-8 max-w-2xl mx-auto bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold font-display">
                  Ready to Transform Your LinkedIn?
                </h3>
                <p className="text-muted-foreground">
                  Join the professionals who've already discovered the power of AI-driven LinkedIn automation. 
                  Start your free trial and see the difference in just 7 days.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-md">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <div className="text-sm text-muted-foreground">
                  7-day free trial • No credit card required
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
