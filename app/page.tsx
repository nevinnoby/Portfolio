"use client";  // Enable client-side rendering
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaGithubAlt } from "react-icons/fa";
import { SiJavascript, SiPython, SiReact, SiCplusplus, SiMongodb, SiMysql, SiDocker, SiGit } from "react-icons/si";
import { FaJava } from "react-icons/fa"; // ✅ Correct import path
import Link from "next/link";

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolling, setIsScrolling] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      const sections = ["about", "projects", "skills", "services", "testimonials", "blog", "contact"];
      
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

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? "bg-gray-900 text-white" : "bg-gray-50"} transition-colors duration-300`}>
      <header className={`fixed w-full z-50 ${isScrolling ? "bg-opacity-90 backdrop-blur-md" : ""} ${darkMode ? "bg-gray-800" : "bg-white"} shadow-lg transition-all duration-300`}>
        <div className="container mx-auto flex justify-between items-center p-4">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center">
              <span className="font-bold text-white text-lg">DP</span>
            </div>
            <h1 className={`text-2xl font-bold ${darkMode ? "text-white" : "text-gray-800"}`}>DevPortfolio</h1>
          </motion.div>

          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {["About", "Projects", "Skills", "Services", "Testimonials", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className={`${activeSection === item.toLowerCase() ? "text-purple-600 font-medium" : darkMode ? "text-gray-300" : "text-gray-600"} hover:text-purple-500 transition-colors px-2 py-1 relative`}>
                    {item}
                    {activeSection === item.toLowerCase() && (
                      <motion.div layoutId="navIndicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-600" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center space-x-4">
            <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" aria-label="Toggle dark mode">
              {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" stroke="currentColor" fill="none"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" stroke="currentColor" fill="none"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
              )}
            </button>

            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto mt-16 p-6">
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
              <h2 className="text-4xl font-bold text-purple-600 mt-4">Nevin M Noby</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
                Full-Stack Developer | AI & IoT Enthusiast
              </p>
              <div className="flex items-center space-x-3 mt-3">
                <FaMapMarkerAlt className="text-purple-500" />
                <span className="text-gray-600 dark:text-gray-300">Kottayam,Kerela,India</span>
              </div>
            </div>

            {/* Skills Section */}
            <div className="mt-12">
              <h3 className="text-3xl font-semibold text-purple-600">Skills & Technologies</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 mt-6">
                {[SiJavascript, SiPython, SiReact, FaJava, SiCplusplus, SiMongodb, SiMysql, SiDocker, SiGit].map((Icon, index) => (
                  <motion.div
                    key={index}
                    className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md flex justify-center items-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Icon className="text-purple-500 text-4xl" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Experience & Projects Section */}
            <div className="mt-12">
              <h3 className="text-3xl font-semibold text-purple-600">Experience & Projects</h3>
              
              <div className="grid md:grid-cols-2 gap-8 mt-6">
                {[1, 2].map((project) => (
                  <motion.div
                    key={project}
                    className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg"
                    whileHover={{ scale: 1.05 }}
                  >
                    <h4 className="text-xl font-bold text-gray-800 dark:text-white">Project {project}</h4>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                      Brief description of your project or experience.
                    </p>
                  </motion.div>
                ))}
              </div>
              <Link href="/Showcase">
                <button className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
                  Load More...
                </button>
              </Link>
            </div>

            {/* Education & Certifications */}
            <div className="mt-12">
              <h3 className="text-3xl font-semibold text-purple-600">Education & Certifications</h3>
              <div className="mt-6 space-y-4">
                <motion.div
                  className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md"
                  whileHover={{ scale: 1.05 }}
                >
                  <h4 className="text-xl font-bold text-gray-800 dark:text-white">B.Tech in Computer Science</h4>
                  <p className="text-gray-600 dark:text-gray-300">Your University (Year)</p>
                </motion.div>
                <motion.div
                  className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md"
                  whileHover={{ scale: 1.05 }}
                >
                  <h4 className="text-xl font-bold text-gray-800 dark:text-white">AI & ML Certification</h4>
                  <p className="text-gray-600 dark:text-gray-300">NPTEL / Infosys Springboard</p>
                </motion.div>
              </div>
            </div>

            {/* Contact & Social Links */}
            <div className="mt-12">
              <h3 className="text-3xl font-semibold text-purple-600">Get in Touch</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">Feel free to reach out!</p>
              <div className="flex justify-center space-x-6 mt-6">
                {[FaGithub, FaLinkedin, FaTwitter, FaEnvelope].map((Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="text-purple-500 text-3xl"
                    whileHover={{ scale: 1.2 }}
                  >
                    <Icon />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
        <motion.section
          id="github-analytics"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-20 text-center"
        >
          <div className="container mx-auto px-6">
            <h3 className="text-3xl font-semibold text-purple-600">GitHub Analytics</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">Check out my GitHub stats and contributions.</p>
            <div className="flex justify-center mt-6">
              <img
                src="https://github-readme-stats.vercel.app/api?username=nevinnoby&show_icons=true&theme=radical"
                alt="GitHub Stats"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="flex justify-center mt-6">
              <img
                src="https://github-readme-streak-stats.herokuapp.com/?user=nevinnoby&theme=radical"
                alt="GitHub Streak Stats"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
