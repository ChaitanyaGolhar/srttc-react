import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Page Template
import DepartmentPage from './pages/DepartmentPage.jsx';

// Import Data for FE Department
import {
  feHeroData, feStatsData, feFacultyData, feLabsData, feEventsData, fePublicationsData
} from './data/feData';

// Import Data for CSE Department
import {
  cseHeroData, cseStatsData, cseFacultyData, cseLabsData, cseEventsData, csePublicationsData
} from './data/cseData';

// Layout & Other Pages
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import { Navbar } from './components/layout/Navbar.jsx';
import HomePage from './pages/HomePage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
// ... import other pages as needed

// Assemble the data for each department into a single object
const feDepartmentData = {
  heroData: feHeroData,
  statsData: feStatsData,
  facultyData: feFacultyData,
  labsData: feLabsData,
  eventsData: feEventsData,
  publicationsData: fePublicationsData,
};

const cseDepartmentData = {
  heroData: cseHeroData,
  statsData: cseStatsData,
  facultyData: cseFacultyData,
  labsData: cseLabsData,
  eventsData: cseEventsData,
  publicationsData: csePublicationsData,
};



// Our SRTTC
import AboutPage from './pages/OurSRTTC/AboutPage.jsx';
import VisionPage from './pages/OurSRTTC/VisionPage.jsx';
import GoverningBodyPage from './pages/OurSRTTC/GoverningBodyPage.jsx';
import PrincipalDeskPage from './pages/OurSRTTC/PrincipalDeskPage.jsx';
import InfrastructurePage from './pages/OurSRTTC/InfrastructurePage.jsx';
import OfficePage from './pages/OurSRTTC/OfficePage.jsx';

// Academics
import AcademicCalendarPage from './pages/Academics/AcademicCalendarPage.jsx';
import ExamCellPage from './pages/Academics/ExamCellPage.jsx';
import ResearchPage from './pages/Academics/ResearchPage.jsx';
import LibraryPage from './pages/Academics/LibraryPage.jsx';
import VirtualLabsPage from './pages/Academics/VirtualLabsPage.jsx';

// Admissions
import AdmissionsProcedurePage from './pages/Admissions/AdmissionsProcedurePage.jsx';
import EligibilityPage from './pages/Admissions/EligibilityPage.jsx';
import FeeStructurePage from './pages/Admissions/FeeStructurePage.jsx';
import AntiRaggingPage from './pages/Admissions/AntiRaggingPage.jsx';
import ProspectusPage from './pages/Admissions/ProspectusPage.jsx';
import ScholarshipsPage from './pages/Admissions/ScholarshipsPage.jsx';

// For Students
import LMS from './pages/Students/LMS.jsx';
import FeedbackPage from './pages/Students/FeedbackPage.jsx';
import SdcPage from './pages/Students/SdcPage.jsx';
import PayFeePage from './pages/Students/PayFeePage.jsx';

// Training & Placement
import TpAboutPage from './pages/Placement/TpAboutPage.jsx';
import TpProcedurePage from './pages/Placement/TpProcedurePage.jsx';
import RecruitersPage from './pages/Placement/RecruitersPage.jsx';
import TrainingPage from './pages/Placement/TrainingPage.jsx';

// Downloads
import SppuSyllabusPage from './pages/Downloads/SppuSyllabusPage.jsx';
import OldPapersPage from './pages/Downloads/OldPapersPage.jsx';
import ExamPapersPage from './pages/Downloads/ExamPapersPage.jsx';






const App = () => {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        {/* Home */}
        <Route path="/" element={<HomePage />} />

        {/* Our SRTTC */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/vision" element={<VisionPage />} />
        <Route path="/governing-body" element={<GoverningBodyPage />} />
        <Route path="/principal-desk" element={<PrincipalDeskPage />} />
        <Route path="/infrastructure" element={<InfrastructurePage />} />
        <Route path="/office" element={<OfficePage />} />

        {/* Academics */}
        <Route path="/academics/calendar" element={<AcademicCalendarPage />} />
        <Route path="/academics/exam-cell" element={<ExamCellPage />} />
        <Route path="/academics/research" element={<ResearchPage />} />
        <Route path="/academics/library" element={<LibraryPage />} />
        <Route path="/academics/virtual-labs" element={<VirtualLabsPage />} />

        {/* Admissions */}
        <Route path="/admissions/procedure" element={<AdmissionsProcedurePage />} />
        <Route path="/admissions/eligibility" element={<EligibilityPage />} />
        <Route path="/admissions/fees" element={<FeeStructurePage />} />
        <Route path="/admissions/anti-ragging" element={<AntiRaggingPage />} />
        <Route path="/admissions/prospectus" element={<ProspectusPage />} />
        <Route path="/admissions/scholarships" element={<ScholarshipsPage />} />

        {/* Departments */}
        <Route 
          path="/departments/desh" 
          element={<DepartmentPage departmentData={feDepartmentData} />} 
        />
        <Route 
          path="/departments/comp" 
          element={<DepartmentPage departmentData={cseDepartmentData} />} 
        />
        {/* <Route path="/departments/mech" element={<MechanicalEnggPage />} />
        <Route path="/departments/civil" element={<CivilEnggPage />} />
        <Route path="/departments/ai-ds" element={<AiDsPage />} />
        <Route path="/departments/cse-ds" element={<CseDsPage />} /> */}
        

        {/* For Students */}
        <Route path="/students/lms" element={<LMS />} />
        <Route path="/students/feedback" element={<FeedbackPage />} />
        <Route path="/students/sdc" element={<SdcPage />} />
        <Route path="/students/pay-fee" element={<PayFeePage />} />

        {/* Training & Placement */}
        <Route path="/placements/about" element={<TpAboutPage />} />
        <Route path="/placements/procedure" element={<TpProcedurePage />} />
        <Route path="/placements/recruiters" element={<RecruitersPage />} />
        <Route path="/placements/training" element={<TrainingPage />} />

        {/* Downloads */}
        <Route path="/downloads/sppu-syllabus" element={<SppuSyllabusPage />} />
        <Route path="/downloads/old-papers" element={<OldPapersPage />} />
        <Route path="/downloads/exam-papers" element={<ExamPapersPage />} />

     

        {/* Contact Us */}
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<ErrorPage />} />  
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;







