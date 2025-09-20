// import React, { useState, useRef, useEffect } from 'react';
// import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import {
//   Users, FlaskConical, Calendar, BookOpen, Trophy, GraduationCap, ChevronDown, X, Search,
//   Lightbulb, Target
// } from 'lucide-react';

// // --- MOCK DATA ---
// const heroSlides = [
//   { id: 1, src: 'https://via.placeholder.com/1920x1080/0d3b66/f9f7f7?text=Vibrant+Campus+Life' },
//   { id: 2, src: 'https://via.placeholder.com/1920x1080/3b5998/f9f7f7?text=Students+in+Lab' },
//   { id: 3, src: 'https://via.placeholder.com/1920x1080/247ba0/f9f7f7?text=Modern+Classrooms' },
// ];


// // NOTE: This is a placeholder for the actual SectionWrapper component.
// // In your project, you would import and use your existing SectionWrapper.
// const SectionWrapper = ({ children, id }) => (
//   <section id={id} className="py-16 md:py-24">
//     <div className="container mx-auto px-6">{children}</div>
//   </section>
// );

// // Define the data for the stats, adding a color for the top line.
// const statsData = [
//   { value: '15+', label: 'Faculty Members', color: 'yellow-500' },
//   { value: '5+', label: 'Modern Labs', color: 'pink-500' },
//   { value: '10+', label: 'Workshops', color: 'purple-500' },
//   { value: '20+', label: 'Publications', color: 'red-500' },
//   { value: '30+', label: 'Student Achievements', color: 'indigo-500' },
//   { value: '100%', label: 'Placement Support', color: 'green-500' },
// ];

// const facultyData = [
//   { name: 'Dr. A. B. Chaudhari', designation: 'HOD & Professor', img: 'https://via.placeholder.com/250/007BFF/FFFFFF?text=HOD', email: 'hod.fe@srttc.ac.in', specialization: 'Quantum Physics' },
//   { name: 'Prof. C. D. Sharma', designation: 'Assoc. Professor', img: 'https://via.placeholder.com/250/28A745/FFFFFF?text=CS', email: 'cd.sharma@srttc.ac.in', specialization: 'Numerical Analysis' },
//   { name: 'Prof. E. F. Gupta', designation: 'Asst. Professor', img: 'https://via.placeholder.com/250/FFC107/000000?text=EG', email: 'ef.gupta@srttc.ac.in', specialization: 'Organic Chemistry' },
//   { name: 'Prof. G. H. Singh', designation: 'Asst. Professor', img: 'https://via.placeholder.com/250/DC3545/FFFFFF?text=GS', email: 'gh.singh@srttc.ac.in', specialization: 'Communication Skills' },
// ];

// const labsData = [
//     { id: 1, type: 'Physics', title: 'Applied Physics Lab', images: ['https://via.placeholder.com/800x600/007BFF/FFFFFF?text=Optics+Setup', 'https://via.placeholder.com/800x600/007BFF/FFFFFF?text=Electronics+Kit'], description: 'Equipped with modern optics, electronics, and mechanics experiment kits.', equipment: ['Spectrometers', 'Digital Oscilloscopes', 'Laser Kits'] },
//     { id: 2, type: 'Chemistry', title: 'Engineering Chemistry Lab', images: ['https://via.placeholder.com/800x600/28A745/FFFFFF?text=Titration+Station', 'https://via.placeholder.com/800x600/28A745/FFFFFF?text=Chemical+Storage'], description: 'Advanced tools for chemical analysis and synthesis experiments.', equipment: ['pH Meters', 'Conductivity Meters', 'Distillation Units'] },
//     { id: 3, type: 'Programming', title: 'Programming Lab', images: ['https://via.placeholder.com/800x600/FFC107/000000?text=Coding+Environment', 'https://via.placeholder.com/800x600/FFC107/000000?text=Student+Workstations'], description: 'High-performance workstations for learning C++, Python, and more.', equipment: ['Intel i7 PCs', 'Linux & Windows OS', 'Compiler & IDE Tools'] },
// ];

// const eventsData = {
//     upcoming: [
//         { date: 'Oct 05, 2025', title: 'Guest Lecture on AI', description: 'By Dr. Priya Sharma from IIT Bombay.' },
//         { date: 'Oct 15, 2025', title: 'Project Exhibition "Innovate"', description: 'Showcasing first-year student projects.' },
//     ],
//     past: [
//         { title: 'Annual Sports Day', year: '2024', image: 'https://via.placeholder.com/400x300/e0f2f7?text=Sports+Day' },
//         { title: 'Coding Competition', year: '2024', image: 'https://via.placeholder.com/400x300/e8f5e9?text=Coding+Comp' },
//         { title: 'Science Fair', year: '2023', image: 'https://via.placeholder.com/400x300/fff3e0?text=Science+Fair' },
//     ]
// }

// const publicationsData = [
//     { title: 'Advanced Material Science with Nanotechnology', authors: 'Dr. A. B. Chaudhari', journal: 'Journal of Sustainable Materials', year: '2024', tag: 'SCI', abstract: 'An in-depth analysis of new-age materials and their application in sustainable energy solutions, focusing on nanotechnology integration for enhanced efficiency and reduced environmental impact.' },
//     { title: 'Simplified Calculus: A Modern Pedagogical Approach', authors: 'Prof. C. D. Sharma', journal: 'International Journal of Engineering Education', year: '2023', tag: 'UGC', abstract: 'This paper presents a novel approach to teaching calculus to first-year engineering students, emphasizing intuitive understanding and real-world applications over abstract derivations.' },
//     { title: 'Organic Chemistry Synthesis of Novel Drug Intermediates', authors: 'Prof. E. F. Gupta', journal: 'Asian Journal of Organic Chemistry', year: '2022', tag: 'Scopus', abstract: 'Research on the synthesis pathways for new drug intermediates, exploring greener and more efficient synthetic routes. The study details reaction mechanisms and optimization strategies.' },
//     { title: 'The Transformative Impact of AI in Modern Education', authors: 'Dr. A. B. Chaudhari, Student A. B. Patil', journal: 'Journal of AI in Learning', year: '2021', tag: 'Scopus', abstract: 'An exploration into how Artificial Intelligence is reshaping educational methodologies, from personalized learning platforms to automated assessment tools.' },
// ];





// --- SUB-COMPONENTS (REIMAGINED) ---

// const HeroSection = ({ scrollToSection, aboutRef }) => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);
  
//   const { scrollYProgress } = useScroll();
//   const parallaxY = useTransform(scrollYProgress, [0, 0.5], ['0%', '50%']);

//   return (
//     <div className="relative h-[75vh] w-full rounded-2xl overflow-hidden">
//       <AnimatePresence>
//         {heroSlides.map((slide, index) => (
//           index === currentSlide && (
//             <motion.div
//               key={slide.id}
//               className="absolute inset-0 bg-cover bg-center"
//               style={{ backgroundImage: `url(${slide.src})`, y: parallaxY }}
//               initial={{ opacity: 0, scale: 1.1 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 1.5, ease: 'easeInOut' }}
//             >
//               <motion.div 
//                 className="w-full h-full"
//                 initial={{ scale: 1 }}
//                 animate={{ scale: 1.15 }}
//                 transition={{ duration: 10, ease: 'linear', repeat: Infinity, repeatType: 'mirror' }}
//               />
//             </motion.div>
//           )
//         ))}
//       </AnimatePresence>
//       <div className="absolute inset-0 bg-black/50" />
//       <div className="relative z-10 flex h-full items-center justify-center text-center p-4">
//         <motion.div
//           className="bg-white/10 backdrop-blur-md rounded-xl p-8 md:p-12 border border-white/20 shadow-lg max-w-4xl mx-auto"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
//             Department of Engineering Science & Humanities
//           </h1>
//           <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-200">
//             Building the foundations for tomorrow's engineering leaders.
//           </p>
//           <motion.button
//             onClick={() => scrollToSection(aboutRef)}
//             className="mt-8 px-8 py-3 bg-orange-500 text-white font-bold rounded-full transition-all duration-300 shadow-lg"
//             whileHover={{ 
//               scale: 1.05,
//               boxShadow: '0 0 25px rgba(249, 115, 22, 0.8)'
//             }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Explore Department
//           </motion.button>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

















import React, { useRef } from 'react';

// Import all section components
import HeroSection from '../components/HeroSection';
import QuickStats from '../components/QuickStats';
import AboutSection from '../components/AboutSection';
import FacultySection from '../components/FacultySection';
import LabsWorkshopsSection from '../components/LabsWorkshopsSection';
import EventsSection from '../components/EventsSection';
import PublicationsSection from '../components/PublicationsSection';

const DepartmentPage = ({ departmentData }) => {
  // Refs for scrolling
  const aboutRef = useRef(null);
  const facultyRef = useRef(null);
  const labsRef = useRef(null);
  const eventsRef = useRef(null);
  const publicationsRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Destructure data for clarity
  const {
    heroData,
    statsData,
    facultyData,
    labsData,
    eventsData,
    publicationsData
  } = departmentData;

  return (
    <main className="max-w-7xl mx-auto overflow-hidden">
      <HeroSection heroData={heroData} scrollToSection={scrollToSection} aboutRef={aboutRef} />
      <QuickStats statsData={statsData} />
      
      <div ref={aboutRef}>
        <AboutSection hodData={facultyData[0]} /> {/* Pass HOD data to AboutSection */}
      </div>

      <div ref={facultyRef}>
        <FacultySection facultyData={facultyData} />
      </div>

      <div ref={labsRef}>
        <LabsWorkshopsSection labsData={labsData} />
      </div>

      <div ref={eventsRef}>
        <EventsSection eventsData={eventsData} />
      </div>

      <div ref={publicationsRef}>
        <PublicationsSection publicationsData={publicationsData} />
      </div>
    </main>
  );
};

export default DepartmentPage;