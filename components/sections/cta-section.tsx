import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Github, 
  Rocket,
  Sparkles,
  Star
} from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="section-padding">
      <div className="container-pilot">
        <div className="relative">
          {/* Main CTA Card */}
          <Card className="bg-card text-card-foreground rounded-lg border shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-1 p-12 text-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 pilot-gradient opacity-5"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_100%)]"></div>
            
            <div className="relative z-10 space-y-8 max-w-3xl mx-auto">
              {/* Badge */}
              <div className="flex justify-center">
          <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20 text-lg px-4 py-2">
            <Rocket className="mr-2 h-5 w-5" />
            Ready to Launch Your LinkedIn Growth?
          </Badge>
              </div>

              {/* Headlines */}
              <div className="space-y-4">
                <h2 className="text-pilot-xl pilot-gradient-text">
                  Stop Letting Your LinkedIn
                  <br />
                  <span className="text-muted-foreground">Followers </span>
                  <span className="pilot-gradient-text">Sleep</span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Join the professionals who've transformed their LinkedIn presence with AI. 
                  Start your free trial today and wake up your dormant network.
                </p>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-8">
                <div className="space-y-2">
                  <div className="text-3xl font-bold pilot-gradient-text font-display">
                    3x+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Engagement Increase
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold pilot-gradient-text font-display">
                    7 Days
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Free Trial
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold pilot-gradient-text font-display">
                    100%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Autonomous
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-md text-xl px-10 py-8 animate-pulse-glow">
                  <Sparkles className="mr-3 h-6 w-6" />
                  Start Free Trial Now
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
                <Button variant="outline" size="lg" className="text-xl px-10 py-8" asChild>
                  <Link href="https://github.com/RaheesAhmed/linkedinpilot" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-3 h-6 w-6" />
                    View Source Code
                    <Star className="ml-3 h-6 w-6" />
                  </Link>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-8 space-y-4">
                <p className="text-sm text-muted-foreground">
                  ✅ No credit card required • ✅ 7-day free trial • ✅ Cancel anytime
                </p>
                <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span>Open Source</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>MIT License</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Self-Host Option</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-warning rounded-full"></div>
                    <span>Active Development</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Side Cards for Additional CTAs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <Card className="bg-card text-card-foreground rounded-lg border shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-1 p-6 text-center">
              <div className="space-y-4">
                <Github className="h-12 w-12 mx-auto text-primary" />
                <h3 className="text-lg font-bold font-display">
                  Star on GitHub
                </h3>
                <p className="text-sm text-muted-foreground">
                  Help us grow the open source community. Star the repo and follow our development progress.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="https://github.com/RaheesAhmed/linkedinpilot" target="_blank" rel="noopener noreferrer">
                    <Star className="mr-2 h-4 w-4" />
                    Star Repository
                  </Link>
                </Button>
              </div>
            </Card>

            <Card className="bg-card text-card-foreground rounded-lg border shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-1 p-6 text-center">
              <div className="space-y-4">
                <div className="text-4xl">📧</div>
                <h3 className="text-lg font-bold font-display">
                  Get Updates
                </h3>
                <p className="text-sm text-muted-foreground">
                  Stay informed about new features, updates, and LinkedIn automation best practices.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="mailto:rahesahmed37@gmail.com?subject=LinkedinPilot Updates">
                    Contact for Updates
                  </Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
