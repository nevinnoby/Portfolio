import { motion } from "framer-motion";

const services = [
  { title: "Web Development", description: "Modern, responsive, and fast websites using React.js, Next.js, and more." },
  { title: "Mobile App Development", description: "Cross-platform mobile apps with React Native for seamless user experience." },
  { title: "UI/UX Design", description: "User-friendly and visually appealing designs tailored to your needs." },
  { title: "IoT Solutions", description: "Smart automation and real-time monitoring solutions for various industries." }
];

// Accept darkMode as a prop
const Services = ({ darkMode }: { darkMode: boolean }) => {
  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"} transition-all min-h-screen`}>
      {/* Header */}
      <header className="p-6 flex justify-center">
        <h1 className="text-3xl font-bold">My Portfolio</h1>
      </header>
      
      {/* Hero Section */}
      <motion.section 
        className="text-center py-16 px-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold">Hi, I'm a Developer 🚀</h2>
        <p className="text-gray-500 mt-2">I specialize in building modern and efficient solutions for web, mobile, and IoT.</p>
      </motion.section>
      
      {/* Services Section */}
      <section className="py-12 px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">💼 My Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className={`p-6 rounded-lg shadow-lg text-center ${darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"}`}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-bold text-green-400">{service.title}</h3>
              <p className="mt-2">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className={`py-12 px-6 ${darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"}`}>
        <h2 className="text-3xl font-semibold text-center mb-8">🌟 What Clients Say</h2>
        <motion.div 
          className="max-w-2xl mx-auto text-center p-6 rounded-lg shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="text-lg">"Excellent service! The website was delivered on time with outstanding quality."</p>
          <h4 className="mt-4 text-xl font-bold text-green-400">- Happy Client</h4>
        </motion.div>
      </section>
      
      {/* Contact Section */}
      <section className="py-12 px-6 text-center">
        <h2 className="text-3xl font-semibold">📩 Let's Work Together</h2>
        <p className="text-gray-500 mt-2">Feel free to reach out for collaborations and projects.</p>
        <a 
          href="mailto:your@email.com" 
          className="mt-4 inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Contact Me
        </a>
      </section>
    </div>
  );
};

export default Services;
