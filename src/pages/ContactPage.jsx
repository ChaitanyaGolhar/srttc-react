import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ChevronsRight, ChevronsLeft } from 'lucide-react';

// A more refined animation variant for a subtle, professional entrance
const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      delay: i * 0.1
    }
  })
};

const ContactPage = () => {
  const partnerLogos = [
    '/logos/logo1.svg',
    '/logos/logo2.svg',
    '/logos/logo3.svg',
    '/logos/logo4.svg',
  ];

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mt-5 mx-auto bg-[#F0F5F8] rounded-2xl shadow-sm p-4 sm:p-8 md:p-12">

        {/* --- Page Title Section --- */}
        <motion.section
          className="text-center pb-20 md:pb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <div className="flex justify-center items-center gap-4">
            <ChevronsLeft size={32} className="text-gray-300" />
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800">Contact Us</h1>
            <ChevronsRight size={32} className="text-gray-300" />
          </div>
          <p className="mt-6 max-w-xl mx-auto text-gray-600 leading-relaxed">
            We're here to help and answer any question you might have. We look forward to hearing from you.
          </p>
        </motion.section>

        {/* --- Partner Logos Section --- */}
        <motion.section
          className="pb-20 md:pb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
          custom={1}
        >
          <div className="flex justify-around items-center flex-wrap gap-x-8 gap-y-6">
            {partnerLogos.map((logo, index) => (
              <img key={index} src={logo} alt={`Partner logo ${index + 1}`} className="h-7 filter grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300" />
            ))}
          </div>
        </motion.section>

        {/* --- Form & Newsletter Section --- */}
        <motion.section
          className="grid grid-cols-1 lg:grid-cols-5 gap-12 md:gap-16 pb-20 md:pb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          custom={2}
        >
          {/* Contact Form */}
          <form className="lg:col-span-3 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input type="email" placeholder="Email" className="w-full h-14 p-4 bg-white border border-gray-200 rounded-lg outline-none focus:border-[#005A9C] focus:ring-2 focus:ring-blue-500/20 transition-all" />
              <input type="text" placeholder="Phone" className="w-full h-14 p-4 bg-white border border-gray-200 rounded-lg outline-none focus:border-[#005A9C] focus:ring-2 focus:ring-blue-500/20 transition-all" />
            </div>
            <input type="text" placeholder="Name" className="w-full h-14 p-4 bg-white border border-gray-200 rounded-lg outline-none focus:border-[#005A9C] focus:ring-2 focus:ring-blue-500/20 transition-all" />
            <textarea placeholder="Message" rows="6" className="w-full p-4 bg-white border border-gray-200 rounded-lg outline-none focus:border-[#005A9C] focus:ring-2 focus:ring-blue-500/20 transition-all"></textarea>
            <button type="submit" className="px-8 py-4 bg-[#005A9C] text-white font-semibold rounded-lg hover:bg-[#004170] transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-lg">
              Submit Button
            </button>
          </form>

          {/* Newsletter */}
          <div className="lg:col-span-2 bg-[#DDE6EB] p-10 rounded-lg">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Newsletters</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Stay updated with our latest news, offers, and articles by subscribing to our newsletter.
            </p>
            <form className="space-y-4">
              <input type="email" placeholder="Your Email" className="w-full h-14 p-4 bg-white border border-gray-200 rounded-lg outline-none focus:border-[#005A9C] focus:ring-2 focus:ring-blue-500/20 transition-all" />
              <button type="submit" className="w-full px-8 py-4 bg-[#005A9C] text-white font-semibold rounded-lg hover:bg-[#004170] transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-lg">
                Submit Button
              </button>
            </form>
          </div>
        </motion.section>

        {/* --- Contact Info Cards --- */}
        <motion.section
           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-20 md:pb-24"
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.2 }}
           variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          {[
            { icon: <Phone size={24}/>, title: "(+876) 765 885", text: "Reach out to our team for any immediate inquiries or support." },
            { icon: <Mail size={24}/>, title: "mail@influenca.id", text: "Send us an email for detailed questions and we'll get back to you soon." },
            { icon: <MapPin size={24}/>, title: "London Eye London", text: "Visit our office at the heart of the city for a personal consultation." },
          ].map((card, index) => (
            <motion.div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300" variants={sectionVariants}>
              <div className="flex items-center gap-5">
                <div className="bg-[#DDE6EB] p-4 rounded-full text-[#005A9C]">{card.icon}</div>
                <h4 className="text-xl font-bold text-gray-800">{card.title}</h4>
              </div>
              <p className="mt-5 text-gray-600 leading-relaxed">{card.text}</p>
            </motion.div>
          ))}
        </motion.section>

        {/* --- Map Section --- */}
        <motion.section
          className="h-[500px] w-full rounded-lg overflow-hidden shadow-md"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          custom={4}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3418.8471585042885!2d73.53203557465757!3d18.755810911947467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2abbfeb8600bb%3A0x4669673f97336d33!2sSuman%20Ramesh%20Tulsiani%20College%20Of%20Engineering%2C%20Maharashtra%20410405!5e1!3m2!1sen!2sin!4v1758189316034!5m2!1sen!2si"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location Map"
          ></iframe>
        </motion.section>

      </main>
    </div>
  );
};

export default ContactPage;