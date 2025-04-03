"use client";

import { useState } from 'react';
import { motion } from "framer-motion";

const skills = [
  { 
    name: "HTML5", 
    level: 92, 
    color: "#E34F26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    description: "Expert in semantic markup, accessibility practices, and modern HTML5 features.",
    category: "Frontend"
  },
  { 
    name: "CSS3", 
    level: 90, 
    color: "#1572B6",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    description: "Advanced skills in layouts, animations, responsive design, and CSS frameworks.",
    category: "Frontend"
  },
  { 
    name: "JavaScript", 
    level: 88, 
    color: "#F0DB4F",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    description: "Expert in modern ES6+ features, async programming, and DOM manipulation.",
    category: "Frontend"
  },
  { 
    name: "ReactJs", 
    level: 85, 
    color: "#61DAFB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    description: "Proficient with hooks, context API, and state management solutions.",
    category: "Frontend"
  },
  { 
    name: "Bootstrap", 
    level: 88, 
    color: "#7952B3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    description: "Skilled in rapid prototyping and responsive UI development with Bootstrap components.",
    category: "Frontend"
  },
  { 
    name: "PHP", 
    level: 78, 
    color: "#777BB4",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    description: "Experience in server-side scripting, form handling, and database integration.",
    category: "Backend"
  },
  { 
    name: "Python", 
    level: 82, 
    color: "#3776AB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    description: "Proficient in data processing, automation scripts, and backend development.",
    category: "Backend"
  },
  { 
    name: "C", 
    level: 75, 
    color: "#A8B9CC",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    description: "Strong foundation in memory management, pointers, and system programming.",
    category: "Languages"
  },
  { 
    name: "SQL", 
    level: 80, 
    color: "#4479A1",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    description: "Skilled in database design, complex queries, and data management.",
    category: "Backend"
  },
  { 
    name: "Git", 
    level: 85, 
    color: "#F05032",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    description: "Versed in branching strategies, conflict resolution, and collaborative workflows.",
    category: "Tools"
  },
  { 
    name: "Data Structures", 
    level: 78, 
    color: "#FF6B6B",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", // Using JS icon as placeholder
    description: "Strong knowledge of arrays, linked lists, trees, graphs, and their implementations.",
    category: "Computer Science"
  },
  { 
    name: "Algorithms", 
    level: 76, 
    color: "#6BCB77",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", // Using Python icon as placeholder
    description: "Experience with sorting, searching, dynamic programming, and optimization techniques.",
    category: "Computer Science"
  },
  { 
    name: "Operating Systems", 
    level: 74, 
    color: "#4D96FF",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", // Using Linux icon as placeholder
    description: "Understanding of process management, memory allocation, file systems, and scheduling algorithms.",
    category: "Computer Science"
  },
];

const languages = [
  {
    name: "Hindi",
    level: 40,
    proficiency: "Basic",
    color: "#3498db"
  },
  {
    name: "English",
    level: 90,
    proficiency: "Fluent",
    color: "#e74c3c"
  },
//   {
//     name: "Spanish",
//     level: 60,
//     proficiency: "Intermediate",
//     color: "#f1c40f"
//   },
  {
    name: "Malayalam",
    level: 95,
    proficiency: "Native",
    color: "#2ecc71"
  }
];

const SkillCard = ({ skill, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      className="relative bg-gray-800 rounded-xl overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="p-8">
        <div className="flex items-center mb-4">
          <motion.img 
            src={skill.icon} 
            alt={skill.name} 
            className="w-12 h-12 mr-4"
            initial={{ rotate: 0 }}
            animate={isHovered ? { rotate: 360 } : {}}
            transition={{ duration: 1 }}
          />
          <h3 className="text-2xl font-bold">{skill.name}</h3>
        </div>
        
        <div className="relative h-3 w-full bg-gray-700 rounded-full overflow-hidden mb-2">
          <motion.div
            className="absolute top-0 left-0 h-full rounded-full"
            style={{ backgroundColor: skill.color }}
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </div>
        
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-medium text-gray-400">Proficiency</span>
          <span 
            className="text-sm font-bold" 
            style={{ color: skill.color }}
          >
            {skill.level}%
          </span>
        </div>
        
        <motion.p 
          className="text-gray-400 text-sm"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
        >
          {skill.description}
        </motion.p>
      </div>
      
      <motion.div 
        className="absolute bottom-0 left-0 h-1 w-full"
        style={{ backgroundColor: skill.color }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: index * 0.2 }}
      />
    </motion.div>
  );
};

const LanguageCard = ({ language, index }) => {
  return (
    <motion.div
      className="bg-gray-800 rounded-xl p-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-xl font-semibold">{language.name}</h3>
        <span 
          className="text-sm font-bold px-3 py-1 rounded-full" 
          style={{ backgroundColor: language.color, color: "#fff" }}
        >
          {language.proficiency}
        </span>
      </div>
      
      <div className="relative h-2 w-full bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 h-full rounded-full"
          style={{ backgroundColor: language.color }}
          initial={{ width: 0 }}
          whileInView={{ width: `${language.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        />
      </div>
    </motion.div>
  );
};

const ExperienceLevel = () => {
  const categories = [
    { name: "Beginner", range: [0, 40], color: "#FF6B6B" },
    { name: "Intermediate", range: [41, 70], color: "#FFD93D" },
    { name: "Advanced", range: [71, 90], color: "#6BCB77" },
    { name: "Expert", range: [91, 100], color: "#4D96FF" },
  ];

  return (
    <div className="flex justify-between items-center w-full mt-12 mb-16">
      {categories.map((category, index) => (
        <motion.div 
          key={index}
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div 
            className="w-4 h-4 rounded-full mb-2" 
            style={{ backgroundColor: category.color }}
          />
          <p className="text-sm text-gray-400">{category.name}</p>
          <p className="text-xs text-gray-500">{category.range[0]}-{category.range[1]}%</p>
        </motion.div>
      ))}
    </div>
  );
};

const SkillsFilter = ({ activeFilter, setActiveFilter }) => {
  const filters = ["All", "Frontend", "Backend", "Computer Science", "Tools", "Languages"];
  
  return (
    <motion.div 
      className="flex justify-center flex-wrap gap-4 mb-12"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {filters.map((filter, index) => (
        <motion.button
          key={index}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            activeFilter === filter 
              ? "bg-purple-600 text-white" 
              : "bg-gray-800 text-gray-400 hover:bg-gray-700"
          }`}
          onClick={() => setActiveFilter(filter)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {filter}
        </motion.button>
      ))}
    </motion.div>
  );
};

const SkillsComparison = ({ skills }) => {
  // Select a subset of skills for the comparison chart to avoid overcrowding
  const topSkills = skills.slice(0, 6);
  
  return (
    <motion.div 
      className="mt-20 relative h-64 bg-gray-800 rounded-lg p-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h3 className="text-xl font-bold mb-6 text-center">Skills Comparison</h3>
      <div className="relative h-32">
        {topSkills.map((skill, index) => (
          <motion.div 
            key={index}
            className="absolute bottom-0 rounded-t-lg flex flex-col items-center justify-end"
            style={{ 
              left: `${(100 / topSkills.length) * index}%`, 
              width: `${90 / topSkills.length}%`,
              height: `${skill.level}%`,
              backgroundColor: skill.color
            }}
            initial={{ height: 0 }}
            whileInView={{ height: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            <span className="text-xs font-bold mb-1">{skill.level}%</span>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-between mt-2">
        {topSkills.map((skill, index) => (
          <span key={index} className="text-xs text-gray-400" style={{ width: `${100 / topSkills.length}%`, textAlign: 'center' }}>
            {skill.name}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  
  // Determine what content to display based on the active filter
  let filteredContent;
  
  if (activeFilter === "Languages") {
    // When Languages is selected, show the language cards
    filteredContent = (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {languages.map((language, index) => (
          <LanguageCard key={language.name} language={language} index={index} />
        ))}
      </div>
    );
  } else {
    // Otherwise filter the technical skills
    const filteredSkills = activeFilter === "All" 
      ? skills 
      : skills.filter(skill => skill.category === activeFilter);
    
    filteredContent = (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredSkills.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 px-6">
      <motion.div 
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Header with animated text */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Skills & Expertise
          </motion.h1>
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            A comprehensive overview of my technical skills, programming languages, and communication abilities.
          </motion.p>
        </motion.div>
        
        {/* Skills Legend */}
        <ExperienceLevel />
        
        {/* Filter Buttons */}
        <SkillsFilter activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
        
        {/* Main Content Area - Either skills or languages depending on filter */}
        <motion.div 
          layout
          transition={{ duration: 0.6 }}
        >
          {filteredContent}
        </motion.div>
        
        {/* Skills Comparison Chart - Only show for tech skills, not languages */}
        {activeFilter !== "Languages" && <SkillsComparison skills={skills} />}
        
        {/* Call to Action */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold mb-4">Looking to collaborate?</h3>
          <p className="text-gray-400 mb-6">I'm always open to discussing new projects and opportunities.</p>
          <motion.button 
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;