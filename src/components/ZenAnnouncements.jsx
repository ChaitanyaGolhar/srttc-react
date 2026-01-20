import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Megaphone } from 'lucide-react';

// --- BORDER ANIMATION STYLES ---
// This CSS is added to create the "live running" border effect.
// 1. @property tells the browser how to animate our custom --border-angle variable.
// 2. @keyframes defines the animation, telling the angle to go from 0 to 360 degrees.
// 3. .running-border-gradient applies this animation to a more complex conic-gradient,
//    creating the appearance of light chasing around the border.
const borderAnimationStyles = `
  @property --border-angle {
    syntax: "<angle>";
    inherits: false;
    initial-value: 0deg;
  }

  @keyframes border-run {
    to {
      --border-angle: 360deg;
    }
  }
`;

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const sampleAnnouncements = [
{ id: 1, text: "College timing is from 8:30 AM to 3:30 PM for all departments.", link: "/announcements/college-timings" },
{ id: 2, text: "Holiday will be observed every Saturday and Sunday each week.", link: "/announcements/weekly-holidays" },
  // { id: 3, text: "Our main campus will be closed for the holiday on the 25th.", link: "/notices/holiday" },
  // { id: 4, text: "Join the 'Mindful Mornings' challenge, starting this month.", link: "/challenges/mindful-mornings" },
];

const announcementVariants = {
  initial: { opacity: 0, y: 25 },
  animate: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20, duration: 0.7 } },
  exit: { opacity: 0, y: -25, transition: { ease: 'anticipate', duration: 0.7 } },
};

const ZenAnnouncements = ({ announcements = sampleAnnouncements, cycleDuration = 3500 }) => {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useInterval(() => {
    setIndex(prevIndex => (prevIndex + 1) % announcements.length);
  }, isHovered ? null : cycleDuration);
  
  const handleAnnouncementClick = (announcement) => {
    if (announcement.link) {
      console.log(`Navigating to: ${announcement.link}`);
    }
  };

  if (!announcements || announcements.length === 0) {
    return null;
  }

  const currentAnnouncement = announcements[index];

  return (
    <>
      {/* We inject the animation styles into the document head */}
      <style>{borderAnimationStyles}</style>
      
      <div className="relative rounded-full p-[1.5px] max-w-xl lg:max-w-2xl mx-auto my-8 font-sans overflow-hidden shadow-sm">
        
        {/* --- MODIFIED LINE ---
            Instead of spinning, this div now uses an inline style to apply the running animation.
            The gradient has more color stops to create distinct "chaser" lines. */}
        <div 
          className="absolute inset-[-1000%]"
          style={{
            animation: 'border-run 4s linear infinite',
            backgroundImage: `conic-gradient(from var(--border-angle), #c7d2fe, #6366f1 10%, #a5b4fc 35%, #6366f1 50%, #c7d2fe)`
          }}
        />

        <div className="relative z-10 flex items-center bg-stone-100/90 rounded-full backdrop-blur-sm">
          <div className="flex-shrink-0 flex items-center gap-3 px-5 py-3 bg-stone-200/70 rounded-l-full">
            <Megaphone className="text-indigo-600" size={20} />
            <span className="font-semibold text-stone-700 text-sm tracking-wider hidden sm:block">
              Announcements
            </span>
          </div>

          <div
            className="relative flex-grow h-14 overflow-hidden cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => handleAnnouncementClick(currentAnnouncement)}
            onKeyPress={(e) => (e.key === 'Enter' || e.key === ' ') && handleAnnouncementClick(currentAnnouncement)}
            role="link"
            tabIndex={0}
            aria-label={`Announcement: ${currentAnnouncement.text}`}
          >
            <div aria-live="polite" aria-atomic="true" className="sr-only">
              {currentAnnouncement.text}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentAnnouncement.id}
                variants={announcementVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="absolute inset-0 flex items-center px-6"
              >
                <motion.span
                  animate={{
                    scale: isHovered ? 1.05 : 1,
                    color: isHovered ? '#4f46e5' : '#57534e'
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                  className="truncate"
                >
                  {currentAnnouncement.text}
                </motion.span>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};

export default ZenAnnouncements;