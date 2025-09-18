import React, { useState } from 'react';
import { motion } from 'framer-motion';

// If you want to use images later, uncomment this section and the image tags below
/*
// Import your images here (make sure you have enough images for all positions)
import image1 from './assets/img1.jpg';
import image2 from './assets/img2.jpg';
import image3 from './assets/img3.jpg';
import image4 from './assets/img4.jpg';
import image5 from './assets/img5.jpg';
import image6 from './assets/img6.jpg';
import image7 from './assets/img7.jpg';
import image8 from './assets/img8.jpg';
import image9 from './assets/img9.jpg';
import image10 from './assets/img10.jpg';
import image11 from './assets/img11.jpg';
import image12 from './assets/img12.jpg';
import image13 from './assets/img13.jpg';
import image14 from './assets/img14.jpg';
import image15 from './assets/img15.jpg';
import image16 from './assets/img16.jpg';
import image17 from './assets/img17.jpg';
import image18 from './assets/img18.jpg';
import image19 from './assets/img19.jpg';
import image20 from './assets/img20.jpg';
import image21 from './assets/img21.jpg';
import image22 from './assets/img22.jpg';
import image23 from './assets/img23.jpg';
import image24 from './assets/img24.jpg';
import image25 from './assets/img25.jpg';
import image26 from './assets/img26.jpg';
import image27 from './assets/img27.jpg';
import image28 from './assets/img28.jpg';

const images = [
  image1, image2, image3, image4, image5, image6, image7, image8, image9, image10,
  image11, image12, image13, image14, image15, image16, image17, image18, image19, image20,
  image21, image22, image23, image24, image25, image26, image27, image28
];
*/

const Community = () => {
  // Array of placeholder colors for the circles
  const colors = [
    'bg-red-400', 'bg-blue-400', 'bg-green-400', 'bg-yellow-400',
    'bg-purple-400', 'bg-pink-400', 'bg-indigo-400', 'bg-teal-400',
    'bg-orange-400', 'bg-cyan-400', 'bg-lime-400', 'bg-fuchsia-400',
    'bg-rose-400', 'bg-emerald-400', 'bg-sky-400', 'bg-amber-400',
    'bg-violet-400', 'bg-blue-300', 'bg-gray-400', 'bg-trueGray-400',
    'bg-coolGray-400', 'bg-blueGray-400', 'bg-red-500', 'bg-green-500',
    'bg-yellow-500', 'bg-purple-500', 'bg-pink-500', 'bg-indigo-500'
  ];

  // Defines the positions for the circles in a spiral/circular pattern
  const circlePositions = [
    { top: '10%', left: '40%', size: 'md' }, { top: '0%', left: '55%', size: 'lg' }, { top: '5%', left: '20%', size: 'sm' },
    { top: '10%', left: '70%', size: 'lg' }, { top: '25%', left: '90%', size: 'md' }, { top: '25%', left: '5%', size: 'lg' },
    { top: '40%', left: '95%', size: 'sm' }, { top: '40%', left: '0%', size: 'lg' }, { top: '55%', left: '90%', size: 'md' },
    { top: '55%', left: '5%', size: 'lg' }, { top: '70%', left: '20%', size: 'sm' }, { top: '70%', left: '70%', size: 'lg' },
    { top: '80%', left: '40%', size: 'md' }, { top: '80%', left: '55%', size: 'lg' }, { top: '90%', left: '30%', size: 'sm' },
    { top: '90%', left: '60%', size: 'lg' }, { top: '20%', left: '30%', size: 'md' }, { top: '20%', left: '80%', size: 'sm' },
    { top: '35%', left: '15%', size: 'lg' }, { top: '35%', left: '85%', size: 'md' }, { top: '65%', left: '15%', size: 'sm' },
    { top: '65%', left: '85%', size: 'lg' }, { top: '50%', left: '25%', size: 'md' }, { top: '50%', left: '75%', size: 'lg' },
    { top: '45%', left: '45%', size: 'sm' }, { top: '45%', left: '50%', size: 'lg' }, { top: '50%', left: '40%', size: 'md' },
    { top: '50%', left: '60%', size: 'sm' }, { top: '60%', left: '48%', size: 'lg' }
  ];

  // Determine the size classes based on the 'size' property
  const getSizeClasses = (size) => {
    switch (size) {
      case 'sm': return 'w-12 h-12 md:w-14 md:h-14';
      case 'md': return 'w-14 h-14 md:w-16 md:h-16';
      case 'lg': return 'w-16 h-16 md:w-20 md:h-20';
      default: return 'w-14 h-14 md:w-16 md:h-16';
    }
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-white font-poppins flex flex-col items-center justify-center min-h-screen py-16 px-4">
      {/* Circle of images/colors */}
      <motion.div
        className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] flex items-center justify-center mb-16"
        animate={{ rotate: isHovered ? 360 : 360 }} // Rotate continuously
        transition={{
          ease: "linear",
          duration: isHovered ? 10 : 25, // Faster on hover, slower otherwise
          repeat: Infinity
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {circlePositions.map((position, index) => (
          <motion.div
            key={index}
            className={`absolute rounded-full overflow-hidden shadow-md flex items-center justify-center 
              ${colors[index % colors.length]} ${getSizeClasses(position.size)}`}
            style={{ 
              top: position.top, 
              left: position.left, 
              transform: 'translate(-50%, -50%)',
              rotate: `-${isHovered ? 360 : 360}deg` // Counter-rotate the children
            }}
            whileHover={{ scale: 1.15, zIndex: 10 }} // Scale up on hover
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {/*
            // Uncomment the following 'img' tag when you want to use actual images.
            // Make sure to import your images and pass them via the 'images' array.
            <img 
              src={images[index % images.length]} 
              alt={`Community member ${index + 1}`} 
              className="w-full h-full object-cover" 
            />
            */}
          </motion.div>
        ))}
      </motion.div>

      {/* Text Content */}
      <div className="text-center max-w-2xl px-4">
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-6">
          Join Our Community of Learners!
        </h2>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-10">
          Meet our students and become part of our thriving community. Join us and learn for free at The Free Mind Academy!
        </p>
        <button className="bg-gray-800 text-white font-medium py-3 px-8 rounded-full hover:bg-gray-700 transition-colors duration-300 shadow-lg">
          Join Now
        </button>
      </div>
    </div>
  );
};

export default Community;