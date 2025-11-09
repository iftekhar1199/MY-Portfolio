import { Github, Linkedin, Mail, Heart, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/iftekhar1199",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/iftekhar-hossain-477447204",
      label: "LinkedIn"
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/rtainnovations",
      label: "Facebook"
    },
    {
      icon: Youtube,
      href: "https://www.youtube.com/@rtainnovations",
      label: "YouTube"
    },
    {
      icon: Mail,
      href: "mailto:iftekharhossain.puc@gmail.com",
      label: "Email"
    }
  ];

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card/50 border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-2xl font-bold">
                <span className="text-foreground">Iftekhar</span>
                <span className="hero-gradient">.</span>
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Computer Science graduate specializing in robotics, embedded systems, and 3D prototyping. 
              Building innovative solutions that bridge software and hardware.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get in Touch</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>
                <strong>Email:</strong> iftekharhossain.puc@gmail.com
              </p>
              <p>
                <strong>Phone:</strong> 01630640778
              </p>
              <p>
                <strong>Location:</strong> Bangladesh
              </p>
            </div>
            <div className="tech-badge inline-flex items-center">
              <div className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse" />
              Available for Projects
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Iftekhar Hossain. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center">
            Made with <Heart className="h-4 w-4 mx-1 text-destructive" fill="currentColor" /> and cutting-edge tech
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;