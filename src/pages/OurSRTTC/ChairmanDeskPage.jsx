import React from 'react';
import { motion } from 'framer-motion';

// --- SVG ICONS ---
// Reused from original for consistency
const LocationPinIcon = () => <svg className="w-5 h-5 mr-3 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>;
const PhoneIcon = () => <svg className="w-5 h-5 mr-3 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>;
const MailIcon = () => <svg className="w-5 h-5 mr-3 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>;

// Icons for the Pillars of Service
const EducationIcon = () => <svg className="w-7 h-7 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6"></path></svg>;
const HealthcareIcon = () => <svg className="w-7 h-7 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>;
const CultureIcon = () => <svg className="w-7 h-7 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>;
const WelfareIcon = () => <svg className="w-7 h-7 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>;


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

// Data for Pillars of Service
const pillarsOfService = [
    {
        title: "Education",
        icon: <EducationIcon />,
        description: "Providing financial assistance to countless students, enabling them to pursue their academic dreams and build a brighter future."
    },
    {
        title: "Healthcare",
        icon: <HealthcareIcon />,
        description: "Supporting patients in need by providing access to crucial healthcare services, helping them overcome dire medical circumstances."
    },
    {
        title: "Culture",
        icon: <CultureIcon />,
        description: "Enriching lives by promoting cultural activities and initiatives that preserve heritage and foster community engagement."
    },
    {
        title: "Welfare",
        icon: <WelfareIcon />,
        description: "Conducting numerous welfare projects over three decades to help thousands rebuild their lives and dream again."
    }
];

// --- MAIN COMPONENT ---
export default function ChairmanDeskPage() {
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
            Chairman's View
          </motion.h1>
          <motion.p 
            className="text-lg text-slate-600 mt-6 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A Legacy of Philanthropy and Social Enrichment Through Enduring Commitment.
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
                                src="https://placehold.co/400x400/E2E8F0/4A5568?text=Chairman"
                                alt="Shri Shripad Mukund Kuvelkar, Chairman"
                                className="w-full h-full object-cover rounded-2xl"
                            />
                        </div>
                    </motion.div>
                </div>
                <div className="md:col-span-2">
                    <h3 className="font-serif text-3xl font-semibold text-indigo-800">Our Visionary Leader</h3>
                    <h2 className="text-4xl font-bold tracking-tight text-slate-900 mt-2">Shri Shripad Mukund Kuvelkar</h2>
                    <p className="text-slate-500 text-lg mt-1">Chairman, SRTTC FoE, Kamshet</p>
                    <p className="text-slate-600 mt-6 max-w-xl text-md leading-relaxed">
                        As Chairman, Shri Shripad Mukund Kuvelkar continues the profound legacy of the Suman Ramesh Tulsiani Charitable Trust. His leadership ensures that the trust's foundational goals of enriching lives through education, healthcare, culture, and welfare are pursued with unwavering dedication and vision.
                    </p>
                </div>
            </div>
        </AnimatedSection>
        
        <main className="max-w-4xl mx-auto">
            <AnimatedSection className="mb-20">
              <h3 className="font-serif text-4xl font-semibold text-slate-900 mb-6">A Legacy of Giving: The Trust's Mission</h3>
              <div className="space-y-6 text-slate-700 leading-loose">
                  <p>
                    Established in 1989, the SUMAN RAMESH TULSIANI CHARITABLE TRUST is a brainchild of now octogenarian couple Smt. Suman Tulsiani and her entrepreneur husband Shri Ramesh Tulsiani. For them it is said, "You can find all kinds of great people in Society but it is very rare to find a sincere donor who donates without expectations."
                  </p>
                  <p>
                    The Trust is dedicated to help and enrich peoples' lives by providing financial assistance for Education, Healthcare, Culture and Welfare. Numerous projects and activities conducted under these four heads over the past nearly three decades have helped hundreds and thousands of students, patients, and the likes to overcome dire circumstances and avail an opportunity to rebuild their lives and dream again.
                  </p>
              </div>
            </AnimatedSection>

            <AnimatedSection className="text-center my-24">
              <blockquote className="font-serif text-3xl md:text-4xl text-slate-800 italic leading-snug max-w-3xl mx-auto">
                  "You can find all kinds of great people in Society but it is very rare to find a sincere donor who donates without expectations."
              </blockquote>
            </AnimatedSection>

            <AnimatedSection className="mb-20">
              <h3 className="font-serif text-4xl font-semibold text-slate-900 mb-12">The Trust's Four Pillars of Service</h3>
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
                {pillarsOfService.map((pillar) => (
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
              <p className="font-serif text-4xl italic text-slate-700 mb-2">Shripad M. Kuvelkar</p>
              <p className="font-bold text-slate-800">Shri Shripad Mukund Kuvelkar</p>
              <p className="text-slate-600">Chairman, SRTTC FoE, Kamshet</p>
            </AnimatedSection>
        </main>
      </div>
    </div>
  );
}