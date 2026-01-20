import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// --- ICONS ---
const MessageSquareIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
    viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className={className}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const ChevronDownIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
    viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className={className}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

// --- HOOKS ---
// Improved Typewriter Hook for smooth performance
const useTypewriter = (text, speed = 15, shouldType) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (!shouldType) {
      setDisplayedText("");
      return;
    }

    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, shouldType]);

  return displayedText;
};

// --- COMPONENTS ---

const FaqItem = ({ question, answer, isOpen, onClick }) => {
  const typedAnswer = useTypewriter(answer, 10, isOpen);

  return (
    <motion.div
      layout
      initial={{ borderRadius: 12 }}
      className={`border overflow-hidden transition-colors duration-300 backdrop-blur-sm
        ${isOpen ? "bg-white border-indigo-200 shadow-md" : "bg-white/60 border-gray-200/60 shadow-sm hover:shadow-md hover:bg-white/90"}`}
    >
      <button
        onClick={onClick}
        className="flex justify-between items-center w-full text-left py-5 px-6 group"
      >
        <span className={`text-lg font-medium transition-colors duration-300 ${isOpen ? "text-indigo-900" : "text-gray-800 group-hover:text-indigo-700"}`}>
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className="flex-shrink-0 ml-4"
        >
          <div className={`p-2 rounded-full transition-colors duration-300 ${isOpen ? "bg-indigo-100 text-indigo-600" : "bg-gray-100 text-gray-500 group-hover:bg-indigo-50"}`}>
            <ChevronDownIcon className="h-5 w-5" />
          </div>
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 40 }}
          >
            <div className="px-6 pb-6 text-gray-600 leading-relaxed text-base">
              {typedAnswer}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-[2px] h-[1em] bg-indigo-500 align-middle ml-1"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function App() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "How can I apply for admission to SRTTC?",
      answer: "You can apply through the institute’s admission portal. Fill the application form, upload the required documents, and pay the prescribed fees. Check the Quick Links section on the website for the Admission Portal. Contact the college office for guidance in case you face issues.",
    },
    {
      question: "What engineering programmes does SRTTC offer?",
      answer: "Suman Ramesh Tulsiani Technical Campus offers undergraduate engineering programmes affiliated with Savitribai Phule Pune University. The disciplines include Computer Engineering, Mechanical Engineering, Civil Engineering, and possibly others as per current academic catalog. For updated list, refer to the Courses or Syllabus section on the website.",
    },
    {
      question: "What are the eligibility criteria?",
      answer: "Eligibility generally includes passing 10+2 (or equivalent) with Physics, Chemistry and Mathematics. Admission is also based on the norms of the State (Maharashtra) entrance exams or other qualifying exams. Check the Academic Calendar or Admission Notifications on the site for exact cutoffs and requirements.",
    },
    {
      question: "What facilities does SRTTC provide on campus?",
      answer: "SRTTC provides well-equipped laboratories, library, infrastructure for placements, various scholarships including Maharashtra Govt. Scholarships, hostel facilities (if applicable), canteen, transport, and extracurricular opportunities. The institute is located in a scenic setting at Mauje Khamhet, Tal. Maval, Pune.",
    },
    {
      question: "How does campus placement work at SRTTC?",
      answer: "Placement drives are regularly conducted. Top recruiters like TCS, Infosys, Vodafone, Wipro, etc. visit the campus. Students are prepared via training, mock interviews and soft skill development. Placement records are published on the website under Placement Updates and Notices.",
    },
  ];

  const handleFaqClick = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="relative overflow-hidden font-sans min-h-screen bg-gray-50">
      
      {/* --- BACKGROUND ANIMATION --- */}
      <div className="absolute inset-0 -z-10 h-full w-full">
        {/* Gradient Wave */}
        <svg
          className="absolute bottom-0 left-0 w-full opacity-20 animate-float pointer-events-none"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="url(#gradientWave)"
            d="M0,128L48,122.7C96,117,192,107,288,106.7C384,107,480,117,576,138.7C672,160,768,192,864,186.7C960,181,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
          <defs>
            <linearGradient id="gradientWave" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4F46E5" />
              <stop offset="100%" stopColor="#818CF8" />
            </linearGradient>
          </defs>
        </svg>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-indigo-300/30 rounded-full blur-[1px]"
              style={{
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `particleMove ${20 + Math.random() * 30}s linear infinite`,
                animationDelay: `-${Math.random() * 20}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column (Info) - Spans 5 columns on large screens */}
            <div className="lg:col-span-5 flex flex-col justify-start sticky top-10">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                SRTTC <br className="hidden lg:block" />
                <span className="text-indigo-600">Faculty of Engineering</span>
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Explore our Frequently Asked Questions to learn more about admissions, courses, and campus life at Suman Ramesh Tulsiani Technical Campus.
              </p>

              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-lg border border-white/50 relative overflow-hidden group">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-indigo-50 rounded-full z-0 group-hover:scale-150 transition-transform duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="bg-indigo-100 p-3 rounded-xl mr-4 text-indigo-600">
                      <MessageSquareIcon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Still have questions?
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-6 text-sm sm:text-base">
                    Can't find the answer you're looking for? Our admission team is here to help you.
                  </p>
                  <button 
                    onClick={() => navigate("/contact")}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-indigo-200 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Contact Admissions
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column (FAQs) - Spans 7 columns on large screens */}
            <div className="lg:col-span-7 w-full">
              <motion.div layout className="flex flex-col gap-4">
                {faqs.map((faq, index) => (
                  <FaqItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openFaq === index}
                    onClick={() => handleFaqClick(index)}
                  />
                ))}
              </motion.div>
            </div>

          </div>
        </div>
      </div>

      {/* --- GLOBAL STYLES --- */}
      <style jsx global>{`
        @keyframes particleMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(-20px, -100px); opacity: 0; }
        }

        .animate-float {
          animation: floatWave 20s ease-in-out infinite;
        }

        @keyframes floatWave {
          0%, 100% { transform: translateY(0) scaleY(1); }
          50% { transform: translateY(-20px) scaleY(1.05); }
        }
      `}</style>
    </div>
  );
}