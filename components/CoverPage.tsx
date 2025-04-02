"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";

const CoverPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();

  // Scale effect for zooming in and out
  const scale = useTransform(scrollY, [0, 300], [1, 1.5]); // Increased zoom-in
  const scaleText = useTransform(scrollY, [0, 300], [1, 0.6]); // Increased zoom-out for text

  // Mouse move handler
  const handleMouseMove = (e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Smooth pointer movement using useSpring
  const springX = useSpring(mousePosition.x, { stiffness: 50, damping: 20 });
  const springY = useSpring(mousePosition.y, { stiffness: 50, damping: 20 });

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Mouse Pointer Circle */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-gray-500 rounded-full pointer-events-none"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Content Section */}
      <motion.div
        className="flex flex-col items-center justify-center min-h-screen"
        style={{ scale }}
      >
        <p className="text-gray-400 text-sm tracking-widest mb-4">
          INTRODUCING
        </p>
        <motion.h1
          className="font-extrabold text-center leading-none"
          style={{
            scale: scaleText,
            fontSize: "clamp(10vw, 15vw, 20vw)", // Dynamically adjust font size
          }}
        >
          BRONX <br /> PORTFOLIO
        </motion.h1>
        <button className="mt-6 px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition">
          DOWNLOAD
        </button>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-[50vh] bg-cover bg-center"
        style={{ scale }}
      >
        <img
          src="/images/portfolio-preview.jpg"
          alt="Portfolio Preview"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* About Section */}
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-20 text-center"
      >
        <div className="container mx-auto px-6">
          {/* Profile Section */}
          <div className="flex flex-col items-center">
            <motion.div
              className="w-32 h-32 rounded-full overflow-hidden shadow-lg border-4 border-purple-500"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/profile.jpg"
                alt="Profile Picture"
                width={128}
                height={128}
                className="object-cover"
              />
            </motion.div>
            <motion.h2
              className="text-4xl font-bold text-purple-600 mt-4"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              I am {`{displayedName}`}
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 dark:text-gray-300 mt-2"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              Full-Stack Developer | AI & IoT Enthusiast
            </motion.p>
            <motion.div
              className="flex items-center space-x-3 mt-3"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <FaMapMarkerAlt className="text-purple-500" />
              <span className="text-gray-600 dark:text-gray-300">
                Kottayam, Kerela, India
              </span>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default CoverPage;