"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-pilot">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🚁</span>
              <span className="pilot-gradient-text text-xl font-bold font-display">
                LinkedinPilot
              </span>
            </div>
            <Badge variant="secondary" className="bg-warning/10 text-warning border-warning/20">
              Development
            </Badge>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
              How It Works
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link href="https://github.com/RaheesAhmed/linkedinpilot" className="text-sm font-medium hover:text-primary transition-colors">
              GitHub
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" asChild>
              <Link href="https://github.com/RaheesAhmed/linkedinpilot" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Star on GitHub
              </Link>
            </Button>
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-md">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t animate-fade-in">
            <nav className="flex flex-col space-y-3">
              <Link 
                href="#features" 
                className="text-sm font-medium hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                href="#how-it-works" 
                className="text-sm font-medium hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link 
                href="#pricing" 
                className="text-sm font-medium hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                href="https://github.com/RaheesAhmed/linkedinpilot" 
                className="text-sm font-medium hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                GitHub
              </Link>
              <div className="flex flex-col space-y-2 pt-2">
                <Button variant="outline" size="sm" asChild>
                  <Link href="https://github.com/RaheesAhmed/linkedinpilot" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Star on GitHub
                  </Link>
                </Button>
                <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-md">
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
