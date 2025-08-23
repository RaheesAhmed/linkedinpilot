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
    <section id="pricing" className="py-24 px-4 bg-gradient-to-br from-slate-50/50 via-white to-indigo-50/30 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/10 via-transparent to-blue-100/10 pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/60 backdrop-blur-sm border border-purple-200/60 rounded-full text-sm text-purple-700 font-semibold shadow-lg">
            <Star className="w-4 h-4" />
            Pricing Plans
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Choose Your LinkedIn Growth Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
            Start with our free trial, then choose the plan that fits your business needs. 
            All plans include our core AI automation features.
          </p>
        </div>

        {/* Pricing Toggle Note */}
        <div className="text-center mb-12">
          <div className="bg-white/60 backdrop-blur-sm border-2 border-emerald-200/60 rounded-2xl p-6 max-w-lg mx-auto shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full animate-pulse"></div>
              <p className="text-lg text-gray-800 font-bold">
                🎉 7-Day Free Trial Available
              </p>
            </div>
            <p className="text-gray-600 font-semibold">
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
                className={`bg-white/60 backdrop-blur-sm rounded-2xl border shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 p-6 h-full relative ${
                  plan.popular 
                    ? 'ring-2 ring-indigo-400/60 border-indigo-200/60 bg-gradient-to-br from-indigo-50/80 to-purple-50/80' 
                    : 'border-gray-200/60'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.badge && (
                  <Badge 
                    className={`absolute -top-3 left-1/2 transform -translate-x-1/2 shadow-lg ${
                      plan.popular 
                        ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white" 
                        : "bg-gradient-to-r from-gray-500 to-gray-600 text-white"
                    }`}
                  >
                    {plan.badge}
                  </Badge>
                )}

                <CardHeader className="text-center pb-8 pt-6">
                  <div className="space-y-4">
                    <div className={`p-4 rounded-2xl mx-auto w-fit shadow-lg ${
                      plan.popular 
                        ? 'bg-gradient-to-br from-indigo-500 to-purple-600' 
                        : index === 0 
                        ? 'bg-gradient-to-br from-blue-500 to-indigo-600'
                        : index === 2
                        ? 'bg-gradient-to-br from-emerald-500 to-green-600'
                        : 'bg-gradient-to-br from-purple-500 to-violet-600'
                    }`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                        {plan.name}
                      </CardTitle>
                      <div className="space-y-1">
                        <div className="flex items-baseline justify-center">
                          <span className={`text-3xl font-bold bg-gradient-to-r bg-clip-text text-transparent ${
                            plan.popular 
                              ? 'from-indigo-600 to-purple-600'
                              : index === 0 
                              ? 'from-blue-600 to-indigo-600'
                              : index === 2
                              ? 'from-emerald-600 to-green-600'
                              : 'from-purple-600 to-violet-600'
                          }`}>
                            {plan.price}
                          </span>
                          <span className="text-sm text-gray-500 ml-1 font-medium">
                            /{plan.period}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed font-medium">
                      {plan.description}
                    </p>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <div className="p-1 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full mt-0.5">
                          <Check className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-sm text-gray-700 leading-relaxed font-medium">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white' 
                        : index === 0
                        ? 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white'
                        : index === 2
                        ? 'bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white'
                        : 'bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white'
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
            <div className="bg-white/60 backdrop-blur-sm border border-gray-200/60 rounded-2xl shadow-lg hover:shadow-xl hover:bg-white/80 transition-all duration-300 hover:-translate-y-1 p-6">
              <div className="space-y-3">
                <h4 className="font-bold text-gray-900 text-base">🔒 Secure & Safe</h4>
                <p className="text-sm text-gray-600 font-medium">
                  Conservative automation limits and human-like behavior patterns protect your LinkedIn account.
                </p>
              </div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm border border-gray-200/60 rounded-2xl shadow-lg hover:shadow-xl hover:bg-white/80 transition-all duration-300 hover:-translate-y-1 p-6">
              <div className="space-y-3">
                <h4 className="font-bold text-gray-900 text-base">📈 Guaranteed Results</h4>
                <p className="text-sm text-gray-600 font-medium">
                  See 3x+ engagement increase within 30 days or get a full refund.
                </p>
              </div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm border border-gray-200/60 rounded-2xl shadow-lg hover:shadow-xl hover:bg-white/80 transition-all duration-300 hover:-translate-y-1 p-6">
              <div className="space-y-3">
                <h4 className="font-bold text-gray-900 text-base">🎯 Open Source</h4>
                <p className="text-sm text-gray-600 font-medium">
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
