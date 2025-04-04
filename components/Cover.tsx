"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Link from "next/link";

interface CoverProps {
  darkMode: boolean;
}

// Custom typing animation component
const TypeWriter = ({ text, className, delay = 0, speed = 0.05 }) => {
  const controls = useAnimation();
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      } else {
        setIsComplete(true);
      }
    }, speed * 1000);

    return () => clearTimeout(timeout);
  }, [currentIndex, text, speed]);

  useEffect(() => {
    controls.start({ opacity: 1, y: 0, transition: { delay } });
  }, [controls, delay]);

  return (
    <motion.span 
      initial={{ opacity: 0, y: 20 }} 
      animate={controls}
      className={className}
    >
      {displayText}
      {!isComplete && (
        <span className="inline-block w-1 h-6 ml-1 bg-blue-400 animate-pulse"></span>
      )}
    </motion.span>
  );
};

const Cover = ({ darkMode }: CoverProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const controls = useAnimation();
  
  useEffect(() => {
    setIsLoaded(true);
    controls.start("visible");
    
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
  }, [controls]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    }
  };

  // Create glitch effect for tech pills
  const glitchVariants = {
    idle: { x: 0 },
    glitch: {
      x: [0, -2, 3, -1, 0],
      transition: { duration: 0.3 }
    }
  };

  return (
    <div ref={containerRef} className={`relative min-h-screen overflow-hidden ${darkMode ? "bg-gray-900 text-white" : "bg-gray-950 text-black"}`}>
      {/* Dark gradient overlay */}
      <div
        className={`absolute inset-0 ${
          darkMode
            ? "bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"
            : "bg-gradient-to-br from-blue-900/40 via-purple-900/40 to-rose-900/40"
        } z-0`}
      ></div>
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5 z-0">
        <div className="w-full h-full bg-grid-pattern"></div>
      </div>
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

      {/* Animated glow spots */}
      <div className="absolute inset-0 z-0">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.3 }}
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 5 + 8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 300 + 200,
              height: Math.random() * 300 + 200,
              background: `radial-gradient(circle, rgba(23, 49, 114, 0.3) 0%, transparent 70%)`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: 'blur(70px)',
            }}
          />
        ))}
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
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 container mx-auto px-6 py-16 flex flex-col min-h-screen"
      >
       

        <div className="flex flex-col md:flex-row items-center justify-between my-auto pt-12 md:pt-0">
          {/* Left side content */}
          <div className="w-full md:w-1/2 mb-16 md:mb-0 z-10">
          <motion.h1
  className={`text-5xl md:text-7xl font-bold mb-6 leading-tight ${
    darkMode
      ? "bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
      : "bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
  }`}
  initial="hidden"
  animate="visible"
>
  {/* Animate "Hi, I'm" letter by letter */}
  <motion.span
    className="block"
    variants={{
      visible: { transition: { staggerChildren: 0.1 } },
    }}
  >
    {"Hi, I'm".split("").map((char, index) => (
      <motion.span
        key={index}
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.2 }}
      >
        {char}
      </motion.span>
    ))}
  </motion.span>

  {/* Animate "Nevin M Noby" letter by letter with spaces */}
  <motion.span
    className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 flex"
    variants={{
      visible: { transition: { staggerChildren: 0.1, delayChildren: 1 } }, // Start after 1s
    }}
  >
    {"Nevin M Noby".split("").map((char, index) => (
      <motion.span
        key={index}
        className="mr-1" // Adds spacing between characters
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.4 }}
      >
        {char === " " ? "\u00A0" : char} {/* Handle spaces */}
      </motion.span>
    ))}
  </motion.span>
</motion.h1>

            
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-900/20 border border-blue-700/20 backdrop-blur-sm mb-6">
                <div className="w-2 h-2 rounded-full bg-blue-400 mr-2 animate-pulse"></div>
                <span className="text-sm font-medium text-blue-300">Full Stack Developer</span>
              </div>
            </motion.div>
            
            <motion.p
              variants={itemVariants}
              className={`text-lg ${darkMode ? "text-gray-300" : "text-gray-500"} mb-8 max-w-lg text-center`}
            >
              Creating cutting-edge web experiences with modern technologies. Passionate about clean code, intuitive interfaces, and innovative solutions.
            </motion.p>
            
            {/* Tech pills with glitch effect */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-2 mb-8"
            >
              {["React", "Node.js", "MongoDB", "TypeScript", "Next.js"].map((tech, index) => (
                <motion.span
                  key={index}
                  variants={glitchVariants}
                  initial="idle"
                  whileHover="glitch"
                  className="px-3 py-1 text-sm rounded-md bg-gray-800 text-gray-300 border border-gray-700"
                  style={{ backdropFilter: "blur(4px)" }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mb-12"
            ><Link href="/Showcase" to={''}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-8 py-3 rounded-lg font-medium shadow-lg transition-all duration-300 ${darkMode ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white" : "bg-gradient-to-r from-blue-600 to-purple-700 text-white"}`}
              >
                
                     
                        View All Projects
                     
                  
                
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.0 }}
                >
                  <HiArrowNarrowRight />
                </motion.span>
              </motion.button>
              
              </Link>
            </motion.div>
            
           
          </div>
          
          {/* Right side content */}
          <motion.div
            variants={itemVariants}
            className="w-full md:w-1/2 flex justify-center md:justify-end relative"
          >
            {/* Code blocks in background */}
            <div className="absolute inset-0 opacity-10">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.6 }}
                  transition={{ delay: 2 + i * 0.5, duration: 1 }}
                  className="absolute text-xs text-blue-300 font-mono"
                  style={{
                    top: `${20 + i * 30}%`,
                    left: `${i * 20}%`,
                  }}
                >
                  <motion.pre
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
                  >
                    {`const ${['Component', 'App', 'Router'][i]} = () => {\n  const [state, setState] = useState({});\n  return (\n    <div className="container">\nHello Welcome to my Portfolio\n I'm Nevin M Noby\n Scroll Down.....   </div>\n  );\n};`}
                  </motion.pre>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              style={{ 
                perspective: '1000px',
                transform: `rotateY(${mousePosition.x * 10}deg) rotateX(${-mousePosition.y * 10}deg)`,
              }}
              className="relative z-10"
            >
              {/* Glowing background for the image */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -inset-4 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-full blur-xl"
              ></motion.div>
              
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
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden ring-1 ring-blue-500/20 backdrop-blur-sm"
                style={{
                  background: 'linear-gradient(45deg, rgba(30, 64, 175, 0.2), rgba(109, 40, 217, 0.2))',
                }}
              >
                <div className="absolute inset-1 overflow-hidden rounded-full">
                  <Image
                    src="/media/pro1.jpg" // Replace with your profile photo
                    alt="Profile"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                
                {/* Animated border effect */}
                <motion.div
                  animate={{ 
                    rotate: 360,
                  }}
                  transition={{ 
                    duration: 20, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                  className="absolute -inset-1 rounded-full border border-blue-500/30 border-dashed"
                ></motion.div>
              </motion.div>
              
              {/* Floating project cards with reveal animation */}
              {['ServeLink', 'Perimeter', 'Travel App', 'FutureScape'].map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.5 + index * 0.3 }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)"
                  }}
                  className="absolute bg-gray-900/80 backdrop-blur-md rounded-xl p-3 border border-gray-800 shadow-lg overflow-hidden"
                  style={{
                    top: `${[20, 70, 40][index]}%`,
                    [index === 0 ? 'left' : 'right']: `-${[20, 10, 30][index]}%`,
                    width: `${[120, 140, 130][index]}px`,
                  }}
                >
                  <motion.div 
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 2 + index * 0.2, duration: 1 }}
                    className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mb-2"
                  ></motion.div>
                  <div className="w-full h-12 rounded bg-gradient-to-r from-gray-800 to-gray-700 mb-2"></div>
                  <div className="text-xs font-medium text-white">{project}</div>
                  <div className="text-xs text-blue-400">
                    {index === 0 ? 'MERN Stack' : index === 1 ? 'React Native' : index === 2 ? 'React.js': 'Next.js'}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
        
        {/* Stats section at bottom */}
        <motion.div
          variants={itemVariants}
          className="mt-auto pt-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { value: '30+', label: 'Repositories' },
              { value: '5+', label: 'Projects Completed' },
             
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 + index * 0.1, duration: 0.6 }}
                whileHover={{ 
                  y: -5,
                  backgroundColor: "rgba(30, 41, 59, 0.5)"
                }}
                className="p-4 rounded-xl backdrop-blur-sm border border-gray-800 bg-gray-900/30 transition-all duration-300"
              >
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.2 + index * 0.1, duration: 0.5 }}
                  className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Scrolling indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 3, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center"
          >
            <span className="text-xs tracking-widest mb-2 text-gray-400">SCROLL</span>
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 4V20M8 20L2 14M8 20L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Add this CSS to your global CSS file */}
      <style jsx global>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(30, 64, 175, 0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(30, 64, 175, 0.1) 1px, transparent 1px);
          background-size: 30px 30px;
        }
      `}</style>
    </div>
  );
};

export default Cover;