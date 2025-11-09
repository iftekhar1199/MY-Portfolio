import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Sparkles, Code, Cpu } from "lucide-react";
import profilePicture from "@/assets/profile-picture.jpg";
import { usePdfExport } from "@/hooks/use-pdf-export";

const Hero = () => {
  const { exportToPdf } = usePdfExport();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      
      {/* Animated Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/20 to-transparent rounded-full blur-3xl animate-float opacity-60" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-accent/20 to-transparent rounded-full blur-3xl animate-float opacity-60" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Floating Icons */}
      <div className="absolute top-20 left-20 animate-float opacity-30">
        <Code className="w-8 h-8 text-primary" />
      </div>
      <div className="absolute top-32 right-32 animate-float opacity-30" style={{ animationDelay: '1s' }}>
        <Cpu className="w-10 h-10 text-accent" />
      </div>
      <div className="absolute bottom-40 left-40 animate-float opacity-30" style={{ animationDelay: '2s' }}>
        <Sparkles className="w-6 h-6 text-primary" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Enhanced Profile Picture */}
          <div className="mb-12 inline-block">
            <div className="relative group">
              {/* Outer glow ring */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-accent to-primary rounded-full opacity-20 group-hover:opacity-40 transition-all duration-500 animate-glow blur-md" />
              {/* Inner glow ring */}
              <div className="absolute -inset-2 bg-gradient-to-r from-primary to-accent rounded-full opacity-60 group-hover:opacity-80 transition-all duration-300 animate-glow" />
              {/* Glass morphism background */}
              <div className="absolute -inset-1 bg-background/20 backdrop-blur-sm rounded-full border border-primary/20" />
              <img
                src={profilePicture}
                alt="Iftekhar Hossain"
                className="relative w-36 h-36 md:w-40 md:h-40 rounded-full object-cover border-4 border-background shadow-2xl group-hover:scale-105 transition-transform duration-300"
              />
              {/* Floating status indicator */}
              <div className="absolute bottom-2 right-2 w-6 h-6 bg-accent rounded-full border-4 border-background flex items-center justify-center">
                <div className="w-2 h-2 bg-background rounded-full animate-pulse" />
              </div>
            </div>
          </div>

          {/* Enhanced Main Heading */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-2 leading-tight tracking-tight">
              <span className="block text-foreground drop-shadow-lg">Iftekhar</span>
              <span className="hero-gradient drop-shadow-2xl">Hossain</span>
            </h1>
            {/* Animated underline */}
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4 animate-pulse" />
          </div>

          {/* Enhanced Tagline with glassmorphism */}
          <div className="glass-morphism rounded-2xl p-6 mb-8 mx-auto max-w-3xl border border-primary/10">
            <p className="text-xl md:text-2xl text-muted-foreground mb-3 font-semibold">
              Computer Science Graduate | Robotics & 3D Prototyping Enthusiast
            </p>
            
            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed">
              Passionate about building real-world solutions through hardware prototyping, embedded systems, 
              and automation. Bridging the gap between software and physical innovation.
            </p>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="group relative overflow-hidden bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground px-10 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection('portfolio')}
            >
              <span className="relative z-10 flex items-center">
                View My Work
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="group relative overflow-hidden px-10 py-4 text-lg font-semibold rounded-full border-2 border-primary/30 bg-background/50 backdrop-blur-sm hover:border-primary/60 hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:scale-105"
              onClick={exportToPdf}
            >
              <span className="relative z-10 flex items-center">
                <Download className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                Export as PDF
              </span>
            </Button>
          </div>

          {/* Enhanced Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center space-y-2 animate-bounce">
              <span className="text-xs text-muted-foreground font-medium tracking-wider uppercase">Scroll</span>
              <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex justify-center bg-background/20 backdrop-blur-sm">
                <div className="w-1.5 h-3 bg-gradient-to-b from-primary to-accent rounded-full mt-2 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;