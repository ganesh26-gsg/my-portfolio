import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/images/profile.jpg';

const skillBars = [
  { name: 'HTML & CSS', level: 90, color: 'bg-purple-500' },
  { name: 'JavaScript', level: 85, color: 'bg-pink-500' },
  { name: 'React.js', level: 88, color: 'bg-orange-500' },
  { name: 'Tailwind CSS', level: 92, color: 'bg-green-500' },
  { name: 'Turso (SQLite3)', level: 70, color: 'bg-blue-400' },
  { name: 'Zustand (State Mgt.)', level: 75, color: 'bg-red-400' },
  { name: 'Axios (API Calls)', level: 70, color: 'bg-yellow-400' },
  { name: 'Firebase', level: 65, color: 'bg-indigo-400' },
  { name: 'Radix UI (Headless)', level: 70, color: 'bg-teal-400' },
];

const About = () => {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24" id="about">
      <motion.h2
        className="text-5xl md:text-6xl font-bold text-center mb-16 relative"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My <span className="text-purple-500">Expertise</span>
        <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-2 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full"></span>
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={profileImage}
            alt="Sai Ganesh - Frontend Developer"
            className="w-64 h-64 rounded-xl object-cover shadow-lg border-4 border-gray-300 dark:border-gray-700"
          />
        </motion.div>

        <motion.div
          className="flex-grow text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed dark:text-gray-300">
            As a passionate Frontend Developer based in Vizag, Andhra Pradesh, I'm dedicated to crafting engaging and responsive user interfaces. I bring a strong focus on UI/UX Design and expertise in building modern web applications using cutting-edge tools.
            <br/><br/>
            My core skills include React.js, Tailwind CSS, JavaScript, and HTML/CSS. I also work with Turso (SQLite3) for data management, Zustand for state management, Axios for API calls, Firebase for backend services, and Radix UI for accessible components. I am eager to learn, grow, and contribute my fresh perspective to dynamic development teams.
          </p>

          <div className="space-y-6 mb-12">
            {skillBars.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
                  <span className="text-lg font-medium text-gray-800 dark:text-gray-200">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-3 dark:bg-gray-700">
                  <motion.div
                    className={`${skill.color} h-3 rounded-full`}
                    style={{ width: `${skill.level}%` }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.6 + skillBars.indexOf(skill) * 0.1 }}
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <motion.div
              className="bg-gray-200 p-6 rounded-lg shadow-md text-center dark:bg-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h3 className="text-4xl font-bold text-purple-500 mb-2">Fresh</h3>
              <p className="text-gray-600 text-lg dark:text-gray-300">Perspective & Drive</p>
            </motion.div>
            <motion.div
              className="bg-gray-200 p-6 rounded-lg shadow-md text-center dark:bg-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <h3 className="text-4xl font-bold text-pink-500 mb-2">5+</h3>
              <p className="text-gray-600 text-lg dark:text-gray-300">Personal Projects</p>
            </motion.div>
            <motion.div
              className="bg-gray-200 p-6 rounded-lg shadow-md text-center dark:bg-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <h3 className="text-4xl font-bold text-orange-500 mb-2">Ready</h3>
              <p className="text-gray-600 text-lg dark:text-gray-300">To Contribute</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;