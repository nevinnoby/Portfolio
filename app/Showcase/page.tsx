"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, Grid, List, Star, Github, ExternalLink, X, Calendar, Code, Users, Clock, ArrowUpRight, Layers, BarChart, PieChart, Zap, Book, Award, Tag } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import ContactPage from "@/components/ContactPage";
import Navbar from "@/components/Navbar";
export default function Dashboard() {
  const [darkMode, setDarkMode] = useState(true); // Add darkMode state
  const [viewMode, setViewMode] = useState("grid");
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const [animateStats, setAnimateStats] = useState(false);
  const [activeStatCard, setActiveStatCard] = useState(null);
  
  // Sample project data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "Servelink",
      description: "A full-stack online volunteering platform  with React and Node.js",
      image: "/media/ser1.png",
      tags: ["React", "Node.js", "MongoDB","Express"],
      featured: true,
      github: "https://github.com/nevinnoby/servelink",
      liveUrl: "media/Servelink.mp4",
      category: "web",
      completionPercentage: 100,
      // Detailed information
      startDate: "September 2023",
      endDate: "February 2023",
      teamSize: 4,
      role: "Full Stack Developer",
      problemStatement: "Create a modern volunteer connecting platform which connects volunteers across the world with different orginazions which are registered in the platform, and responsive design.Servelink is a MERN stack-based volunteering platform that connects volunteers with organizations. Volunteers can register, browse opportunities, and enroll in activities, while organizations can post and manage events. With a seamless UI and efficient user management, Servelink fosters community engagement by making volunteering accessible and organized. Seperate logins for organizations,volunteers and admins.",
      techStack: {
        frontend: ["React", "CSS", "Framer Motion"],
        backend: ["Node.js", "Express", "MongoDB", "Mongoose"],
        deployment: ["Minio_Bucket","GitHub Actions"],
        tools: ["Compass", "Figma", "Postman"]
      },
      methodology: "Agile/Scrum with 2-week sprints",
      keyFeatures: [
        "User authentication with JWT",
        "Activity search with filters",
        "Real-time loaction based sorting",
        "Admin Verification for organizations",
        "Responsive design for all devices",
        "Organization and Volunteer Dashboards"
      ],
      challenges: "Implementing real-time coordinates updates for rendering locations and storing the images and files in the bucket.",
      solution: "Utilized openstreet map APIs to integrate realtime locations and used Minio Bucket for storing files.",
      outcome: "Successfully launched with 99.9% uptime and 30% faster checkout process compared to previous system.",
      screenshots: [
        "/media/Ser3.png",
        "/media/Ser4.png",
        "/media/Ser21.png",
      ]
    },
    
{
  id: 2,
  title: "Perimeter",
  description: "A full-stack smart visitor and access management system with two mobile apps (Admin & User) and a visitor website.",
  image: "/media/icon.png",
  tags: ["React Native", "Expo", "Firebase", "ESP32"],
  featured: true,
  github: "https://github.com/Perimeter-Final-Project",
  liveUrl: "media/Perimeter.mp4",
  category: "mobile",
  completionPercentage: 100,
  startDate: "July 2024",
  endDate: "March 2025",
  teamSize: 4,
  role: "Full Stack Developer",
  problemStatement: "Develop a secure and automated visitor management system with separate mobile apps for security personnel and residents, along with a website for visitor registration. The system should provide real-time visitor tracking, pre-authorization, OTP-based authentication, RFID entry, and AI-powered number plate recognition.",
  apps: [
    {
      name: "Perimeter Admin",
      platform: "React Native (Expo)",
      features: [
        "Real-time visitor tracking",
        "RFID-based access control",
        "AI-powered number plate recognition",
        "Automated gate opening via ESP32",
        "Visitor verification & log history",
        "Emergency alert system",
        "Admin dashboard for security personnel"
      ]
    },
    {
      name: "Perimeter User",
      platform: "React Native (Expo)",
      features: [
        "Visitor pre-authorization via OTP",
        "Real-time visitor arrival notifications",
        "Guest invitation with QR code",
        "Personalized visitor history",
        "Vehicle management with RFID",
        "Request gate access remotely",
        "Secure login with Firebase authentication"
      ]
    }
  ],
  website: {
    platform: "Next.js",
    features: [
      "Visitor self-registration",
      "Request access via OTP",
      "Check entry rules & policies",
      "Live visitor status updates"
    ]
  },
  techStack: {
    frontend: ["React Native","ReactJs", "Next.js", "Expo"],
    backend: ["Firebase", "Cloudinary"],
    deployment: ["Firebase Hosting", "Vercel Hosting", "GitHub Actions"],
    hardware: ["ESP32", "RFID Scanner", "Smart Gate"],
    tools: ["Expo"]
  },
  methodology: "Agile/Scrum with 2-week sprints",
  keyFeatures: [
    "Separate mobile apps for Admin & Users",
    "Website for visitor self-registration",
    "Real-time visitor logs & alerts",
    "AI-powered number plate recognition",
    "RFID & OTP-based access control",
    "Automated gate opening with ESP32",
    "Admin dashboard & security alerts"
  ],
  challenges: "Ensuring seamless communication between mobile apps, website, and hardware components while maintaining security and low latency.",
  solution: "Implemented Firebase Firestore for real-time data updates, used ESP32 for automation, and integrated AI-powered number plate recognition for vehicle access.",
  outcome: "Successfully deployed with a 99.9% uptime, reducing manual security workload by 60% and improving visitor authentication accuracy.",
  screenshots: [
    "/media/Per1.png",
    "/media/Per2.png",
    "/media/Per3.png"
  ]
},
{
  id: 3,
  title: "FutureScape",
  description: "An advanced challenge-based event platform for hackathons, coding competitions, and interactive tech challenges, built with Next.js and Supabase.",
  image: "/media/fu.png",
  tags: ["Next.js", "Supabase", "Real-time Leaderboard", "Hackathon"],
  featured: true,
  github: "https://github.com/orgs/futureScape-asthra/repositories",
  liveUrl: "/media/f.mp4",
  category: "event",
  completionPercentage: 100,
  startDate: "March 2024",
  endDate: "April 2024",
  teamSize: 9,
  role: "Event Coordinator & Web Team Lead",
  problemStatement: "FutureScape is an advanced challenge-based event platform built with Next.js and Supabase, designed for hackathons, coding competitions, and interactive tech challenges. It features a real-time leaderboard, admin-controlled eliminations, and automated challenge progression. Participants engage in diverse challenges like MCQs, blind coding, debugging, and a final treasure hunt, each with timers and scoring mechanisms. Supabase handles authentication, database storage, and real-time updates, ensuring a seamless experience. FutureScape is scalable, customizable, and optimized for fair competition. 🚀",
  systemFeatures: [
    {
      name: "Competition Structure",
      features: [
        "MCQ challenges",
        "Blind coding rounds",
        "Debugging tasks",
        "Final treasure hunt"
      ]
    },
    {
      name: "Platform Features",
      features: [
        "Real-time leaderboard updates",
        "Admin-controlled eliminations",
        "Automated challenge progression",
        "Participant authentication via Supabase"
      ]
    }
  ],
  techStack: {
    frontend: ["Next.js", "Tailwind CSS"],
    backend: ["Supabase", "Node.js"],
    tools: ["Figma", "Postman", "GitHub", "Vercel"]
  },
  methodology: "Agile development with sprint-based task allocation",
  keyFeatures: [
    "Scalable and customizable competition platform",
    "Real-time updates using Supabase",
    "Admin panel for challenge and participant management",
    "Automated scoring and fair competition rules"
  ],
  challenges: "Ensuring real-time updates, handling multiple concurrent users, and implementing automated challenge progression.",
  solution: "Leveraged Supabase for real-time database operations and Next.js for optimized frontend performance.",
  outcome: "Successfully hosted the event with 100+ participants, ensuring fair play and seamless challenge execution.",
  screenshots: [
    "/media/fu1.png",
    "/media/fu2.png",
    "/media/fu3.png"
  ]
}

,
{
  id: 4,
  title: "Invento",
  description: "A smart inventory management system for seamless stock control.",
  image: "/media/In2.png",
  tags: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
  featured: true,
  github: "https://github.com/nevinnoby/Invento",
  liveUrl: "media/Invento.mp4",
  category: "web",
  completionPercentage: 100,
  startDate: "October 2024",
  endDate: "November 2024",
  teamSize: 5,
  role: "Full Stack Developer",
  problemStatement: "Develop an efficient inventory management system to help businesses track stock levels in real time, prevent overstocking or stockouts, and ensure seamless product management with a secure and responsive interface.",
  systemFeatures: [
    {
      name: "Product Management",
      features: [
        "Add new products",
        "Edit existing product details",
        "Delete outdated products",
        "Categorize inventory for better organization"
      ]
    },
    {
      name: "Stock Tracking",
      features: [
        "Real-time stock level monitoring",
        "Low-stock alerts and notifications",
        "Stock history and movement tracking",
        "Prevent overstocking and stockouts"
      ]
    },
    {
      name: "User Authentication",
      features: [
        "Secure login for authorized users",
        "Role-based access control",
        "Encrypted credentials storage",
        "Admin dashboard for user management"
      ]
    }
  ],
  techStack: {
    frontend: ["Bootstrap", "JavaScript", "CSS"],
    backend: ["PHP", "MySQL"],
    deployment: ["Apache Server", "GitHub Actions"],
    tools: ["Postman", "Figma", "phpMyAdmin"]
  },
  methodology: "Agile/Scrum with weekly iterations",
  keyFeatures: [
    "Comprehensive product and stock management",
    "Real-time inventory tracking with alerts",
    "Role-based user authentication",
    "Responsive design for mobile and desktop",
    "Seamless integration with MySQL database",
    "Dynamic updates with PHP backend"
  ],
  challenges: "Implementing real-time stock updates efficiently while maintaining data integrity and security.",
  solution: "Utilized AJAX for asynchronous updates, MySQL for structured data management, and Bootstrap for a responsive UI across devices.",
  outcome: "Successfully reduced stock management errors by 40%, improved tracking efficiency, and enabled real-time inventory control.",
  screenshots: [
    "/media/In1.png",
    "/media/In2.png",
    "/media/In3.png"
  ]
},
{
  id: 5,
  title: "Portfolio",
  description: "A personal portfolio website showcasing projects, skills, and experience with interactive animations.",
  image: "/media/P1.png",
  tags: ["HTML", "CSS", "JavaScript", "Animations"],
  featured: true,
  github: "https://github.com/nevinnoby/My_Portfolio",
  liveUrl: "https://nevinnoby.github.io/My_Portfolio/#",
  category: "web",
  completionPercentage: 100,
  startDate: "January 2023",
  endDate: "March 2023",
  teamSize: 1,
  role: "Frontend Developer",
  problemStatement: "Create an engaging and visually appealing portfolio to showcase projects, skills, and achievements in an interactive way.",
  systemFeatures: [
    {
      name: "Portfolio Sections",
      features: [
        "Introduction with interactive animations",
        "Projects showcase with live previews",
        "Skills section with progress bars",
        "Contact form with email integration"
      ]
    },
    {
      name: "Responsive Design",
      features: [
        "Fully optimized for mobile, tablet, and desktop",
        "Smooth transitions and hover effects",
        "Dark mode for better accessibility"
      ]
    },
    {
      name: "Animation Effects",
      features: [
        "Scroll animations using GSAP",
        "Parallax effects for immersive experience",
        "Hover-based animations for interactive UI"
      ]
    }
  ],
  techStack: {
    frontend: ["HTML", "CSS", "JavaScript"],
    animation: ["GSAP", "CSS Keyframes"],
    tools: ["Figma", "VS Code", "GitHub"]
  },
  methodology: "Iterative Design Process",
  keyFeatures: [
    "Fully responsive layout",
    "Smooth animations and transitions",
    "Showcase of projects with live previews",
    "Interactive UI with hover effects",
    "Custom-built animations using GSAP",
    "Optimized for fast loading speed"
  ],
  challenges: "Ensuring smooth animations without performance issues on low-end devices.",
  solution: "Used GSAP for optimized animations and lazy loading techniques for faster performance.",
  outcome: "Successfully created a visually engaging portfolio, increasing project visibility and professional reach.",
  screenshots: [
    "/media/P1.png",
    "/media/P2.png",
    "/media/P3.png"
  ]
},
{
  id: 6,
  title: "Travel",
  description: "A modern and highly responsive travel website for booking holiday destinations with smooth animations and filtering options.",
  image: "/media/tr3.png",
  tags: ["React", "CSS", "AOS", "Responsive UI"],
  featured: false,
  github: "https://github.com/nevinnoby/travel-webapp",
  liveUrl: "https://nevinnoby.github.io/travel-webapp/",
  category: "web",
  completionPercentage: 100,
  startDate: "August 2024",
  endDate: "August 2024",
  teamSize: 1,
  role: "Frontend Developer",
  problemStatement: "Develop a visually appealing and interactive travel website that allows users to browse and filter holiday destinations effortlessly.",
  systemFeatures: [
    {
      name: "UI/UX Design",
      features: [
        "Modern and clean interface with smooth transitions",
        "Highly responsive layout for all screen sizes",
        "Filter system for sorting destinations by category"
      ]
    },
    {
      name: "Animations & Effects",
      features: [
        "AOS (Animate on Scroll) for smooth animations",
        "Parallax scrolling effects",
        "Hover-based interactive UI elements"
      ]
    }
  ],
  techStack: {
    frontend: ["React", "CSS", "AOS", "Framer Motion"],
    tools: ["Figma", "VS Code", "GitHub"]
  },
  methodology: "Component-Based Development",
  keyFeatures: [
    "Fully responsive design for mobile, tablet, and desktop",
    "Smooth animations and transitions",
    "Filter categories for easy navigation",
    "Optimized for fast performance",
    "Interactive hover effects"
  ],
  challenges: "Ensuring smooth performance despite heavy animations and optimizing responsiveness across all devices.",
  solution: "Used AOS for lightweight animations and implemented lazy loading techniques for better performance.",
  outcome: "Successfully developed a high-performance travel website with a sleek UI and smooth animations.",
  screenshots: [
    "/media/tr3.png",
    "/media/tr2.png",
    "/media/tr1.png"
  ]
},
{
  id: 7,
  title: "ElectraRide",
  description: "A responsive front-end platform for electric vehicle users to explore charging stations and EV-related details with smooth animations and intuitive UI.",
  image: "/media/Ele.png",
  tags: ["React", "CSS", "AOS", "EV", "Responsive UI"],
  featured: false,
  github: "https://github.com/nevinnoby/ElectraRide",
  liveUrl: "https://electraride.vercel.app/",
  category: "web",
  completionPercentage: 100,
  startDate: "January 2024",
  endDate: "February 2024",
  teamSize: 1,
  role: "Frontend Developer",
  problemStatement: "Design a clean and interactive platform that helps users discover electric vehicle charging stations and essential information, with a user-friendly responsive interface.",
  systemFeatures: [
    {
      name: "UI/UX Design",
      features: [
        "Clean layout tailored for EV enthusiasts",
        "Highly responsive interface across all devices",
        "Filter functionality for easy search of EV stations"
      ]
    },
    {
      name: "Animations & Effects",
      features: [
        "Smooth scroll-based animations using AOS",
        "Modern card design with hover effects",
        "Seamless navigation transitions"
      ]
    }
  ],
  techStack: {
    frontend: ["React", "CSS", "AOS", "Framer Motion"],
    tools: ["Figma", "VS Code", "GitHub"]
  },
  methodology: "Component-Based Development",
  keyFeatures: [
    "EV charging station discovery interface",
    "Responsive grid layout for stations and features",
    "Smooth animations enhancing user experience",
    "Filterable search based on categories or location",
    "Performance optimized and visually rich design"
  ],
  challenges: "Building a scalable component structure while maintaining animation smoothness and mobile responsiveness.",
  solution: "Utilized modular component design and animation libraries like AOS with optimization techniques.",
  outcome: "Successfully developed a highly responsive EV platform interface ready for integration with backend APIs.",
  screenshots: [
    "/media/El1.png",
    "/media/El2.png",
    "/media/El3.png"
  ]
}
,{
  id: 8,
  title: "Tomato",
  description: "A highly responsive and animated UI for an online food ordering platform built using React. It features smooth transitions, category-based sorting, and a complete navigation bar.",
  image: "/media/T11.png",
  tags: ["React", "CSS", "Animations", "Responsive Design"],
  featured: false,
  github: "https://github.com/nevinnoby/food-app",
  liveUrl: "https://food-app-two-rouge.vercel.app/",
  category: "web",
  completionPercentage: 40,
  startDate: "January 2024",
  endDate: "February 2024",
  teamSize: 1,
  role: "Frontend Developer",
  problemStatement: "Design an engaging and user-friendly frontend for a food ordering platform with category sorting, smooth animations, and mobile responsiveness.",
  systemFeatures: [
    {
      name: "User Interface",
      features: [
        "Attractive and responsive layout",
        "Category-based food filtering",
        "Reusable card components for dishes",
        "Fixed and responsive navbar"
      ]
    },
    {
      name: "User Experience",
      features: [
        "Smooth animations and transitions",
        "Hover effects and interactive design",
        "Mobile-friendly layout",
        "Scalable component structure"
      ]
    }
  ],
  techStack: {
    frontend: ["React", "CSS"],
    tools: ["VS Code", "GitHub"]
  },
  methodology: "Component-based design for modular UI",
  keyFeatures: [
    "Dynamic food category sorting",
    "Fully designed navbar with navigation links",
    "Responsive across all device sizes",
    "Animated UI elements using AOS"
  ],
  challenges: "Creating a scalable component structure while maintaining smooth animation and responsiveness.",
  solution: "Used animation libraries like AOS and built reusable components to handle different food sections and UI blocks.",
  outcome: "Successfully developed a polished frontend UI ready for backend integration and deployment.",
  screenshots: [
    "/media/t1.png",
    "/media/t2.png",
    "/media/t3.png"
  ]
}
,
{
  id: 9,
  title: "Tic Tac Toe Game",
  description: "A classic Tic Tac Toe game built with HTML, CSS, and JavaScript, enhanced with smooth animations and responsive design for all screen sizes.",
  image: "/media/tic.png",
  tags: ["HTML", "CSS", "JavaScript", "Game", "Animation"],
  featured: false,
  github: "https://github.com/nevinnoby/Tic_Tac_Toe",
  liveUrl: "https://nevinnoby.github.io/Tic_Tac_Toe/",
  category: "game",
  completionPercentage: 100,
  startDate: "August 2023",
  endDate: "August 2023",
  teamSize: 1,
  role: "Frontend Developer",
  problemStatement: "Create a fun, interactive, and visually appealing Tic Tac Toe game playable across all devices with a clean and minimal UI.",
  systemFeatures: [
    {
      name: "Game Mechanics",
      features: [
        "2-player game mode",
        "Automatic win/tie detection",
        "Reset functionality"
      ]
    },
    {
      name: "Visuals and Animations",
      features: [
        "CSS animations for turn transitions",
        "Interactive UI with hover effects",
        "Responsive design for mobile and desktop"
      ]
    }
  ],
  techStack: {
    frontend: ["HTML", "CSS", "JavaScript"],
    tools: ["VS Code", "GitHub"]
  },
  methodology: "Vanilla JS development with modular design",
  keyFeatures: [
    "Interactive grid-based gameplay",
    "Winning logic implemented in pure JS",
    "Smooth animations and hover effects",
    "Responsive layout across all devices"
  ],
  challenges: "Managing game state and ensuring accurate win/tie conditions without a framework.",
  solution: "Used JavaScript event listeners and array-based game logic to handle state and DOM updates.",
  outcome: "A lightweight, fast-loading game with engaging visuals and a smooth user experience.",
  screenshots: [
    "/media/ti1.png",
    "/media/ti2.png"
  ]
}
,
{
  id: 10,
  title: "Weather Widget",
  description: "A responsive and animated weather widget that fetches real-time weather data based on user location input using OpenWeather API.",
  image: "/media/wea.png",
  tags: ["HTML", "CSS", "JavaScript", "OpenWeather API", "Animation"],
  featured: false,
  github: "https://github.com/nevinnoby/weather-app",
  liveUrl: "https://nevinnoby.github.io/weather-app/",
  category: "widget",
  completionPercentage: 100,
  startDate: "September 2023",
  endDate: "September 2023",
  teamSize: 1,
  role: "Frontend Developer",
  problemStatement: "Design a sleek weather widget that allows users to check the weather of any location with animated weather icons and real-time updates.",
  systemFeatures: [
    {
      name: "Weather Display",
      features: [
        "City search functionality",
        "Real-time temperature display",
        "Animated icons for sunny, rainy, cloudy, etc.",
        "Displays humidity and wind speed"
      ]
    },
    {
      name: "User Experience",
      features: [
        "Smooth animations",
        "Responsive design for all devices",
        "Auto-clear of input after search",
        "Error handling for invalid city names"
      ]
    }
  ],
  techStack: {
    frontend: ["HTML", "CSS", "JavaScript"],
    api: ["OpenWeather API"],
    tools: ["VS Code", "GitHub"]
  },
  methodology: "Single-page widget with modular JavaScript functions",
  keyFeatures: [
    "Live weather data fetching",
    "Search by city name",
    "Animated weather icons",
    "Humidity and wind speed display",
    "Responsive and minimal UI"
  ],
  challenges: "Mapping the API's weather data to appropriate visuals and maintaining a smooth UI on all screen sizes.",
  solution: "Used OpenWeather's icon set and condition codes with JavaScript conditionals for dynamic UI rendering.",
  outcome: "A visually appealing and functional weather widget, perfect for integrating into larger applications or personal dashboards.",
  screenshots: [
    "/media/w1.png",
    "/media/w2.png"
  ]
}
  ];

  // Trigger stats animation on initial load
  useEffect(() => {
    setAnimateStats(true);
    const timer = setTimeout(() => setAnimateStats(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Calculate stats
  const totalProjects = projects.length;
  const featuredProjects = projects.filter(p => p.featured).length;
  const uniqueTechnologies = [...new Set(projects.flatMap(p => p.tags))];
  const techCount = uniqueTechnologies.length;
  
  // Category stats for expanded view
  const categoryStats = {};
  projects.forEach(project => {
    if (!categoryStats[project.category]) {
      categoryStats[project.category] = 0;
    }
    categoryStats[project.category]++;
  });

  // Tech distribution for expanded view
  const techDistribution = {};
  projects.forEach(project => {
    project.tags.forEach(tag => {
      if (!techDistribution[tag]) {
        techDistribution[tag] = 0;
      }
      techDistribution[tag]++;
    });
  });

  // Filter and search projects 
  const filteredProjects = projects.filter(project => {
    const matchesFilter = filter === "all" || (filter === "featured" ? project.featured : project.category === filter);
    const matchesSearch = searchTerm === "" || 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesFilter && matchesSearch;
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", duration: 0.5 } },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } }
  };

  const statCardVariants = {
    collapsed: { height: "100px" },
    expanded: { height: "340px" }
  };

  // Handle opening project details
  const openProjectDetails = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  };

  // Handle closing project details
  const closeProjectDetails = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto"; // Re-enable scrolling
  };

  // Handle stat card toggling
  const toggleStatCard = (cardName) => {
    if (activeStatCard === cardName) {
      setActiveStatCard(null);
    } else {
      setActiveStatCard(cardName);
    }
  };

  return (
    
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Hero Section with Parallax Effect */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full bg-gradient-to-r from-purple-700 via-indigo-700 to-blue-800 py-24 px-6 overflow-hidden"
      >
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-6xl mx-auto relative z-10"
        >
          <div className="max-w-6xl mx-auto relative z-10">
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.1, duration: 0.5 }}
    className="mb-8"
  >
  
    <button 
      onClick={() => window.location.href = '/'}
      className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm transition-all duration-300"
    >
      <ArrowLeft className="h-4 w-4" />
      <span>Back to Home</span>
    </button>
  </motion.div>
  
  <motion.div 
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.2, duration: 0.6 }}
  >
 
  </motion.div>
</div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">My Project Portfolio</h1>
          <p className="text-xl text-purple-200 max-w-2xl">Showcasing my creativity, skills, and passion for development through innovative solutions and technical excellence</p>
        </motion.div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-500 opacity-20 rounded-full"></div>
          <div className="absolute top-1/2 -left-20 w-64 h-64 bg-blue-500 opacity-20 rounded-full"></div>
          <div className="absolute -bottom-32 right-1/3 w-80 h-80 bg-indigo-500 opacity-20 rounded-full"></div>
        </div>
      </motion.div>

      {/* Enhanced Stats Section */}
      <div className="max-w-6xl mx-auto px-6 -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Projects Stats Card */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            variants={statCardVariants}
            animate={activeStatCard === "projects" ? "expanded" : "collapsed"}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden relative"
          >
            <div 
              className="p-6 cursor-pointer"
              onClick={() => toggleStatCard("projects")}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Book className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      <motion.span
                        initial={{ opacity: 1 }}
                        animate={{ opacity: animateStats ? [1, 0, 1, 0, 1] : 1 }}
                        transition={{ duration: 1, times: [0, 0.2, 0.4, 0.6, 0.8] }}
                      >
                        {totalProjects}
                      </motion.span>
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">Total Projects</p>
                  </div>
                </div>
                <ArrowUpRight 
                  className={`h-5 w-5 text-gray-500 dark:text-gray-400 transition-transform duration-300 ${activeStatCard === "projects" ? "rotate-180" : ""}`} 
                />
              </div>
              
              <div className="mt-3 bg-gray-100 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                <motion.div 
                  className="bg-blue-500 h-full"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: animateStats ? 1.5 : 0 }}
                />
              </div>
            </div>
            
            {/* Expanded content */}
            <div className="p-6 pt-0">
              <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-3">Project Status</h4>
              <div className="space-y-3">
                {['In Progress', 'Completed'].map((status, idx) => {
                  const count = status === 'Completed' 
                    ? projects.filter(p => p.completionPercentage === 100).length
                    : projects.filter(p => p.completionPercentage < 100).length;
                  const percentage = Math.round((count / totalProjects) * 100);
                  
                  return (
                    <div key={status} className="space-y-1.5">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-400">{status}</span>
                        <span className="text-gray-700 dark:text-gray-300 font-medium">{count} ({percentage}%)</span>
                      </div>
                      <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 overflow-hidden">
                        <motion.div 
                          className={`${idx === 0 ? 'bg-amber-500' : 'bg-green-500'} h-full`}
                          initial={{ width: 0 }}
                          animate={{ width: activeStatCard === "projects" ? `${percentage}%` : 0 }}
                          transition={{ duration: 0.7, delay: 0.1 }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Category breakdown */}
              <h4 className="font-medium text-gray-700 dark:text-gray-300 mt-5 mb-3">Categories</h4>
              <div className="space-y-3">
                {Object.entries(categoryStats).map(([category, count], idx) => {
                  const percentage = Math.round((count / totalProjects) * 100);
                  const colors = ['bg-pink-500', 'bg-purple-500', 'bg-indigo-500', 'bg-blue-500'];
                  
                  return (
                    <div key={category} className="space-y-1.5">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-400 capitalize">{category}</span>
                        <span className="text-gray-700 dark:text-gray-300 font-medium">{count} ({percentage}%)</span>
                      </div>
                      <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 overflow-hidden">
                        <motion.div 
                          className={`${colors[idx % colors.length]} h-full`}
                          initial={{ width: 0 }}
                          animate={{ width: activeStatCard === "projects" ? `${percentage}%` : 0 }}
                          transition={{ duration: 0.7, delay: 0.2 + (idx * 0.1) }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
          
          {/* Featured Projects Stats Card */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            variants={statCardVariants}
            animate={activeStatCard === "featured" ? "expanded" : "collapsed"}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden relative"
          >
            <div 
              className="p-6 cursor-pointer"
              onClick={() => toggleStatCard("featured")}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
                    <Award className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
                      <motion.span
                        initial={{ opacity: 1 }}
                        animate={{ opacity: animateStats ? [1, 0, 1, 0, 1] : 1 }}
                        transition={{ duration: 1, times: [0, 0.2, 0.4, 0.6, 0.8] }}
                      >
                        {featuredProjects}
                      </motion.span>
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">Featured Projects</p>
                  </div>
                </div>
                <ArrowUpRight 
                  className={`h-5 w-5 text-gray-500 dark:text-gray-400 transition-transform duration-300 ${activeStatCard === "featured" ? "rotate-180" : ""}`} 
                />
              </div>
              
              <div className="mt-3 bg-gray-100 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                <motion.div 
                  className="bg-yellow-500 h-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${(featuredProjects / totalProjects) * 100}%` }}
                  transition={{ duration: animateStats ? 1.5 : 0 }}
                />
              </div>
            </div>
            
            {/* Expanded content */}
            <div className="p-6 pt-0">
              <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-4">Featured Project Highlights</h4>
              
              <div className="space-y-4">
                {projects.filter(p => p.featured).map((project, idx) => (
                  <motion.div 
                    key={project.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ 
                      opacity: activeStatCard === "featured" ? 1 : 0,
                      x: activeStatCard === "featured" ? 0 : -20
                    }}
                    transition={{ duration: 0.3, delay: 0.1 + (idx * 0.1) }}
                    className="flex items-center space-x-3 bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg"
                  >
                    <div className="h-12 w-12 rounded-md overflow-hidden flex-shrink-0">
                      <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
                    </div>
                    <div className="flex-grow">
                      <h5 className="font-medium text-gray-800 dark:text-gray-200">{project.title}</h5>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {project.tags.slice(0, 2).map(tag => (
                          <span key={tag} className="text-xs px-1.5 py-0.5 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded">
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 2 && (
                          <span className="text-xs px-1.5 py-0.5 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded">
                            +{project.tags.length - 2}
                          </span>
                        )}
                      </div>
                    </div>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        openProjectDetails(project);
                      }}
                      className="p-1.5 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      <ArrowUpRight className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                    </button>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-4 flex justify-center">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setFilter("featured");
                    setActiveStatCard(null);
                  }}
                  className="text-sm px-3 py-1.5 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg transition-colors"
                >
                  View All Featured
                </button>
              </div>
            </div>
          </motion.div>
          
          {/* Technologies Stats Card */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            variants={statCardVariants}
            animate={activeStatCard === "tech" ? "expanded" : "collapsed"}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden relative"
          >
            <div 
              className="p-6 cursor-pointer"
              onClick={() => toggleStatCard("tech")}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <Tag className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-green-600 dark:text-green-400">
                      <motion.span
                        initial={{ opacity: 1 }}
                        animate={{ opacity: animateStats ? [1, 0, 1, 0, 1] : 1 }}
                        transition={{ duration: 1, times: [0, 0.2, 0.4, 0.6, 0.8] }}
                      >
                        {techCount}
                      </motion.span>
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">Technologies Used</p>
                  </div>
                </div>
                <ArrowUpRight 
                  className={`h-5 w-5 text-gray-500 dark:text-gray-400 transition-transform duration-300 ${activeStatCard === "tech" ? "rotate-180" : ""}`} 
                />
              </div>
              
              <div className="mt-3 bg-gray-100 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                <motion.div 
                  className="bg-green-500 h-full"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: animateStats ? 1.5 : 0 }}
                />
              </div>
            </div>
            
            {/* Expanded content */}
            <div className="p-6 pt-0">
              <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-3">Most Used Technologies</h4>
              
              {/* Technology tags with usage count */}
              <div className="flex flex-wrap gap-2">
                {Object.entries(techDistribution)
                  .sort((a, b) => b[1] - a[1])
                  .slice(0, 10)
                  .map(([tech, count], idx) => (
                    <motion.span 
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ 
                        opacity: activeStatCard === "tech" ? 1 : 0,
                        scale: activeStatCard === "tech" ? 1 : 0.8
                      }}
                      transition={{ duration: 0.3, delay: 0.1 + (idx * 0.05) }}
                      className="px-3 py-1.5 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-lg text-sm flex items-center"
                    >
                      {tech}
                      <span className="ml-1.5 bg-green-200 dark:bg-green-800 text-xs px-1.5 py-0.5 rounded-full">
                        {count}
                      </span>
                    </motion.span>
                  ))
                }
              </div>
              
              {/* Technology distribution visualization */}
              <div className="mt-5">
                <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-3">Usage Distribution</h4>
                <div className="space-y-3">
                  {Object.entries(techDistribution)
                    .sort((a, b) => b[1] - a[1])
                    .slice(0, 5)
                    .map(([tech, count], idx) => {
                      const percentage = Math.round((count / projects.length) * 100);
                      const colors = ['bg-green-500', 'bg-emerald-500', 'bg-teal-500', 'bg-cyan-500', 'bg-blue-500'];
                      
                      return (
                        <div key={tech} className="space-y-1.5">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600 dark:text-gray-400">{tech}</span>
                            <span className="text-gray-700 dark:text-gray-300 font-medium">{count} projects</span>
                          </div>
                          <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 overflow-hidden">
                            <motion.div 
                              className={`${colors[idx % colors.length]} h-full`}
                              initial={{ width: 0 }}
                              animate={{ width: activeStatCard === "tech" ? `${percentage}%` : 0 }}
                              transition={{ duration: 0.7, delay: 0.2 + (idx * 0.1) }}
                            />
                          </div>
                        </div>
                      );
                    })
                  }
                </div>
              </div>
              
              <div className="mt-4 flex justify-center">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveStatCard(null);
                    // Could open a tech filter modal or view
                  }}
                  className="text-sm px-3 py-1.5 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
                >
                  Filter by Technology
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Search and Filter Section */}
      <div className="max-w-6xl mx-auto mt-12 px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="relative w-full md:w-96 mb-4 md:mb-0">
            <input 
              type="text" 
              placeholder="Search projects..." 
              className="w-full py-2 px-4 pl-10 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 text-gray-500 dark:text-gray-400" size={18} />
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter size={18} className="text-gray-700 dark:text-gray-300" />
              <select 
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="py-2 px-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
              >
                <option value="all">All Projects</option>
                <option value="web">Web Development</option>
                <option value="mobile">Mobile Apps</option>
                <option value="ai">AI/ML Projects</option>
                <option value="featured">Featured</option>
              </select>
            </div>
            
            <div className="flex bg-gray-200 dark:bg-gray-800 rounded-lg p-1">
              <button 
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-md ${viewMode === "grid" ? "bg-white dark:bg-gray-700 shadow-sm" : ""}`}
              >
                <Grid size={18} className="text-gray-700 dark:text-gray-300" />
              </button>
              <button 
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-md ${viewMode === "list" ? "bg-white dark:bg-gray-700 shadow-sm" : ""}`}
              >
                <List size={18} className="text-gray-700 dark:text-gray-300" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "flex flex-col space-y-6"}
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className={`bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 
                  ${viewMode === "list" ? "flex flex-col md:flex-row" : ""}`}
              >
                <div className={`${viewMode === "list" ? "md:w-64 flex-shrink-0" : ""}`}>
                  <div className="relative group">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 w-full">
                        <p className="text-white text-sm truncate">{project.description}</p>
                      </div>
                    </div>
                    {project.featured && (
                      <div className="absolute top-2 right-2 bg-yellow-400 text-yellow-900 p-1.5 rounded-full">
                        <Star size={16} />
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="px-2 py-1 text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center mt-auto">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      >
                        <Github size={18} className="mr-1" />
                        <span className="text-sm">Code</span>
                      </a>
                    )}
                    
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      >
                        <ExternalLink size={18} className="mr-1" />
                        <span className="text-sm">Live Demo</span>
                      </a>
                    )}
                    
                    <button 
                      onClick={() => openProjectDetails(project)}
                      className="px-3 py-1.5 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-200 flex items-center space-x-1"
                    >
                      <span>Details</span>
                      <ArrowUpRight size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-12 text-gray-500 dark:text-gray-400">
              <p className="text-lg mb-4">No projects match your current filter</p>
              <button 
                onClick={() => {setFilter("all"); setSearchTerm("");}} 
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                View All Projects
              </button>
            </div>
          )}
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
            <motion.div 
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white dark:bg-gray-900 w-full max-w-5xl max-h-[90vh] rounded-xl overflow-hidden shadow-2xl"
            >
              <div className="relative">
                {/* Banner image */}
                <div className="h-48 md:h-64 bg-gradient-to-r from-blue-600 to-purple-600 relative">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover opacity-50"
                  />
                  <button 
                    onClick={closeProjectDetails}
                    className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-colors"
                  >
                    <X size={24} className="text-white" />
                  </button>
                </div>
                
                {/* Project title and tags */}
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="px-2 py-1 text-xs bg-purple-500/70 text-white rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Project details content */}
              <div className="overflow-y-auto max-h-[calc(90vh-16rem)]">
                <div className="p-6">
                  {/* Quick info cards */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <div className="flex items-center space-x-3 bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
                      <Calendar className="text-purple-600 dark:text-purple-400" size={20} />
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Timeline</p>
                        <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                          {selectedProject.startDate} - {selectedProject.endDate}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
                      <Users className="text-purple-600 dark:text-purple-400" size={20} />
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Team Size</p>
                        <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                          {selectedProject.teamSize} {selectedProject.teamSize === 1 ? 'Person' : 'People'}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
                      <Code className="text-purple-600 dark:text-purple-400" size={20} />
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Role</p>
                        <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                          {selectedProject.role}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
                      <Clock className="text-purple-600 dark:text-purple-400" size={20} />
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Methodology</p>
                        <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                          {selectedProject.methodology}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Problem Statement */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Problem Statement</h3>
                    <p className="text-gray-600 dark:text-gray-300">{selectedProject.problemStatement}</p>
                  </div>
                  
                  {/* Tech Stack */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Technology Stack</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {Object.entries(selectedProject.techStack).map(([category, technologies]) => (
                        <div key={category} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                          <h4 className="text-lg font-medium text-purple-600 dark:text-purple-400 mb-2 capitalize">{category}</h4>
                          <div className="flex flex-wrap gap-2">
                            {technologies.map((tech, index) => (
                              <span 
                                key={index} 
                                className="inline-flex items-center px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm"
                              >
                                <Layers size={14} className="mr-1 text-purple-500" />
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Key Features */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Key Features</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                      {selectedProject.keyFeatures.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <div className="flex-shrink-0 h-5 w-5 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mt-0.5 mr-2">
                            <div className="h-2 w-2 rounded-full bg-purple-600 dark:bg-purple-400"></div>
                          </div>
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Challenges & Solutions */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Challenges & Solutions</h3>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-5">
                      <div className="mb-4">
                        <h4 className="text-md font-medium text-purple-600 dark:text-purple-400 mb-2">Challenge</h4>
                        <p className="text-gray-700 dark:text-gray-300">{selectedProject.challenges}</p>
                      </div>
                      <div>
                        <h4 className="text-md font-medium text-purple-600 dark:text-purple-400 mb-2">Solution</h4>
                        <p className="text-gray-700 dark:text-gray-300">{selectedProject.solution}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Outcome */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Outcome</h3>
                    <div className="p-4 border-l-4 border-green-500 bg-green-50 dark:border-green-600 dark:bg-green-900/20">
                      <p className="text-gray-700 dark:text-gray-300">{selectedProject.outcome}</p>
                    </div>
                  </div>
                  
                  {/* Screenshots carousel */}
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Screenshots</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {selectedProject.screenshots.map((screenshot, index) => (
                        <div key={index} className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                          <img 
                            src={screenshot} 
                            alt={`${selectedProject.title} screenshot ${index + 1}`}
                            className="w-full h-40 object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Footer actions */}
              <div className="border-t border-gray-200 dark:border-gray-700 p-4 flex justify-between">
                <button 
                  onClick={closeProjectDetails}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  Close
                </button>
                <div className="flex space-x-3">
                  {selectedProject.github && (
                    <a 
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors flex items-center"
                    >
                      <Github size={18} className="mr-2" />
                      View Code
                    </a>
                  )}
                  {selectedProject.liveUrl && (
                    <a 
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center"
                    >
                      <ExternalLink size={18} className="mr-2" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Footer */}
     
        <ContactPage  darkMode={darkMode} />
      
    </div>
  );
}