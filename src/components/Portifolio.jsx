import React from 'react';
import { motion } from 'framer-motion';

import project1 from '../assets/images/project1.jpg';
import project2 from '../assets/images/project2.jpg';
import project3 from '../assets/images/project3.jpg';
import project4 from '../assets/images/project4.jpg';
import project5 from '../assets/images/project5.jpg';
import project6 from '../assets/images/project6.jpg';

const portfolioItems = [
  { id: 1, title: 'Sakura E-commerce Project', image: project1, category: 'Web Development', link: 'https://github.com/ganesh26-gsg/sakura' },
  { id: 2, title: 'Creative Dashboard UI Antacres Real Estate Project', image: project2, category: 'UI/UX', link: 'http://www.antacres.com' },
  { id: 3, title: 'Sakura E-commerce Website', image: project3, category: 'Web Development', link: 'https://github.com/ganesh26-gsg/sakura' },
  { id: 4, title: 'Antacres Real Estate Project', image: project4, category: 'Web Design', link: 'http://www.antacres.com' },
  { id: 5, title: 'Antacres Real Estate Project', image: project5, category: 'Web Design', link: 'http://www.antacres.com' },
  { id: 6, title: 'My Portfolio Website', image: project6, category: 'Portfolio', link: '#' },
];

const Portfolio = () => {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <motion.h2
        className="text-5xl md:text-6xl font-bold text-center mb-16 relative"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My latest <span className="text-purple-500">work</span>
        <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-2 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full"></span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioItems.map((item, index) => (
          <motion.div
            key={item.id}
            className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
              <h3 className="text-white text-xl font-bold text-center mb-2">{item.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{item.category}</p>
              <a
                href={item.link}
                className="px-4 py-2 bg-purple-600 text-white rounded-full text-sm font-semibold hover:bg-purple-700 transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;