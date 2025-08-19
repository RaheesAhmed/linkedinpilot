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
    <section id="pricing" className="py-24 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 border border-purple-200 rounded-full text-sm text-purple-700 font-medium">
            <Star className="w-4 h-4" />
            Pricing Plans
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
            Choose Your LinkedIn Growth Plan
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Start with our free trial, then choose the plan that fits your business needs. 
            All plans include our core AI automation features.
          </p>
        </div>

        {/* Pricing Toggle Note */}
        <div className="text-center mb-12">
          <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6 max-w-lg mx-auto">
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <p className="text-lg text-green-800 font-bold">
                🎉 7-Day Free Trial Available
              </p>
            </div>
            <p className="text-green-700 font-medium">
              No credit card required • Cancel anytime • Full feature access
            </p>
          </div>
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
                      plan.popular ? 'bg-blue-600' : 'bg-slate-100'
                    }`}>
                      <IconComponent className={`h-6 w-6 ${
                        plan.popular ? 'text-white' : 'text-slate-600'
                      }`} />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-slate-900 mb-2">
                        {plan.name}
                      </CardTitle>
                      <div className="space-y-1">
                        <div className="flex items-baseline justify-center">
                          <span className="text-3xl font-bold text-blue-600">
                            {plan.price}
                          </span>
                          <span className="text-sm text-slate-500 ml-1">
                            /{plan.period}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {plan.description}
                    </p>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-600 leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                        : plan.name === 'Enterprise'
                        ? 'bg-purple-600 hover:bg-purple-700 text-white'
                        : 'bg-slate-600 hover:bg-slate-700 text-white'
                    } rounded-xl font-semibold`}
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
            <div className="bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 p-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-slate-900">🔒 Secure & Safe</h4>
                <p className="text-sm text-slate-600">
                  Conservative automation limits and human-like behavior patterns protect your LinkedIn account.
                </p>
              </div>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 p-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-slate-900">📈 Guaranteed Results</h4>
                <p className="text-sm text-slate-600">
                  See 3x+ engagement increase within 30 days or get a full refund.
                </p>
              </div>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 p-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-slate-900">🎯 Open Source</h4>
                <p className="text-sm text-slate-600">
                  Self-host for free or use our managed service. MIT license, fully transparent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
