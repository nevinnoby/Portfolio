"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Cover = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  
  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const { left, top, width, height } = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - left) / width) - 0.5;
        const y = ((e.clientY - top) / height) - 0.5;
        setMousePosition({ x, y });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const particleVariants = {
    animate: (i) => ({
      x: [0, Math.random() * 40 - 20],
      y: [0, Math.random() * 40 - 20],
      opacity: [0.4, 0.8, 0.4],
      scale: [1, Math.random() * 0.4 + 0.8, 1],
      transition: {
        duration: Math.random() * 5 + 10,
        repeat: Infinity,
        repeatType: "reverse",
        delay: i * 0.2,
      }
    })
  };

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/40 to-rose-900/40 z-0"></div>
      
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 opacity-30 z-0">
        <svg width="100%" height="100%" className="opacity-20">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>
      
      {/* Particle effects */}
      <div className="absolute inset-0 z-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={particleVariants}
            animate="animate"
            className="absolute rounded-full"
            style={{
              width: Math.random() * 8 + 2,
              height: Math.random() * 8 + 2,
              backgroundColor: `hsla(${Math.random() * 60 + 240}, 100%, 70%, 0.4)`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: 'blur(1px)',
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 py-16 flex flex-col min-h-screen">
        <motion.header
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-between items-center mb-12"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            className="text-xl font-bold tracking-tighter"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Portfolio
            </span>
          </motion.div>
          
          <nav>
            <ul className="flex space-x-6">
              {["Home", "Projects", "About", "Contact"].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-white transition-colors relative group"
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>
        </motion.header>

        <div className="flex flex-col md:flex-row items-center justify-between my-auto pt-12 md:pt-0">
          {/* Left side content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full md:w-1/2 mb-16 md:mb-0"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="block">Hi, I'm</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Your Name
              </span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm mb-6">
                <div className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></div>
                <span className="text-sm font-medium">Full Stack Developer</span>
              </div>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="text-lg text-gray-300 mb-8 max-w-lg"
            >
              Creating cutting-edge web experiences with modern technologies. Passionate about clean code, intuitive interfaces, and innovative solutions.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-medium shadow-lg shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300"
              >
                View Projects <HiArrowNarrowRight />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-white/20 hover:border-white/40 rounded-lg font-medium backdrop-blur-sm transition-all duration-300"
              >
                Contact Me
              </motion.button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.3 }}
              className="flex gap-5"
            >
              {[FaGithub, FaLinkedin, FaTwitter, FaEnvelope].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ 
                    y: -5,
                    color: ['#ffffff', '#a78bfa', '#60a5fa', '#ffffff'][index]
                  }}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <Icon size={22} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Right side content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full md:w-1/2 flex justify-center md:justify-end"
          >
            <motion.div 
              style={{ 
                perspective: '1000px',
                transform: `rotateY(${mousePosition.x * 10}deg) rotateX(${-mousePosition.y * 10}deg)`,
              }}
              className="relative"
            >
              {/* Glowing background for the image */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-20 blur-xl"></div>
              
              {/* Profile image with circular framing */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 100, 
                  delay: 0.8,
                  duration: 0.8,
                }}
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden ring-1 ring-white/20 backdrop-blur-sm"
                style={{
                  background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.3), rgba(139, 92, 246, 0.3))',
                }}
              >
                <div className="absolute inset-1 overflow-hidden rounded-full">
                  <Image
                    src="/profile-photo.jpg" // Replace with your profile photo
                    alt="Profile"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>
              
              {/* Floating mini project cards */}
              {['ServeLink', 'Tomato', 'Travel App'].map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
                  className="absolute bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10 shadow-lg"
                  style={{
                    top: `${[20, 70, 40][index]}%`,
                    [index === 0 ? 'left' : 'right']: `-${[20, 10, 30][index]}%`,
                    width: `${[120, 140, 130][index]}px`,
                  }}
                >
                  <div className="w-full h-12 rounded bg-gradient-to-r from-blue-500/20 to-purple-500/20 mb-2"></div>
                  <div className="text-xs font-medium">{project}</div>
                  <div className="text-xs text-gray-400">
                    {index === 0 ? 'MERN Stack' : index === 1 ? 'React' : 'React.js'}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
        
        {/* Stats section at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-auto pt-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { value: '3+', label: 'Years Experience' },
              { value: '10+', label: 'Projects Completed' },
              { value: '5+', label: 'Happy Clients' },
              { value: '3', label: 'Technologies' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="p-4 rounded-xl backdrop-blur-sm border border-white/10 bg-white/5"
              >
                <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Scrolling indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center"
          >
            <span className="text-xs tracking-widest mb-2">SCROLL</span>
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 4V20M8 20L2 14M8 20L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Cover;