import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portifolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion, useScroll, useSpring } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {/* Progress bar is now outside the main app container for stability */}
      <motion.div 
        className="progress-bar fixed top-0 left-0 right-0 h-1 bg-purple-500 z-50" 
        style={{ scaleX }} 
      />

      {/* Main app container with overflow-x-hidden to prevent horizontal scrolling */}
      <div className="bg-gray-900 text-white min-h-screen font-sans overflow-x-hidden">
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