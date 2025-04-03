"use client";

import { useState, useEffect } from 'react';
import { motion } from "framer-motion";

// Types
interface Service {
  title: string;
  description: string;
  icon: string;
  color: string;
  features: string[];
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

// Data
const services: Service[] = [
  { 
    title: "Web Development", 
    description: "Modern, responsive, and fast websites with attention to performance and user experience.",
    icon: "💻",
    color: "#3B82F6", // blue
    features: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Responsive Design"]
  },
  { 
    title: "Mobile App Development", 
    description: "Cross-platform mobile apps that deliver native-like performance and seamless UX.",
    icon: "📱",
    color: "#10B981", // green
    features: ["React Native", "Flutter", "iOS", "Android", "Mobile-First Design"]
  },
  { 
    title: "UI/UX Design", 
    description: "User-centered designs that combine aesthetics with functionality for optimal engagement.",
    icon: "🎨",
    color: "#8B5CF6", // purple
    features: ["Wireframing", "Prototyping", "User Research", "Visual Design", "User Testing"]
  },
  { 
    title: "IoT Solutions", 
    description: "Smart, connected systems that bring digital intelligence to physical devices and environments.",
    icon: "🔌",
    color: "#F59E0B", // amber
    features: ["Sensor Integration", "Real-time Monitoring", "Automation", "Data Analysis", "Smart Controls"]
  }
];

const testimonials: Testimonial[] = [
  {
    quote: "Working with this developer was a game-changer for our business. The web application not only looks stunning but performs exceptionally well.",
    author: "Sarah Johnson",
    role: "CEO, TechStart",
    avatar: "/api/placeholder/80/80"
  },
  {
    quote: "The attention to detail and technical expertise demonstrated in our IoT project exceeded our expectations. Would definitely work together again!",
    author: "Mark Thompson",
    role: "CTO, SmartSystems",
    avatar: "/api/placeholder/80/80"
  },
  {
    quote: "Our mobile app went from concept to market in record time. The user experience is flawless and our customers love it!",
    author: "Elena Diaz",
    role: "Product Manager, AppWorks",
    avatar: "/api/placeholder/80/80"
  }
];

// Service Card Component
const ServiceCard = ({ service, index }: { service: Service, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative overflow-hidden rounded-2xl shadow-xl group"
    >
      {/* Service Card Header */}
      <div 
        className="p-6 text-white"
        style={{ backgroundColor: service.color }}
      >
        <span className="text-5xl block mb-4">{service.icon}</span>
        <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
        <p className="text-white/90">{service.description}</p>
      </div>
      
      {/* Service Card Features */}
      <motion.div 
        className="bg-white dark:bg-gray-800 p-6"
        initial={{ height: 0 }}
        whileInView={{ height: "auto" }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
      >
        <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Key Features</h4>
        <ul className="space-y-2">
          {service.features.map((feature, i) => (
            <motion.li 
              key={i}
              className="flex items-center text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 + i * 0.1 + 0.5 }}
            >
              <span 
                className="mr-2 text-sm" 
                style={{ color: service.color }}
              >
                ●
              </span>
              {feature}
            </motion.li>
          ))}
        </ul>
        
        <motion.button
          className="mt-6 px-6 py-2 rounded-full text-white font-medium transition-all"
          style={{ backgroundColor: service.color }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More
        </motion.button>
      </motion.div>
      
      {/* Animated corner decoration */}
      <motion.div 
        className="absolute -bottom-10 -right-10 w-24 h-24 rounded-full opacity-20"
        style={{ backgroundColor: service.color }}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
      />
    </motion.div>
  );
};

// Testimonial Carousel Component
const TestimonialCarousel = ({ testimonials, darkMode }: { testimonials: Testimonial[], darkMode: boolean }) => {
  const [current, setCurrent] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);
  
  return (
    <div className="relative py-12">
      {/* Background decoration */}
      <div className="absolute inset-0 flex justify-center items-center">
        <motion.div 
          className="w-64 h-64 rounded-full opacity-10"
          style={{ backgroundColor: "#3B82F6" }}
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
      </div>
      
      {/* Testimonials */}
      <div className="relative max-w-4xl mx-auto px-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className={`absolute top-0 left-0 w-full p-8 ${darkMode ? "bg-gray-800" : "bg-white"} rounded-2xl shadow-xl`}
            initial={{ opacity: 0, x: 100 }}
            animate={{ 
              opacity: current === index ? 1 : 0,
              x: current === index ? 0 : 100,
              scale: current === index ? 1 : 0.8,
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="flex-shrink-0">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author}
                  className="w-20 h-20 rounded-full object-cover shadow-md" 
                />
              </div>
              <div>
                <div className="text-3xl mb-4">"</div>
                <p className="text-lg italic mb-4">{testimonial.quote}</p>
                <div className="mt-4">
                  <h4 className="font-bold text-lg">{testimonial.author}</h4>
                  <p className="text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Indicators */}
      <div className="flex justify-center mt-64 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              current === index ? "bg-blue-500 w-6" : "bg-gray-300 dark:bg-gray-600"
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
};

// Process Step Component
const ProcessStep = ({ number, title, description, delay }: { number: number, title: string, description: string, delay: number }) => {
  return (
    <motion.div
      className="flex flex-col md:flex-row items-start gap-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex-shrink-0">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center font-bold text-white text-xl">
          {number}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
};

const Services = ({ darkMode }: { darkMode: boolean }) => {
  return (
    <div className={`transition-all ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-10 bg-blue-500"
            animate={{ 
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{ duration: 15, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-10 right-20 w-80 h-80 rounded-full opacity-10 bg-purple-500"
            animate={{ 
              x: [0, -40, 0],
              y: [0, -40, 0],
            }}
            transition={{ duration: 18, repeat: Infinity }}
          />
        </div>
        
        {/* Hero Content */}
        <div className="container mx-auto px-6 py-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transforming Ideas into Digital Reality
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Specialized in crafting modern, efficient, and scalable solutions for web, mobile, and IoT projects that drive business growth.
            </motion.p>
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button 
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.button>
              <motion.button 
                className={`px-8 py-3 border-2 font-medium rounded-full ${
                  darkMode ? "border-white text-white" : "border-gray-800 text-gray-800"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Services Section */}
      <section 
        className={`py-20 ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}
      >
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Services & Expertise</h2>
            <p className="text-gray-600 dark:text-gray-300">Offering end-to-end solutions that blend creativity with technical excellence to help businesses thrive in the digital landscape.</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Work Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">My Work Process</h2>
            <p className="text-gray-600 dark:text-gray-300">A structured and collaborative approach to ensure your project is delivered on time and exceeds expectations.</p>
          </motion.div>
          
          {/* Process Steps */}
          <div className="max-w-3xl mx-auto space-y-12">
            <ProcessStep 
              number={1} 
              title="Discovery & Planning" 
              description="We begin with a deep understanding of your goals, target audience, and requirements to create a comprehensive project roadmap."
              delay={0.1}
            />
            <ProcessStep 
              number={2} 
              title="Design & Prototype" 
              description="Creating wireframes and interactive prototypes to visualize the solution before development begins."
              delay={0.2}
            />
            <ProcessStep 
              number={3} 
              title="Development & Testing" 
              description="Building the solution using modern technologies with continuous testing to ensure quality and performance."
              delay={0.3}
            />
            <ProcessStep 
              number={4} 
              title="Deployment & Support" 
              description="Launching your project with careful attention to detail, followed by ongoing support and optimization."
              delay={0.4}
            />
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className={`py-20 ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}>
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-gray-600 dark:text-gray-300">Don't just take my word for it — here's what clients have to say about working with me.</p>
          </motion.div>
          
          <TestimonialCarousel testimonials={testimonials} darkMode={darkMode} />
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            className={`rounded-3xl overflow-hidden ${
              darkMode ? "bg-gray-800" : "bg-gray-100"
            } p-12 md:p-16 relative`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Background decoration */}
            <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 overflow-hidden">
              <motion.div 
                className="absolute -right-20 top-10 w-80 h-80 rounded-full bg-blue-500"
                animate={{ 
                  scale: [1, 1.2, 1],
                  x: [0, 30, 0],
                  y: [0, 30, 0],
                }}
                transition={{ duration: 12, repeat: Infinity }}
              />
              <motion.div 
                className="absolute right-40 bottom-20 w-60 h-60 rounded-full bg-purple-500"
                animate={{ 
                  scale: [1.2, 1, 1.2],
                  x: [0, -20, 0],
                  y: [0, -20, 0],
                }}
                transition={{ duration: 10, repeat: Infinity }}
              />
            </div>
            
            {/* CTA Content */}
            <div className="relative z-10 max-w-2xl">
              <motion.h2 
                className="text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Ready to bring your ideas to life?
              </motion.h2>
              <motion.p 
                className="text-xl mb-8 text-gray-600 dark:text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Let's collaborate on your next project and create something exceptional together.
              </motion.p>
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <motion.button 
                  className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-full shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start a Project
                </motion.button>
                <motion.button 
                  className={`px-8 py-3 font-medium rounded-full ${
                    darkMode 
                      ? "bg-gray-700 text-white hover:bg-gray-600" 
                      : "bg-white text-gray-800 hover:bg-gray-50"
                  } shadow-lg transition-all`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Portfolio
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className={`${darkMode ? "bg-gray-800" : "bg-gray-100"} py-12`}>
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Your Name</h3>
              <p className="text-gray-500 dark:text-gray-400">Web & Mobile Developer</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white hover:bg-blue-600 transition-all">
                <span>🌐</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-white hover:bg-blue-800 transition-all">
                <span>💼</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-pink-600 flex items-center justify-center text-white hover:bg-pink-700 transition-all">
                <span>📸</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center text-white hover:bg-blue-500 transition-all">
                <span>🐦</span>
              </a>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 dark:border-gray-700 pt-8 text-center text-gray-500 dark:text-gray-400">
            <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Services;