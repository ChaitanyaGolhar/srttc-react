import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

const HeroSection = ({ heroData, scrollToSection, aboutRef }) => {
  const { slides, title, subtitle } = heroData;
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);
  
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 0.5], ['0%', '50%']);

  return (
    <div className="relative h-[75vh] w-full rounded-2xl overflow-hidden">
      <AnimatePresence>
        {slides.map((slide, index) => (
          index === currentSlide && (
            <motion.div
              key={slide.id}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.src})`, y: parallaxY }}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            >
               <motion.div 
                className="w-full h-full"
                initial={{ scale: 1 }}
                animate={{ scale: 1.15 }}
                transition={{ duration: 10, ease: 'linear', repeat: Infinity, repeatType: 'mirror' }}
              />
            </motion.div>
          )
        ))}
      </AnimatePresence>
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex h-full items-center justify-center text-center p-4">
        <motion.div
          className="bg-white/10 backdrop-blur-md rounded-xl p-8 md:p-12 border border-white/20 shadow-lg max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">{title}</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-200">{subtitle}</p>
          <motion.button
            onClick={() => scrollToSection(aboutRef)}
            className="mt-8 px-8 py-3 bg-orange-500 text-white font-bold rounded-full shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(249, 115, 22, 0.8)' }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Department
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;