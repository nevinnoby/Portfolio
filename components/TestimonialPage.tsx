import { motion } from "framer-motion";

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, TechCorp",
    message: "Outstanding service! The project was delivered on time with exceptional quality.",
    image: "https://via.placeholder.com/80",
  },
  {
    name: "Sarah Johnson",
    role: "Product Manager, InnovateX",
    message: "Amazing attention to detail. The UI/UX design exceeded our expectations!",
    image: "https://via.placeholder.com/80",
  },
  {
    name: "Michael Brown",
    role: "Founder, StartUp Solutions",
    message: "The team built a fantastic web app that boosted our business operations!",
    image: "https://via.placeholder.com/80",
  },
  {
    name: "Emily Wilson",
    role: "CTO, NextGen AI",
    message: "Seamless integration and great support. Would highly recommend their services!",
    image: "https://via.placeholder.com/80",
  },
];

const TestimonialPage = ({ darkMode }: { darkMode: boolean }) => {
  return (
    <div className={`min-h-screen py-16 px-6 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      {/* Hero Section */}
      <motion.section 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold">🌟 Testimonials</h1>
        <p className="text-gray-500 mt-2">What our clients say about our work.</p>
      </motion.section>

      {/* Testimonial Grid */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div 
            key={index} 
            className={`p-6 rounded-lg shadow-lg text-center border ${darkMode ? "bg-gray-800 border-gray-700" : "bg-gray-100 border-gray-300"}`}
            whileHover={{ scale: 1.05 }}
          >
            <img src={testimonial.image} alt={testimonial.name} className="w-20 h-20 mx-auto rounded-full mb-4" />
            <h3 className="text-xl font-bold">{testimonial.name}</h3>
            <p className="text-green-400">{testimonial.role}</p>
            <p className="text-gray-400 mt-2">"{testimonial.message}"</p>
          </motion.div>
        ))}
      </section>

      {/* Call-to-Action (CTA) */}
      <section className="text-center mt-16">
        <h2 className="text-3xl font-semibold">📢 Want to share your experience?</h2>
        <p className="text-gray-500 mt-2">We'd love to hear your feedback! Click below to leave a review.</p>
        <a 
          href="mailto:your@email.com" 
          className="mt-4 inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Leave a Review
        </a>
      </section>
    </div>
  );
};

export default TestimonialPage;
