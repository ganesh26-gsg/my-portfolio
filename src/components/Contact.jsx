import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      await emailjs.sendForm('service_ljo0hql', 'template_fg5rwpq', form.current, {
        publicKey: 'nJp8hTB6FT7bXecEe',
      });

      setStatus('success');
      setFormData({ user_name: '', user_email: '', message: '' });
      setTimeout(() => {
        setStatus('idle');
      }, 2000);

    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('error');
      setErrorMessage('Failed to send the message. Please try again later.');
    }
  };

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <motion.h2
        className="text-5xl md:text-6xl font-bold text-center mb-16 relative"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Get in <span className="text-purple-500">touch</span>
        <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-2 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full"></span>
      </motion.h2>

      <div className="flex flex-col md:flex-row gap-12 justify-center items-center">
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-4xl font-bold text-gray-900 mb-6 dark:text-white">Let's <span className="text-purple-500">talk</span></h3>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed dark:text-gray-300">
            I'm currently available to take on new projects, so feel free to send
            me a message about anything that you want me to work on. You can
            contact anytime.
          </p>
          <div className="space-y-4 text-lg">
            <p className="flex items-center justify-center md:justify-start text-gray-600 dark:text-gray-300">
              <svg className="w-6 h-6 mr-3 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-9 13V3"></path></svg>
              gangupamsai@gmail.com
            </p>
            <p className="flex items-center justify-center md:justify-start text-gray-600 dark:text-gray-300">
              <svg className="w-6 h-6 mr-3 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              +91 8464947768
            </p>
            <p className="flex items-center justify-center md:justify-start text-gray-600 dark:text-gray-300">
              <svg className="w-6 h-6 mr-3 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              Vizag , Andhra Pradesh
            </p>
          </div>
        </motion.div>

        <motion.div
          className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg border border-gray-300 dark:bg-gray-800 dark:border-gray-700"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="sr-only">Your Name</label>
              <input
                type="text"
                id="name"
                name="user_name"
                placeholder="Enter your name"
                value={formData.user_name}
                onChange={handleChange}
                className="w-full px-5 py-3 bg-gray-200 text-gray-900 rounded-md border border-gray-300 focus:outline-none focus:border-purple-500 placeholder-gray-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:focus:border-purple-500 dark:placeholder-gray-400"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Your Email</label>
              <input
                type="email"
                id="email"
                name="user_email"
                placeholder="Enter your email"
                value={formData.user_email}
                onChange={handleChange}
                className="w-full px-5 py-3 bg-gray-200 text-gray-900 rounded-md border border-gray-300 focus:outline-none focus:border-purple-500 placeholder-gray-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:focus:border-purple-500 dark:placeholder-gray-400"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Write your message here</label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message here"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-5 py-3 bg-gray-200 text-gray-900 rounded-md border border-gray-300 focus:outline-none focus:border-purple-500 placeholder-gray-500 resize-y dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:focus:border-purple-500 dark:placeholder-gray-400"
                required
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-md font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? 'Submitting...' : 'Submit now'}
            </motion.button>

            {status === 'success' && (
              <p className="text-green-500 text-center mt-4">Message sent successfully!</p>
            )}
            {status === 'error' && (
              <p className="text-red-500 text-center mt-4">{errorMessage}</p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;