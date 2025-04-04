"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  Trophy, 
  Users, 
  Code, 
  Target, 
  User, 
  Calendar, 
  ChevronRight, 
  ExternalLink, 
  Github,
  Globe,
  Monitor,
  Clock,
  X,
  ArrowUpRight,
  Gamepad2,
  Award,
  Crown,
  Medal,
  BarChart3,
  Zap,
  Puzzle,
  Lock
} from 'lucide-react';

import ContactPage from '@/components/ContactPage';

interface EventMember {
  id: number;
  name: string;
  role: string;
  image: string;
  contribution: string;
}

interface Challenge {
  id: number;
  title: string;
  description: string;
  points: number;
  difficulty: string;
  isUnlocked: boolean;
}

interface EventImage {
  id: number;
  url: string;
  caption: string;
}

interface EventGalleryProps {
  images: EventImage[];
}

interface GameChallenge {
  type: 'MCQ Challenge' | 'Wikipedia Navigation' | 'Tech Treasure Hunt' | 'Blind Coding'| 'Password Maker' | 'Debugging Challenge'| 'Final Treasure Hunt';
  totalCompleted: number;
  totalChallenges: number;
}

interface EventStats {
  participants: number;
  winners: number;
  challenges: number;
  totalHours: number;
  techStack: string[];
  challengeCompletion: GameChallenge[];
}

const Event: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [selectedImage, setSelectedImage] = useState<EventImage | null>(null);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Event details
  const eventName = "FutureScape";
  const eventTagline = "Asthra 9.O";
  const eventDate = "March 07, 2025";
  const eventVenue = "SJCET, Palai, Annual Tech Fest";
  
  // Event statistics
  const eventStats: EventStats = {
    participants: 30,
    winners: 2,
    challenges: 6+1,
    totalHours: 150,
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    challengeCompletion: [
      { type: 'MCQ Challenge', totalCompleted: 27, totalChallenges: 30 },
      { type: 'Wikipedia Navigation', totalCompleted: 22, totalChallenges: 27 },
      { type: 'Tech Treasure Hunt', totalCompleted: 18, totalChallenges: 22 },
      { type: 'Blind Coding', totalCompleted: 13, totalChallenges: 18 },
      { type: 'Password Maker', totalCompleted: 8, totalChallenges: 13 },
      { type: 'Debugging Challenge', totalCompleted: 4, totalChallenges: 8 },
      { type: 'Final Treasure Hunt', totalCompleted: 2, totalChallenges: 4 }
    ]
  };
  
  // Team members data
  const Coordinators: EventMember[] = [
    {
      id: 1,
      name: "Prof.Mereen Thomas (Faculty Coordinator)",
      role: "",
      image: "/media/miss.png",
      contribution: "Architected the event platform, led the development team, and implemented the real-time leaderboard system"
    },
    {
      id: 2,
      name: "Nevin M Noby ",
      role: "Coordinator",
      image: "/media/prof.jpg",
      contribution: "Built responsive UI components and implemented user authentication"
    },
    {
      id: 3,
      name: "Ruth Susan",
      role: "Coordinator",
      image: "/media/ruth.png",
      contribution: "Developed the API endpoints and database structure"
    }
  ];
  const webTeam: EventMember[] = [
    {
      id: 4,
      name: "Athul Sabu",
      role: "Web Team Lead",
      image: "/media/Athul.png",
      contribution: "Architected the event platform, led the development team, and implemented the real-time leaderboard system"
    },
    {
      id: 5,
      name: "Anish V Mathew",
      role: "Developer",
      image: "/media/Anish.png",
      contribution: "Implemented the challenges, scroing systems, times and other stuff related to the challenge"
    },
    {
      id: 6,
      name: "Navaneeth Krishna",
      role: "Developer",
      image: "/media/Navaneeth.png",
      contribution: "Implemented the challenges, scroing systems, times and other stuff related to the challenge"
    },
    {
      id: 7,
      name: "Allen K Phillip",
      role: "Developer",
      image: "/media/Allen.png",
      contribution: "Implemented the challenges, scroing systems, times and other stuff related to the challenge"
    },
    {
        id: 8,
        name: "Naveen Alex",
        role: "Developer",
        image: "/media/Naveen.png",
        contribution: "Implemented the final capture the flag challenge"
    }
  ];
  
  const coordinationTeam: EventMember[] = [
    {
      id: 9,
      name: "Abhiram S",
      role: "Event Volunteers",
      image: "/media/abhiram.png",
      contribution: "Managed scheduling and venue logistics"
    },
    {
      id: 10,
      name: "Abin Mathew Sunny",
      role: "Event Volunteers",
      image: "/media/abin.jpg",
      contribution: "Oversaw game rules and moderated competitions"
    },
    {
      id: 11,
      name: "Albin Shaju",
      role: "Event Volunteers",
      image: "/media/albin.png",
      contribution: "Managed scheduling and venue logistics"
    },
    {
        id: 12,
        name: "Alen P Aji",
        role: "Event Volunteers",
        image: "/media/alen.jpg",
        contribution: "Oversaw game rules and moderated competitions"
    },
    {
        id: 13,
        name: "Aravind Prakash",
        role: "Event Volunteers",
        image: "/media/aravind.png",
        contribution: "Managed leaderboard updates and participant tracking"
      },
      {
        id: 14,
        name: "Gautham S",
        role: "Event Volunteers",
        image: "/media/gautham.jpg",
        contribution: "Updates challenges and scores in real-time"
      },
      {
        id: 15,
        name: "Joeson Stanes",
        role: "Event Volunteers",
        image: "/media/joson.jpg",
        contribution: "Manage scores"
      },
      {
        id: 16,
        name: "Justine Jayan",
        role: "Event Volunteers",
        image: "/media/justine.png",
        contribution: "Managed overall participants"
      }
  ];
  
  // Challenges data
  const challenges: Challenge[] = [
    {
      id: 1,
      title: "BRAINSTORM_BLITZ",
      description: "MCQ Challenge , 10minutes, 10 Questions, 10 points each, No Negative Points.",
      points: 10*10,
      difficulty: "Easy",
      isUnlocked: true
    },
    {
      id: 2,
      title: "BUGSMASH",
      description: "Find the bug inside the code and fix it 30minutes, 1 Question, 100 points, -10 for each try.",
      points: 100,
      difficulty: "Easy",
      isUnlocked: true
    },
    {
      id: 3,
      title: "CODECRYPT_QUEST",
      description: "Riddles Solving challenges, there will be questions and clues to reach answers, 5 Questions, 100 points for each question, -10 mark each for clues, 30 minutes.",
      points: 500,
      difficulty: "Medium",
      isUnlocked: true
    },
    {
      id: 4,
      title: "CODE_IN_THE_DARK",
      description: "Blind coding challenge cannot see what you are typing able to view number of characters,words,lines entered , 30 minutes, 1 Question, 100 points, -10 for each try.",
      points: 100,
      difficulty: "Hard",
      isUnlocked: true
    },
    {
        id: 5,
        title: "CIPHER_CRAFTER",
        description: "Find the cipher text which satisfieas the given conditions ex.10 character length, first letter uppercase e.t.c , 20 minutes, 200 points, -10 for each check.",
        points: 200,
        difficulty: "Medium",
        isUnlocked: true
      },
      {
        id: 6,
        title: "WIKI_TRAILBLAZER",
        description: "Reach the given target page from the given page using only the links inside the wikipidea page, 20 minutes, 1 Question, 100 points.",
        points: 100,
        difficulty: "Easy",
        isUnlocked: true
      },
      {
        id: 7,
        title: "MISSION:FINAL_HACK",
        description: "Capture the hidden flag hided in the web page, 30 minutes, 500 points.",
        points: 500,
        difficulty: "Legendary",
        isUnlocked: true
      }
  ];
  
  // Event gallery
  const eventImages: EventImage[] = [
    {
      id: 1,
      url: "/media/fu.png",
      caption: "FutureScape HomePage"
    },
    {
      id: 2,
      url: "/media/all.jpg",
      caption: "Entire FutureScape Team"
    },
    {
      id: 3,
      url: "/media/fu2.png",
      caption: "Real-time LeaderBoard"
    },
    {
      id: 4,
      url: "/media/event1.jpg",
      caption: "Event venue"
    },
    {
      id: 5,
      url: "/media/prize.jpg",
      caption: "Prize ceremony highlights"
    },
    {
      id: 6,
      url: "/media/winners.jpg",
      caption: "Winners of the event"
    }
  ];

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
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  const modalVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: 50, opacity: 0 }
  };

  // Component for event gallery
  const EventGallery: React.FC<EventGalleryProps> = ({ images }) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image) => (
          <motion.div
            key={image.id}
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md"
            onClick={() => setSelectedImage(image)}
          >
            <img 
              src={image.url} 
              alt={image.caption} 
              className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <p className="text-white text-sm">{image.caption}</p>
            </div>
          </motion.div>
        ))}
      </div>
    );
  };

  // Progress bar component for challenge completion
  const ProgressBar: React.FC<{ completed: number; total: number; color: string }> = ({ completed, total, color }) => {
    const percentage = (completed / total) * 100;
    
    return (
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-4">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, delay: 0.2 }}
          className={`h-2.5 rounded-full ${color}`}
        />
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section with Parallax Effect */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[70vh] min-h-[500px] bg-gradient-to-r from-indigo-900 via-purple-900 to-violet-900 overflow-hidden"
      >
        {/* Animated gaming particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-blue-500 opacity-20 blur-xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-purple-500 opacity-20 blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-36 h-36 rounded-full bg-pink-500 opacity-20 blur-xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-10 right-10 bg-yellow-500 opacity-50 w-4 h-4 rounded-full"></div>
          <div className="absolute top-20 left-20 bg-green-500 opacity-50 w-3 h-3 rounded-full"></div>
          <div className="absolute bottom-40 right-40 bg-red-500 opacity-50 w-5 h-5 rounded-full"></div>
          
          {/* Gaming grid pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-gray-50 dark:to-gray-900"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col justify-center">
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
              <span>Back to Portfolio</span>
            </button>
          </motion.div>
          
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-5xl"
          >
            <div className="flex items-center mb-2">
              <Gamepad2 className="h-8 w-8 text-purple-400 mr-3" />
              <h2 className="text-2xl font-semibold text-purple-300">{eventDate} • {eventVenue}</h2>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-3 leading-tight">
              {eventName}
            </h1>
            <p className="text-2xl md:text-3xl text-purple-200 mb-8">
              {eventTagline}
            </p>
            <p className="text-xl text-gray-200 max-w-3xl mb-8">
              A mega gaming event coordinated by you, featuring real-time leaderboards, unlockable challenges, 
              and an admin panel for controlling player progression.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg shadow-lg hover:shadow-purple-500/30 transition-all duration-300 flex items-center space-x-2"
                onClick={() => setActiveTab('gallery')}
              >
                <span>View Gallery</span>
                <ChevronRight className="h-5 w-5" />
              </motion.button>
              
              <motion.a
                href="#event-details"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white/20 backdrop-blur hover:bg-white/30 text-white font-medium rounded-lg shadow-lg transition-all duration-300"
              >
                Learn More
              </motion.a>

              {/* Buy Event Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg shadow-lg hover:shadow-green-500/30 transition-all duration-300 flex items-center space-x-2"
                onClick={() => {
                    const footerElement = document.querySelector('footer');
                    footerElement?.scrollIntoView({ behavior: 'smooth' });
                  }}              >
                <span>Buy Event</span>
                <ChevronRight className="h-5 w-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Event Quick Stats */}
      <div className="max-w-6xl mx-auto px-6 -mt-16 relative z-20">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 flex flex-col items-center">
            <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-full mb-3">
              <Users className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                {eventStats.participants}
              </motion.span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-center">Participants</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 flex flex-col items-center">
            <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-3">
              <Trophy className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                {eventStats.winners}
              </motion.span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-center">Winners</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 flex flex-col items-center">
            <div className="p-3 bg-pink-100 dark:bg-pink-900/30 rounded-full mb-3">
              <Target className="h-6 w-6 text-pink-600 dark:text-pink-400" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                {eventStats.challenges}
              </motion.span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-center">Challenges</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 flex flex-col items-center">
            <div className="p-3 bg-violet-100 dark:bg-violet-900/30 rounded-full mb-3">
              <Clock className="h-6 w-6 text-violet-600 dark:text-violet-400" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.3 }}
              >
                {eventStats.totalHours}
              </motion.span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-center">Minutes</p>
          </div>
        </motion.div>
      </div>

      {/* Event Content */}
      <div className="max-w-6xl mx-auto px-6 py-16" id="event-details">
        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200 dark:border-gray-700 pb-2">
          {['overview', 'crew', 'challenges', 'gallery', 'tech'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 font-medium rounded-lg transition-colors ${
                activeTab === tab
                  ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300'
                  : 'text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400'
              }`}
            >
              <span className="capitalize">{tab}</span>
            </button>
          ))}
        </div>

        {/* Tab Content - Overview */}
        {activeTab === 'overview' && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {/* Main Event Description */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Event Overview</h2>
              
              <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  <strong className="text-purple-700 dark:text-purple-400">{eventName}</strong>  was a cutting-edge tech challenge event, integrating coding competitions, problem-solving tasks, and a real-time treasure hunt. As the lead coordinator, I was responsible for conceptualizing and executing every aspect, including event structure, platform development, and participant engagement.

The event featured a custom-built web platform that provided real-time leaderboards, automated challenge progression, and admin-controlled player eliminations. <br /> Participants progressed through multiple rounds, including MCQ challenges, Wikipedia navigation, coding tasks, debugging, and a password creation challenge, leading to a final treasure hunt. This seamless digital infrastructure ensured a fair, competitive, and engaging experience for all participants.
                </p><br />
                <p className="text-lg text-gray-700 dark:text-gray-300"> <strong className="text-purple-700 dark:text-purple-400">Tech Stack</strong> <br />
                The event was powered by a Next.js and Supabase platform, featuring real-time leaderboards, admin-controlled eliminations, and automated challenge progression. 
               
                </p><br />

                <p className="text-lg text-gray-700 dark:text-gray-300"> <strong className="text-purple-700 dark:text-purple-400">Additions</strong> <br />
                A custom admin panel allowed moderators to manage participants seamlessly.

With 30+ participants and a ₹5000 prize pool, Participants advanced through a series of progressively difficult challenges, requiring a mix of technical skills, logical reasoning, and quick decision-making. 
                
                </p>
                
                
              
                           
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6">Key Achievements</h3>
                <ul>
                  <li>Created a fully responsive web application using Next.js and TypeScript</li>
                  <li>Implemented real-time scoring and leaderboard</li>
                  <li>Built an admin control panel to manage eliminations, challenge progression, and player tracking</li>
                  <li>Built a challenge unlocking system that engaged participants throughout the event</li>
                  <li>Ensured fair play with anti-malpractice mechanisms</li>
                  <li>Attracted 30+ participants, making it successfull </li>
                  <li>Managed platform scalability & performance by optimizing database queries & API calls</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-300 mb-4">
                  My role was the Coordinator
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  As the lead coordinator, I managed every aspect of the event from conception to execution:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <div className="p-2 bg-purple-100 dark:bg-purple-900/50 rounded-lg mr-3">
                      <Code className="h-5 w-5 text-purple-700 dark:text-purple-300" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">Technical Team</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Led development of the platform and real-time systems
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-2 bg-purple-100 dark:bg-purple-900/50 rounded-lg mr-3">
                      <Users className="h-5 w-5 text-purple-700 dark:text-purple-300" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">Action Management</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Admin page for managing all the participants,unlocking to next challenges and eliminating participants.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-2 bg-purple-100 dark:bg-purple-900/50 rounded-lg mr-3">
                      <Trophy className="h-5 w-5 text-purple-700 dark:text-purple-300" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">Challenge Design</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Created engaging challenges and scoring system
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-2 bg-purple-100 dark:bg-purple-900/50 rounded-lg mr-3">
                      <BarChart3 className="h-5 w-5 text-purple-700 dark:text-purple-300" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">LeaderBoard</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Oversaw scoring systems and real-time analytics
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative rounded-xl overflow-hidden h-72">
                <img 
                  src="/media/fu.png" 
                  alt="Event highlights" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">Event Highlights</h3>
                    <p className="text-gray-200">
                      The loading page of the event platform, showcasing the event's theme and branding.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Sidebar Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Event Highlights Card */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-violet-600 to-purple-600 p-4">
                  <h3 className="text-xl font-bold text-white">Event Highlights</h3>
                </div>
                <div className="p-5">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Crown className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700 dark:text-gray-300">
                      30+ participants competing across multiple technical challenges
                      </p>
                    </li>
                    <li className="flex items-start">
                      <Medal className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700 dark:text-gray-300">
                      ₹5000 prize pool awarded to top performers
                      </p>
                    </li>
                    <li className="flex items-start">
                      <Zap className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700 dark:text-gray-300">
                      Live leaderboard tracking real-time progress
                      </p>
                    </li>
                    <li className="flex items-start">
                      <Globe className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700 dark:text-gray-300">
                      Custom-built platform using Next.js & Supabase
                      </p>
                    </li>
                    <li className="flex items-start">
                      <Puzzle className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700 dark:text-gray-300">
                      Managed by an 8-member dev/design team for seamless execution
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Technology Stack */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-4">
                  <h3 className="text-xl font-bold text-white">Technology Stack</h3>
                </div>
                <div className="p-5">
                  <div className="flex flex-wrap gap-2">
                    {eventStats.techStack.map((tech, index) => (
                      <span key={index} className="px-3 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-lg text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Challenge Progress */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-4">
                  <h3 className="text-xl font-bold text-white">Challenge Completion</h3>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    {eventStats.challengeCompletion.map((challenge, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 capitalize">
                            {challenge.type} Challenges
                          </span>
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {challenge.totalCompleted}/{challenge.totalChallenges}
                          </span>
                        </div>
                        <ProgressBar 
                          completed={challenge.totalCompleted} 
                          total={challenge.totalChallenges} 
                          color={
                            challenge.type === 'web' ? 'bg-blue-600' :
                            challenge.type === 'design' ? 'bg-pink-600' :
                            challenge.type === 'development' ? 'bg-green-600' :
                            'bg-purple-600'
                          }
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Event Links */}
{/* Event Links */}
<div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-orange-600 to-amber-600 p-4">
                  <h3 className="text-xl font-bold text-white">Event Links</h3>
                </div>
                <div className="p-5">
                  <ul className="space-y-3">
                    <li>
                      <a href="#" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                        <Globe className="h-5 w-5 mr-3" />
                        <span>Event Website</span>
                        <ArrowUpRight className="h-4 w-4 ml-2" />
                      </a>
                      <p>Avalable publicly soon...</p>
                    </li>
                    <li>
                      <a href="https://github.com/orgs/futureScape-asthra/repositories" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                        <Github className="h-5 w-5 mr-3" />
                        <span>Project Repository</span>
                        <ArrowUpRight className="h-4 w-4 ml-2" />
                        <br />
                       
                      </a>
                      <p>Private Repository</p>
                      <h5></h5>
                    </li>
                    <li>
                      <a href="/media/f.mp4" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                        <Monitor className="h-5 w-5 mr-3" />
                        <span>Demo Video</span>
                        <ArrowUpRight className="h-4 w-4 ml-2" />
                      </a>
                    </li>
                    {/* <li>
                      <a href="#" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                        <Award className="h-5 w-5 mr-3" />
                        <span>Results & Winners</span>
                        <ArrowUpRight className="h-4 w-4 ml-2" />
                      </a>
                    </li> */}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Tab Content - Teams */}
        {activeTab === 'crew' && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Behind The Event</h2>
            


            <div className="mb-10">
              <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-400 mb-6">
                Coordinators
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {Coordinators.map((member) => (
                  <motion.div
                    key={member.id}
                    variants={itemVariants}
                    className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                        <div className="p-4">
                          <h4 className="text-lg font-bold text-white">{member.name}</h4>
                          <p className="text-gray-300 text-sm">{member.role}</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        {member.contribution}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mb-8">
  <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-400 mb-4">
    Web Development Team
  </h3>
  
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
    {webTeam.map((member) => (
      <motion.div
        key={member.id}
        variants={itemVariants}
        className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      >
        <div className="relative h-36 overflow-hidden">
          <img 
            src={member.image} 
            alt={member.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="p-3">
              <h4 className="text-base font-bold text-white">{member.name}</h4>
              <p className="text-gray-300 text-xs">{member.role}</p>
            </div>
          </div>
        </div>
        <div className="p-3">
          <p className="text-gray-700 dark:text-gray-300 text-xs">
            {member.contribution}
          </p>
        </div>
      </motion.div>
    ))}
  </div>
</div>
            
<div className="mb-8">
  <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-400 mb-4">
    Event Volunteers
  </h3>
  
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
    {coordinationTeam.map((member) => (
      <motion.div
        key={member.id}
        variants={itemVariants}
        className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      >
        <div className="relative h-36 overflow-hidden">
          <img 
            src={member.image} 
            alt={member.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="p-3">
              <h4 className="text-base font-bold text-white">{member.name}</h4>
              <p className="text-gray-300 text-xs">{member.role}</p>
            </div>
          </div>
        </div>
        <div className="p-3">
          <p className="text-gray-700 dark:text-gray-300 text-xs">
            {member.contribution}
          </p>
        </div>
      </motion.div>
    ))}
  </div>
</div>

          </motion.div>
        )}

        {/* Tab Content - Challenges */}
        {activeTab === 'challenges' && (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    animate="show"
  >
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Event Challenges</h2>
    <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
      The gaming event featured a variety of challenges that tested participants' skills across different domains. 
      Each challenge was carefully designed with specific objectives and point values.
    </p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {challenges.map((challenge) => (
        <motion.div
          key={challenge.id}
          variants={itemVariants}
          className={`rounded-xl overflow-hidden shadow-lg border ${
            challenge.isUnlocked
              ? 'bg-white dark:bg-gray-800 border-transparent'
              : 'bg-gray-100 dark:bg-gray-800/50 border-dashed border-gray-300 dark:border-gray-700'
          }`}
        >
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className={`text-xl font-mono font-bold mb-1 ${
                  challenge.isUnlocked 
                    ? 'text-gray-900 dark:text-white' 
                    : 'text-gray-500 dark:text-gray-400'
                }`}>
                  {challenge.title}
                </h3>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
  challenge.difficulty === 'Legendary' 
    ? 'bg-red-200 dark:bg-red-900 text-red-900 dark:text-red-300' 
    : challenge.difficulty === 'Expert' 
      ? 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300' 
      : challenge.difficulty === 'Hard'
        ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300'
        : challenge.difficulty === 'Medium'
          ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300'
          : challenge.difficulty === 'Easy'
            ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300'
            : 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300'
}`}> 
  {challenge.difficulty} 
</span>

              </div>
              <div className="flex items-center bg-purple-100 dark:bg-purple-900/20 px-3 py-1 rounded-lg">
                <Trophy className="h-4 w-4 text-purple-600 dark:text-purple-400 mr-1" />
                <span className="font-bold text-purple-700 dark:text-purple-300">{challenge.points} pts</span>
              </div>
            </div>
            
            <p className={`mb-4 ${
              challenge.isUnlocked 
                ? 'text-gray-700 dark:text-gray-300' 
                : 'text-gray-500 dark:text-gray-400'
            }`}>
              {challenge.description}
            </p>
            
            {!challenge.isUnlocked && (
              <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                <Lock className="h-4 w-4 mr-2" />
                <span>Challenge locked - complete prerequisite challenges to unlock</span>
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
)}

        {/* Tab Content - Gallery */}
        {activeTab === 'gallery' && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Event Gallery</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Explore some of the memorable moments captured during the <strong className="text-cyan-300">{eventName}</strong>.
            </p>
            
            <EventGallery images={eventImages} />
          </motion.div>
        )}

        {/* Tab Content - Tech */}
        {activeTab === 'tech' && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Technical Implementation</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <motion.div variants={itemVariants} className="prose prose-lg dark:prose-invert max-w-none">
                <div className="p-8 bg-gray-900 text-gray-200 rounded-xl shadow-xl border border-gray-800">
  <h2 className="text-3xl font-bold mb-6 text-emerald-400 tracking-tight">
    Technical Implementation of {eventName}
  </h2>

  <p className="text-gray-300 mb-8 leading-relaxed">
    The technical implementation of <span className="text-emerald-300 font-medium">{eventName}</span> was designed to create an engaging 
    and seamless experience for participants and organizers. The system architecture integrates 
    modern web technologies to ensure a smooth, real-time, and interactive competition.
  </p>

  <h3 className="text-2xl font-semibold mb-4 text-purple-300 tracking-tight">System Architecture</h3>
  <p className="text-gray-300 mb-6 leading-relaxed">
    The event platform was built using <span className="text-cyan-300 font-medium">Next.js and React</span> for the frontend, 
    <span className="text-cyan-300 font-medium"> Supabase</span> for database management and authentication for real-time updates. This architecture provides a 
    <span className="text-cyan-300 font-medium"> scalable, secure, and dynamic</span> environment for all users.
  </p>

  <h3 className="text-2xl font-semibold mb-4 text-purple-300 tracking-tight">Key Technical Features</h3>
  <div className="space-y-4 pl-2">
    <div className="flex items-start">
      <div className="text-lg text-cyan-700 mr-3">✦</div>
      <div>
        <span className="text-cyan-700 font-medium">Real-time Challenge Progression:</span>
        <span className="text-gray-300"> Challenges unlock dynamically based on participant progress using Supabase Realtime Database.</span>
      </div>
    </div>
    
    <div className="flex items-start">
      <div className="text-lg text-cyan-700 mr-3">✦</div>
      <div>
        <span className="text-cyan-700 font-medium">Wikipedia Navigation Challenge System:</span>
        <span className="text-gray-300"> Tracks participants' navigation history while restricting external searches.</span>
      </div>
    </div>
    
    <div className="flex items-start">
      <div className="text-lg text-cyan-700 mr-3">✦</div>
      <div>
        <span className="text-cyan-700 font-medium">Tech Treasure Hunt with Hint System:</span>
        <span className="text-gray-300"> Riddles with controlled hints, where scores adjust dynamically based on hints taken.</span>
      </div>
    </div>
    
    <div className="flex items-start">
      <div className="text-lg text-cyan-700 mr-3">✦</div>
      <div>
        <span className="text-cyan-700 font-medium">Blind Coding Challenge Implementation:</span>
        <span className="text-gray-300"> Code editor with hidden text input using CSS & JavaScript, with submissions enabled after 10 minutes.</span>
      </div>
    </div>
    
    <div className="flex items-start">
      <div className="text-lg text-cyan-700 mr-3">✦</div>
      <div>
        <span className="text-cyan-700 font-medium">Secure Authentication & User Management:</span>
        <span className="text-gray-300"> Supabase Auth for login/signup with role-based permissions.</span>
      </div>
    </div>
    
    <div className="flex items-start">
      <div className="text-lg text-cyan-700 mr-3">✦</div>
      <div>
        <span className="text-cyan-700 font-medium">Fully Responsive UI with Tailwind CSS:</span>
        <span className="text-gray-300"> Optimized for desktop and mobile participants with an admin dashboard for event monitoring.</span>
      </div>
    </div>
    
    <div className="flex items-start">
      <div className="text-lg text-cyan-700 mr-3">✦</div>
      <div>
        <span className="text-cyan-700 font-medium">Final Treasure Hunt (Hidden Key Search):</span>
        <span className="text-gray-300"> Secret key embedded within the event website (e.g., in the source code, cookies, or metadata), with progressive hints.</span>
      </div>
    </div>
  </div>
</div>
                </motion.div>
                
                <motion.div variants={itemVariants} className="bg-gray-100 dark:bg-gray-800/50 rounded-xl p-6 w-full">
  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Development Challenges & Solutions</h3>
  
  <div className="space-y-4 w-full">
    <div className="p-4 bg-gray-900 rounded-lg border-l-4 border-red-500">
      <h4 className="font-medium text-amber-300 text-lg mb-2">Real-time Data Synchronization</h4>
      <p className="text-gray-300">
        Challenge: Ensuring all participants saw the same data in real-time without delays.
      </p>
      <p className="text-gray-300 mt-2 italic text-gray-400">
        Solution: <span className="not-italic text-gray-300">Missing solution - add details about your implementation.</span>
      </p>
    </div>
    
    <div className="p-4 bg-gray-900 rounded-lg border-l-4 border-emerald-500">
      <h4 className="font-medium text-amber-300 text-lg mb-2">Scale & Performance</h4>
      <p className="text-gray-300">
        Challenge: Supporting 100+ concurrent users without performance degradation.
      </p>
      <p className="text-gray-300 mt-2">
        Solution: <span className="text-cyan-300">Implemented efficient data caching strategies</span> and 
        <span className="text-cyan-300"> optimized database queries</span> to reduce load times and maintain responsiveness.
      </p>
    </div>
    
    <div className="p-4 bg-gray-900 rounded-lg border-l-4 border-blue-500">
      <h4 className="font-medium text-amber-300 text-lg mb-2">Admin Control Interface</h4>
      
      <p className="text-gray-300 mt-2">
        Developed an <span className="text-cyan-300">Admin Control Panel</span> so that the users can be controlled and managed for game state changes and comprehensive but simple controls.
      </p>
    </div>
  </div>
</motion.div>
              </div>
              
              <motion.div variants={itemVariants} className="space-y-6">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4">
                    <h3 className="text-xl font-bold text-white">Tech Stack</h3>
                  </div>
                  <div className="p-5">
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">Frontend</h4>
                        <div className="flex flex-wrap gap-2">
                          {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'].map((tech, i) => (
                            <span key={i} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-lg text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">Backend</h4>
                        <div className="flex flex-wrap gap-2">
                          {['Node.js', 'Express', 'Firebase', 'WebSockets'].map((tech, i) => (
                            <span key={i} className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-lg text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">Infrastructure</h4>
                        <div className="flex flex-wrap gap-2">
                          {['Vercel', 'Firebase Hosting', 'GitHub Actions'].map((tech, i) => (
                            <span key={i} className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-lg text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4">
                    <h3 className="text-xl font-bold text-white">Project Stats</h3>
                  </div>
                  <div className="p-5">
                    <ul className="space-y-3">
                      <li className="flex justify-between">
                        <span className="text-gray-700 dark:text-gray-300">Development Time:</span>
                        <span className="font-medium text-gray-900 dark:text-white">6 weeks</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-700 dark:text-gray-300">Codebase Size:</span>
                        <span className="font-medium text-gray-900 dark:text-white">15,000+ lines</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-700 dark:text-gray-300">API Endpoints:</span>
                        <span className="font-medium text-gray-900 dark:text-white">24</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-700 dark:text-gray-300">Components Built:</span>
                        <span className="font-medium text-gray-900 dark:text-white">50+</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-700 dark:text-gray-300">Database Collections:</span>
                        <span className="font-medium text-gray-900 dark:text-white">12</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Image Viewer Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative bg-white dark:bg-gray-900 rounded-xl overflow-hidden max-w-4xl w-full"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 bg-black/50 rounded-full p-2 text-white hover:bg-black/70 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-5 w-5" />
              </button>
              
              <div className="w-full h-96">
                <img 
                  src={selectedImage.url} 
                  alt={selectedImage.caption} 
                  className="w-full h-full object-contain"
                />
              </div>
              
              <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <p className="text-gray-700 dark:text-gray-300 text-lg">{selectedImage.caption}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
     <ContactPage darkMode={true} />
     
    </div>
  );
};

export default Event;