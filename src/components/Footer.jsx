import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 py-10 mt-16 border-t border-gray-800">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <motion.div
          className="mb-6 md:mb-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-2xl font-bold text-white tracking-wide">
            <span className="text-purple-500">Gani</span>
            <span className="text-gray-400 text-sm align-super ml-0.5">.Dev</span>
          </p>
          <p className="text-gray-400 mt-2 max-w-sm">
            Passionate Frontend Developer from Vizag, Andhra Pradesh, eager to build impactful web experiences and grow with dynamic teams.
          </p>
          <p className="text-gray-500 text-sm mt-4">
            &copy; {currentYear} Sai Ganesh. All rights reserved.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex space-x-6 text-gray-400 text-3xl">
            <motion.a
              href="https://www.linkedin.com/in/gangupam-saiganesh-354a3b247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-purple-500 transition duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://github.com/ganesh26-gsg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-purple-500 transition duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="mailto:gangupamsai@gmail.com"
              aria-label="Email"
              className="hover:text-purple-500 transition duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelope />
            </motion.a>
          </div>
          <div className="flex space-x-6 text-gray-400 text-sm">
            <a href="#" className="hover:text-purple-500 transition duration-300">Term of Services</a>
            <a href="#" className="hover:text-purple-500 transition duration-300">Privacy Policy</a>
            <a href="#contact" className="hover:text-purple-500 transition duration-300">Connect with me</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;