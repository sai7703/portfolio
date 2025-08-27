import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted opacity-50" />
      
      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status badge */}
          <div className="animate-fade-in">
            <Badge variant="secondary" className="mb-8 px-4 py-2 text-sm">
              Available for new opportunities
            </Badge>
          </div>

          {/* Main heading */}
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Hi, I'm{" "}
              <span className="portfolio-gradient bg-clip-text text-transparent">
                Alex
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Full-stack developer passionate about creating beautiful, 
              functional experiences that make a difference.
            </p>
          </div>

          {/* CTA buttons */}
          <div className="animate-scale-in flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="portfolio-gradient text-primary-foreground hover:opacity-90 transition-opacity">
              View My Work
            </Button>
            <Button variant="outline" size="lg" className="border-primary/20 hover:border-primary transition-colors">
              Get In Touch
            </Button>
          </div>

          {/* Social links */}
          <div className="animate-slide-in-right flex justify-center gap-6">
            <Button variant="ghost" size="sm" className="hover-lift">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="hover-lift">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="hover-lift">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;