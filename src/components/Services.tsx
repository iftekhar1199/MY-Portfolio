import { Box, Zap, Scissors, CircuitBoard, Bot, Server } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Box,
      title: "3D Model Design",
      description: "Custom 3D modeling and design services using Fusion 360 and SolidWorks for prototyping and manufacturing.",
      features: ["CAD Modeling", "Product Design", "Technical Drawings"]
    },
    {
      icon: Zap,
      title: "3D Printing Service",
      description: "High-quality 3D printing solutions for prototypes, functional parts, and custom designs with various materials.",
      features: ["PLA/ABS Printing", "Rapid Prototyping", "Custom Parts"]
    },
    {
      icon: Scissors,
      title: "Laser Engraving & CNC",
      description: "Precision laser engraving and CNC cutting services for custom parts, signage, and detailed fabrication work.",
      features: ["Laser Cutting", "CNC Machining", "Custom Engraving"]
    },
    {
      icon: CircuitBoard,
      title: "Circuit Design & PCB",
      description: "Complete circuit design and PCB fabrication services from schematic to finished boards for electronic projects.",
      features: ["PCB Design", "Circuit Analysis", "Board Fabrication"]
    },
    {
      icon: Bot,
      title: "Robotics Projects",
      description: "End-to-end robotics solutions including design, programming, and integration of autonomous systems.",
      features: ["Robot Design", "Automation", "Sensor Integration"]
    },
    {
      icon: Server,
      title: "Embedded Systems",
      description: "Custom embedded system development using Arduino, ESP32, and Raspberry Pi for IoT and automation projects.",
      features: ["IoT Solutions", "Microcontroller Programming", "System Integration"]
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="hero-gradient">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive engineering solutions from concept to reality
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              
              return (
                <div 
                  key={service.title}
                  className="tech-card group animate-slide-up hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Service Icon */}
                  <div className="mb-6">
                    <div className="inline-flex p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300">
                      <IconComponent className="h-8 w-8 text-primary group-hover:text-accent transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Service Content */}
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div 
                        key={feature}
                        className="flex items-center text-sm"
                        style={{ animationDelay: `${(index * 0.1) + (featureIndex * 0.05)}s` }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-accent mr-2" />
                        <span className="text-foreground/70">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:to-accent/5 transition-all duration-300 pointer-events-none" />
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <div className="glass-morphism rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
              <p className="text-muted-foreground mb-6">
                Let's collaborate to bring your ideas to life with cutting-edge engineering solutions.
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-medium hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
              >
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;