import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Github, Linkedin, Send, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "iftekharhossain.puc@gmail.com",
      href: "mailto:iftekharhossain.puc@gmail.com",
      color: "primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "01630640778",
      href: "tel:01630640778",
      color: "accent"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "iftekhar-hossain-477447204",
      href: "https://linkedin.com/in/iftekhar-hossain-477447204",
      color: "destructive"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "iftekhar1199",
      href: "https://github.com/iftekhar1199",
      color: "secondary"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Let's <span className="hero-gradient">Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to collaborate on your next innovative project? Let's discuss how we can bring your ideas to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-up">
              <div className="glass-morphism rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-background/50 border-border/50 focus:border-primary/50"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-background/50 border-border/50 focus:border-primary/50"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project or how I can help..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="bg-background/50 border-border/50 focus:border-primary/50 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    I'm always excited to discuss new opportunities, collaborate on innovative projects, 
                    or simply chat about technology and engineering. Feel free to reach out through any 
                    of the channels below.
                  </p>
                </div>

                {/* Contact Methods */}
                <div className="space-y-4">
                  {contactInfo.map((contact, index) => {
                    const IconComponent = contact.icon;
                    const colorClasses = {
                      primary: "bg-primary/10 text-primary border-primary/20",
                      accent: "bg-accent/10 text-accent border-accent/20", 
                      destructive: "bg-destructive/10 text-destructive border-destructive/20",
                      secondary: "bg-secondary/10 text-secondary-foreground border-secondary/20"
                    };

                    return (
                      <a
                        key={contact.label}
                        href={contact.href}
                        target={contact.href.startsWith('http') ? '_blank' : undefined}
                        rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center p-4 tech-card group hover:scale-105 transition-all duration-300"
                        style={{ animationDelay: `${0.2 + (index * 0.1)}s` }}
                      >
                        <div className={`p-3 rounded-lg mr-4 ${colorClasses[contact.color as keyof typeof colorClasses]} transition-all duration-300 group-hover:scale-110`}>
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                            {contact.label}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {contact.value}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </div>

                {/* Location */}
                <div className="tech-card p-6 animate-slide-up" style={{ animationDelay: '0.8s' }}>
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-muted/50 rounded-lg mr-4">
                      <MapPin className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-sm text-muted-foreground">Bangladesh</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Available for remote collaboration and on-site projects within the region.
                  </p>
                </div>

                {/* Availability Status */}
                <div className="glass-morphism rounded-xl p-6 animate-slide-up" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 bg-accent rounded-full mr-3 animate-pulse" />
                    <span className="font-medium text-accent">Available for Projects</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Currently accepting new projects and collaborations. 
                    Response time: Usually within 24 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;