import React from 'react';
import { motion } from 'framer-motion';

const servicesData = [
  {
    id: '01',
    title: 'Responsive Web Development',
    description: 'Crafting modern, mobile-first websites and web applications that look stunning and perform flawlessly on any device and screen size using React.js and Tailwind CSS.',
  },
  {
    id: '02',
    title: 'UI/UX Implementation',
    description: 'Translating design mockups into pixel-perfect, highly interactive, and user-friendly interfaces with a strong focus on accessibility and intuitive user experiences.',
  },
  {
    id: '03',
    title: 'Interactive Web Solutions',
    description: 'Building dynamic and engaging web features with JavaScript and React.js, implementing advanced state management using Zustand for seamless user interaction.',
  },
  {
    id: '04',
    title: 'Component-Based Architecture',
    description: 'Developing reusable and modular UI components with React.js and Radix UI primitives, ensuring scalable and maintainable frontends.',
  },
  {
    id: '05',
    title: 'API Integration & Data Handling',
    description: 'Connecting frontend applications with backend services using Axios for efficient data fetching and integrating with Firebase or Turso (SQLite3) for robust data management.',
  },
 {
    id: '06',
    title: 'Custom Admin Panel Development',
    description: 'I can create a custom admin panel for you to manage public website content, add new items, track inquiries, and securely update your login credentials.',
  },
];

const Services = () => {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24" id="services">
      <motion.h2
        className="text-5xl md:text-6xl font-bold text-center mb-16 relative"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My <span className="text-purple-500">Expertise</span>
        <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-2 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full"></span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <motion.div
            key={service.id}
            className="bg-white p-6 rounded-lg shadow-md border border-gray-300 hover:border-purple-500 transform hover:scale-105 transition duration-300 cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:hover:border-purple-500"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <p className="text-gray-500 text-3xl font-bold mb-4 dark:text-gray-400">{service.id}</p>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 dark:text-white">{service.title}</h3>
            <p className="text-gray-600 mb-6 dark:text-gray-300">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;