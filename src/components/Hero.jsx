import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/images/profile.jpg';

const Hero = () => {
  return (
    <section className="container mx-auto px-4 text-center pt-24 md:pt-40">
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src={profileImage}
          alt="Sai Ganesh - Frontend Developer"
          className="w-40 h-40 rounded-full object-cover border-4 border-purple-500 shadow-lg mb-8"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }} 
          transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.5 }}
        />
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold leading-tight mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }} 
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Hey there, I'm <span className="text-purple-500">Sai Ganesh</span>,
          <br className="hidden md:block"/> a passionate Frontend Developer.
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }} 
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          A fresher from Vizag, Andhra Pradesh, I craft engaging and responsive user interfaces with a keen eye for detail. Eager to transform ideas into captivating web experiences and contribute to innovative projects.
        </motion.p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ delay: 1.1, duration: 0.6 }} // Added transition for whileInView
            onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Connect with me
          </motion.button>
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-gray-600 text-gray-300 rounded-full font-semibold text-lg shadow-lg hover:border-purple-500 hover:text-purple-500 transform hover:scale-105 transition duration-300 flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ delay: 1.2, duration: 0.6 }} // Added transition for whileInView
          >
            My Resume
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;