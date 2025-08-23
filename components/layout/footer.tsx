import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Mail, Heart } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-gray-200/60 bg-gradient-to-br from-gray-50/50 via-white to-indigo-50/30 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/10 via-transparent to-purple-100/10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-indigo-200/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-lg">🚁</span>
                  </div>
                  <span className="text-xl font-black bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    LinkedinPilot
                  </span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-orange-50/80 to-amber-50/80 backdrop-blur-sm border border-orange-200/60 rounded-full shadow-lg">
                  <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-orange-700 font-bold">Beta</span>
                </div>
              </div>
              <p className="text-gray-600 mb-6 max-w-md leading-relaxed font-medium">
                Transform your LinkedIn presence from boring to high-converting with AI-powered automation. 
                Generate content, engage strategically, and grow your network autonomously.
              </p>
              <div className="flex items-center space-x-4">
                <Link href="https://github.com/RaheesAhmed/linkedinpilot" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="bg-white/60 backdrop-blur-sm border-gray-300/60 text-gray-700 hover:bg-white/80 hover:text-gray-900 hover:border-gray-400/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </Link>
                <Link href="mailto:rahesahmed37@gmail.com">
                  <Button variant="outline" size="sm" className="bg-white/60 backdrop-blur-sm border-gray-300/60 text-gray-700 hover:bg-white/80 hover:text-gray-900 hover:border-gray-400/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <Mail className="mr-2 h-4 w-4" />
                    Contact
                  </Button>
                </Link>
              </div>
            </div>

            {/* Product */}
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Product</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="#features" className="text-gray-600 hover:text-indigo-600 transition-all duration-300 hover:scale-105 font-medium">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#how-it-works" className="text-gray-600 hover:text-indigo-600 transition-all duration-300 hover:scale-105 font-medium">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-gray-600 hover:text-indigo-600 transition-all duration-300 hover:scale-105 font-medium">
                    Pricing
                  </Link>
                </li>
                <li className="flex items-center">
                  <span className="text-gray-400 font-medium">Documentation</span>
                  <span className="ml-2 px-2 py-1 bg-gradient-to-r from-gray-100/80 to-gray-200/80 backdrop-blur-sm text-gray-600 rounded-full text-xs font-bold border border-gray-200/60 shadow-lg">Coming Soon</span>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Resources</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link 
                    href="https://github.com/RaheesAhmed/linkedinpilot" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-indigo-600 transition-all duration-300 hover:scale-105 font-medium"
                  >
                    Open Source
                  </Link>
                </li>
                <li>
                  <Link 
                    href="https://github.com/RaheesAhmed/linkedinpilot/issues" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-indigo-600 transition-all duration-300 hover:scale-105 font-medium"
                  >
                    Report Issues
                  </Link>
                </li>
                <li>
                  <Link 
                    href="https://github.com/RaheesAhmed/linkedinpilot/blob/main/LICENSE" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-indigo-600 transition-all duration-300 hover:scale-105 font-medium"
                  >
                    MIT License
                  </Link>
                </li>
                <li className="flex items-center">
                  <span className="text-gray-400 font-medium">Community</span>
                  <span className="ml-2 px-2 py-1 bg-gradient-to-r from-gray-100/80 to-gray-200/80 backdrop-blur-sm text-gray-600 rounded-full text-xs font-bold border border-gray-200/60 shadow-lg">Coming Soon</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-16 pt-8 border-t border-gray-200/60 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span className="font-medium">© 2025 LinkedinPilot</span>
              <span>•</span>
              <span className="font-medium">Created by Rahees Ahmed</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <span className="font-medium">Built with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span className="font-medium">for professionals who want to dominate LinkedIn</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
