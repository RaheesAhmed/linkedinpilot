"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-xl">🚁</span>
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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
              How It Works
            </Link>
            <Link href="#pricing" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
              Pricing
            </Link>
            <Link href="/demo" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
              Demo
            </Link>
            <Link href="/chat" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
              Chat
            </Link>
            <Link href="https://github.com/RaheesAhmed/linkedinpilot" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
              GitHub
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="https://github.com/RaheesAhmed/linkedinpilot" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="border-slate-300 text-slate-700 hover:bg-slate-100 hover:text-slate-900">
                <Github className="w-4 h-4 mr-2" />
                Star
              </Button>
            </Link>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="#features" 
                className="text-slate-600 hover:text-blue-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                href="#how-it-works" 
                className="text-slate-600 hover:text-blue-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link 
                href="#pricing" 
                className="text-slate-600 hover:text-blue-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                href="/demo" 
                className="text-slate-600 hover:text-blue-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Demo
              </Link>
              <Link 
                href="/chat" 
                className="text-slate-600 hover:text-blue-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Chat
              </Link>
              <Link 
                href="https://github.com/RaheesAhmed/linkedinpilot" 
                className="text-slate-600 hover:text-blue-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                GitHub
              </Link>
              <div className="flex flex-col space-y-3 pt-4">
                <Link href="https://github.com/RaheesAhmed/linkedinpilot" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="w-full border-slate-300 text-slate-700 hover:bg-slate-100 hover:text-slate-900">
                    <Github className="w-4 h-4 mr-2" />
                    Star on GitHub
                  </Button>
                </Link>
                <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
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
