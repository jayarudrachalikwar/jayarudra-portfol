import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  ExternalLink,
  Calendar,
  MapPin,
  Users,
  IndianRupee,
  CheckCircle2
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const Experience = () => {
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

  const responsibilities = [
    "Designed and developed the company’s official website from scratch",
    "Built backend APIs using Node.js and Express.js",
    "Managed MySQL database operations and schema design",
    "Created a responsive and dynamic frontend using React.js",
    "Collaborated in a 4-member development team",
    "Improved UI/UX, performance, and business functionality",
    "Successfully completed and deployed the production website"
  ];

  const techStack = [
    "React.js",
    "Node.js",
    "Express.js",
    "MySQL",
    "JavaScript",
    "HTML",
    "CSS"
  ];

  return (
    <section ref={sectionRef} id="experience" className="section-padding">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            Work Experience
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Real <span className="text-gradient">Startup Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ongoing internship with completed production delivery
          </p>
        </motion.div>

        {/* Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          <Card className="premium-card overflow-hidden relative">
            {/* Header */}
            <motion.div 
              className="bg-gradient-primary p-6 md:p-8 relative z-10"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                >
                  <Badge className="bg-white/20 text-white border-white/30 mb-3">
                    Internship Ongoing
                  </Badge>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    Web Developer Intern
                  </h3>
                  <p className="text-white/90 text-lg">
                    NSV Finserv (Startup)
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
                >
                  <Button
                    onClick={() =>
                      window.open(
                        'https://nsvfinserv.com',
                        '_blank',
                        'noopener,noreferrer'
                      )
                    }
                    className="bg-white text-primary hover:bg-white/90 font-semibold pointer-events-auto relative z-20 overflow-hidden group"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live Website
                    <motion.div
                      className="absolute inset-0 bg-primary/10"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              className="p-6 md:p-8 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            >
              <CardContent className="p-0">
                {/* Meta Info */}
                <motion.div 
                  className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
                  initial={{ opacity: 0 }}
                  animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
                >
                  {[
                    { icon: Calendar, text: "Sept 2025 – Present" },
                    { icon: MapPin, text: "Remote" },
                    { icon: Users, text: "4-Member Team" },
                    { icon: IndianRupee, text: "₹6,000 / month (Paid Phase)" }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center gap-2 text-muted-foreground"
                      initial={{ opacity: 0, y: 10 }}
                      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ duration: 0.4, ease: "easeOut", delay: 0.7 + index * 0.1 }}
                    >
                      <item.icon className="w-4 h-4 text-primary" />
                      <span className="text-sm">{item.text}</span>
                    </motion.div>
                  ))}
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Overview */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
                  >
                    <h4 className="font-semibold text-lg mb-4">
                      Internship Overview
                    </h4>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      I am currently working as a Full-Stack Web Developer Intern at
                      NSV Finserv. The internship began with a 3-month unpaid
                      training period, followed by a paid phase of ₹6,000 per month.
                      During this internship, I successfully completed and deployed
                      the company’s official website, which earned a ₹26,000 team
                      stipend for project completion. The internship is continuing
                      beyond the website delivery.
                    </p>

                    <motion.div 
                      className="highlight-box !p-4"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.5, ease: "easeOut", delay: 1.0 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <h5 className="font-semibold text-sm mb-2">
                        Internship Structure
                      </h5>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• 3-month unpaid training period</li>
                        <li>• 6-month paid internship (₹6,000/month)</li>
                        <li>
                          • ₹26,000 team stipend awarded for successful website
                          completion
                        </li>
                      </ul>
                    </motion.div>
                  </motion.div>

                  {/* Contributions */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.9 }}
                  >
                    <h4 className="font-semibold text-lg mb-4">
                      Key Contributions
                    </h4>
                    <ul className="space-y-3">
                      {responsibilities.map((item, index) => (
                        <motion.li 
                          key={index} 
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -10 }}
                          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                          transition={{ duration: 0.4, ease: "easeOut", delay: 1.1 + index * 0.05 }}
                        >
                          <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Tech Stack */}
                <motion.div 
                  className="mt-8 pt-8 border-t border-border"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 1.2 }}
                >
                  <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-4">
                    Technologies Used
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
                          ease: "easeOut",
                          delay: 1.3 + index * 0.05
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
              </CardContent>
            </motion.div>
          </Card>
        </motion.div>

        {/* Status Indicator */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 1.4 }}
        >
          <div className="inline-flex items-center gap-2 text-muted-foreground">
            <motion.div 
              className="w-3 h-3 rounded-full bg-success"
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
            <span className="text-sm font-medium">
              Internship Ongoing
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
