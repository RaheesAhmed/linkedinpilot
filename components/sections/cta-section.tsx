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
    <section className="py-24 px-4 bg-gradient-to-br from-gray-900 via-slate-900 to-purple-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br  pointer-events-none"></div>
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative">
        <div className="relative">
          {/* Main CTA Card */}
          <div className="p-16 text-center">
            <div className="space-y-10 max-w-4xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Rocket className="w-5 h-5" />
                Ready to Transform Your LinkedIn?
              </div>

              {/* Headlines */}
              <div className="space-y-8">
                <h2 className="text-5xl lg:text-6xl font-black text-white leading-tight">
                  Stop Letting Your LinkedIn
                  <br />
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
                    Followers Sleep
                  </span>
                </h2>
                <p className="text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto font-medium">
                  Join the professionals who've transformed their LinkedIn presence with AI. 
                  Start your free trial today and wake up your dormant network.
                </p>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 py-12">
                <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="text-5xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-3">5x</div>
                  <div className="text-gray-300 text-lg font-bold">More Engagement</div>
                </div>
                <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="text-5xl font-black bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent mb-3">7 Days</div>
                  <div className="text-gray-300 text-lg font-bold">Free Trial</div>
                </div>
                <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="text-5xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-3">100%</div>
                  <div className="text-gray-300 text-lg font-bold">Autonomous</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-16 py-6 text-2xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 flex items-center gap-4">
                  <Sparkles className="h-7 w-7" />
                  Start Free Trial Now
                  <ArrowRight className="h-7 w-7" />
                </button>
                
                <Link href="https://github.com/RaheesAhmed/linkedinpilot" target="_blank" rel="noopener noreferrer">
                  <button className="bg-white/10 backdrop-blur-sm border-2 border-white/20 text-gray-200 hover:bg-white/20 hover:text-white px-12 py-6 text-xl font-bold rounded-2xl transition-all duration-300 hover:scale-105 flex items-center gap-3">
                    <Github className="h-6 w-6" />
                    View Source Code
                    <Star className="h-6 w-6" />
                  </button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="pt-8 space-y-6">
                <p className="text-gray-300 text-lg font-bold">
                  ✅ No credit card required • ✅ 7-day free trial • ✅ Cancel anytime
                </p>
                <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400">
                  <div className="flex items-center space-x-2 px-3 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                    <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
                    <span className="font-bold">100% Open Source</span>
                  </div>
                  <div className="flex items-center space-x-2 px-3 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full"></div>
                    <span className="font-bold">MIT License</span>
                  </div>
                  <div className="flex items-center space-x-2 px-3 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full"></div>
                    <span className="font-bold">Self-Host Available</span>
                  </div>
                  <div className="flex items-center space-x-2 px-3 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                    <div className="w-3 h-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-pulse"></div>
                    <span className="font-bold">Active Development</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
}
