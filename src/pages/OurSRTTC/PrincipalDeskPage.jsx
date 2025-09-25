import React from 'react';
import { motion } from 'framer-motion';

// --- SVG ICONS ---
const GraduationCapIcon = () => <svg className="w-5 h-5 mr-3 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6"></path></svg>;
const LocationPinIcon = () => <svg className="w-5 h-5 mr-3 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>;
const PhoneIcon = () => <svg className="w-5 h-5 mr-3 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>;
const MailIcon = () => <svg className="w-5 h-5 mr-3 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>;

// --- REUSABLE COMPONENTS ---

// An animation wrapper for sections to fade in on scroll.
const AnimatedSection = ({ children, className }) => (
    <motion.section
        className={className}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
    >
        {children}
    </motion.section>
);

// Data for Pillars of Excellence
const pillarsOfExcellence = [
    {
        title: "ISO 9001:2015 Certified",
        icon: <svg className="w-7 h-7 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>,
        description: "A stringent, continuously monitored teaching-learning process ensures exceptional academic results and the highest standards of quality."
    },
    {
        title: "Outcome-Based Education",
        icon: <svg className="w-7 h-7 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z"></path></svg>,
        description: "Our core philosophy focuses on ensuring students achieve specified learning outcomes, preparing them for the real-world application of their knowledge."
    },
    {
        title: "Innovative Teaching",
        icon: <svg className="w-7 h-7 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>,
        description: "A dynamic faculty fosters innovative teaching methodologies, blending practical and theoretical approaches to enrich the learning experience."
    },
    {
        title: "Project-Based Learning",
        icon: <svg className="w-7 h-7 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>,
        description: "We nurture a vibrant culture of project and activity-based learning, which fuels academic excellence and inspires new research initiatives."
    }
];

// --- MAIN APP COMPONENT ---
export default function App() {
  return (
    <div className="relative bg-gray-50 font-sans antialiased text-slate-800 min-h-screen overflow-x-hidden">
      {/* Decorative Gradient Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-sky-200/50 rounded-full filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute top-96 right-0 w-96 h-96 bg-indigo-200/50 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>

      <div className="relative container mx-auto px-4 z-10">
        
        <header className="text-center py-24 sm:py-32">
          <motion.h1 
            className="font-serif text-5xl md:text-7xl font-bold text-slate-900 tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            From the Principal's Desk
          </motion.h1>
          <motion.p 
            className="text-lg text-slate-600 mt-6 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A Commitment to Excellence and Social Transformation Through Dynamic Education.
          </motion.p>
        </header>

        <AnimatedSection className="mb-28">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 items-center">
                <div className="md:col-span-1 flex items-center justify-center p-4">
                    <motion.div 
                        className="relative w-full max-w-xs group"
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-sky-200 to-indigo-300 rounded-3xl transform rotate-6 transition-transform duration-500 group-hover:rotate-4 group-hover:scale-105"></div>
                        <div className="relative bg-slate-100 rounded-3xl shadow-lg aspect-square p-3">
                             <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Shah_Rukh_Khan_graces_the_launch_of_the_new_Santro.jpg/250px-Shah_Rukh_Khan_graces_the_launch_of_the_new_Santro.jpg"
                                alt="Prof.(Dr.) Jaywant B. Sankpal, Principal"
                                className="w-full h-full object-cover rounded-2xl"
                                onError={(e) => e.target.src = 'https://placehold.co/400x400/E2E8F0/4A5568?text=Image+Not+Found'}
                            />
                        </div>
                    </motion.div>
                </div>
                <div className="md:col-span-2">
                    <h3 className="font-serif text-3xl font-semibold text-indigo-800">Our Guiding Force</h3>
                    <h2 className="text-4xl font-bold tracking-tight text-slate-900 mt-2">Prof.(Dr.) Jaywant B. Sankpal</h2>
                    <p className="text-slate-500 text-lg mt-1">Principal</p>
                    <p className="text-slate-600 mt-6 max-w-xl text-md leading-relaxed">
                        A distinguished academician specializing in Mechanical Design, Dr. Sankpal brings over two decades of experience in shaping engineering education. His leadership is pivotal in driving the institution's commitment to academic rigor and research-oriented learning.
                    </p>
                    <div className="mt-8 pt-6 border-t border-gray-200">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm">
                            <p className="flex items-center text-slate-700"><GraduationCapIcon /><span>Ph.D., M.E. (Mechanical Design)</span></p>
                            <p className="flex items-center text-slate-700"><LocationPinIcon /><span>Room 1001, 1st Fl, G Building</span></p>
                            <p className="flex items-center text-slate-700"><PhoneIcon /><span>02114-264106</span></p>
                            <p className="flex items-center text-slate-700"><MailIcon /><span>principal@srttc.ac.in</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </AnimatedSection>
        
        <main className="max-w-4xl mx-auto">
            <AnimatedSection className="mb-20">
              <h3 className="font-serif text-4xl font-semibold text-slate-900 mb-6">Principal's Vision</h3>
              <div className="space-y-6 text-slate-700 leading-loose">
                  <p>
                    Suman Ramesh Tulsiani Technical Campus, a leading institute in and around Pune, envisions serving society, industry, and all stakeholders through Value-Added Quality Education. In the 21st century, the corporate world demands more than subject experts; it needs knowledge-driven solution providers. This requires budding technocrats to possess critical thinking, problem-solving abilities, and strong professional ethics alongside their technical expertise.
                  </p>
                  <p>
                    To achieve this, we weave together a diverse student community, embedding them with sound academic fundamentals and the highest standards of quality and teamwork. Our approach is methodical, structured, and geared towards creating professionals ready to meet the challenges of a globalized world.
                  </p>
              </div>
            </AnimatedSection>

            <AnimatedSection className="text-center my-24">
                <blockquote className="font-serif text-3xl md:text-4xl text-slate-800 italic leading-snug max-w-3xl mx-auto">
                    "Quality is always a result of strong intentions, dedicated efforts, appropriate and intelligent decisions and skillful execution."
                </blockquote>
            </AnimatedSection>

            <AnimatedSection className="mb-20">
              <h3 className="font-serif text-4xl font-semibold text-slate-900 mb-12">Our Pillars of Academic Excellence</h3>
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10"
                variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.2 } }
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {pillarsOfExcellence.map((pillar) => (
                    <motion.div 
                        key={pillar.title} 
                        className="flex items-start space-x-5"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                        }}
                    >
                        <div className="flex-shrink-0 bg-sky-100 text-sky-600 rounded-xl p-4 mt-1 transition-transform duration-300 group-hover:scale-110">
                            {pillar.icon}
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-slate-800">{pillar.title}</h4>
                            <p className="mt-1 text-slate-600 leading-relaxed">{pillar.description}</p>
                        </div>
                    </motion.div>
                ))}
              </motion.div>
            </AnimatedSection>

            <AnimatedSection className="mt-24 text-right border-t border-gray-200 pt-10">
                <p className="font-serif text-4xl italic text-slate-700 mb-2">Jaywant B. Sankpal</p>
                <p className="font-bold text-slate-800">Prof.(Dr.) Jaywant B. Sankpal</p>
                <p className="text-slate-600">Principal, SRTC</p>
            </AnimatedSection>
        </main>
      </div>
    </div>
  );
}

