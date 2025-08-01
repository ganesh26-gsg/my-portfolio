import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import useThemeStore from '../store/useThemeStore.js';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useThemeStore();

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Expertise', href: '#services' },
    { name: 'Projects', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-40 bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg shadow-lg dark:bg-gray-900 dark:bg-opacity-90">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <motion.a
          href="#home"
          className="pl-4 text-2xl font-bold tracking-wide flex items-center text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onClick={(e) => scrollToSection(e, '#home')}
        >
          <span className="text-purple-500 mr-1">Gani</span>
          <span className="text-gray-900 dark:text-gray-300 text-base font-normal">.Dev</span>
        </motion.a>

        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="text-gray-900 hover:text-purple-500 dark:text-gray-300 dark:hover:text-purple-500 transition duration-300 text-lg font-medium"
              whileHover={{ scale: 1.05, color: '#A78BFA' }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              onClick={(e) => scrollToSection(e, link.href)}
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-200 text-gray-900 rounded-full font-semibold hover:bg-gray-300 hover:text-purple-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-purple-400 transform hover:scale-105 transition duration-300 text-base"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            My Resume
          </motion.a>
          <motion.button
            className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 text-base"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => scrollToSection(e, '#contact')}
          >
            Let's Connect
          </motion.button>
          <motion.button
            className="text-gray-900 dark:text-gray-300 text-2xl"
            onClick={toggleTheme}
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
          >
            {theme === 'dark' ? <Sun /> : <Moon />}
          </motion.button>
        </div>

        <div className="md:hidden mr-6 flex items-center space-x-4">
          <motion.button
            className="text-gray-900 dark:text-gray-300 text-2xl"
            onClick={toggleTheme}
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
          >
            {theme === 'dark' ? <Sun /> : <Moon />}
          </motion.button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900 dark:text-white focus:outline-none">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          className="md:hidden bg-gray-100 dark:bg-gray-800 pb-4"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-900 hover:text-purple-500 dark:text-gray-300 dark:hover:text-purple-500 transition duration-300 text-lg font-medium"
                onClick={(e) => scrollToSection(e, link.href)}
              >
                {link.name}
              </a>
            ))}
             <a
                href="/your-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-gray-200 text-gray-900 rounded-full font-semibold hover:bg-gray-300 hover:text-purple-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-purple-400 transform hover:scale-105 transition duration-300"
                onClick={() => setIsOpen(false)}
            >
                My Resume
            </a>
            <button
                className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full font-semibold shadow-lg"
                onClick={(e) => scrollToSection(e, '#contact')}
            >
              Let's Connect
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;