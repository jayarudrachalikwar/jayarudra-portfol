import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Star, Code2, Server, Cpu, BookOpen, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const Projects = () => {
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

  const featuredProjects = [
    {
      title: 'NSV Finserv Platform',
      subtitle: 'Full-Stack Financial Services Website',
      description:
        'A production-grade financial services platform built for a real startup. Designed and delivered a complete full-stack solution including backend APIs, database design, and a responsive frontend.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'CSS'],
      live: 'https://nsvfinserv.com',
      github: undefined,
      highlights: [
        'Live production website',
        'Startup project with real users',
        '4-member team collaboration',
        'End-to-end full-stack development',
      ],
      icon: Server,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'LMS Compiler Platform',
      subtitle: 'Multi-Language Code Execution System',
      description:
        'A system-level LMS platform with a custom-built compiler and virtual machine. Supports C, C++, Java, and Python using a custom Intermediate Representation for secure code execution and evaluation.',
      technologies: ['Compiler Design', 'Virtual Machine', 'IR', 'Backend'],
      live: undefined,
      github: undefined,
      highlights: [
        'Custom Intermediate Representation (IR)',
        'Secure sandboxed execution',
        'Automated code evaluation',
        'System-level architecture',
      ],
      icon: Cpu,
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  const otherProjects = [
    {
      title: 'Student Buddy',
      description:
        'An educational platform that hosts competitive exam question papers and provides AI-assisted solutions for students. Built to help learners practice and understand problems effectively.',
      technologies: ['Node.js', 'Web Platform', 'AI Assistance'],
      github: 'https://github.com/jayarudrachalikwar',
      icon: BookOpen,
    },
    {
      title: 'ExamScribe',
      description:
'ExamScribe is a social-impact platform that connects students with disabilities who need scribes during examinations with trained volunteers. The volunteers are individuals from rural villages who are taught basic reading and writing skills, enabling mutual benefit — academic support for one group and skill development and opportunity for the other.'
, technologies: ['Web Development'],
      github: 'https://github.com/jayarudrachalikwar',
      icon: FileText,
    },
    {
      title: 'Voice Assistant',
      description:
        'Python-based voice assistant capable of performing tasks and responding to voice commands.',
      technologies: ['Python', 'Speech Recognition'],
      github: 'https://github.com/jayarudrachalikwar/voice-assistant',
      icon: Code2,
    },
    {
      title: 'Bookmarks Manager',
      description:
        'A responsive web interface to manage and organize bookmarks efficiently.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/jayarudrachalikwar/bookmarks',
      icon: Code2,
    },
  ];

  return (
    <section ref={sectionRef} id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            Projects
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Startup products, system-level engineering, and educational platforms
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ 
                duration: 0.6, 
                ease: "easeOut",
                delay: 0.1 + index * 0.15
              }}
              whileHover={{ 
                y: -6,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)"
              }}
            >
              <Card className="premium-card overflow-hidden">
                <div className="grid lg:grid-cols-5">
                  <motion.div
                    className={`lg:col-span-2 p-8 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
                    initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 + index * 0.15 }}
                  >
                    {/* Animated background gradient */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent"
                      animate={{
                        x: ["-100%", "100%"],
                        opacity: [0, 0.3, 0]
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                        delay: index * 2
                      }}
                    />
                    <div className="text-center text-white relative z-10">
                      <project.icon className="w-16 h-16 mx-auto mb-4 opacity-90" />
                      <Badge className="bg-white/20 text-white border-white/30">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="lg:col-span-3 p-6 lg:p-8"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 + index * 0.15 }}
                  >
                    <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                    <p className="text-primary font-medium mb-4">{project.subtitle}</p>

                    <p className="text-muted-foreground mb-6">{project.description}</p>

                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {project.highlights.map((h, i) => (
                        <motion.div 
                          key={i} 
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                          initial={{ opacity: 0, x: -10 }}
                          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                          transition={{ 
                            duration: 0.4, 
                            ease: "easeOut",
                            delay: 0.4 + index * 0.15 + i * 0.05
                          }}
                        >
                          <Code2 className="w-4 h-4 text-primary" />
                          <span>{h}</span>
                        </motion.div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, i) => (
                        <motion.span 
                          key={tech} 
                          className="tech-badge"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ 
                            duration: 0.3, 
                            ease: "easeOut",
                            delay: 0.5 + index * 0.15 + i * 0.05
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

                    {project.live && (
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          onClick={() => window.open(project.live, '_blank', 'noopener,noreferrer')}
                          className="bg-gradient-primary hover:shadow-glow btn-glow relative overflow-hidden group"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Live
                          <motion.div
                            className="absolute inset-0 bg-white/20"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: "100%" }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                          />
                        </Button>
                      </motion.div>
                    )}
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div 
          className="grid md:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
        >
          {otherProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ 
                duration: 0.5, 
                ease: "easeOut",
                delay: 0.8 + index * 0.1
              }}
              whileHover={{ 
                y: -4,
                boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)"
              }}
            >
              <Card className="premium-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <project.icon className="w-5 h-5 text-primary" />
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ 
                          duration: 0.3, 
                          ease: "easeOut",
                          delay: 0.9 + index * 0.1 + i * 0.05
                        }}
                      >
                        <Badge variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      </motion.span>
                    ))}
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => window.open(project.github, '_blank', 'noopener,noreferrer')}
                      className="w-full relative overflow-hidden group hover:border-primary/50 hover:bg-primary/5"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View on GitHub
                      <motion.div
                        className="absolute inset-0 bg-primary/10"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* GitHub CTA */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 1.0 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.open('https://github.com/jayarudrachalikwar', '_blank')}
              className="relative overflow-hidden group hover:border-primary/50 hover:bg-primary/5"
            >
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
              <motion.div
                className="absolute inset-0 bg-primary/10"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;