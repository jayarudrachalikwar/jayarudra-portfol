import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Jaya_Rudra_Chalikwar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-mesh"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]" />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center px-4 pt-20">
        {/* Status badge with subtle glow */}
        <motion.div 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 border border-success/20 text-success mb-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileHover={{ boxShadow: "0 0 20px rgba(72, 187, 120, 0.3)" }}
        >
          <motion.span 
            className="w-2 h-2 rounded-full bg-success"
            animate={{ 
              boxShadow: [
                "0 0 0px rgba(72, 187, 120, 0.5)",
                "0 0 10px rgba(72, 187, 120, 0.8)",
                "0 0 0px rgba(72, 187, 120, 0.5)"
              ]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <span className="text-sm font-medium">Open to Internship Opportunities</span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration: 0.6, 
            ease: "easeOut",
            staggerChildren: 0.15
          }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <motion.span 
              className="text-foreground block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              Hi, I'm
            </motion.span>
            <motion.span 
              className="text-gradient-animated block relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Jaya Rudra
              <motion.span 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 0.5
                }}
              />
            </motion.span>
            <motion.span 
              className="text-foreground block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              Chalikwar
            </motion.span>
          </h1>
          
          <motion.div 
            className="flex flex-wrap justify-center items-center gap-2 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          >
            <span className="text-xl md:text-2xl text-muted-foreground">Full-Stack Developer</span>
            <span className="text-muted-foreground/50">•</span>
            <span className="text-xl md:text-2xl text-muted-foreground">AI/ML Student</span>
          </motion.div>

          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-4 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
          >
            B.Tech in AI & ML with <span className="text-primary font-semibold">9.12 GPA</span> | 
            Building production-grade applications at startups
          </motion.p>

          <motion.div 
            className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span>Currently interning as a Full-Stack Developer at NSV Finserv</span>
          </motion.div>
        </motion.div>

        {/* CTA Buttons with hover effects */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
        >
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow btn-glow text-primary-foreground font-semibold px-8"
              onClick={() => scrollToSection('projects')}
            >
              View Projects
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-primary/50 hover:border-primary hover:bg-primary/10 font-semibold px-8"
            >
              <Mail className="w-4 h-4 mr-2" />
              Hire Me
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Button 
              size="lg" 
              variant="secondary"
              onClick={handleResumeDownload}
              className="font-semibold px-8"
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </motion.div>
        </motion.div>

        {/* Social Links with hover effects */}
        <motion.div 
          className="flex justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 }}
        >
          <motion.div
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <Button
              size="icon"
              variant="ghost"
              onClick={() => window.open('https://github.com/jayarudrachalikwar', '_blank')}
              className="w-12 h-12 rounded-full hover:bg-primary/10 hover:text-primary hover-lift"
            >
              <Github className="w-5 h-5" />
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <Button
              size="icon"
              variant="ghost"
              onClick={() => window.open('https://www.linkedin.com/in/chalikwar-jayarudra-1b1b9b378/', '_blank')}
              className="w-12 h-12 rounded-full hover:bg-primary/10 hover:text-primary hover-lift"
            >
              <Linkedin className="w-5 h-5" />
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <Button
              size="icon"
              variant="ghost"
              onClick={() => window.open('mailto:jayarudrachalikwar@gmail.com')}
              className="w-12 h-12 rounded-full hover:bg-primary/10 hover:text-primary hover-lift"
            >
              <Mail className="w-5 h-5" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats with hover effects */}
        <motion.div 
          className="grid grid-cols-3 gap-6 max-w-lg mx-auto mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
        >
          <motion.div 
            className="text-center"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="text-3xl md:text-4xl font-bold text-gradient">9.12</div>
            <div className="text-sm text-muted-foreground">GPA</div>
          </motion.div>
          <motion.div 
            className="text-center"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="text-3xl md:text-4xl font-bold text-gradient">5+</div>
            <div className="text-sm text-muted-foreground">Projects</div>
          </motion.div>
          <motion.div 
            className="text-center"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="text-3xl md:text-4xl font-bold text-gradient">1</div>
            <div className="text-sm text-muted-foreground">Startup</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;