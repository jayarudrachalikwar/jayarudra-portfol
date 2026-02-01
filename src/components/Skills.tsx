import { Card, CardContent } from '@/components/ui/card';
import { Code, Globe, Database, Brain, Wrench, Users } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Java', level: 90, desc: 'DSA Focused' },
        { name: 'Python', level: 85 },
        { name: 'C', level: 80 },
        { name: 'C++', level: 75 },
        { name: 'JavaScript', level: 85 },
      ],
    },
    {
      title: 'Web Development',
      icon: Globe,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'React.js', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'Express.js', level: 80 },
        { name: 'HTML/CSS', level: 90 },
      ],
    },
    {
      title: 'Databases',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'PostgreSQL', level: 75 },
      ],
    },
    {
      title: 'Core Competencies',
      icon: Brain,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Data Structures & Algorithms', level: 90 },
        { name: 'Backend API Development', level: 85 },
        { name: 'Database Design', level: 80 },
        { name: 'Problem Solving', level: 90 },
      ],
    },
    {
      title: 'Tools & Technologies',
      icon: Wrench,
      color: 'from-indigo-500 to-violet-500',
      skills: [
        { name: 'Git & GitHub', level: 85 },
        { name: 'VS Code', level: 90 },
        { name: 'REST APIs', level: 85 },
      ],
    },
    {
      title: 'Soft Skills',
      icon: Users,
      color: 'from-teal-500 to-cyan-500',
      skills: [
        { name: 'Team Collaboration', level: 90 },
        { name: 'SEO & Content Writing', level: 75 },
        { name: 'Communication', level: 85 },
      ],
    },
  ];

  return (
    <section ref={sectionRef} id="skills" className="section-padding bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            Skills
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skill set built through projects and real-world experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ 
                duration: 0.6, 
                ease: "easeOut",
                delay: 0.1 + categoryIndex * 0.1
              }}
              whileHover={{ 
                y: -6,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)"
              }}
            >
              <Card className="premium-card">
                <CardContent className="p-6">
                  <motion.div 
                    className="flex items-center gap-3 mb-6"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 + categoryIndex * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.div 
                      className={`p-2.5 rounded-lg bg-gradient-to-br ${category.color}`}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5,
                        boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)"
                      }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <category.icon className="w-5 h-5 text-white" />
                    </motion.div>
                    <h3 className="font-semibold text-lg">{category.title}</h3>
                  </motion.div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div 
                        key={skillIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                        transition={{ 
                          duration: 0.4, 
                          ease: "easeOut",
                          delay: 0.3 + categoryIndex * 0.1 + skillIndex * 0.05
                        }}
                        whileHover={{ x: 4 }}
                      >
                        <div className="flex justify-between items-center mb-1.5">
                          <motion.span 
                            className="text-sm font-medium text-foreground"
                            whileHover={{ color: "hsl(var(--primary))" }}
                            transition={{ duration: 0.2 }}
                          >
                            {skill.name}
                            {skill.desc && (
                              <span className="text-xs text-primary ml-2">({skill.desc})</span>
                            )}
                          </motion.span>
                          <motion.span 
                            className="text-xs text-muted-foreground"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ 
                              duration: 0.3, 
                              delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.1,
                              ease: "easeOut" 
                            }}
                          >
                            {skill.level}%
                          </motion.span>
                        </div>
                        <div className="skill-bar">
                          <motion.div 
                            className="skill-bar-fill"
                            initial={{ width: "0%" }}
                            animate={{ width: isVisible ? `${skill.level}%` : "0%" }}
                            transition={{ 
                              duration: 1.2, 
                              ease: "easeOut",
                              delay: 0.4 + categoryIndex * 0.1 + skillIndex * 0.1
                            }}
                            whileHover={{ 
                              height: "8px",
                              boxShadow: "0 0 10px rgba(109, 40, 217, 0.3)"
                            }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Focus highlight */}
        <motion.div 
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
        >
          <motion.div 
            className="highlight-box text-center max-w-2xl mx-auto"
            initial={{ scale: 0.95 }}
            animate={isVisible ? { scale: 1 } : { scale: 0.95 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.9 }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-bold mb-2">Primary Focus</h3>
            <p className="text-muted-foreground">
              <span className="text-primary font-semibold">Data Structures & Algorithms with Java</span> — 
              Building a strong foundation for technical interviews and efficient problem solving
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
