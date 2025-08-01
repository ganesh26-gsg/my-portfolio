import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portifolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion, useScroll, useSpring } from 'framer-motion';
import useThemeStore from './store/useThemeStore.js';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const { theme } = useThemeStore();

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <>
      <motion.div
        className="progress-bar fixed top-0 left-0 right-0 h-1 bg-purple-500 z-50"
        style={{ scaleX }}
      />

      <div className="bg-gray-100 text-gray-900 min-h-screen font-sans overflow-x-hidden dark:bg-gray-900 dark:text-white">
        <Navbar />
        <main>
          <section id="home" className="py-20 md:py-32">
            <Hero />
          </section>
          <section id="about" className="py-20 md:py-32">
            <About />
          </section>
          <section id="services" className="py-20 md:py-32">
            <Services />
          </section>
          <section id="portfolio" className="py-20 md:py-32">
            <Portfolio />
          </section>
          <section id="contact" className="py-20 md:py-32">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;