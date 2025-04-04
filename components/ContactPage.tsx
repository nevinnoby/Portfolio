"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaTwitter, FaMapMarkerAlt, FaClock, FaArrowUp, FaWhatsapp } from 'react-icons/fa';

const ContactPage = ({ darkMode }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Demo coordinates - replace with your actual location
  const location = {
    lat: 9.668352,
    lng: 76.830366,
    address: "Madappallil House, Poonjar Thekkekara, Kerala, India",
  };

  // Show scroll to top button when scrolled down
  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <footer className={`relative mt-16 ${darkMode ? "bg-gray-900 text-white" : "bg-gradient-to-r from-blue-50 to-indigo-50 text-gray-800"}`}>
      {/* Wave divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0 transform -translate-y-full">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className={`relative block h-12 w-full ${darkMode ? "fill-gray-900" : "fill-indigo-50"}`}>
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className={darkMode ? "fill-gray-800" : "fill-blue-100"}></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className={darkMode ? "fill-gray-800" : "fill-blue-100"}></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className={darkMode ? "fill-gray-800" : "fill-blue-100"}></path>
        </svg>
      </div>

      <div className="container mx-auto pt-16 pb-8 px-6">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-6 border-b-2 border-blue-500 pb-2 inline-block">Get In Touch</h3>
            
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <div className="bg-blue-500 text-white p-2 rounded-full">
                  <FaEnvelope />
                </div>
                <a href="mailto:your@email.com" className="hover:text-blue-500 transition-colors">nevinmadappallil@gmail.com</a>
              </li>
              
              <li className="flex items-center space-x-3">
                <div className="bg-green-500 text-white p-2 rounded-full">
                  <FaPhone />
                </div>
                <a href="tel:+1234567890" className="hover:text-green-500 transition-colors">+91 9946465601</a>
              </li>
              
              <li className="flex items-center space-x-3">
                <div className="bg-red-500 text-white p-2 rounded-full">
                  <FaMapMarkerAlt />
                </div>
                <span>{location.address}</span>
              </li>
              
              <li className="flex items-center space-x-3">
                <div className="bg-purple-500 text-white p-2 rounded-full">
                  <FaClock />
                </div>
                <span>Mon - Sat: 9:00 AM - 5:00 PM</span>
              </li>
            </ul>
            
            {/* Social Media */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a href="https://github.com/nevinnoby" className="transform hover:scale-110 transition-transform duration-300" aria-label="GitHub">
                  <div className={`p-3 rounded-full ${darkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-white hover:bg-gray-100"} shadow-md`}>
                    <FaGithub className="text-xl" />
                  </div>
                </a>
                <a href="https://linkedin.com/in/nevin-m-noby-80058125a/" className="transform hover:scale-110 transition-transform duration-300" aria-label="LinkedIn">
                  <div className={`p-3 rounded-full ${darkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-white hover:bg-gray-100"} shadow-md`}>
                    <FaLinkedin className="text-xl text-blue-500" />
                  </div>
                </a>
                <a href="https://wa.me/919946465601" className="transform hover:scale-110 transition-transform duration-300" aria-label="Twitter">
                  <div className={`p-3 rounded-full ${darkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-white hover:bg-gray-100"} shadow-md`}>
                    <FaWhatsapp  className="text-xl text-blue-400" />
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Quick Contact Form */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-6 border-b-2 border-blue-500 pb-2 inline-block">Send a Message</h3>
            
            <form 
  className="space-y-4" 
  onSubmit={(e) => {
    e.preventDefault();
    const name = (e.target as any).name.value;
    const email = (e.target as any).email.value;
    const message = (e.target as any).message.value;
    
    const mailtoLink = `mailto:someone@example.com?subject=Message from ${name}&body=Email: ${email}%0D%0A%0D%0A${message}`;
    window.location.href = mailtoLink;
  }}
>
  <div className="relative">
    <input 
      type="text" 
      name="name"
      placeholder="Your Name" 
      className={`w-full p-3 pl-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
        darkMode ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-200 shadow-md"
      }`}
    />
  </div>

  <div className="relative">
    <input 
      type="email" 
      name="email"
      placeholder="Your Email" 
      className={`w-full p-3 pl-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
        darkMode ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-200 shadow-md"
      }`}
    />
  </div>

  <div className="relative">
    <textarea 
      rows={3} 
      name="message"
      placeholder="Your Message" 
      className={`w-full p-3 pl-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
        darkMode ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-200 shadow-md"
      }`}
    ></textarea>
  </div>

  <button 
    type="submit" 
    className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-lg w-full font-medium"
  >
    Send Message
  </button>
</form>

          </motion.div>

          {/* Map Location */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-6 border-b-2 border-blue-500 pb-2 inline-block">Locate Me</h3>
            
            <div className={`rounded-lg overflow-hidden shadow-lg ${darkMode ? "border border-gray-700" : ""}`}>
              {/* Replace the URL with your actual Google Maps embed URL */}
             

          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15732.605365598902!2d76.81830524568323!3d9.668107346734457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07b5607f65c593%3A0xc15540b5ab8a1ea7!2sPayyanithottam%2C%20Poonjar%2C%20Kerala%20686582!5e0!3m2!1sen!2sin!4v1743669818686!5m2!1sen!2sin"            width="100%" 
            height="250"
            style={{ border: 0 }} 
            allowFullScreen
            loading="lazy"
            title="Satellite Map"
          ></iframe>




            </div>
            
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-3">Available Hours</h4>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Monday - Saturday</span>
                  <span>9:00 AM - 5:00 PM</span>
                </li>
                {/* <li className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 2:00 PM</span>
                </li> */}
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span>Full Day</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">© {new Date().getFullYear()} nevinnoby. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-sm hover:underline">Privacy Policy</a>
              <a href="#" className="text-sm hover:underline">Terms of Service</a>
              <a href="#" className="text-sm hover:underline">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll to top button */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className={`fixed right-8 bottom-8 p-3 rounded-full shadow-lg transition-all duration-300 z-50 ${
            darkMode ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-500 hover:bg-blue-600"
          } text-white`}
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
};



export default ContactPage;
