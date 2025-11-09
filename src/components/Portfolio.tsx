import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const projects = [
    {
      title: "Egg Incubator (Arduino-based)",
      description: "Automated egg incubation system with temperature and humidity control using Arduino microcontroller and sensors.",
      technologies: ["Arduino", "Sensors", "LCD Display", "Relay Control"],
      category: "Hardware",
      image: "🥚",
      features: ["Temperature Control", "Humidity Monitoring", "Automated Turning"]
    },
    {
      title: "Smart Home Automation",
      description: "ESP32-based home automation system for controlling lights, fans, and appliances remotely via WiFi.",
      technologies: ["ESP32", "WiFi", "IoT", "Mobile App"],
      category: "IoT",
      image: "🏠",
      features: ["Remote Control", "Voice Commands", "Energy Monitoring"]
    },
    {
      title: "Advanced Line Following Robot",
      description: "Intelligent robot with advanced line-following capabilities using multiple sensors and PID control algorithm.",
      technologies: ["Arduino", "PID Control", "Sensors", "Motor Control"],
      category: "Robotics",
      image: "🤖",
      features: ["PID Algorithm", "Obstacle Avoidance", "Speed Optimization"]
    },
    {
      title: "DIY CNC Machine & Laser Engraver",
      description: "Custom-built CNC machine with laser engraving capability for precision manufacturing and prototyping.",
      technologies: ["CNC", "Stepper Motors", "G-Code", "Laser Module"],
      category: "Manufacturing",
      image: "⚙️",
      features: ["Precision Cutting", "Laser Engraving", "Custom Parts"]
    },
    {
      title: "DIY NAS Home Server",
      description: "Network-attached storage server built from scratch for home data management and media streaming.",
      technologies: ["Raspberry Pi", "Linux", "Network Storage", "Media Server"],
      category: "Systems",
      image: "💾",
      features: ["File Sharing", "Media Streaming", "Remote Access"]
    },
    {
      title: "Melanoma Skin Cancer Detection",
      description: "Machine learning model for early detection of melanoma using computer vision and deep learning techniques.",
      technologies: ["Python", "TensorFlow", "Computer Vision", "Deep Learning"],
      category: "AI/ML",
      image: "🔬",
      features: ["Image Classification", "AI Diagnosis", "Medical Imaging"]
    },
    {
      title: "Business Invoice Management Web App",
      description: "Full-stack web application for managing business invoices, clients, and financial records with modern UI.",
      technologies: ["Laravel", "PHP", "HTML", "CSS", "MySQL"],
      category: "Web Dev",
      image: "📊",
      features: ["Invoice Generation", "Client Management", "Financial Reports"]
    }
  ];

  const categories = ["All", "Hardware", "IoT", "Robotics", "Manufacturing", "Systems", "AI/ML", "Web Dev"];

  return (
    <section id="portfolio" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="hero-gradient">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of innovative solutions across hardware, software, and everything in between
            </p>
          </div>

          {/* About Portfolio */}
          <div className="max-w-3xl mx-auto mb-12 animate-fade-in">
            <div className="tech-card text-center">
              <h3 className="text-2xl font-semibold mb-4 flex items-center justify-center gap-2">
                <span className="hero-gradient">About Portfolio</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                This portfolio represents a journey through diverse engineering domains—from hardware prototyping and robotics to AI-powered solutions and full-stack web development. Each project demonstrates hands-on problem-solving, innovative thinking, and a passion for building practical solutions that bridge theoretical knowledge with real-world applications. These works reflect my continuous learning and exploration across multiple technologies and disciplines.
              </p>
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-slide-up">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`tech-badge hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all duration-300 ${
                  index === 0 ? 'bg-primary/10 text-primary border-primary/30' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="tech-card group hover:scale-105 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image/Icon */}
                <div className="mb-6 relative overflow-hidden rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 p-8 text-center">
                  <div className="text-6xl mb-4">{project.image}</div>
                  <span className="tech-badge">{project.category}</span>
                </div>

                {/* Project Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors line-clamp-2">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <div key={feature} className="flex items-center text-xs">
                        <div className="w-1 h-1 rounded-full bg-primary mr-2" />
                        <span className="text-foreground/70">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-muted/50 text-muted-foreground rounded border border-border/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs text-muted-foreground">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 text-xs border-border/50 hover:border-primary/50"
                    >
                      <ExternalLink className="h-3 w-3 mr-1" />
                      View
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 text-xs border-border/50 hover:border-accent/50"
                    >
                      <Github className="h-3 w-3 mr-1" />
                      Code
                    </Button>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:to-accent/5 transition-all duration-300 pointer-events-none" />
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-slide-up" style={{ animationDelay: '1s' }}>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-3 text-lg border-border/50 hover:border-primary/50 hover:bg-primary/5"
            >
              View All Projects
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;