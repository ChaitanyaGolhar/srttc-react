import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// --- Course Data ---
const courseData = [
  {
    category: 'Languages and literature',
    courses: [
      { title: 'English Language and Literature', href: '#' },
      { title: 'European and Middle Eastern Languages', href: '#' },
      { title: 'Psychology, Philosophy & Linguistics', href: '#' },
      { title: 'Modern Languages', href: '#' },
      { title: 'Oriental Studies', href: '#' },
    ],
  },
  {
    category: 'The Natural World',
    courses: [
      { title: 'Biology & Environmental Science', href: '#' },
      { title: 'Earth Sciences (Geology)', href: '#' },
      { title: 'Zoology & Botany', href: '#' },
    ],
  },
  {
    category: 'Art & Music',
    courses: [
      { title: 'History of Art', href: '#' },
      { title: 'Fine Art & Sculpture', href: '#' },
      { title: 'Music Theory & Composition', href: '#' },
    ],
  },
  {
    category: 'Medical Sciences',
    courses: [
      { title: 'Biomedical Sciences', href: '#' },
      { title: 'Medicine & Surgery', href: '#' },
      { title: 'Experimental Psychology', href: '#' },
    ],
  },
  {
    category: 'Philosophical questions',
    courses: [
        { title: 'Philosophy, Politics and Economics (PPE)', href: '#' },
        { title: 'Theology and Religion', href: '#' },
        { title: 'Classical Studies', href: '#' },
    ],
  },
  // ... add other categories here
];

const Courses = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  // Animation variants for the main accordion content container
  const accordionContentVariants = {
    initial: { opacity: 0, height: 0, y: -10 },
    animate: {
      opacity: 1,
      height: 'auto',
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        duration: 0.3,
        when: "beforeChildren", // Ensures container opens before children animate
        staggerChildren: 0.05, // Stagger animation for individual links
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      y: -10,
      transition: {
        duration: 0.2,
        when: "afterChildren", // Ensures container closes after children animate out
        staggerChildren: 0.05, // Stagger animation for individual links
        staggerDirection: -1, // Animate children out in reverse order
      },
    },
  };

  // Animation variants for individual course links
  const linkVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 150, damping: 20 } },
    exit: { opacity: 0, x: 20, transition: { duration: 0.1 } },
  };

  return (
    <section className="bg-white font-sans py-20 sm:py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Column: Title and Description */}
          <div className="md:col-span-1">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Courses
            </h1>
            <p className="text-gray-600 leading-relaxed">
              Do you love to question and have an appetite for knowledge? Do you consistently achieve top grades in your class? Are you looking for an exceptional education in an environment which values individuals for who they are? Oxford might be the place for you.
            </p>
          </div>

          {/* Right Column: Interactive Accordion */}
          <div className="md:col-span-2">
            <div className="border-t border-gray-200">
              {courseData.map((item) => (
                <div
                  key={item.category}
                  className="border-b border-gray-200"
                  onMouseEnter={() => setActiveCategory(item.category)}
                  onMouseLeave={() => setActiveCategory(null)}
                >
                  <div
                    className={`p-6 cursor-pointer flex justify-between items-center transition-all duration-300
                      ${activeCategory === item.category ? 'bg-[#1A202C] text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                    role="button"
                    aria-expanded={activeCategory === item.category}
                  >
                    <h3 className="text-xl font-medium">{item.category}</h3>

                    <AnimatePresence initial={false}>
                      {activeCategory === item.category && (
                        <motion.div
                          variants={accordionContentVariants}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                          className="overflow-hidden flex-grow pl-8" // Added flex-grow and padding to push links right
                        >
                          <div className="pt-0 space-y-3 text-right"> {/* Aligned text to right */}
                            {item.courses.map((course) => (
                              <motion.a
                                key={course.title}
                                href={course.href}
                                className="flex items-center justify-end text-gray-300 hover:text-white transition-colors duration-200 group"
                                variants={linkVariants} // Apply link specific variants
                                whileHover={{ x: -5, scale: 1.02, transition: { type: 'spring', stiffness: 400, damping: 10 } }} // Punchy hover for individual links
                              >
                                <span className="mr-3">{course.title}</span>
                                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" /> {/* Arrow animation */}
                              </motion.a>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;