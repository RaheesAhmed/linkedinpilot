"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white/80 backdrop-blur-lg border-b border-gray-200/60 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                <span className="text-xl">🚁</span>
              </div>
              <span className="text-xl font-black bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                LinkedinPilot
              </span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-orange-50/80 to-amber-50/80 backdrop-blur-sm border border-orange-200/60 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-orange-700 font-bold">Beta</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-600 hover:text-indigo-600 font-semibold transition-all duration-300 hover:scale-105 px-3 py-2 rounded-lg hover:bg-indigo-50/60">
              Features
            </Link>
            <Link href="#how-it-works" className="text-gray-600 hover:text-indigo-600 font-semibold transition-all duration-300 hover:scale-105 px-3 py-2 rounded-lg hover:bg-indigo-50/60">
              How It Works
            </Link>
            <Link href="#pricing" className="text-gray-600 hover:text-indigo-600 font-semibold transition-all duration-300 hover:scale-105 px-3 py-2 rounded-lg hover:bg-indigo-50/60">
              Pricing
            </Link>
            
            <Link href="/chat" className="text-gray-600 hover:text-indigo-600 font-semibold transition-all duration-300 hover:scale-105 px-3 py-2 rounded-lg hover:bg-indigo-50/60">
              Chat
            </Link>
            <Link href="/dashboard" className="text-gray-600 hover:text-indigo-600 font-semibold transition-all duration-300 hover:scale-105 px-3 py-2 rounded-lg hover:bg-indigo-50/60">
              Dashboard
            </Link>
            
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="https://github.com/RaheesAhmed/linkedinpilot" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="bg-white/60 backdrop-blur-sm border-gray-300/60 text-gray-700 hover:bg-white/80 hover:text-gray-900 hover:border-gray-400/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Github className="w-4 h-4 mr-2" />
                Star
              </Button>
            </Link>
            <Button size="sm" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50/60 rounded-lg transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200/60 bg-white/60 backdrop-blur-sm">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="#features" 
                className="text-gray-600 hover:text-indigo-600 font-semibold py-2 px-3 rounded-lg hover:bg-indigo-50/60 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                href="#how-it-works" 
                className="text-gray-600 hover:text-indigo-600 font-semibold py-2 px-3 rounded-lg hover:bg-indigo-50/60 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link 
                href="#pricing" 
                className="text-gray-600 hover:text-indigo-600 font-semibold py-2 px-3 rounded-lg hover:bg-indigo-50/60 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              
              <Link 
                href="/chat" 
                className="text-gray-600 hover:text-indigo-600 font-semibold py-2 px-3 rounded-lg hover:bg-indigo-50/60 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Chat
              </Link>
              <Link 
                href="/dashboard" 
                className="text-gray-600 hover:text-indigo-600 font-semibold py-2 px-3 rounded-lg hover:bg-indigo-50/60 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </Link>
              <Link 
                href="https://github.com/RaheesAhmed/linkedinpilot" 
                className="text-gray-600 hover:text-indigo-600 font-semibold py-2 px-3 rounded-lg hover:bg-indigo-50/60 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                GitHub
              </Link>
              <div className="flex flex-col space-y-3 pt-4">
                <Link href="https://github.com/RaheesAhmed/linkedinpilot" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="w-full bg-white/60 backdrop-blur-sm border-gray-300/60 text-gray-700 hover:bg-white/80 hover:text-gray-900 shadow-lg hover:shadow-xl transition-all duration-300">
                    <Github className="w-4 h-4 mr-2" />
                    Star on GitHub
                  </Button>
                </Link>
                <Button size="sm" className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300">
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
