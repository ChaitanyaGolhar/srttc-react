import { Facebook, Twitter, Linkedin, Instagram, Send } from 'lucide-react';
import logo from '../../assets/images/srttc-logo.png'; // Assuming you have a logo file

const Footer = () => {
  const socialLinks = [
    { icon: <Facebook size={20} />, href: '#' },
    { icon: <Twitter size={20} />, href: '#' },
    { icon: <Linkedin size={20} />, href: '#' },
    { icon: <Instagram size={20} />, href: '#' },
  ];

  return (
    <footer className="bg-white text-gray-700">
      {/* Call to Action Section */}
      <div className="bg-orange-500 text-white rounded-lg container mx-auto p-8 lg:p-12 text-center -mb-16 relative z-10">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
        <p className="max-w-2xl mx-auto mb-6">Explore our programs and find out how you can become a part of the SRTTC family.</p>
        <button className="bg-white text-orange-500 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors">
          Apply Now
        </button>
      </div>

      <div className="bg-gray-100 pt-28 pb-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <img src={logo} alt="SRTTC Logo" className="h-10 mr-3"/>
              <span className="font-bold text-lg text-gray-800">SRTTC</span>
            </div>
            <p className="text-sm mb-4 max-w-xs">
              An AICTE approved, NAAC 'B+' accredited institute dedicated to excellence in engineering education.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.href} className="text-gray-500 hover:text-blue-600 transition-colors">
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Academics */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Academics</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-600">Departments</a></li>
              <li><a href="#" className="hover:text-blue-600">Programs Offered</a></li>
              <li><a href="#" className="hover:text-blue-600">SPPU Syllabus</a></li>
              <li><a href="#" className="hover:text-blue-600">Academic Calendar</a></li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-600">DTE Portal</a></li>
              <li><a href="#" className="hover:text-blue-600">SPPU</a></li>
              <li><a href="#" className="hover:text-blue-600">Online Grievance</a></li>
              <li><a href="#" className="hover:text-blue-600">Student Feedback</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Contact Us</h3>
            <p className="text-sm">
              Gat No. 81,82,91-94,97,99,101,102 & 106(Part), Malwadi, Pune - 410405
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-200 py-4">
        <div className="container mx-auto px-4 text-center md:flex md:justify-between text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Suman Ramesh Tulsiani Technical Campus. All rights reserved.</p>
          <div className="space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-blue-600">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;