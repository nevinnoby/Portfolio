"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { FaMapMarkerAlt, FaChevronDown } from "react-icons/fa";

// Add this outside the `CoverPage` component
const textContainerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, // Delay between each letter
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const CoverPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const [isAnimating, setIsAnimating] = useState(true);
  const [displayedText, setDisplayedText] = useState(""); // State to hold the progressively displayed text
  const fullText = "I am Nevin M Noby"; // Replace "John Doe" with your `displayedName`

  useEffect(() => {
    // Stop the animation after 5 seconds
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 5000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex)); // Slice the text up to the current index
        currentIndex++;
      } else {
        clearInterval(interval); // Stop the interval when the full text is displayed
      }
    }, 200); // Adjust the delay (200ms) between each character

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [fullText]);

  // Smoother, more subtle scale effects
  const scale = useTransform(scrollY, [0, 1000], [1, 1.5]);
  const scaleText = useTransform(scrollY, [0, 500], [1, 0.7]);
  const backgroundOpacity = useTransform(scrollY, [0, 400], [0.7, 0.1]);
  
  // Scroll-based opacity for UI elements
  const arrowOpacity = useTransform(scrollY, [0, 200], [1, 0]);
  
  // Refined about section animations
  const aboutZoom = useTransform(scrollY, [200, 600], [0.9, 1.05]);
  const aboutOpacity = useTransform(scrollY, [200, 600], [0, 1]);

  // Mouse move handler with debounce effect
  const handleMouseMove = (e: { clientX: any; clientY: any; }) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // More subtle mouse cursor animation
  const springX = useSpring(mousePosition.x, { stiffness: 100, damping: 25 });
  const springY = useSpring(mousePosition.y, { stiffness: 100, damping: 25 });

  // Scroll to the "About" section
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Letter animation variants
  const letterVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
      }
    }),
  };

  // Scroll-based zoom for the profile section
  const profileZoom = useTransform(scrollY, [0, 300], [1, 1.2]); // Scale from 1 to 1.2
  const profileOpacity = useTransform(scrollY, [0, 300], [1, 0.8]); // Fade slightly

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black to-gray-900 text-white overflow-hidden">
      {/* Custom cursor - more subtle and elegant */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-purple-300 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-10"></div>

      {/* Gradient overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black/30"
        style={{ opacity: backgroundOpacity }}
      ></motion.div>

      {/* Main content */}
      <motion.div
        className="flex flex-col items-center justify-center min-h-screen px-4"
        style={{ scale }} // Parent scaling effect
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-purple-300 text-sm tracking-widest mb-4 font-light"
        >
          WELCOME TO MY
        </motion.div>

        <motion.h1
          className="font-extrabold text-center leading-tight"
          style={{
            fontSize: "clamp(8vw, 12vw, 16vw)",
          }}
        >





          {/* first word with conditional wavy animation */}
          <div className="flex justify-center">
            {Array.from("PORTFOLIO").map((char, index) => (
               <motion.span
               key={`word1-${index}`}
               className="inline-block px-1"
               style={{
                 background: `linear-gradient(135deg, 
                   ${index % 3 === 0 ? '#c084fc' : index % 3 === 1 ? '#818cf8' : '#60a5fa'}, 
                   ${index % 3 === 0 ? '#db2777' : index % 3 === 1 ? '#9333ea' : '#4f46e5'})`,
                 WebkitBackgroundClip: 'text',
                 WebkitTextFillColor: 'transparent',
                 textShadow: `0 0 20px rgba(${index % 3 === 0 ? '192, 132, 252' : index % 3 === 1 ? '129, 140, 248' : '96, 165, 250'}, 0.7)`,
                 filter: 'drop-shadow(0 0 2px rgba(168, 85, 247, 0.3))',
                 fontWeight: 800,
                 fontSize: 200               }}
                animate={
                  isAnimating
                    ? {
                        y: [0, -10, 0, 10, 0], // Wavy motion
                      }
                    : { y: 0 } // Stop animation
                }
                transition={
                  isAnimating
                    ? {
                        duration: 2, // Duration of one wave cycle
                        repeat: Infinity, // Infinite repetition
                        delay: index * 0.2, // Staggered delay for each letter
                        ease: "easeInOut", // Smooth easing
                      }
                    : {}
                }
                whileHover={{
                  scale: 1.2, // Slightly enlarge the letter on hover
                  color: "#ff80ff", // Highlight color
                  textShadow: "0 0 60px rgba(255, 128, 255, 0.8)", // Glow effect
                }}
              >
                {char}
              </motion.span>
            ))}
          </div>




          {/* second word with conditional wavy animation */}
          <div className="flex justify-center mb-6 text-4xl font-bold tracking-wider">
          {Array.from("SHOWCASE").map((char, index) => (
               <motion.span
               key={`word1-${index}`}
               className="inline-block px-1"
               style={{
                 background: `linear-gradient(135deg, 
                   ${index % 3 === 0 ? '#c084fc' : index % 3 === 1 ? '#818cf8' : '#60a5fa'}, 
                   ${index % 3 === 0 ? '#db2777' : index % 3 === 1 ? '#9333ea' : '#4f46e5'})`,
                 WebkitBackgroundClip: 'text',
                 WebkitTextFillColor: 'transparent',
                 textShadow: `0 0 20px rgba(${index % 3 === 0 ? '192, 132, 252' : index % 3 === 1 ? '129, 140, 248' : '96, 165, 250'}, 0.7)`,
                 filter: 'drop-shadow(0 0 2px rgba(168, 85, 247, 0.3))',
                 fontWeight: 800,
                 fontSize: 100   
               }}
                animate={
                                isAnimating
                        ? {
                            y: [0, -12, 0, 12, 0], // Enhanced wavy motion
                            rotate: [0, -2, 0, 2, 0], // Slight rotation for more dynamic feel
                          }
                        : { y: 0, rotate: 0 } // Stop animation
                    }
                transition={
                  isAnimating
                    ? {
                        duration: 2, // Duration of one wave cycle
                        repeat: Infinity, // Infinite repetition
                        delay: index * 0.2, // Staggered delay for each letter
                        ease: "easeInOut", // Smooth easing
                      }
                    : {}
                }
                whileHover={{
                  scale: 1.3, // Slightly larger scale on hover
                  rotate: [-5, 5, 0], // Wiggle effect on hover
                  transition: { duration: 0.4 }, // Quick transition
                  filter: 'drop-shadow(0 0 8px rgba(192, 132, 252, 0.8))', // Enhanced glow
                }}
              >
                {char}
              </motion.span>
            ))}
          </div>

        </motion.h1>
      </motion.div>
        
      {/* Scroll down button with cleaner animation */}
      <div className="flex justify-center mt-12">
        <motion.button
          onClick={scrollToAbout}
          className="px-8 py-3 bg-transparent border border-purple-400 rounded-full hover:bg-purple-900/30 transition duration-300 flex items-center gap-2 group"
          style={{ opacity: arrowOpacity, alignItems: "center" }} // Align items center
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
        >
          <span className="font-light tracking-wider text-sm">EXPLORE</span>
          <motion.div
            animate={{ 
              y: [0, 5, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut"
            }}
          >
            <FaChevronDown className="text-purple-300 group-hover:text-white transition-colors" />
          </motion.div>
        </motion.button>
      </div>

      {/* Background image - more subtle integration */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-[60vh] bg-cover bg-center"
        style={{ 
          scale,
          opacity: useTransform(scrollY, [0, 500], [0.6, 0.1]),
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
        <img
          src="/media/prev.png"
          alt="Portfolio Preview"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* About Section - cleaner layout */}
      <motion.section
        id="about"
        style={{
          scale: profileZoom, // Apply zoom effect
          opacity: profileOpacity, // Apply fade effect
        }}
        className="min-h-screen flex items-center justify-center py-20"
      >
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            className="flex flex-col items-center bg-black/40 backdrop-blur-lg p-8 rounded-xl border border-purple-900/30"
          >
            <motion.div
              className="w-32 h-32 rounded-full overflow-hidden shadow-lg border-2 border-purple-500 mb-6"
              style={{
                scale: profileZoom, // Apply zoom effect to the profile picture
              }}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/media/profile.jpg"
                alt="Profile Picture"
                width={128}
                height={128}
                className="object-cover w-full h-full"
              />
            </motion.div>
            
            <motion.h2
              className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textContainerVariants} // Apply container variants
            >
              {Array.from(displayedText).map((char, index) => (
                <motion.span key={index} variants={letterVariants}>
                  {char}
                </motion.span>
              ))}
            </motion.h2>
            
            <motion.div 
              className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full my-4"
              initial={{ width: 0 }}
              animate={{ width: "6rem" }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
            
            <motion.p
              className="text-lg text-gray-300 mt-2 mb-4 text-center max-w-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Full-Stack Developer | AI & IoT Enthusiast
            </motion.p>
            
            <motion.div
              className="flex items-center space-x-3 mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <FaMapMarkerAlt className="text-purple-400" />
              <span className="text-gray-300">
                Kottayam, Kerala, India
              </span>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default CoverPage;