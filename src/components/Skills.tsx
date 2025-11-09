import { Cpu, Network, Code, Cog } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Hardware & Electronics",
      icon: Cpu,
      color: "primary",
      skills: [
        "Product Prototyping",
        "3D Design (Fusion 360, SolidWorks)",
        "PCB Design & Fabrication",
        "Embedded Systems",
        "Microcontroller Programming",
        "Arduino & ESP32"
      ]
    },
    {
      title: "Networking & Systems",
      icon: Network,
      color: "accent",
      skills: [
        "NAS Server Build",
        "Raspberry Pi Integration",
        "SBC Systems",
        "Basic Networking",
        "System Administration",
        "IoT Protocols"
      ]
    },
    {
      title: "Software & Programming",
      icon: Code,
      color: "destructive",
      skills: [
        "C/C++ Programming",
        "Python Development",
        "Machine Learning",
        "Web Development (HTML, CSS)",
        "Bootstrap Framework",
        "Laravel PHP"
      ]
    },
    {
      title: "Manufacturing & Design",
      icon: Cog,
      color: "secondary",
      skills: [
        "3D Printing",
        "Laser Engraving",
        "CNC Machining",
        "Circuit Design",
        "PCB Etching",
        "CAD Modeling"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Technical <span className="hero-gradient">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit spanning hardware, software, and everything in between
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              const colorClasses = {
                primary: "bg-primary/10 text-primary border-primary/20",
                accent: "bg-accent/10 text-accent border-accent/20",
                destructive: "bg-destructive/10 text-destructive border-destructive/20",
                secondary: "bg-secondary/10 text-secondary-foreground border-secondary/20"
              };
              
              return (
                <div 
                  key={category.title} 
                  className="tech-card animate-slide-up group"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Category Header */}
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-lg mr-4 ${colorClasses[category.color as keyof typeof colorClasses]} transition-all duration-300 group-hover:scale-110`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skill}
                        className="flex items-center group/skill"
                        style={{ animationDelay: `${(index * 0.2) + (skillIndex * 0.1)}s` }}
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent mr-3 opacity-60 group-hover/skill:opacity-100 transition-opacity" />
                        <span className="text-foreground/80 group-hover/skill:text-foreground transition-colors">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Skill Count Badge */}
                  <div className="mt-6 pt-4 border-t border-border/50">
                    <span className="tech-badge">
                      {category.skills.length} Skills
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional Technologies */}
          <div className="mt-16 text-center animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <h3 className="text-2xl font-semibold mb-6">Technologies & Tools</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Arduino IDE", "PlatformIO", "Fusion 360", "SolidWorks", "KiCad", 
                "Raspberry Pi", "ESP32", "Python", "C++", "Laravel", "Bootstrap",
                "Machine Learning", "PCB Design", "3D Printing", "CNC", "Git"
              ].map((tech, index) => (
                <span 
                  key={tech}
                  className="tech-badge hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all duration-300 cursor-default"
                  style={{ animationDelay: `${0.8 + (index * 0.05)}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;