import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' },
  ];

  const getIndicatorPosition = () => {
    const activeIndex = navItems.findIndex(item => item.id === activeSection);
    const activeButton = navRefs.current[activeIndex];
    
    if (activeButton) {
      const rect = activeButton.getBoundingClientRect();
      const navRect = activeButton.parentElement?.getBoundingClientRect();
      if (navRect) {
        return rect.left - navRect.left + rect.width / 2;
      }
    }
    return 0;
  };

  const getIndicatorProperties = () => {
    const activeIndex = navItems.findIndex(item => item.id === activeSection);
    const activeButton = navRefs.current[activeIndex];
    
    if (activeButton) {
      const spanElement = activeButton.querySelector('span');
      if (spanElement) {
        // Get actual text width using canvas measurement for accuracy
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.font = '500 14px ui-sans-serif, system-ui, sans-serif';
          const textWidth = ctx.measureText(spanElement.textContent || '').width;
          // Add some padding for better visual appearance
          const indicatorWidth = Math.max(25, Math.min(50, textWidth + 8));
          
          // Calculate center position
          const rect = activeButton.getBoundingClientRect();
          const navRect = activeButton.parentElement?.getBoundingClientRect();
          if (navRect) {
            const centerPosition = rect.left - navRect.left + rect.width / 2;
            return { width: indicatorWidth, left: centerPosition };
          }
        }
      }
    }
    return { width: 30, left: 50 };
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-strong shadow-md backdrop-blur-md' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div 
              className="text-xl font-bold cursor-pointer group"
              onClick={() => scrollToSection('home')}
            >
              <span className="text-gradient group-hover:opacity-80 transition-opacity">
                JR
              </span>
              <span className="text-foreground ml-1 hidden sm:inline">Chalikwar</span>
            </div>
            
            <div className="hidden lg:flex items-center space-x-1 relative">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  ref={(el) => navRefs.current[index] = el}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg
                    ${activeSection === item.id 
                      ? 'text-primary' 
                      : 'text-muted-foreground hover:text-foreground'
                    }`}
                >
                  <span>{item.label}</span>
                  {/* Subtle hover underline for non-active items */}
                  {activeSection !== item.id && (
                    <motion.div
                      className="absolute bottom-1.5 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-primary/40 rounded-full"
                      initial={{ opacity: 0, scaleX: 0.8 }}
                      whileHover={{ opacity: 1, scaleX: 1 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    />
                  )}
                </button>
              ))}
              {/* Centered dot indicator */}
              <motion.div
                className="absolute w-2 h-2 bg-primary rounded-full shadow-[0_0_6px_rgba(109,40,217,0.4)]"
                initial={false}
                animate={{
                  left: getIndicatorProperties().left,
                  bottom: "2px",
                  opacity: 1,
                  scale: 1,
                  x: "-50%"
                }}
                transition={{
                  type: "tween",
                  duration: 0.25,
                  ease: [0.22, 1, 0.36, 1]
                }}
              />
            </div>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(109, 40, 217, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="relative overflow-hidden"
              >
                <Button
                  size="sm"
                  onClick={() => scrollToSection('contact')}
                  className="hidden sm:flex bg-gradient-primary hover:shadow-glow btn-glow text-primary-foreground relative"
                >
                  <span className="relative z-10">Hire Me</span>
                </Button>
                <motion.div
                  className="absolute inset-0 bg-white/10"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </motion.div>

              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
        isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div 
          className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div className={`absolute right-0 top-16 w-64 h-[calc(100vh-4rem)] bg-card border-l border-border p-4 transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-3 text-left rounded-lg transition-all duration-300
                  ${activeSection === item.id 
                    ? 'bg-primary/10 text-primary font-medium' 
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                  }`}
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('contact')}
              className="mt-4 bg-gradient-primary hover:shadow-glow btn-glow text-primary-foreground"
            >
              Hire Me
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
