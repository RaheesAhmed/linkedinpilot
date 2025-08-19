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
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="relative">
          {/* Main CTA Card */}
          <div className="bg-slate-900 rounded-2xl p-16 text-center">
            <div className="space-y-10 max-w-4xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 rounded-full text-white font-semibold">
                <Rocket className="w-5 h-5" />
                Ready to Transform Your LinkedIn?
              </div>

              {/* Headlines */}
              <div className="space-y-8">
                <h2 className="text-5xl lg:text-6xl font-black text-white leading-tight">
                  Stop Letting Your LinkedIn
                  <br />
                  <span className="text-blue-400">Followers Sleep</span>
                </h2>
                <p className="text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
                  Join the professionals who've transformed their LinkedIn presence with AI. 
                  Start your free trial today and wake up your dormant network.
                </p>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 py-12">
                <div className="text-center">
                  <div className="text-5xl font-black text-blue-400 mb-3">5x</div>
                  <div className="text-slate-300 text-lg font-semibold">More Engagement</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-black text-blue-400 mb-3">7 Days</div>
                  <div className="text-slate-300 text-lg font-semibold">Free Trial</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-black text-blue-400 mb-3">100%</div>
                  <div className="text-slate-300 text-lg font-semibold">Autonomous</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-16 py-6 text-2xl font-bold rounded-2xl shadow-xl transition-all flex items-center gap-4">
                  <Sparkles className="h-7 w-7" />
                  Start Free Trial Now
                  <ArrowRight className="h-7 w-7" />
                </button>
                
                <Link href="https://github.com/RaheesAhmed/linkedinpilot" target="_blank" rel="noopener noreferrer">
                  <button className="border-2 border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white px-12 py-6 text-xl font-bold rounded-2xl transition-all flex items-center gap-3">
                    <Github className="h-6 w-6" />
                    View Source Code
                    <Star className="h-6 w-6" />
                  </button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="pt-8 space-y-6">
                <p className="text-slate-300 text-lg font-medium">
                  ✅ No credit card required • ✅ 7-day free trial • ✅ Cancel anytime
                </p>
                <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-slate-400">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="font-medium">100% Open Source</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="font-medium">MIT License</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="font-medium">Self-Host Available</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                    <span className="font-medium">Active Development</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Side CTAs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-4xl mx-auto">
            <div className="text-center space-y-4">
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-slate-900">
                  ⭐ Star on GitHub
                </h3>
                <p className="text-slate-600 text-lg">
                  Help us grow the open source community. Star the repo and follow our development progress.
                </p>
              </div>
              <Link href="https://github.com/RaheesAhmed/linkedinpilot" target="_blank" rel="noopener noreferrer">
                <button className="bg-slate-900 hover:bg-slate-800 text-white py-3 px-8 rounded-xl font-bold transition-all flex items-center justify-center gap-3 mx-auto">
                  <Star className="h-5 w-5" />
                  Star Repository
                </button>
              </Link>
            </div>

            <div className="text-center space-y-4">
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-slate-900">
                  📧 Get Updates
                </h3>
                <p className="text-slate-600 text-lg">
                  Stay informed about new features, updates, and LinkedIn automation best practices.
                </p>
              </div>
              <Link href="mailto:rahesahmed37@gmail.com?subject=LinkedinPilot Updates">
                <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-xl font-bold transition-all mx-auto">
                  Contact for Updates
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
