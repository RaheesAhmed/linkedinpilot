import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Check,
  Star,
  Zap,
  Users,
  Building2,
  Crown
} from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$29",
    period: "per month",
    description: "Perfect for individual professionals getting started with LinkedIn automation.",
    icon: Zap,
    badge: null,
    features: [
      "1 LinkedIn account",
      "15 posts per month",
      "Basic AI content generation",
      "Auto-posting with optimal timing",
      "Basic engagement automation",
      "Email support",
      "Basic analytics dashboard"
    ],
    cta: "Start Free Trial",
    popular: false
  },
  {
    name: "Professional",
    price: "$79",
    period: "per month", 
    description: "Ideal for professionals and consultants who want advanced LinkedIn growth.",
    icon: Users,
    badge: "Most Popular",
    features: [
      "3 LinkedIn accounts",
      "Unlimited posts",
      "Advanced AI content generation",
      "Viral content detection",
      "Smart comment responses",
      "Strategic networking automation",
      "Priority email support",
      "Advanced analytics & insights",
      "A/B testing capabilities",
      "Performance optimization"
    ],
    cta: "Start Free Trial",
    popular: true
  },
  {
    name: "Agency",
    price: "$199",
    period: "per month",
    description: "Built for agencies and teams managing multiple LinkedIn accounts at scale.",
    icon: Building2,
    badge: "Best Value",
    features: [
      "10 LinkedIn accounts",
      "Unlimited posts & content",
      "Team collaboration features",
      "White-label options",
      "Custom branding",
      "Dedicated account manager",
      "API access for integrations",
      "Advanced reporting suite",
      "Custom automation workflows",
      "Priority phone support"
    ],
    cta: "Contact Sales",
    popular: false
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact us",
    description: "Tailored solutions for large organizations with specific needs.",
    icon: Crown,
    badge: "Custom",
    features: [
      "Unlimited LinkedIn accounts",
      "Custom AI model training",
      "On-premise deployment options",
      "Advanced security features",
      "SLA guarantees (99.9% uptime)",
      "Custom integrations",
      "Dedicated technical support",
      "Training and onboarding",
      "Compliance assistance",
      "24/7 phone support"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

export function PricingSection() {
  return (
    <section id="pricing" className="section-padding bg-muted/30">
      <div className="container-pilot">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">
            <Star className="mr-2 h-4 w-4" />
            Pricing
          </Badge>
          <h2 className="text-pilot-lg pilot-gradient-text">
            Choose Your LinkedIn Growth Plan
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start with our free trial, then choose the plan that fits your needs. 
            All plans include our core AI automation features.
          </p>
        </div>

        {/* Pricing Toggle Note */}
        <div className="text-center mb-12">
          <Card className="bg-card text-card-foreground rounded-lg border shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-1 p-4 max-w-md mx-auto bg-primary/5 border-primary/20">
            <p className="text-sm text-primary font-medium">
              🎉 7-day free trial available for all plans
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              No credit card required • Cancel anytime
            </p>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <Card 
                key={index}
                className={`bg-card text-card-foreground rounded-lg border shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-1 p-6 h-full animate-slide-up relative ${
                  plan.popular 
                    ? 'ring-2 ring-primary border-primary/50 scale-105' 
                    : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.badge && (
                  <Badge 
                    variant={plan.popular ? "default" : "secondary"}
                    className="absolute -top-3 left-1/2 transform -translate-x-1/2"
                  >
                    {plan.badge}
                  </Badge>
                )}

                <CardHeader className="text-center pb-8 pt-6">
                  <div className="space-y-4">
                    <div className={`p-3 rounded-xl mx-auto w-fit ${
                      plan.popular ? 'pilot-gradient' : 'bg-muted'
                    }`}>
                      <IconComponent className={`h-6 w-6 ${
                        plan.popular ? 'text-white' : 'text-muted-foreground'
                      }`} />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-display mb-2">
                        {plan.name}
                      </CardTitle>
                      <div className="space-y-1">
                        <div className="flex items-baseline justify-center">
                          <span className="text-3xl font-bold pilot-gradient-text">
                            {plan.price}
                          </span>
                          <span className="text-sm text-muted-foreground ml-1">
                            /{plan.period}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {plan.description}
                    </p>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-md' 
                        : plan.name === 'Enterprise'
                        ? 'bg-accent text-accent-foreground hover:bg-accent/90 shadow-md'
                        : 'bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-md'
                    }`}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* FAQ / Additional Info */}
        <div className="mt-16 text-center space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-card text-card-foreground rounded-lg border shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-1 p-6">
              <div className="space-y-3">
                <h4 className="font-semibold font-display">🔒 Secure & Safe</h4>
                <p className="text-sm text-muted-foreground">
                  Conservative automation limits and human-like behavior patterns protect your LinkedIn account.
                </p>
              </div>
            </Card>
            <Card className="bg-card text-card-foreground rounded-lg border shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-1 p-6">
              <div className="space-y-3">
                <h4 className="font-semibold font-display">📈 Guaranteed Results</h4>
                <p className="text-sm text-muted-foreground">
                  See 3x+ engagement increase within 30 days or get a full refund.
                </p>
              </div>
            </Card>
            <Card className="bg-card text-card-foreground rounded-lg border shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-1 p-6">
              <div className="space-y-3">
                <h4 className="font-semibold font-display">🎯 Open Source</h4>
                <p className="text-sm text-muted-foreground">
                  Self-host for free or use our managed service. MIT license, fully transparent.
                </p>
              </div>
            </Card>
          </div>

          
        </div>
      </div>
    </section>
  );
}
