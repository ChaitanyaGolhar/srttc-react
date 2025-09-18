import { useState } from 'react';
import { ChevronDown, MessageSquarePlus } from 'lucide-react';

const faqData = [
  {
    id: 1,
    question: 'What programs are offered at SRTTC?',
    answer: 'We offer a variety of undergraduate and postgraduate programs in fields like Computer Engineering, Mechanical Engineering, Civil Engineering, AI & Data Science, and more. Please visit our Academics page for a detailed list.'
  },
  {
    id: 2,
    question: 'What is the admission process?',
    answer: 'The admission process is conducted as per the guidelines of the Directorate of Technical Education (DTE), Maharashtra. It typically involves centralized counseling based on state-level entrance exam scores. For detailed steps, please refer to our Admissions section.'
  },
  {
    id: 3,
    question: 'Is the campus secure for students?',
    answer: 'Absolutely. We prioritize student safety with 24/7 security personnel, campus-wide CCTV surveillance, and a strict anti-ragging policy to ensure a safe and secure learning environment for everyone.'
  },
  {
    id: 4,
    question: 'Does the institute provide placement assistance?',
    answer: 'Yes, our dedicated Training & Placement Cell works tirelessly to connect students with top recruiters. We provide comprehensive training, conduct mock interviews, and organize campus placement drives to help students launch their careers.'
  }
];

export const FaqSection = () => {
  const [openId, setOpenId] = useState(0); 

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-slate-50 py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Title and Description */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <MessageSquarePlus className="text-indigo-600" size={20}/>
              <p className="text-sm font-bold text-indigo-600 uppercase tracking-wider">
                Frequently asked questions
              </p>
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
              Common <span className="text-indigo-500">questions</span>
            </h2>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              Choose a plan that fits your business needs and budget. No hidden fees, no surprises—just straightforward pricing for powerful financial management.
            </p>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-8">
            <div className="space-y-5">
              {faqData.map((item) => (
                <div 
                  key={item.id} 
                  className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  <button
                    onClick={() => toggleFaq(item.id)}
                    className="flex justify-between items-center w-full p-6 text-left"
                  >
                    <span className="text-lg font-semibold text-slate-800">{item.question}</span>
                    <div 
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                        openId === item.id ? 'bg-indigo-600' : 'bg-indigo-100'
                      }`}
                    >
                      <ChevronDown 
                        size={20} 
                        className={`transform transition-transform duration-300 ${
                          openId === item.id ? 'rotate-180 text-white' : 'text-indigo-600'
                        }`} 
                      />
                    </div>
                  </button>
                  <div
                    className={`grid overflow-hidden transition-all duration-500 ease-in-out ${
                      openId === item.id ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-slate-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};