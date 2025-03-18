import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const ContactPage = ({ darkMode }: { darkMode: boolean }) => {
  return (
    <div className={`min-h-screen py-16 px-6 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      {/* Hero Section */}
      <motion.section 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold">📬 Get In Touch</h1>
        <p className="text-gray-500 mt-2">Have a question or a project idea? Let's talk!</p>
      </motion.section>

      {/* Contact Form */}
      <section className="max-w-4xl mx-auto bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Send a Message</h2>
        <form className="flex flex-col space-y-4">
          <input 
            type="text" 
            placeholder="Your Name" 
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
          />
          <textarea 
            rows={4} 
            placeholder="Your Message" 
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
          ></textarea>
          <button 
            type="submit" 
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Contact Details */}
      <section className="text-center mt-12">
        <h2 className="text-2xl font-semibold">📞 Contact Info</h2>
        <div className="flex flex-wrap justify-center mt-4 space-x-6">
          <a href="mailto:your@email.com" className="flex items-center space-x-2 hover:text-blue-500">
            <FaEnvelope /> <span>your@email.com</span>
          </a>
          <a href="tel:+1234567890" className="flex items-center space-x-2 hover:text-blue-500">
            <FaPhone /> <span>+123 456 7890</span>
          </a>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="text-center mt-8">
        <h2 className="text-2xl font-semibold">🔗 Connect with Me</h2>
        <div className="flex justify-center mt-4 space-x-6 text-2xl">
          <a href="https://github.com/yourprofile" className="hover:text-gray-500"><FaGithub /></a>
          <a href="https://linkedin.com/in/yourprofile" className="hover:text-blue-500"><FaLinkedin /></a>
          <a href="https://twitter.com/yourprofile" className="hover:text-blue-400"><FaTwitter /></a>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
