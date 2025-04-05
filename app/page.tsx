"use client"; // Enable client-side rendering
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaGithubAlt } from "react-icons/fa";
import { SiJavascript, SiPython, SiReact, SiCplusplus, SiMongodb, SiMysql, SiDocker, SiGit } from "react-icons/si";
import { FaJava } from "react-icons/fa"; // ✅ Correct import path
import Link from "next/link";
import { Link as ScrollLink, Element } from "react-scroll";
import Git from "../components/Git";
import Services from "../components/Services";
import ContactPage from "../components/ContactPage";
import CoverPage from "@/components/CoverPage";
import Skills from "../components/Skills"; // Import the Skills component
import Head from "next/head";
import Cover from "@/components/Cover";
import EventCard from "@/components/EventCard";
// Updated Projects component with auto-scrolling
interface ProjectsProps {
  isDark: boolean;
}

const Projects = ({ isDark }: ProjectsProps) => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isInView, setIsInView] = useState(false);
  
  const projects = [
    {
      id: 1,
      title: "ServeLink",
      description: "Servelink is a MERN stack-based platform connecting volunteers with organizations. Volunteers can register, explore opportunities, and enroll, while organizations post activities and manage participants, fostering community engagement and social impact. 🚀",
      image: "/media/se1.jpg", // Update with your actual image path
      tags: ["React", "Node.js", "MongoDB", "Express"],
      link: "#",
      github: "#",
      video: "/media/Servelink.mp4" // Add video URL
    },
    {
      id: 2,
      title: "FutureScape",
      description: "FutureScape is an immersive coding challenge platform where participants engage in thrilling tech-based competitions. From blind coding to real-time problem-solving, players navigate through diverse coding challenges, unlocking levels and earning points. With live leaderboards, a hint system, and secure authentication, FutureScape delivers an engaging and competitive experience for developers of all skill levels. ",
      image: "/media/fu.png", // Update with your actual image path
      tags: ["Next.js", "React", "Supabase", "Tailwind CSS"],
      link: "#",
      github: "https://github.com/futureScape-asthra/futureScape",
      video: "/media/f.mp4" // Add video URL
    },
    {
      id: 3,
      title: "Perimeter",
      description: "Perimeter is a Flat Management System which contains seperate React Native apps for admin and users built with Firebase for efficient apartment and visitor management. It features real-time room status updates, face recogonized entry & exit, resident tracking, and a secure visitor management system. The app allows admins to manage residents, track visitors, and handle security logs seamlessly, while users can view room availability and access their apartment details.",
      image: "/media/icon.png",
      tags: ["React Native", "Firebase", "Cloudinary"],
      link: "#",
      github: "https://github.com/Perimeter-Final-Project",
      video: "/media/Perimeter.mp4"
    },
    {
      id: 4,
      title: "Travell App",
      description: "Travel is a sleek and responsive travel website built with React.js, offering a seamless user experience with smooth animations. Users can explore various destinations, filter locations based on price, and plan their perfect trip effortlessly. With its clean and modern UI, Travel ensures a visually engaging and intuitive browsing experience for travelers. ✈️🌍✨",
      image: "/media/tr3.png", // Update with your actual image path
      tags: ["ReactJs"],
      link: "https://nevinnoby.github.io/travel-webapp/",
      github: "https://github.com/nevinnoby/travel-webapp",
      video: "/media/Travel.mp4"// Add video URL
    }
    // Add more projects as needed
  ];

  // Auto-scroll functionality
  useEffect(() => {
    let interval: string | number | NodeJS.Timeout | undefined;
    
    if (isInView) {
      interval = setInterval(() => {
        setCurrentProject((prev) => (prev + 1) % projects.length);
      }, 5000); // Change project every 5 seconds
    }
    
    return () => clearInterval(interval);
  }, [isInView, projects.length]);

  // Track when component is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );
    
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      observer.observe(projectsSection);
    }
    
    return () => {
      if (projectsSection) {
        observer.unobserve(projectsSection);
      }
    };
  }, []);

  return (
    <div className="w-full">
      <div className="relative h-[500px] md:h-[600px] lg:h-[700px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProject}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute w-full h-full"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
              {/* Project Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video">
  {projects[currentProject].image ? (
    <Image 
      src={projects[currentProject].image} 
      alt={projects[currentProject].title}
      fill={true}
      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
      className="object-cover rounded-lg"
      priority
    />
  ) : (
    <div className={`w-full h-full flex items-center justify-center ${isDark ? 'bg-gray-800' : 'bg-gray-200'}`}>
      <span className="text-gray-500">Image Placeholder</span>
    </div>
  )}
</div>
              
              {/* Project Info */}
              <div className={`flex flex-col justify-center text-left ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">{projects[currentProject].title}</h3>
                <p className={`mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {projects[currentProject].description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {projects[currentProject].tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        isDark ? 'bg-gray-700 text-purple-300' : 'bg-purple-100 text-purple-600'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => {
                      const videoUrl = projects[currentProject].video;
                      if (videoUrl) {
                        window.open(videoUrl, "_blank", "noopener,noreferrer,width=800,height=600");
                      } else {
                        alert("Video not available for this project.");
                      }
                    }}
                    className="px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-lg hover:shadow-lg transition duration-300"
                    aria-label={`View live demo of ${projects[currentProject].title}`}
                  >
                    View Live
                  </button>
                  <a 
                    href={projects[currentProject].github}
                    className={`px-6 py-2 border rounded-lg font-medium transition duration-300 ${
                      isDark 
                        ? 'border-gray-700 hover:bg-gray-800' 
                        : 'border-gray-300 hover:bg-gray-100'
                    }`}
                    aria-label={`View code for ${projects[currentProject].title}`}
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        
        {/* Navigation Dots */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentProject(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentProject === index 
                  ? 'bg-purple-600 w-6' 
                  : isDark ? 'bg-gray-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolling, setIsScrolling] = useState(false);
  const [darkMode, setDarkMode] = useState(true); // Set dark mode as the default
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const name = "Nevin M Noby";
  const [displayedName, setDisplayedName] = useState(" ".repeat(name.length));
  const { scrollY } = useScroll(); // Track scroll position
  const [isLoading, setIsLoading] = useState(true);

  // Scroll-based zoom-in effect for the "Projects" section
  const projectsZoom = useTransform(scrollY, [800, 1200], [0.8, 1]); // Starts at 0.8 scale and zooms to 1
  const projectsOpacity = useTransform(scrollY, [800, 1200], [0, 1]); // Fades in as it zooms

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // Track active section
  const handleScroll = useCallback(() => {
    setIsScrolling(true);
    const sections = ["about", "skills", "services", "projects", "github", "contact"]; // Updated order

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
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Remove the Tidio chat integration
  useEffect(() => {
    // Simulate loading state
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  // Name animation effect
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

  // Mobile menu toggle
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Loading animation
  if (isLoading) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}>
        <motion.div 
          className="w-20 h-20 border-t-4 border-purple-600 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </div>
    );
  }

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? "bg-gray-900 text-white" : "bg-gray-50"} transition-colors duration-300`}>
      <Head>
        <title>DevPortfolio | Nevin M Noby</title>
        <meta name="description" content="Professional portfolio showcasing development projects and skills" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="developer, portfolio, web development, projects, skills" />
        <meta property="og:title" content="DevPortfolio | Nevin M Noby" />
        <meta property="og:description" content="Professional portfolio showcasing development projects and skills" />
        <meta property="og:type" content="website" />
      </Head>
      
      <header className="fixed w-full z-50">
        <div className="container mx-auto flex justify-between items-center p-4">
          {/* Logo with Blur Effect */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={`flex items-center space-x-2 backdrop-blur-md bg-opacity-70 bg-transparent rounded-lg px-4 py-2`}
          >
            {/* <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center">
              <span className="font-bold text-white text-lg"></span>
            </div> */}
           <motion.div 
            whileHover={{ scale: 1.05 }} 
            className="text-xl font-bold tracking-tighter"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Portfolio
            </span>
          </motion.div>
          </motion.div>

          {/* Navigation Links with Blur Effect - Desktop */}
          <div className="hidden md:flex items-center space-x-6 backdrop-blur-md bg-opacity-70 bg-transparent rounded-lg px-4 py-2">
            <nav>
              <ul className="flex space-x-6">
                {["About", "Skills", "Services", "Projects", "GitHub", "Contact"].map((item) => (
                  <li key={item}>
                    {item === "Projects" ? (
                      <Link legacyBehavior href="/Showcase">
                        <a
                          className={`${
                            activeSection === item.toLowerCase()
                              ? "text-purple-600 font-medium"
                              : darkMode
                              ? "text-white"
                              : "text-white"
                          } hover:text-purple-500 transition-colors px-2 py-1 relative`}
                        >
                          {item}
                        </a>
                      </Link>
                    ) : (
                      <ScrollLink
                        to={item.toLowerCase()}
                        smooth={true}
                        duration={500}
                        className={`${
                          activeSection === item.toLowerCase()
                            ? "text-purple-600 font-medium"
                            : darkMode
                            ? "text-white"
                            : "text-white"
                        } hover:text-purple-500 transition-colors px-2 py-1 relative cursor-pointer`}
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
                    )}
                  </li>
                ))}
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

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg backdrop-blur-md bg-opacity-70 bg-transparent"
            aria-label="Toggle menu"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-6 w-6 transition-transform ${isMenuOpen ? 'rotate-90' : ''} ${darkMode ? 'text-white' : 'text-gray-800'}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className={`md:hidden backdrop-blur-lg ${darkMode ? 'bg-gray-900/90' : 'bg-white/90'} border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}
            >
              <nav className="container mx-auto p-4">
                <ul className="flex flex-col space-y-4">
                  {["About", "Skills", "Services", "Projects", "GitHub", "Contact"].map((item) => (
                    <li key={item}>
                      <ScrollLink
                        to={item.toLowerCase()}
                        smooth={true}
                        duration={500}
                        className={`block px-4 py-2 rounded-lg ${
                          activeSection === item.toLowerCase()
                            ? darkMode ? 'bg-gray-800 text-purple-500' : 'bg-gray-100 text-purple-600' 
                            : ''
                        } ${darkMode ? 'text-white' : 'text-gray-800'} font-medium`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item}
                      </ScrollLink>
                    </li>
                  ))}
                  <li>
                    <button
                      onClick={() => {
                        setDarkMode(!darkMode);
                        setIsMenuOpen(false);
                      }}
                      className={`w-full px-4 py-2 rounded-lg flex items-center justify-between ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}
                    >
                      <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
                      {darkMode ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                      )}
                    </button>
                  </li>
                </ul>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-1 w-full">
        {/* About Section */}
        <Element name="about">
          <motion.section
            id="about"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full min-h-screen overflow-hidden"
          >
            <div className="w-full">
            <Cover darkMode={darkMode} />
            </div>
          </motion.section>
        </Element>

<EventCard darkMode={darkMode}/>

{/* Skills Section */}
<Element name="skills">
          <motion.section
            id="skills"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="py-20 text-center px-4 sm:px-6 lg:px-8"
          >
            <div className="container mx-auto">
            </div>
           

          </motion.section>
        </Element>

        <Skills darkMode={darkMode} />
        {/* Services Section */}
        <Element name="services">
          <motion.section
            id="services"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="py-20 text-center px-4 sm:px-6 lg:px-8"
          >
            <Services darkMode={darkMode} />
          </motion.section>
        </Element>

        





        {/* Projects Section - Updated with auto-scrolling carousel */}
        <Element name="projects">
          <section id="projects" className="py-20">
            <div className="container mx-auto px-6">
              <motion.div 
                className="rounded-3xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 p-10 md:p-16 relative shadow-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                {/* Background decoration */}
                <div className="absolute right-0 top-0 w-full h-full opacity-10 overflow-hidden pointer-events-none">
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
                  <motion.div 
                    className="absolute left-20 top-40 w-40 h-40 rounded-full bg-indigo-500"
                    animate={{ 
                      scale: [0.8, 1, 0.8],
                      x: [0, 15, 0],
                      y: [0, -15, 0],
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                  />
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="flex flex-col items-center text-center mb-12"
                  >
                    <span className="px-4 py-1.5 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm font-medium rounded-full mb-3">MY WORK</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">Experience & Projects</h2>
                    <div className="w-20 h-1.5 bg-purple-600 rounded-full mb-6"></div>
                    <p className="max-w-2xl text-gray-600 dark:text-gray-300 text-lg">
                      Showcasing my creativity, skills, and passion for development through innovative solutions
                    </p>
                  </motion.div>
                  
                  {/* Projects Carousel */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    <Projects isDark={darkMode} />
                  </motion.div>
                  
                  {/* Load More Button */}
                  <motion.div 
                    className="mt-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    <Link href="/Showcase">
                      <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-xl hover:shadow-lg hover:from-purple-700 hover:to-indigo-700 transition duration-300 transform hover:-translate-y-1">
                        View All Projects
                      </button>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>
        </Element>

        {/* GitHub Section */}
        <Element name="github">
          <motion.section
            id="github"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="py-20 text-center"
          >
            <Git isDark={!darkMode} />
          </motion.section>
        </Element>

        {/* Contact Section */}
        <Element name="contact">
          <motion.section
            id="contact"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="py-20 text-center"
          >
            <ContactPage  darkMode={darkMode} />
          </motion.section>
        </Element>
      </main>

      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 rounded-full shadow-lg z-50 bg-purple-600 text-white ${
          scrollY?.get() > 300 ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300`}
        aria-label="Scroll to top"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    </div>
  );
}