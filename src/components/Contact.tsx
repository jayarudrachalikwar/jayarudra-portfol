import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Github, Linkedin, Send, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const Contact = () => {
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

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Portfolio Contact');
    const body = encodeURIComponent(
      `Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}`
    );
    const mailtoLink = `mailto:jayarudrachalikwar@gmail.com?subject=${subject}&body=${body}`;
    
    window.open(mailtoLink);
    
    toast.success('Message sent! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'jayarudrachalikwar@gmail.com',
      href: 'mailto:jayarudrachalikwar@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9390533738',
      href: 'tel:+919390533738'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Hyderabad, India',
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/jayarudrachalikwar',
      username: '@jayarudrachalikwar'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/chalikwar-jayarudra-1b1b9b378/',
      username: 'Jaya Rudra Chalikwar'
    }
  ];

  return (
    <section ref={sectionRef} id="contact" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Open to internships, collaborations, and exciting opportunities
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left side - Contact info */}
          <motion.div 
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <p className="text-muted-foreground mb-6">
                I'm actively seeking internship opportunities and would love to hear about 
                any openings or projects you have in mind.
              </p>
            </motion.div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 + index * 0.1 }}
                  whileHover={{ 
                    y: -4,
                    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)"
                  }}
                >
                  <Card className="premium-card">
                    <CardContent className="p-4">
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="flex items-center gap-4 group"
                        >
                          <motion.div 
                            className="p-2.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors"
                            whileHover={{ scale: 1.1 }}
                          >
                            <info.icon className="w-5 h-5 text-primary" />
                          </motion.div>
                          <div>
                            <p className="text-sm text-muted-foreground">{info.label}</p>
                            <p className="font-medium group-hover:text-primary transition-colors">{info.value}</p>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-center gap-4">
                          <motion.div 
                            className="p-2.5 rounded-lg bg-primary/10"
                            whileHover={{ scale: 1.1 }}
                          >
                            <info.icon className="w-5 h-5 text-primary" />
                          </motion.div>
                          <div>
                            <p className="text-sm text-muted-foreground">{info.label}</p>
                            <p className="font-medium">{info.value}</p>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Social links */}
            <motion.div 
              className="pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 }}
            >
              <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                Social Profiles
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, ease: "easeOut", delay: 0.8 + index * 0.1 }}
                  >
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => window.open(social.href, '_blank')}
                      className="w-12 h-12 rounded-full hover:bg-primary/10 hover:text-primary hover:border-primary/50 relative overflow-hidden group"
                    >
                      <social.icon className="w-5 h-5" />
                      <motion.div
                        className="absolute inset-0 bg-primary/10"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />
                    </Button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Contact form */}
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <Card className="premium-card">
              <CardContent className="p-6 lg:p-8">
                <motion.h3 
                  className="text-xl font-bold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                >
                  Send a Message
                </motion.h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <motion.div 
                    className="grid sm:grid-cols-2 gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
                  >
                    <div>
                      <label className="text-sm font-medium mb-2 block">Name</label>
                      <Input
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="bg-background/50"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email</label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="bg-background/50"
                      />
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
                  >
                    <label className="text-sm font-medium mb-2 block">Subject</label>
                    <Input
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      className="bg-background/50"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
                  >
                    <label className="text-sm font-medium mb-2 block">Message</label>
                    <Textarea
                      placeholder="Tell me about the opportunity..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="bg-background/50 resize-none"
                    />
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 }}
                  >
                    <Button 
                      type="submit" 
                      size="lg"
                      className="w-full bg-gradient-primary hover:shadow-glow btn-glow text-primary-foreground font-semibold relative overflow-hidden group"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                      <motion.div
                        className="absolute inset-0 bg-white/20"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                      />
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Quick hire CTA */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.9 }}
        >
          <motion.div 
            className="highlight-box text-center"
            initial={{ scale: 0.95 }}
            animate={isVisible ? { scale: 1 } : { scale: 0.95 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 1.0 }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-bold mb-3">Ready to Work Together?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm actively looking for internship opportunities in full-stack development, 
              backend engineering, or any role where I can contribute and grow.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg"
                  onClick={() => window.open('mailto:jayarudrachalikwar@gmail.com?subject=Internship Opportunity')}
                  className="bg-gradient-primary hover:shadow-glow btn-glow text-primary-foreground font-semibold relative overflow-hidden group"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email Me Directly
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => window.open('https://www.linkedin.com/in/chalikwar-jayarudra-1b1b9b378/', '_blank')}
                  className="border-primary/50 hover:border-primary hover:bg-primary/10 relative overflow-hidden group"
                >
                  Connect on LinkedIn
                  <ArrowRight className="w-4 h-4 ml-2" />
                  <motion.div
                    className="absolute inset-0 bg-primary/10"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
