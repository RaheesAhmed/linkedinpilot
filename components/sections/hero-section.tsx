import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Github, Zap, Users, TrendingUp, AlertCircle, Play } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="pt-32 pb-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-12">
          
          {/* Development Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 border border-orange-200 rounded-full text-sm text-orange-700 font-medium">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            Under Active Development - Star to Follow Progress
          </div>

          {/* Main Headline */}
          <div className="space-y-8">
            <h1 className="text-6xl lg:text-7xl font-black text-slate-900 leading-tight">
              Transform Your LinkedIn From
              <span className="block text-blue-600">Boring to High-Converting</span>
            </h1>
            
            <p className="text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              AI-powered automation that turns your <strong>3,000+ sleeping followers</strong> into an 
              engaged community. Generate content, respond intelligently, and grow autonomously.
            </p>
          </div>

          {/* Problem Statement */}
          <div className="max-w-3xl mx-auto">
            <div className="p-8 bg-red-50 border-l-4 border-red-500 rounded-xl">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                <div className="text-left">
                  <h3 className="text-xl font-bold text-red-900 mb-2">
                    😤 Got 3,000+ followers but only getting 5-10 likes per post?
                  </h3>
                  <p className="text-red-800 text-lg">
                    Stop wasting time on manual LinkedIn management. Let AI take the wheel and turn 
                    your dormant network into a lead generation machine.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-6 text-xl font-bold rounded-xl shadow-lg transition-all"
            >
              <Play className="mr-3 w-6 h-6" />
              Start Free Trial
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
            
            <Link href="https://github.com/RaheesAhmed/linkedinpilot" target="_blank" rel="noopener noreferrer">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-slate-300 text-slate-700 hover:bg-slate-100 hover:text-slate-900 px-12 py-6 text-xl font-bold rounded-xl"
              >
                <Github className="mr-3 w-6 h-6" />
                View Source Code
              </Button>
            </Link>
          </div>

          {/* Results Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto pt-16">
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-black text-blue-600 mb-3">5x</div>
              <div className="text-blue-800 font-semibold">More Engagement</div>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-black text-green-600 mb-3">100%</div>
              <div className="text-green-800 font-semibold">Autonomous</div>
            </div>
            
            <div className="bg-purple-50 border border-purple-200 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-black text-purple-600 mb-3">15hrs</div>
              <div className="text-purple-800 font-semibold">Saved Weekly</div>
            </div>
          </div>

          {/* Trust Signals */}
          <div className="pt-12 space-y-4">
            <div className="flex items-center justify-center gap-8 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="font-medium">100% Open Source</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="font-medium">MIT License</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="font-medium">7-Day Free Trial</span>
              </div>
            </div>
            
            <p className="text-slate-400 text-sm">
              ✅ No credit card required • ✅ Cancel anytime • ✅ Full source code access
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
