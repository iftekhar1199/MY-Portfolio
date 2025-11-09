import { GraduationCap, Zap, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="hero-gradient">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Bridging the digital and physical worlds through innovative engineering solutions
            </p>
          </div>

          {/* Main Bio */}
          <div className="glass-morphism rounded-2xl p-8 mb-12 animate-slide-up">
            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              As an enthusiastic Computer Science graduate with a B.Sc in CSE (2024), I specialize in the intersection 
              of software and hardware engineering. My passion lies in creating tangible solutions that solve real-world 
              problems through robotics, embedded systems, and innovative prototyping.
            </p>
            <p className="text-lg leading-relaxed text-foreground/90">
              I believe in the power of hands-on learning and practical application. Whether it's designing a custom 
              PCB, building autonomous robots, or developing machine learning models, I approach each project with 
              curiosity, precision, and a commitment to excellence.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Education */}
            <div className="tech-card group animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary/10 rounded-lg mr-4 group-hover:bg-primary/20 transition-colors">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <p className="text-muted-foreground mb-2">B.Sc in Computer Science & Engineering</p>
              <p className="text-sm text-muted-foreground">2024 Graduate</p>
            </div>

            {/* Experience */}
            <div className="tech-card group animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center mb-4">
                <div className="p-3 bg-accent/10 rounded-lg mr-4 group-hover:bg-accent/20 transition-colors">
                  <Zap className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Expertise</h3>
              </div>
              <p className="text-muted-foreground mb-2">Robotics & Embedded Systems</p>
              <p className="text-sm text-muted-foreground">3D Design & Prototyping</p>
            </div>

            {/* Activities */}
            <div className="tech-card group animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center mb-4">
                <div className="p-3 bg-destructive/10 rounded-lg mr-4 group-hover:bg-destructive/20 transition-colors">
                  <Award className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="text-xl font-semibold">Activities</h3>
              </div>
              <p className="text-muted-foreground mb-2">Robotics Fest Participant</p>
              <p className="text-sm text-muted-foreground">Workshop Host & Mentor</p>
            </div>
          </div>

          {/* Academic Highlights */}
          <div className="mt-12 glass-morphism rounded-2xl p-8 animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <h3 className="text-2xl font-bold mb-6 text-center">Academic Highlights</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                  <span>Robotics Fest Participation</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                  <span>3D Design Workshop Completion</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                  <span>Arduino Workshop Host</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                  <span>Product Prototype Workshop</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;