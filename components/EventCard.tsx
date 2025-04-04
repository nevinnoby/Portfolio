"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, ArrowUpRight, Trophy, Calendar, Users, Zap, Star, MousePointer, Sun, Moon } from 'lucide-react';

// Define theme-specific colors and styles outside the component to avoid re-creation on each render
const theme = {
  dark: {
    bgGradient: "bg-gradient-to-br from-indigo-950 via-purple-900 to-violet-900",
    textPrimary: "text-white",
    textSecondary: "text-purple-200",
    badge: "bg-white/10",
    badgeHover: "group-hover:bg-white/20",
    badgeText: "text-purple-200",
    badgeTextHover: "group-hover:text-white",
    particleColors: [
      'bg-purple-500', 
      'bg-indigo-500', 
      'bg-blue-500', 
      'bg-pink-500',
      'bg-violet-400',
      'bg-cyan-400',
      'bg-fuchsia-400',
      'bg-blue-400'
    ],
    glowEffects: {
      primary: "bg-purple-500",
      secondary: "bg-indigo-500",
      tertiary: "bg-blue-500"
    },
    proTagBg: "bg-violet-600/30",
    proTagBorder: "border-violet-500/20",
    proTagText: "text-violet-300",
    progressBar: "from-purple-500 via-indigo-500 to-violet-500",
    actionBtnBg: "bg-white/10",
    actionBtnHover: "group-hover:from-purple-500 group-hover:to-violet-500",
    borderGlow: "rgba(147, 51, 234, 0.2)",
    cornerGlowPrimary: "rgba(147, 51, 234, 0.5)",
    cornerGlowSecondary: "rgba(79, 70, 229, 0.5)",
    starColor: "text-yellow-400 fill-yellow-400",
    hintBg: "bg-black/80"
  },
  light: {
    bgGradient: "bg-gradient-to-br from-indigo-100 via-purple-50 to-violet-100",
    textPrimary: "text-indigo-950",
    textSecondary: "text-indigo-800",
    badge: "bg-indigo-800/10",
    badgeHover: "group-hover:bg-indigo-900/20",
    badgeText: "text-indigo-800",
    badgeTextHover: "group-hover:text-indigo-900",
    particleColors: [
      'bg-purple-300', 
      'bg-indigo-300', 
      'bg-blue-300', 
      'bg-pink-300',
      'bg-violet-300',
      'bg-cyan-300',
      'bg-fuchsia-300',
      'bg-blue-300'
    ],
    glowEffects: {
      primary: "bg-purple-300",
      secondary: "bg-indigo-300",
      tertiary: "bg-blue-300"
    },
    proTagBg: "bg-violet-400/30",
    proTagBorder: "border-violet-500/20",
    proTagText: "text-violet-700",
    progressBar: "from-purple-400 via-indigo-400 to-violet-400",
    actionBtnBg: "bg-indigo-800/10",
    actionBtnHover: "group-hover:from-purple-400 group-hover:to-violet-400",
    borderGlow: "rgba(147, 51, 234, 0.1)",
    cornerGlowPrimary: "rgba(147, 51, 234, 0.3)",
    cornerGlowSecondary: "rgba(79, 70, 229, 0.3)",
    starColor: "text-amber-500 fill-amber-500",
    hintBg: "bg-white/90"
  }
};

const EventCard = ({ darkMode = true }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const [sparkles, setSparkles] = useState([]);
  const [showClickHint, setShowClickHint] = useState(false);
  
  // For demo particles
  const [particles, setParticles] = useState([]);
  
  // Select the current theme based on darkMode prop
  const currentTheme = darkMode ? theme.dark : theme.light;
  
  // Effect for generating particles - only depends on darkMode
  useEffect(() => {
    // Generate random particles for the background effect
    const generateParticles = () => {
      const themeColors = darkMode ? theme.dark.particleColors : theme.light.particleColors;
      const newParticles = [];
      for (let i = 0; i < 30; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 5 + 2,
          color: themeColors[Math.floor(Math.random() * themeColors.length)]
        });
      }
      setParticles(newParticles);
    };
    
    generateParticles();
  }, [darkMode]); // Only depends on darkMode

  // Separate effect for click hint - doesn't depend on theme
  useEffect(() => {
    // Show click hint after a short delay when component mounts
    const timer = setTimeout(() => {
      setShowClickHint(true);
      // Auto-hide after 5 seconds
      setTimeout(() => {
        setShowClickHint(false);
      }, 5000);
    }, 1500);

    return () => clearTimeout(timer);
  }, []); // Empty dependency array - only run once on mount
  
  // Show click hint again on hover
  useEffect(() => {
    if (isHovered) {
      setShowClickHint(true);
      
      // Generate sparkle effect
      const newSparkles = [];
      for (let i = 0; i < 15; i++) {
        newSparkles.push({
          id: `sparkle-${i}`,
          x: Math.random() * 100,
          y: Math.random() * 100,
          scale: Math.random() * 0.5 + 0.5,
          duration: Math.random() * 1 + 0.8
        });
      }
      setSparkles(newSparkles);
    } else {
      setSparkles([]);
      // Hide click hint after hover ends with a delay
      setTimeout(() => {
        setShowClickHint(false);
      }, 1500);
    }
  }, [isHovered]); // Only depends on isHovered
  
  const navigateToEventPage = () => {
    // Using standard browser navigation instead of Next.js router
    window.location.href = '/Event';
  };

  // Enhanced 3D tilt effect on hover
  const handleMouseMove = (e) => {
    if (!cardRef.current || !isHovered) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const tiltX = (y - centerY) / 15; // Increased sensitivity
    const tiltY = (centerX - x) / 15;
    
    cardRef.current.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.03)`; // Added slight scale
  };
  
  const resetTilt = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
  };

  const [showCatchMe, setShowCatchMe] = useState(true);
  const [catchMePosition, setCatchMePosition] = useState({ x: 50, y: 50 });
  const [isCaught, setIsCaught] = useState(false);
  const [showCatchMeHint, setShowCatchMeHint] = useState(false);

  const handleCatchMeClick = () => {
    setIsCaught(true);
    setTimeout(() => {
      setShowCatchMe(false);
    }, 1000);
  };

  useEffect(() => {
    if (!isCaught) {
      const interval = setInterval(() => {
        setCatchMePosition({
          x: Math.random() * 80 + 10, // Random position within 10%-90% range
          y: Math.random() * 80 + 10,
        });
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [isCaught]);

  return (
    <motion.div
      ref={cardRef}
      className={`relative w-full h-72 cursor-pointer rounded-2xl overflow-hidden shadow-2xl group ${darkMode ? "shadow-black/30" : "shadow-indigo-900/20"}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => {
        setIsHovered(false);
        resetTilt();
      }}
      onMouseMove={handleMouseMove}
      onClick={navigateToEventPage}
      style={{ transition: "transform 0.3s cubic-bezier(0.17, 0.67, 0.83, 0.67)" }}
      aria-label="Click to viewFutureScape 2025 event details"
      role="button"
    >
      {/* Enhanced background gradient */}
      <div className={`absolute inset-0 ${currentTheme.bgGradient} overflow-hidden`}>
        {/* Animated mesh grid with depth */}
        <div className={`absolute inset-0 bg-[radial-gradient(${darkMode ? "rgba(255,255,255,0.2)" : "rgba(79,70,229,0.1)"}1px,transparent_1px)] bg-[size:20px_20px] opacity-40`}></div>
        <div className={`absolute inset-0 bg-[linear-gradient(${darkMode ? "rgba(255,255,255,0.05)" : "rgba(79,70,229,0.05)"}1px,transparent_1px),linear-gradient(to_right,${darkMode ? "rgba(255,255,255,0.05)" : "rgba(79,70,229,0.05)"}1px,transparent_1px)] bg-[size:40px_40px] opacity-30`}></div>
        
        {/* Enhanced glow effects */}
        <div className={`absolute -top-32 -left-32 w-96 h-96 ${currentTheme.glowEffects.primary} rounded-full filter blur-3xl opacity-20 animate-pulse`}></div>
        <div className={`absolute -bottom-32 -right-32 w-96 h-96 ${currentTheme.glowEffects.secondary} rounded-full filter blur-3xl opacity-20 animate-pulse`} style={{animationDelay: "1.5s"}}></div>
        <div className={`absolute top-1/3 right-1/4 w-64 h-64 ${currentTheme.glowEffects.tertiary} rounded-full filter blur-3xl opacity-10 animate-pulse`} style={{animationDelay: "2.2s"}}></div>
        
        {/* Animated particles with enhanced movement */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className={`absolute rounded-full opacity-60 ${particle.color}`}
            initial={{ 
              width: particle.size, 
              height: particle.size,
              x: `${particle.x}%`, 
              y: `${particle.y}%`,
              opacity: 0.4
            }}
            animate={{ 
              x: [`${particle.x}%`, `${particle.x + (Math.random() * 20 - 10)}%`],
              y: [`${particle.y}%`, `${particle.y + (Math.random() * 20 - 10)}%`],
              opacity: [0.4, 0.7, 0.4],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
        
        {/* Sparkle effect on hover */}
        {sparkles.map((sparkle) => (
          <motion.div
            key={sparkle.id}
            className={`absolute w-1 h-1 ${darkMode ? "bg-white" : "bg-indigo-500"} rounded-full`}
            style={{
              left: `${sparkle.x}%`,
              top: `${sparkle.y}%`,
              boxShadow: `0 0 4px 1px ${darkMode ? "rgba(255, 255, 255, 0.7)" : "rgba(79, 70, 229, 0.7)"}`
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, sparkle.scale, 0]
            }}
            transition={{ 
              duration: sparkle.duration,
              repeat: Infinity,
              repeatDelay: Math.random() * 2
            }}
          />
        ))}
        
        {/* Enhanced controller icon with glow effect */}
        <motion.div 
          className={`absolute right-0 bottom-0 ${darkMode ? "text-purple-600/10" : "text-indigo-600/10"}`}
          initial={{ scale: 1 }}
          animate={{ 
            scale: isHovered ? 1.2 : 1, 
            rotate: isHovered ? -5 : 0,
            filter: isHovered ? `drop-shadow(0 0 20px ${darkMode ? "rgba(186, 130, 255, 0.6)" : "rgba(79, 70, 229, 0.6)"})` : "none"
          }}
          transition={{ duration: 0.8 }}
        >
          <Gamepad2 size={220} />
        </motion.div>
      </div>
      
      {/* Content container with improved effects */}
      <div className="relative z-10 h-full flex flex-col justify-between p-6">
        {/* Animated badge effect */}
        <div>
          <motion.div 
            className="flex items-center mb-4"
            animate={{ 
              x: isHovered ? 5 : 0,
              transition: { type: "spring", stiffness: 300 }
            }}
          >
            <motion.div 
              className={`${currentTheme.badge} backdrop-blur-md rounded-full p-2 mr-3 shadow-lg ${currentTheme.badgeHover} transition-all duration-300`}
              whileHover={{ rotate: [0, -5, 5, -5, 0] }}
              transition={{ duration: 0.5 }}
            >
              <Gamepad2 className={`h-5 w-5 ${currentTheme.badgeText} ${currentTheme.badgeTextHover} transition-colors`} />
            </motion.div>
            <span className={`${currentTheme.badgeText} font-medium tracking-wide ${currentTheme.badgeTextHover} transition-colors`}>TECHNICAL EVENT</span>
          </motion.div>
          
          <motion.h3 
            className={`text-3xl font-bold ${currentTheme.textPrimary} mb-3 tracking-tight`}
            animate={{ x: isHovered ? 5 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.span
              animate={{ textShadow: isHovered ? `0 0 8px ${darkMode ? "rgba(255,255,255,0.5)" : "rgba(79,70,229,0.5)"}` : "none" }}
              transition={{ duration: 0.5 }}
            >
              FutureScape 2025   -} Click to View
            </motion.span>
            
          </motion.h3>
          
          {/* Animated badge */}
          <motion.div 
            className="flex items-center mb-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className={`flex ${currentTheme.proTagBg} rounded-full px-3 py-1 backdrop-blur-sm border ${currentTheme.proTagBorder}`}>
              <Zap size={14} className={`${currentTheme.proTagText} mr-1`} />
              <span className={`${darkMode ? "text-violet-200" : "text-violet-700"} text-xs font-medium`}>TECHFEST EVENT</span>
            </div>
          </motion.div>
          
          <motion.p 
            className={`${currentTheme.textSecondary} text-sm mb-4 max-w-xs leading-relaxed`}
            animate={{ 
              opacity: isHovered ? 1 : 0.8,
              y: isHovered ? 0 : 2
            }}
            transition={{ duration: 0.4 }}
          >
FutureScape was a tech event featuring MCQs, blind coding, debugging, and a treasure hunt.Built with Next.js and Supabase, it had real-time leaderboards, admin eliminations, and a ₹5K prize pool, ensuring an exciting competition. 
</motion.p>
        </div>
        
        <div className="flex justify-between items-end">
          <motion.div 
            className="flex space-x-5"
            animate={{ y: isHovered ? -2 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className={`flex items-center ${currentTheme.textSecondary} text-sm font-medium ${currentTheme.badgeTextHover} transition-colors`}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Users size={15} className="mr-1.5" />
              <span>450+</span>
            </motion.div>
            <motion.div 
              className={`flex items-center ${currentTheme.textSecondary} text-sm font-medium ${currentTheme.badgeTextHover} transition-colors`}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Trophy size={15} className="mr-1.5" />
              <span>32 Teams</span>
            </motion.div>
            <motion.div 
              className={`flex items-center ${currentTheme.textSecondary} text-sm font-medium ${currentTheme.badgeTextHover} transition-colors`}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Calendar size={15} className="mr-1.5" />
              <span>March '25</span>
            </motion.div>
          </motion.div>
          
          <motion.div
            animate={{ 
              scale: isHovered ? 1.1 : 1,
              x: isHovered ? 5 : 0,
              y: isHovered ? -2 : 0,
            }}
            whileHover={{
              rotate: [0, -5, 5, -5, 0],
              transition: { duration: 0.5 }
            }}
            transition={{ duration: 0.3 }}
            className={`${currentTheme.actionBtnBg} backdrop-blur-md rounded-full p-2.5 shadow-lg border ${darkMode ? "border-white/10" : "border-indigo-900/10"} group-hover:bg-gradient-to-r ${currentTheme.actionBtnHover} transition-all duration-300`}
            aria-hidden="true"
          >
            <ArrowUpRight className={`h-5 w-5 ${currentTheme.textPrimary}`} />
          </motion.div>
        </div>
        
        {/* Animated star rating */}
        {/* Animated star rating */}
<motion.div 
  className="absolute top-6 right-6 flex flex-col items-center space-y-2"
  animate={{
    y: isHovered ? -2 : 0,
    filter: isHovered ? "drop-shadow(0 0 3px rgba(255, 220, 100, 0.6))" : "none"
  }}
  transition={{ duration: 0.4 }}
>
  <div className="flex items-center space-x-1">
    {[1, 2, 3, 4].map((_, index) => (
      <motion.div
        key={`star-${index}`}
        animate={{ scale: isHovered ? [1, 1.2, 1] : 1 }}
        transition={{ 
          duration: 0.5, 
          delay: index * 0.1,
          repeat: isHovered ? Infinity : 0,
          repeatDelay: 2
        }}
      >
        <Star size={14} className={currentTheme.starColor} />
      </motion.div>
    ))}
    <Star size={14} className={`${currentTheme.starColor.split(" ")[0]}/60 ${currentTheme.starColor.split(" ")[1]}/60`} />
  </div>

  {/* Buy the Project Button */}
  <motion.button
  className={`px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-300
    ${darkMode 
      ? "bg-purple-600 text-white hover:bg-purple-700 shadow-md hover:shadow-lg" 
      : "bg-indigo-500 text-white hover:bg-indigo-600 shadow-md hover:shadow-lg"
    }`}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={() => {
    alert('Redirecting to......');
  }}
>
  Buy
</motion.button>


</motion.div>
        
        {/* Enhanced hover effect bar */}
        <motion.div 
          className={`absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r ${currentTheme.progressBar}`}
          initial={{ width: "0%" }}
          animate={{ width: isHovered ? "100%" : "0%" }}
          transition={{ duration: 0.4 }}
          style={{ boxShadow: `0 0 10px ${currentTheme.borderGlow}` }}
        />
        
        {/* Enhanced glowing border effect on hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            boxShadow: `0 0 2px ${darkMode ? "rgba(255,255,255,0.3)" : "rgba(79,70,229,0.3)"}, inset 0 0 2px ${darkMode ? "rgba(255,255,255,0.2)" : "rgba(79,70,229,0.2)"}, 0 0 20px ${currentTheme.borderGlow}`,
          }}
        />
        
        {/* Pulsing corner accents */}
        <motion.div 
          className="absolute top-0 left-0 w-10 h-10 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? [0.5, 0.2, 0.5] : 0 }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            background: `linear-gradient(135deg, ${currentTheme.cornerGlowPrimary} 0%, transparent 70%)`,
          }}
        />
        
        <motion.div 
          className="absolute bottom-0 right-0 w-10 h-10 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? [0.5, 0.2, 0.5] : 0 }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          style={{
            background: `linear-gradient(-45deg, ${currentTheme.cornerGlowSecondary} 0%, transparent 70%)`,
          }}
        />
        
        {/* Click Anywhere Indicator */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: showClickHint ? 0.9 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className={`${currentTheme.hintBg} backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg`}>
            <div className={`flex items-center ${darkMode ? "text-white" : "text-indigo-900"}`}>
              <MousePointer size={14} className="mr-2" />
              <span className="text-sm font-medium">Click anywhere to view event</span>
            </div>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default EventCard;