"use client";

import { motion } from "framer-motion";

export default function Dashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-6"
    >
      <h1 className="text-4xl font-bold text-purple-600 dark:text-white">Dashboard</h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">Welcome to your dashboard.</p>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">Under Maintanenec Will go live shortly.................:):):)</p>
      <h1 className="text-4xl font-bold text-purple-600 dark:text-white">:)</h1>
    </motion.div>
  );
}
