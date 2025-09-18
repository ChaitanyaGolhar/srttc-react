import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Megaphone } from 'lucide-react';

// --- Announcement Data ---
const announcements = [
  { id: 1, text: "New Meditation and Mindfulness course starts next Monday." },
  { id: 2, text: "Weekend Yoga retreat registration is now open to all members." },
  { id: 3, text: "Our main campus will be closed for the holiday on the 25th." },
  { id: 4, text: "Join the 'Mindful Mornings' challenge, starting this month." },
];

const ZenAnnouncements = () => {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // This effect handles the automatic cycling of announcements
  useEffect(() => {
    // If the user is hovering, we pause the announcements
    if (isHovered) return;

    // The interval is set to 3.5 seconds: 1.5s for animation + 2s pause
    const intervalId = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % announcements.length);
    }, 3500);

    // Clear the interval when the component unmounts or when hover state changes
    return () => clearInterval(intervalId);
  }, [isHovered]);

  // Animation variants for the text entering and exiting
  const announcementVariants = {
    initial: { opacity: 0, y: 25 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20, duration: 0.7 },
    },
    exit: {
      opacity: 0,
      y: -25,
      transition: { ease: 'anticipate', duration: 0.7 },
    },
  };

  return (
    <div className="flex items-center bg-stone-100/80 border border-stone-200/80 rounded-full shadow-sm max-w-xl lg:max-w-2xl mx-auto my-8 font-sans">
      
      {/* "Announcements" Label Section */}
      <div className="flex-shrink-0 flex items-center gap-3 px-5 py-3 bg-stone-200/70 rounded-l-full">
        <Megaphone className="text-teal-700" size={20} />
        <span className="font-semibold text-stone-700 text-sm tracking-wider hidden sm:block">
          Announcements
        </span>
      </div>

      {/* Marquee Area with Animations */}
      <div
        className="relative flex-grow h-14 overflow-hidden cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={index} // This key is crucial for AnimatePresence to detect changes
            variants={announcementVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute inset-0 flex items-center px-6"
          >
            {/* This span now handles the smooth and punchy hover animation */}
            <motion.span
              animate={{
                scale: isHovered ? 1.05 : 1,
                color: isHovered ? '#0d9488' : '#57534e' // teal-600 and stone-600
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 10 }}
              className="truncate" // Prevents text from wrapping on scale
            >
              {announcements[index].text}
            </motion.span>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ZenAnnouncements;