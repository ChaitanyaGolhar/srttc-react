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