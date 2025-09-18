import React from 'react';
import { motion } from 'framer-motion';

// --- Placeholder Recruiter Data ---
// You can easily replace the 'color' property with a 'logo' property later.
const recruiters = [
  { id: 1, name: 'Recruiter 1', color: 'bg-sky-500' },
  { id: 2, name: 'Recruiter 2', color: 'bg-teal-500' },
  { id: 3, name: 'Recruiter 3', color: 'bg-purple-500' },
  { id: 4, name: 'Recruiter 4', color: 'bg-rose-500' },
  { id: 5, name: 'Recruiter 5', color: 'bg-amber-500' },
  { id: 6, name: 'Recruiter 6', color: 'bg-indigo-500' },
  { id: 7, name: 'Recruiter 7', color: 'bg-emerald-500' },
  { id: 8, name: 'Recruiter 8', color: 'bg-cyan-500' },
  { id: 9, name: 'Recruiter 9', color: 'bg-pink-500' },
  { id: 10, name: 'Recruiter 10', color: 'bg-slate-800' },
];

const Recruiters = () => {
  // Duplicate the array for a seamless, infinite loop
  const duplicatedRecruiters = [...recruiters, ...recruiters];

  // Animation variants for the title characters
  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const charVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };
  
  const titleText = "Our Major Recruiters";

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Animated Title */}
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-16"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {titleText.split('').map((char, index) => (
            <motion.span key={index} variants={charVariants} className="inline-block">
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.h2>

        {/* Infinite Scrolling Carousel */}
        <div className="w-full max-w-5xl mx-auto overflow-hidden relative">
          {/* Fading Edges for a clean look */}
          <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>

          <motion.div
            className="flex gap-24 items-center" // Spacing between items
            animate={{ x: '-50%' }} // Animate to half the width to loop seamlessly
            transition={{
              ease: 'linear',
              duration: 40, // Controls speed (higher number is slower)
              repeat: Infinity,
            }}
          >
            {/* Map over the duplicated array to render the placeholders */}
            {duplicatedRecruiters.map((recruiter, index) => (
              <div
                key={index}
                // --- FIXES APPLIED HERE ---
                className={`flex-shrink-0 w-20 h-20 rounded-xl ${recruiter.color}`}
              >
                {/* WHEN YOU ARE READY, REPLACE THIS DIV WITH YOUR LOGO.
                  Example: <img src={recruiter.logo} alt={recruiter.name} className="p-4" />
                */}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Recruiters;