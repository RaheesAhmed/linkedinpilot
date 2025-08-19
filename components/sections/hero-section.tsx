import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowRight, Github, Zap, Users, TrendingUp } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container-pilot">
        <div className="text-center space-y-8">
          {/* Development Badge */}
          <div className="animate-fade-in">
            <Badge variant="outline" className="bg-warning/10 text-warning border-warning/20">
              🚧 Under Active Development - Star to Follow Progress
            </Badge>
          </div>

          {/* Main Headlines */}
          <div className="space-y-4 animate-slide-up">
            <h1 className="text-pilot-xl pilot-gradient-text max-w-4xl mx-auto">
              Transform Your LinkedIn From 
              <br />
              <span className="text-muted-foreground">Boring to </span>
              <span className="pilot-gradient-text">High-Converting</span>
            </h1>
            <p className="text-pilot-lg text-muted-foreground max-w-3xl mx-auto">
              AI-powered automation that turns your 3000+ sleeping followers into an engaged community. 
              Generate content, respond intelligently, and grow autonomously.
            </p>
          </div>

          {/* Problem Statement */}
          <div className="max-w-2xl mx-auto animate-fade-in">
            <Card className="bg-card text-card-foreground rounded-lg border shadow-md hover:shadow-lg transition-all duration-200 p-6 bg-destructive/5 border-destructive/20">
              <div className="text-center space-y-2">
                <p className="text-destructive font-medium">
                  😴 Got 3000+ followers but only getting 5-10 likes per post?
                </p>
                <p className="text-sm text-muted-foreground">
                  Stop wasting time on manual LinkedIn management. Let AI take the wheel.
                </p>
              </div>
            </Card>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-slide-up">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-md text-lg px-8 py-6">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
              <Link href="https://github.com/RaheesAhmed/linkedinpilot" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                View on GitHub
              </Link>
            </Button>
          </div>

          {/* Social Proof / Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto pt-12 animate-fade-in">
            <Card className="bg-card text-card-foreground rounded-lg border shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-1 p-6 text-center">
              <div className="space-y-2">
                <Zap className="h-8 w-8 mx-auto text-primary" />
                <h3 className="text-2xl font-bold font-display">3x+</h3>
                <p className="text-sm text-muted-foreground">Engagement Increase</p>
              </div>
            </Card>
            <Card className="bg-card text-card-foreground rounded-lg border shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-1 p-6 text-center">
              <div className="space-y-2">
                <Users className="h-8 w-8 mx-auto text-accent" />
                <h3 className="text-2xl font-bold font-display">100%</h3>
                <p className="text-sm text-muted-foreground">Autonomous Operation</p>
              </div>
            </Card>
            <Card className="bg-card text-card-foreground rounded-lg border shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-1 p-6 text-center">
              <div className="space-y-2">
                <TrendingUp className="h-8 w-8 mx-auto text-success" />
                <h3 className="text-2xl font-bold font-display">10+ hrs</h3>
                <p className="text-sm text-muted-foreground">Saved Per Week</p>
              </div>
            </Card>
          </div>

          {/* Open Source Notice */}
          <div className="pt-8 animate-fade-in">
            <p className="text-sm text-muted-foreground">
              🎉 <strong>Proudly Open Source</strong> • MIT License • 
              <Link href="https://github.com/RaheesAhmed/linkedinpilot" className="hover:text-primary transition-colors ml-1">
                Contribute on GitHub
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
