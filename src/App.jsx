import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import AdmissionsPage from './pages/AdmissionsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import Fe from './pages/Fe.jsx';
import { Navbar } from './components/layout/Navbar.jsx';

const App = () => {
  return (
    <Router>
      <Header/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admissions" element={<AdmissionsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/Fe" element={<Fe />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;