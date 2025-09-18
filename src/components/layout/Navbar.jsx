import { useState, useEffect } from 'react'; // Import useEffect
import { Menu, X, ChevronDown } from 'lucide-react';

// --- Navigation Data (remains the same) ---
const navLinks = [
    // ...your navLinks data here...
    { name: 'Home', href: '/' },
    {
        name: 'Our SRTTC',
        subMenu: [
            { name: 'About SRTTC', href: '/about' },
            { name: 'Mission & Vision', href: '/vision' },
            { name: 'Governing Body', href: '/governing-body' },
            { name: 'Principal’s Desk', href: '/principal-desk' },
            { name: 'Infrastructure', href: '/infrastructure' },
            { name: 'Institute Office', href: '/office' },
        ],
    },
    {
        name: 'Academics',
        subMenu: [
            { name: 'Programs Offered', href: '/academics/programs' },
            { name: 'Departments', href: '/academics/departments' },
            { name: 'Academic Calendar', href: '/academics/calendar' },
            { name: 'Examination Cell', href: '/academics/exam-cell' },
            { name: 'Research & Development', href: '/academics/research' },
            { name: 'Library', href: '/academics/library' },
            { name: 'Virtual Labs', href: '/academics/virtual-labs' },
        ],
    },
    {
        name: 'Admissions',
        highlight: true, // This keeps the red background
        subMenu: [
            { name: 'Admission Procedure', href: '/admissions/procedure' },
            { name: 'Eligibility Criteria', href: '/admissions/eligibility' },
            { name: 'Fee Structure', href: '/admissions/fees' },
            { name: 'Anti-Ragging', href: '/admissions/anti-ragging' },
            { name: 'Prospectus', href: '/admissions/prospectus' },
            { name: 'Scholarship Information', href: '/admissions/scholarships' },
        ],
    },
    {
        name: 'Departments',
        subMenu: [
            { name: 'Computer Engineering', href: '/departments/comp' },
            { name: 'Mechanical Engineering', href: '/departments/mech' },
            { name: 'Civil Engineering', href: '/departments/civil' },
            { name: 'AI & DS', href: '/departments/ai-ds' },
            { name: 'CSE (Data Science)', href: '/departments/cse-ds' },
            { name: 'Applied Science & Humanities', href: '/departments/ash' },
        ],
    },
    {
        name: 'For Students',
        subMenu: [
            { name: 'Learning Management System', href: '/students/lms' },
            { name: 'Feedback', href: '/students/feedback' },
            { name: 'Alumni Portal', href: '/students/alumni' },
            { name: 'Library', href: '/students/library' },
            { name: 'Online Grievance', href: '/students/grievance' },
            { name: 'Media Coverage', href: '/students/media' },
            { name: 'Student Development Cell', href: '/students/sdc' },
            { name: 'Pay Fee Online', href: '/students/pay-fee' },
        ],
    },
    {
        name: 'Training & Placement',
        subMenu: [
            { name: 'About T&P Cell', href: '/placements/about' },
            { name: 'Placement Procedure', href: '/placements/procedure' },
            { name: 'Major Recruiters', href: '/placements/recruiters' },
            { name: 'Training Activities', href: '/placements/training' },
            { name: 'Placement Statistics', href: '/placements/stats' },
        ],
    },
    {
        name: 'Downloads',
        subMenu: [
            { name: 'SPPU Syllabus', href: '/downloads/sppu-syllabus' },
            { name: 'Old Question Papers', href: '/downloads/old-papers' },
            { name: 'In-sem/End-sem Papers', href: '/downloads/exam-papers' },
            { name: 'Fee Structure', href: '/downloads/fees' },
            { name: 'Academic Calendar', href: '/downloads/calendar' },
            { name: 'ISO Forms', href: '/downloads/iso' },
        ],
    },
    {
        name: 'Quick Links',
        subMenu: [
            { name: 'SPPU', href: 'http://www.unipune.ac.in/' },
            { name: 'MSBTE', href: 'https://msbte.org.in/' },
            { name: 'DTE Portal', href: 'http://dte.maharashtra.gov.in/' },
            { name: 'MahaDBT', href: 'https://mahadbtmahait.gov.in/' },
            { name: 'Admission Portal', href: 'https://cetcell.mahacet.org/' },
            { name: 'Student Feedback', href: '/links/feedback' },
            { name: 'NPTEL', href: 'https://nptel.ac.in/' },
            { name: 'AICTE', href: 'https://www.aicte-india.org/' },
        ],
    },
    {
        name: 'Contact Us',
        subMenu: [
            { name: 'Institute Contact', href: '/contact/institute' },
            { name: 'Location Map', href: '/contact/map' },
            { name: 'Office Directory', href: '/contact/directory' },
            { name: 'Email IDs', href: '/contact/emails' },
        ],
    },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set isScrolled to true if user scrolls more than 10px, else false
      setIsScrolled(window.scrollY > 10);
    };

    // Add event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'top-4' : 'top-0' // Add margin-top when scrolled
      }`}
    >
      <div
        className={`container mx-auto transition-all duration-300 ${
          isScrolled ? 'rounded-full' : 'rounded-none'
        }`}
      >
        <div
          className={`flex items-center justify-center lg:justify-between h-16 px-4 transition-all duration-300 ${
            isScrolled
              ? 'bg-white/30 backdrop-blur-lg rounded-full border border-white/20 shadow-xl' // Glassmorphism effect
              : 'bg-[#005A9C]' // Original solid blue
          }`}
        >
          {/* LOGO for Mobile view */}
          <div className="lg:hidden">
            <a href="/" className={`${isScrolled ? 'text-[#005A9C]' : 'text-white'} font-bold`}>SRTTC</a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1 space-x-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <a
                  href={link.href || '#'}
                  className={`px-3 py-2 rounded-md text-sm font-semibold uppercase tracking-wider flex items-center gap-1 cursor-pointer transition-colors duration-200 ${
                    link.highlight
                      ? 'bg-red-600 text-white' // Highlighted item remains the same
                      : isScrolled
                      ? 'text-[#005A9C] hover:bg-white/50' // Scrolled state text color and hover
                      : 'text-white hover:bg-blue-700' // Top state text color and hover
                  }`}
                >
                  {link.name}
                  {link.subMenu && <ChevronDown size={16} />}
                </a>
                
                {/* Dropdown Menu (no changes needed here) */}
                {link.subMenu && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max min-w-full bg-white text-black rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-50">
                        <div className="py-2">
                            {link.subMenu.map((subItem) => (
                                <a 
                                    key={subItem.name} 
                                    href={subItem.href} 
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
                                    target={subItem.href.startsWith('http') ? '_blank' : '_self'}
                                    rel="noopener noreferrer"
                                >
                                    {subItem.name}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition-colors duration-200 ${
                isScrolled
                  ? 'text-[#005A9C] hover:bg-white/50'
                  : 'text-white hover:bg-blue-700'
              }`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className={`lg:hidden ${isScrolled ? 'bg-white/80 backdrop-blur-md' : 'bg-blue-800'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href || '#'}
                className={`block px-3 py-2 rounded-md text-base font-medium uppercase ${
                  link.highlight
                    ? 'bg-red-600 text-white'
                    : isScrolled
                    ? 'text-[#005A9C] hover:bg-white/50'
                    : 'text-white hover:bg-blue-700'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};