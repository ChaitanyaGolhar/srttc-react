import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import assets

import loweOberg from '../assets/images/6.png';
import gunnarGoransson from '../assets/images/2.png';
import evelineHenriksson from '../assets/images/4.png';
// Add more images for the new members
import annaNilsson from '../assets/images/2.png'; 
import erikSvensson from '../assets/images/9.png';
import sofiaBerg from '../assets/images/6.png';

import aditya from '../assets/images/10.jpg'; 
import chaitanya from '../assets/images/7.jpg';
import dhruv from '../assets/images/3.jpg';

import star from '../assets/icons/star.svg';
import facebook from '../assets/icons/facebook.svg';
import twitter from '../assets/icons/twitter.svg';
import linkedin from '../assets/icons/linkedin.svg';

// Team data (NOTE: the 'rotation' property has been removed)
const teamData = [
  {
    id: 1,
    name: 'Lowe Öberg',
    description: 'Clients search for a mentor based on their needs.',
    image: loweOberg,
    bgColor: 'bg-brand-green-light',
    textColor: 'text-brand-text',
    isFounder: true,
  },
  {
    id: 2,
    name: 'Gunnar Göransson',
    description: 'Review available gigs posted by mentors.',
    image: gunnarGoransson,
    bgColor: 'bg-brand-green-dark',
    textColor: 'text-white',
    hasPattern: true,
  },
  {
    id: 3,
    name: 'Eveline Henriksson',
    description: 'Contact the mentor and start working on the project.',
    image: evelineHenriksson,
    bgColor: 'bg-brand-green-light',
    textColor: 'text-brand-text',
    hasStar: true,
  },
  {
    id: 4,
    name: 'Anna Nilsson',
    description: 'Specializes in front-end development frameworks.',
    image: annaNilsson,
    bgColor: 'bg-brand-green-dark',
    textColor: 'text-white',
    hasPattern: true,
  },
  {
    id: 5,
    name: 'Erik Svensson',
    description: 'Our lead UI/UX designer with a keen eye for detail.',
    image: erikSvensson,
    bgColor: 'bg-brand-green-light',
    textColor: 'text-brand-text',
  },
  {
    id: 6,
    name: 'Sofia Berg',
    description: 'Manages project timelines and client relations.',
    image: sofiaBerg,
    bgColor: 'bg-brand-green-dark',
    textColor: 'text-white',
    hasStar: true,
  }
];

// Array of varied rotations to apply to the cards for a more organic feel
const rotations = [-2, 3, -1, 2, 1, -3];

const Teacher = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % teamData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleCards = () => {
    const visible = [];
    for (let i = 0; i < 4; i++) {
      const index = (currentIndex + i) % teamData.length;
      visible.push(teamData[index]);
    }
    return visible;
  };

  return (
    <div className="bg-brand-background font-poppins flex justify-center items-center w-full py-24 px-4 overflow-x-hidden">
      <section className="w-full max-w-7xl text-center">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-semibold text-brand-text">
            Our Dream
            <span className="text-brand-green relative inline-block ml-3">
              Team
              <svg className="absolute -bottom-4 left-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 196 20" fill="none">
                <path d="M2 17.9332C29.6101 4.28186 102.66 -7.06972 194.5 11.2312" stroke="#33A077" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>
          <p className="max-w-md mx-auto text-gray-600 mt-8">
            Our mission is to revolutionize the online experience by developing web-based services
          </p>
        </div>

        {/* Animated 4-Card Container */}
        <div className="relative h-[480px] flex justify-center items-center">
          <AnimatePresence>
            {getVisibleCards().map((member, i) => {
              const isOuterCard = i === 0 || i === 3;
              // Get the unique rotation for this member based on their ID
              const rotation = rotations[(member.id - 1) % rotations.length];
              
              return (
                <motion.div
                  key={member.id}
                  className="absolute w-[280px]"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    transform: `
                      translateX(${(i - 1.5) * 300}px) 
                      translateY(${isOuterCard ? 40 : 0}px)
                      rotate(${rotation}deg)
                      scale(${isOuterCard ? 0.9 : 1})
                    `,
                  }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  style={{
                    zIndex: isOuterCard ? 1 : 10,
                    filter: isOuterCard ? 'brightness(0.9)' : 'brightness(1)',
                  }}
                >
                  <div className={`${member.bgColor} ${member.textColor} rounded-2xl overflow-hidden shadow-lg`}>
                    {member.hasStar && <img src={star} alt="star" className="absolute -top-5 -left-5 w-16 z-20"/>}
                    <div className="h-[300px]"><img src={member.image} alt={member.name} className="w-full h-full object-cover"/></div>
                    <div className="p-6 text-left">
                      <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                      <p className="text-sm leading-relaxed">{member.description}</p>
                    </div>
                  </div>
                  {member.isFounder && (
                    <div className="flex justify-between items-center w-full mt-6 px-2">
                      <span className="text-sm font-medium py-2 px-4 border border-gray-300 rounded-full">Co-founder</span>
                      <div className="flex space-x-2">
                          {[facebook, twitter, linkedin].map((icon, index) => (
                            <a key={index} href="#" className="w-9 h-9 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-200 transition-colors">
                                <img src={icon} alt="social icon" className="h-4"/>
                            </a>
                          ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {teamData.map((_, index) => (
            <button key={index} onClick={() => setCurrentIndex(index)} className={`w-8 h-1 rounded-full transition-colors ${currentIndex === index ? 'bg-brand-text' : 'bg-gray-300'}`}></button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Teacher;