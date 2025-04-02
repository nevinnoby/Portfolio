"use client"; // Required in Next.js app directory for client-side animations

import { motion } from "framer-motion";
import React from "react";

const projects = [
  { id: 1, title: "Smart Traffic Monitoring", image: "/images/project1.jpg" },
  { id: 2, title: "IoT Smart Home", image: "/images/project2.jpg" },
  { id: 3, title: "AI-Based Skin Care", image: "/images/project3.jpg" },
  { id: 4, title: "EV Website in React.js", image: "/images/project4.jpg" },
];

const Projects = ({ isDark }: { isDark: boolean }) => {
  return (
    <div className="">
      <h2 className={`text-4xl font-bold text-center mb-8 ${isDark ? "text-white" : "text-black"}`}>
        My Projects
      </h2>

      {/* Marquee Effect */}
      <motion.div
        className="flex space-x-10"
        animate={{
          x: ["0%", "-100%"], // Moves left infinitely
        }}
        transition={{
          ease: "linear",
          duration: 15, // Slower scrolling
          repeat: Infinity,
        }}
      >
        {[...projects, ...projects].map((project, index) => (
          <motion.div
            key={index}
            className="min-w-[700px] md:min-w-[800px] lg:min-w-[900px] bg-white p-6 shadow-lg rounded-xl transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[400px] object-cover rounded-lg"
            />
            <h3 className="text-2xl font-semibold mt-4 text-center">
              {project.title}
            </h3>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
