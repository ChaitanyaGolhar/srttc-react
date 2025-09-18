import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { testimonialsData } from './testimonialsData'; // Make sure the path is correct

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Effect to handle the automatic carousel every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 3) % testimonialsData.length);
    }, 4000); // Change testimonials every 4 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  // Get the 3 testimonials to display based on the current index
  const visibleTestimonials = [
    testimonialsData[currentIndex],
    testimonialsData[(currentIndex + 1) % testimonialsData.length],
    testimonialsData[(currentIndex + 2) % testimonialsData.length],
  ];

  // Animation variants for the page-like transition
  const carouselVariants = {
    enter: {
      x: '100%',
      opacity: 0,
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: {
      zIndex: 0,
      x: '-100%',
      opacity: 0,
    },
  };

  return (
    <section className="bg-[#F7F7F3] pt-12 px-4 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="text-left mb-12">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-2">
            Student Success Stories
          </h2>
          <p className="mt-4 max-w-2xl text-gray-600">
            Hear from our alumni who have leveraged their education at SRTTC to achieve remarkable careers at leading companies and prestigious institutions worldwide.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex} // This key is crucial for AnimatePresence to detect changes
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 absolute w-full"
              variants={carouselVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 },
              }}
            >
              {visibleTestimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  className={`p-6 rounded-2xl flex flex-col justify-between
                    ${(currentIndex + index) % 3 === 1 ? 'bg-[#D9F0D6]' : 'bg-white'}`}
                  whileHover={{ scale: 1.03, y: -5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)' }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-sm font-mono text-gray-400">
                        {String(((currentIndex + index) % testimonialsData.length) + 1).padStart(2, '0')}
                      </span>
                      <ArrowUpRight className="text-gray-500" />
                    </div>
                    <p className="text-gray-700 leading-relaxed italic">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  <div className="flex items-center mt-6 pt-6 border-t border-gray-200">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <p className="font-bold text-gray-800">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.title}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;