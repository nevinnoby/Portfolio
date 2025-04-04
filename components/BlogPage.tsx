// import { motion } from "framer-motion";

// const blogPosts = [
//   {
//     title: "Mastering React: Tips & Best Practices",
//     description: "Learn essential tips and best practices to improve your React.js applications.",
//     image: "https://via.placeholder.com/400",
//     date: "March 10, 2025",
//     link: "#",
//   },
//   {
//     title: "Building Scalable Web Apps with Next.js",
//     description: "Discover how Next.js simplifies server-side rendering and improves app performance.",
//     image: "https://via.placeholder.com/400",
//     date: "February 28, 2025",
//     link: "#",
//   },
//   {
//     title: "The Future of IoT: Smart Automation & AI",
//     description: "Explore how IoT and AI are transforming industries and everyday life.",
//     image: "https://via.placeholder.com/400",
//     date: "January 15, 2025",
//     link: "#",
//   },
//   {
//     title: "UI/UX Design Trends for 2025",
//     description: "Get insights into the latest UI/UX design trends shaping the future of digital experiences.",
//     image: "https://via.placeholder.com/400",
//     date: "December 30, 2024",
//     link: "#",
//   },
// ];

// const BlogPage = ({ darkMode }: { darkMode: boolean }) => {
//   return (
//     <div className={`min-h-screen py-16 px-6 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
//       {/* Hero Section */}
//       <motion.section 
//         className="text-center mb-12"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <h1 className="text-4xl font-bold">📝 My Blog</h1>
//         <p className="text-gray-500 mt-2">Sharing insights, tutorials, and industry trends.</p>
//       </motion.section>

//       {/* Blog Post Grid */}
//       <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         {blogPosts.map((post, index) => (
//           <motion.div 
//             key={index} 
//             className={`p-6 rounded-lg shadow-lg border cursor-pointer ${darkMode ? "bg-gray-800 border-gray-700" : "bg-gray-100 border-gray-300"}`}
//             whileHover={{ scale: 1.05 }}
//           >
//             <img src={post.image} alt={post.title} className="w-full h-40 object-cover rounded-lg mb-4" />
//             <h3 className="text-xl font-bold">{post.title}</h3>
//             <p className="text-sm text-gray-400">{post.date}</p>
//             <p className="text-gray-500 mt-2">{post.description}</p>
//             <a href={post.link} className="mt-4 inline-block text-blue-500 font-semibold hover:underline">Read More →</a>
//           </motion.div>
//         ))}
//       </section>

//       {/* Call-to-Action (CTA) */}
//       <section className="text-center mt-16">
//         <h2 className="text-3xl font-semibold">📢 Stay Updated</h2>
//         <p className="text-gray-500 mt-2">Subscribe to my blog to receive the latest updates.</p>
//         <a 
//           href="#" 
//           className="mt-4 inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
//         >
//           Subscribe Now
//         </a>
//       </section>
//     </div>
//   );
// };

// export default BlogPage;
