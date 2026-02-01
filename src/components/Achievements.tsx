import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, BookOpen, Users, Trophy, GraduationCap, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const Achievements = () => {
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

  const certifications = [
    {
      title: 'Hashgraph Developer Course',
      issuer: 'The Hashgraph Association',
      icon: '🔗',
    },
    {
      title: 'GenAI for Professionals: 10x Your Productivity',
      issuer: 'Udemy',
      icon: '🤖',
    },
    {
      title: 'Introduction to Python',
      issuer: 'Infosys Springboard',
      icon: '🐍',
    },
    {
      title: 'C Programming Training',
      issuer: 'IIT Bombay (EduPyramids)',
      icon: '💻',
    },
  ];

  const hackathons = [
    {
      title: 'HackWithHyderabad Hackathon',
      venue: 'Microsoft Office, Hyderabad',
      type: 'Hackathon',
    },
    {
      title: 'Technovanza 5.0',
      venue: 'Smart India Hackathon 2025 - Internal Round',
      type: 'Hackathon',
    },
  ];

  const workshops = [
    {
      title: 'Code to Cloud: AI Edition',
      organizer: 'Codeoholics Community',
    },
    {
      title: 'Bridging AIML with Power BI',
      organizer: 'CMR Technical Campus',
    },
  ];

  return (
    <section ref={sectionRef} id="achievements" className="section-padding bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            Achievements
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Certifications & <span className="text-gradient">Activities</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and active participation in the tech community
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Certifications */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <motion.div 
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            >
              <div className="p-2.5 rounded-lg bg-primary/10">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Certifications</h3>
            </motion.div>
            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 + index * 0.1 }}
                  whileHover={{ 
                    y: -4,
                    boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)"
                  }}
                >
                  <Card className="premium-card">
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        <motion.span 
                          className="text-2xl"
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                        >
                          {cert.icon}
                        </motion.span>
                        <div>
                          <h4 className="font-semibold text-sm mb-1">{cert.title}</h4>
                          <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Leadership */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <motion.div 
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            >
              <div className="p-2.5 rounded-lg bg-primary/10">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Leadership</h3>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)"
              }}
            >
              <Card className="premium-card h-auto">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <motion.div 
                      className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <Users className="w-7 h-7 text-white" />
                    </motion.div>
                    <div>
                      <h4 className="font-semibold mb-1">Campus Ambassador</h4>
                      <p className="text-sm text-muted-foreground">Kitech</p>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut", delay: 0.6 }}
                      >
                        <Badge variant="secondary" className="mt-2 text-xs">Active</Badge>
                      </motion.div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        {/* Hackathons & Workshops */}
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {/* Hackathons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
          >
            <motion.div 
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
            >
              <div className="p-2.5 rounded-lg bg-primary/10">
                <Trophy className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Hackathons</h3>
            </motion.div>
            <div className="space-y-4">
              {hackathons.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 + index * 0.1 }}
                  whileHover={{ 
                    x: 4,
                    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)"
                  }}
                >
                  <Card className="premium-card">
                    <CardContent className="p-5">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h4 className="font-semibold mb-1">{event.title}</h4>
                          <p className="text-sm text-muted-foreground">{event.venue}</p>
                        </div>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                        >
                          <Badge variant="outline" className="flex-shrink-0 text-xs border-primary/30 text-primary">
                            {event.type}
                          </Badge>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Workshops */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
          >
            <motion.div 
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 }}
            >
              <div className="p-2.5 rounded-lg bg-primary/10">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Workshops</h3>
            </motion.div>
            <div className="space-y-4">
              {workshops.map((workshop, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 + index * 0.1 }}
                  whileHover={{ 
                    x: 4,
                    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)"
                  }}
                >
                  <Card className="premium-card">
                    <CardContent className="p-5">
                      <h4 className="font-semibold mb-1">{workshop.title}</h4>
                      <p className="text-sm text-muted-foreground">{workshop.organizer}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Education highlight */}
        <motion.div 
          className="mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.9 }}
        >
          <motion.div 
            className="highlight-box"
            initial={{ scale: 0.95 }}
            animate={isVisible ? { scale: 1 } : { scale: 0.95 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 1.0 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <GraduationCap className="w-8 h-8 text-primary" />
              </motion.div>
              <div className="text-center sm:text-left">
                <h3 className="text-xl font-bold">B.Tech in AI & Machine Learning</h3>
                <p className="text-muted-foreground">
                  CMR Technical Campus | 2024-2028 | <span className="text-primary font-semibold">GPA: 9.12</span>
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
