import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Mail, Heart } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container-pilot">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
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
              <p className="text-muted-foreground mb-6 max-w-md">
                Transform your LinkedIn presence from boring to high-converting with AI-powered automation. 
                Generate content, engage strategically, and grow your network autonomously.
              </p>
              <div className="flex items-center space-x-4">
                <Button variant="outline" size="sm" asChild>
                  <Link href="https://github.com/RaheesAhmed/linkedinpilot" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href="mailto:rahesahmed37@gmail.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Contact
                  </Link>
                </Button>
              </div>
            </div>

            {/* Product */}
            <div>
              <h4 className="font-semibold mb-4 font-display">Product</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <Link href="#features" className="hover:text-primary transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#how-it-works" className="hover:text-primary transition-colors">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="hover:text-primary transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <span className="text-muted-foreground/60">Documentation</span>
                  <Badge variant="outline" className="ml-2 text-xs">Coming Soon</Badge>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold mb-4 font-display">Resources</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <Link 
                    href="https://github.com/RaheesAhmed/linkedinpilot" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    Open Source
                  </Link>
                </li>
                <li>
                  <Link 
                    href="https://github.com/RaheesAhmed/linkedinpilot/issues" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    Report Issues
                  </Link>
                </li>
                <li>
                  <Link 
                    href="https://github.com/RaheesAhmed/linkedinpilot/blob/main/LICENSE" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    MIT License
                  </Link>
                </li>
                <li>
                  <span className="text-muted-foreground/60">Community</span>
                  <Badge variant="outline" className="ml-2 text-xs">Coming Soon</Badge>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-16 pt-8 border-t flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span>© 2025 LinkedinPilot</span>
              <span>•</span>
              <span>Created by Rahees Ahmed</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
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
