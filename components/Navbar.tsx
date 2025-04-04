"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";

const Navbar = ({ activeSection, setActiveSection, darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Mobile menu toggle
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Sidebar Toggle Button */}
      <button
        onClick={toggleMenu}
        className={`fixed top-4 left-4 z-50 p-2 rounded-full ${
          darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800"
        } shadow-lg`}
        aria-label="Toggle sidebar"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Sidebar */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className={`fixed top-0 left-0 h-full w-64 z-40 backdrop-blur-md bg-opacity-70 ${
              darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
            } shadow-lg`}
          >
            <div className="flex flex-col h-full p-4">
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center space-x-2 mb-8"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center">
                  <span className="font-bold text-white text-lg">DP</span>
                </div>
                <h1 className="text-2xl font-bold">DevPortfolio</h1>
              </motion.div>

              {/* Navigation Links */}
              <nav className="flex-1">
                <ul className="flex flex-col space-y-4">
                  {["About", "Services", "Skills", "Projects", "GitHub", "Contact"].map(
                    (item) => (
                      <li key={item}>
                        {item === "Projects" ? (
                          <Link legacyBehavior href="/Showcase">
                            <a
                              className={`block px-4 py-2 rounded-lg ${
                                activeSection === item.toLowerCase()
                                  ? "bg-purple-600 text-white font-medium"
                                  : "hover:bg-purple-100 dark:hover:bg-gray-700"
                              }`}
                            >
                              {item}
                            </a>
                          </Link>
                        ) : (
                          <ScrollLink
                            to={item.toLowerCase()}
                            smooth={true}
                            duration={500}
                            className={`block px-4 py-2 rounded-lg ${
                              activeSection === item.toLowerCase()
                                ? "bg-purple-600 text-white font-medium"
                                : "hover:bg-purple-100 dark:hover:bg-gray-700"
                            } cursor-pointer`}
                            onSetActive={() => setActiveSection(item.toLowerCase())}
                          >
                            {item}
                          </ScrollLink>
                        )}
                      </li>
                    )
                  )}
                </ul>
              </nav>

              {/* Dark Mode Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="mt-8 p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
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
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;