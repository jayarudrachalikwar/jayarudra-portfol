import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/jayarudrachalikwar', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/chalikwar-jayarudra-1b1b9b378/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:jayarudrachalikwar@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-gradient">JR</span> Chalikwar
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Full-Stack Developer & AI/ML Student building production-grade applications 
              and seeking exciting opportunities.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  onClick={() => window.open(social.href, '_blank')}
                  className="w-10 h-10 rounded-full hover:bg-primary/10 hover:text-primary"
                >
                  <social.icon className="w-4 h-4" />
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="mailto:jayarudrachalikwar@gmail.com" className="hover:text-primary transition-colors">
                  jayarudrachalikwar@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+919390533738" className="hover:text-primary transition-colors">
                  +91 9390533738
                </a>
              </li>
              <li>Hyderabad, India</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {currentYear} Jaya Rudra Chalikwar. Built with 
            <Heart className="w-4 h-4 text-destructive inline mx-1" />
            and React
          </p>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="hover:bg-primary/10 hover:text-primary"
          >
            <ArrowUp className="w-4 h-4 mr-2" />
            Back to top
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
