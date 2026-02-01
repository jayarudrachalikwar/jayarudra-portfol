import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, MapPin, Code2, Target, Award, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    { icon: GraduationCap, label: 'Education', value: 'B.Tech AI/ML', desc: 'CMR Technical Campus' },
    { icon: Award, label: 'GPA', value: '9.12', desc: '2024-2028 Batch' },
    { icon: Rocket, label: 'Experience', value: 'Startup', desc: 'Full-Stack Developer' },
    { icon: Target, label: 'Focus', value: 'Backend & DSA', desc: 'Java Focused' },
  ];

  const techStack = [
    'Java', 'Python', 'C/C++', 'React.js', 'Node.js', 'Express.js', 
    'MySQL', 'PostgreSQL', 'DSA', 'Git'
  ];

  return (
    <section ref={sectionRef} id="about" className="section-padding bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Passionate about <span className="text-gradient">Building Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A driven developer with real startup experience and strong foundations
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Main content */}
          <motion.div 
            className="lg:col-span-3 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <div className="prose prose-lg max-w-none space-y-4">
              <motion.p 
                className="text-lg text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              >
                I'm <strong className="text-foreground">Jaya Rudra Chalikwar</strong>, a B.Tech student 
                specializing in Artificial Intelligence and Machine Learning at CMR Technical Campus. 
                With a <span className="text-primary font-semibold">GPA of 9.12</span>, I combine academic 
                excellence with hands-on development experience.
              </motion.p>
              
              <motion.p 
                className="text-lg text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
              >
                My journey in tech isn't just theoretical — I've worked as a <strong className="text-foreground">Full-Stack Developer 
                at NSV Finserv</strong>, a financial services startup, where I built and deployed their 
                production website. This experience taught me the realities of building software that 
                serves real users and businesses.
              </motion.p>

              <motion.p 
                className="text-lg text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
              >
                I specialize in <strong className="text-foreground">Data Structures & Algorithms using Java</strong>, 
                backend development with Node.js and Express, and building responsive frontends with React. 
                I'm also deeply interested in compiler design and have built a multi-language LMS compiler platform.
              </motion.p>
            </div>

            {/* Tech stack badges */}
            <motion.div 
              className="pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
            >
              <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                Technologies I Work With
              </h4>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <motion.span 
                    key={tech} 
                    className="tech-badge"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: 0.6 + index * 0.05,
                      ease: "easeOut" 
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 0 15px rgba(109, 40, 217, 0.3)"
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Stats cards */}
          <motion.div 
            className="lg:col-span-2 grid grid-cols-2 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 + index * 0.1 }}
                whileHover={{ 
                  y: -6,
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)"
                }}
              >
                <Card className="premium-card p-5 hover-lift">
                  <CardContent className="p-0">
                    <item.icon className="w-8 h-8 text-primary mb-3" />
                    <div className="text-2xl font-bold text-gradient mb-1">
                      {item.value}
                    </div>
                    <div className="text-sm font-medium text-foreground mb-0.5">
                      {item.label}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {item.desc}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Goal statement */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
        >
          <div className="highlight-box text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.8,
                ease: "easeOut" 
              }}
              whileHover={{ scale: 1.05 }}
            >
              <Code2 className="w-10 h-10 text-primary mx-auto mb-4" />
            </motion.div>
            <motion.h3 
              className="text-xl font-bold mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.9, ease: "easeOut" }}
            >
              Currently Seeking
            </motion.h3>
            <motion.p 
              className="text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 1.0, ease: "easeOut" }}
            >
              Actively looking for <span className="text-primary font-semibold">internship opportunities</span> and 
              real-world software development roles where I can contribute to meaningful projects 
              and continue growing as a developer.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;