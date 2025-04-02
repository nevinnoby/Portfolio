"use client";  // Enable client-side rendering
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaGithubAlt } from "react-icons/fa";
import { SiJavascript, SiPython, SiReact, SiCplusplus, SiMongodb, SiMysql, SiDocker, SiGit } from "react-icons/si";
import { FaJava } from "react-icons/fa"; // ✅ Correct import path
import Link from "next/link";
import { Link as ScrollLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import Projects from "../components/Projects";
import Git from "../components/Git";
import Services from "../components/Services";
import TestimonialPage from "../components/TestimonialPage";
import BlogPage from "../components/BlogPage";
import ContactPage from "../components/ContactPage";
import CoverPage    from "@/components/CoverPage";

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolling, setIsScrolling] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const name = "Nevin M Noby";
  const [displayedName, setDisplayedName] = useState(" ".repeat(name.length));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      const sections = ["about", "projects", "github", "services", "testimonials", "blog", "contact"];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
      setTimeout(() => setIsScrolling(false), 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Tidio Chatbot Integration
    const script = document.createElement("script");
    script.src = "//code.tidio.co/zmutz7gaymrye658skilzzin5gwtd7z8.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const totalDuration = 10000; // 10 seconds
    const intervalDuration = totalDuration / name.length;
    let i = 0;
    const shuffledName = name.split('').sort(() => Math.random() - 0.5).join('');
    let tempName = shuffledName.split('');
    
    const interval = setInterval(() => {
      tempName[i] = name[i];
      setDisplayedName(tempName.join(''));
      i++;
      if (i === name.length) clearInterval(interval);
    }, intervalDuration);
    return () => clearInterval(interval);
  }, [name]);

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? "bg-gray-900 text-white" : "bg-gray-50"} transition-colors duration-300`}>
      <header className="fixed w-full z-50">
        <div className="container mx-auto flex justify-between items-center p-4">
          {/* Logo with Blur Effect */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={`flex items-center space-x-2 backdrop-blur-md bg-opacity-70 bg-transparent rounded-lg px-4 py-2`}
          >
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center">
              <span className="font-bold text-white text-lg">DP</span>
            </div>
            <h1 className={`text-2xl font-bold ${darkMode ? "text-white" : "text-gray-800"}`}>
              DevPortfolio
            </h1>
          </motion.div>

          {/* Navigation Links with Blur Effect */}
          <div className="flex items-center space-x-6 backdrop-blur-md bg-opacity-70 bg-transparent rounded-lg px-4 py-2">
            <nav className="hidden md:block">
              <ul className="flex space-x-6">
                {["About", "Projects", "GitHub", "Services", "Testimonials", "Blog", "Contact"].map(
                  (item) => (
                    <li key={item}>
                      <ScrollLink
                        to={item.toLowerCase()}
                        smooth={true}
                        duration={500}
                        className={`${
                          activeSection === item.toLowerCase()
                            ? "text-purple-600 font-medium"
                            : darkMode
                            ? "text-white"
                            : "text-gray-800"
                        } hover:text-purple-500 transition-colors px-2 py-1 relative`}
                        onSetActive={() => setActiveSection(item.toLowerCase())}
                      >
                        {item}
                        {activeSection === item.toLowerCase() && (
                          <motion.div
                            layoutId="navIndicator"
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-600"
                          />
                        )}
                      </ScrollLink>
                    </li>
                  )
                )}
              </ul>
            </nav>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-black"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>
      
      <main className="flex-1 container mx-auto mt-16 p-6">
        <Element name="about">
          <motion.section
            id="about"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="py-20 text-center"
          >
            <div className="container mx-auto px-6">
              {/* Profile Section */}
              {/* <div className="flex flex-col items-center">
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
                  I am {displayedName}
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
                  <span className="text-gray-600 dark:text-gray-300">Kottayam,Kerela,India</span>
                </motion.div>
              </div> */}
              <CoverPage />
              {/* Skills Section */}
              <div className="mt-12">
                <h3 className="text-3xl font-semibold text-purple-600">Skills & Technologies</h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 mt-6">
                  {[SiJavascript, SiPython, SiReact, FaJava, SiCplusplus, SiMongodb, SiMysql, SiDocker, SiGit].map((Icon, index) => (
                    <motion.div
                      key={index}
                      className={`p-4 ${darkMode ? "bg-white" : "bg-gray-800"} rounded-lg shadow-md flex justify-center items-center`}
                      whileHover={{ scale: 1.1 }}
                    >
                      <Icon className={`${darkMode ? "text-gray-800" : "text-white"} text-4xl`} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>
        </Element>
       
        <Element name="projects">
          <motion.section
            id="projects"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="py-20 text-center"
          >
            <div className="container mx-auto px-6">
              <h3 className="text-3xl font-semibold text-purple-600">Experience & Projects</h3>
              
              <div className="grid md:grid-cols-2 gap-8 mt-6">
                
              </div>
                
              <Projects />
              <Link href="/Showcase">
                <button className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
                  Load More...
                </button>
              </Link>
            </div>
          </motion.section>
        </Element>

        <Element name="github">
          <motion.section
            id="github" // Ensure the id matches the "to" prop in ScrollLink
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="py-20 text-center"
          >
            <Git isDark={!darkMode} />
          </motion.section>
        </Element>

        <Element name="services">
          <motion.section
            id="services"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="py-20 text-center"
          >
            <Services darkMode={darkMode} />
          </motion.section>
        </Element>

        <Element name="testimonials">
          <motion.section
            id="testimonials"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="py-20 text-center"
          > 
            <TestimonialPage darkMode={darkMode} />
          </motion.section>
        </Element>

        <Element name="blog">
          <motion.section
            id="blog"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="py-20 text-center"
          > 
            <BlogPage darkMode={darkMode} />
          </motion.section>
        </Element>

        <Element name="contact">
          <motion.section
            id="contact"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="py-20 text-center"
          > 
            <ContactPage darkMode={darkMode} />
          </motion.section>
        </Element>
      </main>
    </div>
  );
}