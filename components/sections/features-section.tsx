import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
    badgeVariant: "default" as const,
  },
  {
    icon: MessageSquare,
    title: "Intelligent Responses",
    description: "AI responds to comments contextually, maintaining your voice and building genuine relationships.",
    badge: "Smart AI",
    badgeVariant: "secondary" as const,
  },
  {
    icon: TrendingUp,
    title: "Viral Content Detection",
    description: "Monitor trending topics and automatically create your version of viral content in your niche.",
    badge: "Growth Hack",
    badgeVariant: "outline" as const,
  },
  {
    icon: Clock,
    title: "Optimal Timing",
    description: "Post when your followers are most active for maximum engagement and reach.",
    badge: "Automation",
    badgeVariant: "secondary" as const,
  },
  {
    icon: Users,
    title: "Strategic Networking",
    description: "Send personalized connection requests and engage with relevant posts in your industry.",
    badge: "Relationship",
    badgeVariant: "outline" as const,
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Track engagement improvements, follower growth, and content performance with detailed insights.",
    badge: "Data-Driven",
    badgeVariant: "secondary" as const,
  },
  {
    icon: Target,
    title: "Profile Optimization",
    description: "AI analyzes your profile and provides actionable recommendations for better visibility.",
    badge: "Optimization",
    badgeVariant: "outline" as const,
  },
  {
    icon: Workflow,
    title: "Multi-Industry Support",
    description: "Customizable for any niche - Tech, Finance, Healthcare, Marketing, or your custom industry.",
    badge: "Versatile",
    badgeVariant: "secondary" as const,
  },
  {
    icon: Shield,
    title: "LinkedIn-Safe Automation",
    description: "Conservative automation limits and human-like behavior patterns to protect your account.",
    badge: "Secure",
    badgeVariant: "outline" as const,
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="section-padding bg-muted/30">
      <div className="container-pilot">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">
            <Sparkles className="mr-2 h-4 w-4" />
            Features
          </Badge>
          <h2 className="text-pilot-lg pilot-gradient-text">
            Everything You Need to Dominate LinkedIn
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            One powerful AI agent handles everything from content creation to strategic engagement, 
            transforming your LinkedIn presence completely autonomously.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="bg-card text-card-foreground rounded-lg border shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-1 p-6 h-full animate-fade-in group hover:scale-[1.02]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant={feature.badgeVariant} className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-display group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <Card className="bg-card text-card-foreground rounded-lg border shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-1 p-8 max-w-2xl mx-auto bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <div className="space-y-4">
              <Globe className="h-12 w-12 mx-auto text-primary" />
              <h3 className="text-xl font-bold font-display">
                Ready for Any Industry
              </h3>
              <p className="text-muted-foreground">
                Whether you're in AI development, marketing, finance, or any other field, 
                LinkedinPilot adapts to your niche and creates content that resonates with your audience.
              </p>
              <div className="flex flex-wrap justify-center gap-2 pt-4">
                {["Technology", "Business", "Finance", "Healthcare", "Education", "Creative"].map((industry) => (
                  <Badge key={industry} variant="secondary" className="text-xs">
                    {industry}
                  </Badge>
                ))}
                <Badge variant="outline" className="text-xs border-dashed">
                  + Custom
                </Badge>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
