import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Github, Zap, Users, TrendingUp, AlertCircle, Play } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="pt-32 pb-24 px-4 bg-gradient-to-br from-indigo-50/30 via-white to-purple-50/30 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/20 via-transparent to-purple-100/20 pointer-events-none"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-indigo-200/30 to-purple-200/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center space-y-12">
          
          {/* Development Status Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/60 backdrop-blur-sm border border-orange-200/60 rounded-full text-sm text-orange-700 font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-2.5 h-2.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full animate-pulse"></div>
            Under Active Development - Star to Follow Progress
          </div>

          {/* Main Headline */}
          <div className="space-y-8">
            <h1 className="text-6xl lg:text-7xl font-black text-gray-900 leading-tight">
              Transform Your LinkedIn From
              <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Boring to High-Converting
              </span>
            </h1>
            
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
              AI-powered automation that turns your <strong className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">3,000+ sleeping followers</strong> into an 
              engaged community. Generate content, respond intelligently, and grow autonomously.
            </p>
          </div>

          {/* Problem Statement */}
          <div className="max-w-3xl mx-auto">
            <div className="p-8 bg-white/60 backdrop-blur-sm border border-red-200/60 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-gradient-to-br from-red-100 to-pink-100 rounded-lg border border-red-200/60">
                  <AlertCircle className="w-6 h-6 text-red-500" />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    😤 Got 3,000+ followers but only getting 5-10 likes per post?
                  </h3>
                  <p className="text-gray-700 text-lg font-medium">
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
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-12 py-6 text-xl font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <Play className="mr-3 w-6 h-6" />
              Start Free Trial
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
            
            <Link href="https://github.com/RaheesAhmed/linkedinpilot" target="_blank" rel="noopener noreferrer">
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-white/60 backdrop-blur-sm border-2 border-gray-200/60 text-gray-700 hover:bg-white/80 hover:text-gray-900 hover:border-gray-300/80 px-12 py-6 text-xl font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Github className="mr-3 w-6 h-6" />
                View Source Code
              </Button>
            </Link>
          </div>

          {/* Results Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto pt-16">
            <div className="bg-white/60 backdrop-blur-sm border border-blue-200/60 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl hover:bg-white/80 transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3">5x</div>
              <div className="text-gray-700 font-bold">More Engagement</div>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm border border-emerald-200/60 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl hover:bg-white/80 transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-black bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-3">100%</div>
              <div className="text-gray-700 font-bold">Autonomous</div>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm border border-purple-200/60 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl hover:bg-white/80 transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-black bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent mb-3">15hrs</div>
              <div className="text-gray-700 font-bold">Saved Weekly</div>
            </div>
          </div>

          {/* Trust Signals */}
          <div className="pt-12 space-y-4">
            <div className="flex items-center justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-3 px-3 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-green-200/60">
                <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
                <span className="font-bold">100% Open Source</span>
              </div>
              <div className="flex items-center gap-3 px-3 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-blue-200/60">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
                <span className="font-bold">MIT License</span>
              </div>
              <div className="flex items-center gap-3 px-3 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-purple-200/60">
                <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full"></div>
                <span className="font-bold">7-Day Free Trial</span>
              </div>
            </div>
            
            <p className="text-gray-500 text-sm font-medium">
              ✅ No credit card required • ✅ Cancel anytime • ✅ Full source code access
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
