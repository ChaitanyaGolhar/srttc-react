import React from "react";
import { motion, AnimatePresence } from "framer-motion";

// You might need a particle / wave library or custom canvas/SVG
// For simplicity, I’ll use a small SVG waves background + floating particles via CSS

const MessageSquareIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
    viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className={className}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);

const ChevronDownIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
    viewBox="0 0 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className={className}>
    <path d="m6 9 6 6 6-6"/>
  </svg>
);

const FaqItem = ({ question, answer, isOpen, onClick }) => {
  // DESIGNER'S NOTE: Added state to manage the "typed" text effect.
  const [typedAnswer, setTypedAnswer] = React.useState("");

  // DESIGNER'S NOTE: This effect triggers the typing animation when the FAQ is opened.
  React.useEffect(() => {
    if (isOpen) {
      let i = 0;
      setTypedAnswer(""); // Reset the text on each open
      const intervalId = setInterval(() => {
        if (i < answer.length) {
          setTypedAnswer(prev => prev + answer.charAt(i));
          i++;
        } else {
          clearInterval(intervalId);
        }
      }, 10); // Adjust typing speed here (lower is faster)

      return () => clearInterval(intervalId); // Cleanup on close
    }
  }, [isOpen, answer]);


  return (
    <motion.div
      // DESIGNER'S NOTE: The 'layout' prop is key here. It tells Framer Motion
      // to animate this component's size and position changes automatically.
      layout
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="rounded-xl border border-gray-200/70 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 bg-white/80 backdrop-blur-sm"
    >
      <button
        onClick={onClick}
        className="flex justify-between items-center w-full text-left py-6 px-6 hover:bg-indigo-50/40 transition-colors duration-300"
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        >
          <div className={`p-1 rounded-full ${isOpen ? "bg-indigo-100" : ""}`}>
            <ChevronDownIcon className={`h-6 w-6 ${isOpen ? "text-indigo-600" : "text-gray-500"}`} />
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
            className="px-6 pb-6 text-gray-600 leading-relaxed"
          >
            {/* DESIGNER'S NOTE: Displaying the state-managed typed text here. */}
            {typedAnswer}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function App() {
  const [openFaq, setOpenFaq] = React.useState(null);

  const faqs = [
    {
      question: "How can I apply for admission to SRTTC?",
      answer:
        "You can apply through the institute’s admission portal. Fill the application form, upload the required documents, and pay the prescribed fees. Check the Quick Links section on the website for the Admission Portal. Contact the college office for guidance in case you face issues. ",
    },
    {
      question: "What engineering programmes does SRTTC offer?",
      answer:
        "Suman Ramesh Tulsiani Technical Campus offers undergraduate engineering programmes affiliated with Savitribai Phule Pune University. The disciplines include Computer Engineering, Mechanical Engineering, Civil Engineering, and possibly others as per current academic catalog. For updated list, refer to the Courses or Syllabus section on the website.",
    },
    {
      question: "What are the eligibility criteria?",
      answer:
        "Eligibility generally includes passing 10+2 (or equivalent) with Physics, Chemistry and Mathematics. Admission is also based on the norms of the State (Maharashtra) entrance exams or other qualifying exams. Check the Academic Calendar or Admission Notifications on the site for exact cutoffs and requirements.",
    },
    {
      question: "What facilities does SRTTC provide on campus?",
      answer:
        "SRTTC provides well-equipped laboratories, library, infrastructure for placements, various scholarships including Maharashtra Govt. Scholarships, hostel facilities (if applicable), canteen, transport, and extracurricular opportunities. The institute is located in a scenic setting at Mauje Khamhet, Tal. Maval, Pune. ",
    },
    {
      question: "How does campus placement work at SRTTC?",
      answer:
        "Placement drives are regularly conducted. Top recruiters like TCS, Infosys, Vodafone, Wipro, etc. visit the campus. Students are prepared via training, mock interviews and soft skill development. Placement records are published on the website under Placement Updates and Notices.",
    },
  ];

  const handleFaqClick = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="relative overflow-hidden font-sans min-h-screen">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        {/* SVG waves or gradient + CSS particles */}
        <svg
          className="absolute bottom-0 left-0 w-full opacity-20 animate-float"
          viewBox="0 0 1440 320"
        >
          <path
            fill="url(#gradientWave)"
            d="M0,128L48,122.7C96,117,192,107,288,106.7C384,107,480,117,576,138.7C672,160,768,192,864,186.7C960,181,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
          <defs>
            <linearGradient id="gradientWave" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4F46E5" />
              <stop offset="100%" stopColor="#6366F1" />
            </linearGradient>
          </defs>
        </svg>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full opacity-20"
              style={{
                width: `${Math.random() * 8 + 4}px`,
                height: `${Math.random() * 8 + 4}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `particleMove ${20 + Math.random() * 30}s linear infinite`,
                animationDelay: `${Math.random() * 20}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-b from-white via-gray-50 to-gray-100 relative z-10">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left Column */}
            <div className="flex flex-col justify-start">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
                SRTTC – Faculty of Engineering
              </h1>
              <p className="text-gray-600 text-lg mb-10">
                Information & FAQs about Suman Ramesh Tulsiani Technical Campus
              </p>

              <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-indigo-100">
                <div className="flex items-center mb-4">
                  <div className="bg-white p-3 rounded-full mr-4 shadow-md shadow-indigo-100">
                    <MessageSquareIcon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Need More Information?
                  </h3>
                </div>
                <p className="text-gray-600 mb-8">
                  For queries not covered in the FAQ, you can reach out via our admission office or contact details on the website.
                </p>
                <button className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.03] hover:shadow-lg hover:shadow-indigo-400/40 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-indigo-500">
                  Contact Admissions
                </button>
              </div>
            </div>

            {/* Right Column */}
            {/* DESIGNER'S NOTE: Converted the container to a motion.div and added the 'layout'
                prop. This instructs Framer Motion to animate the position of all children
                when the layout changes, fixing the "jump" and creating a smooth re-flow. */}
            <motion.div layout className="space-y-4">
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

      {/* CSS for floating particles animation */}
      <style jsx>{`
        @keyframes particleMove {
          0% {
            transform: translateY(0) translateX(0);
          }
          100% {
            transform: translateY(-100vh) translateX(20px);
          }
        }

        .animate-float {
          animation: floatWave 30s ease-in-out infinite;
        }
        @keyframes floatWave {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(20px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </div>
  );
}

