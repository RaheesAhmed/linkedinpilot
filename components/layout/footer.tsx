import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Mail, Heart } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-lg">🚁</span>
                  </div>
                  <span className="text-xl font-black text-slate-900">
                    LinkedinPilot
                  </span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-orange-50 border border-orange-200 rounded-full">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-xs text-orange-700 font-medium">Beta</span>
                </div>
              </div>
              <p className="text-slate-600 mb-6 max-w-md leading-relaxed">
                Transform your LinkedIn presence from boring to high-converting with AI-powered automation. 
                Generate content, engage strategically, and grow your network autonomously.
              </p>
              <div className="flex items-center space-x-4">
                <Link href="https://github.com/RaheesAhmed/linkedinpilot" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="border-slate-300 text-slate-700 hover:bg-slate-100 hover:text-slate-900">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </Link>
                <Link href="mailto:rahesahmed37@gmail.com">
                  <Button variant="outline" size="sm" className="border-slate-300 text-slate-700 hover:bg-slate-100 hover:text-slate-900">
                    <Mail className="mr-2 h-4 w-4" />
                    Contact
                  </Button>
                </Link>
              </div>
            </div>

            {/* Product */}
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Product</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="#features" className="text-slate-600 hover:text-blue-600 transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#how-it-works" className="text-slate-600 hover:text-blue-600 transition-colors">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-slate-600 hover:text-blue-600 transition-colors">
                    Pricing
                  </Link>
                </li>
                <li className="flex items-center">
                  <span className="text-slate-400">Documentation</span>
                  <span className="ml-2 px-2 py-1 bg-slate-200 text-slate-600 rounded-full text-xs font-medium">Coming Soon</span>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Resources</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link 
                    href="https://github.com/RaheesAhmed/linkedinpilot" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-blue-600 transition-colors"
                  >
                    Open Source
                  </Link>
                </li>
                <li>
                  <Link 
                    href="https://github.com/RaheesAhmed/linkedinpilot/issues" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-blue-600 transition-colors"
                  >
                    Report Issues
                  </Link>
                </li>
                <li>
                  <Link 
                    href="https://github.com/RaheesAhmed/linkedinpilot/blob/main/LICENSE" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-blue-600 transition-colors"
                  >
                    MIT License
                  </Link>
                </li>
                <li className="flex items-center">
                  <span className="text-slate-400">Community</span>
                  <span className="ml-2 px-2 py-1 bg-slate-200 text-slate-600 rounded-full text-xs font-medium">Coming Soon</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4 text-sm text-slate-500">
              <span>© 2025 LinkedinPilot</span>
              <span>•</span>
              <span>Created by Rahees Ahmed</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-slate-500">
              <span>Built with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>for professionals who want to dominate LinkedIn</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
