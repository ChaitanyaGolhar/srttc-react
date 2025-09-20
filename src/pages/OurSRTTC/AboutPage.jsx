import React from 'react';

// --- CONFIGURATION ---
// This is where you can easily insert and manage the images for the page.
// Just replace the URLs with the ones you want to use.
const pageConfig = {
  heroImage: "https://srttc.ac.in/images/slides/slide-1.jpg",
  campusImage: "https://srttc.ac.in/images/campus.jpg",
  // Using a placeholder for the founder. Replace with the actual image URL.
  founderImage: "https://placehold.co/400x400/e2e8f0/4a5568?text=Founder", 
};


// --- SVG Icons ---
const TargetIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-indigo-500"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
);
const EyeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-indigo-500"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
);
const AwardIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-indigo-500"><circle cx="12" cy="8" r="6"></circle><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path></svg>
);
const CheckCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-green-500 mr-3"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
);
const MilestoneIcon = () => (
    <div className="flex-shrink-0 w-12 h-12 bg-indigo-500 text-white rounded-full flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><polyline points="12 6 12 12 16 14"></polyline></svg>
    </div>
);


// --- Main App Component ---
export default function App() {
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });
  }, []);

  return (
    <>
      <style>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease-out, transform 0.5s ease-out;
        }
        .animate-on-scroll.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
        @keyframes animated-gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .hero-bg-animation {
          background: linear-gradient(-45deg, #3730a3, #4f46e5, #6d28d9, #7c3aed);
          background-size: 400% 400%;
          animation: animated-gradient 15s ease infinite;
        }
      `}</style>
      <div className="bg-white text-gray-800 font-sans">
        
        {/* --- Hero Section --- */}
        <section className="relative text-white text-center">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${pageConfig.heroImage}')` }}
            aria-hidden="true"
          ></div>
          <div className="absolute inset-0 hero-bg-animation bg-opacity-75"></div>
          <div className="relative py-32 px-6">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight animate-on-scroll">About SRTTC</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-indigo-100 animate-on-scroll" style={{ transitionDelay: '100ms' }}>Empowering the Next Generation of Innovators, Engineers, and Leaders</p>
          </div>
        </section>

        {/* --- Founding & History Section --- */}
        <section className="py-24 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-16 items-center">
            <div className="md:col-span-3 animate-on-scroll">
              <h2 className="text-3xl font-bold text-indigo-900 mb-5">Our Journey</h2>
              <p className="mb-4 text-gray-600 leading-relaxed">Suman Ramesh Tulsiani Technical Campus (SRTTC) was established in 2012 by the esteemed Suman Ramesh Tulsiani Charitable Trust of Mumbai.</p>
              <p className="mb-8 text-gray-600 leading-relaxed">The campus was proudly inaugurated by Prof. (Dr.) Snehalata Deshmukh, the then Vice-Chancellor of Mumbai University, marking the beginning of a new era in technical education.</p>
              
              {/* --- Timeline --- */}
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-gray-200 before:pointer-events-none">
                  <div className="relative flex items-start animate-on-scroll" style={{ transitionDelay: '100ms' }}>
                      <MilestoneIcon/>
                      <div className="ml-6">
                          <h4 className="font-bold text-lg text-indigo-800">2012 - Institute Founded</h4>
                          <p className="text-sm text-gray-500 mt-1">The beginning of our journey in technical education.</p>
                      </div>
                  </div>
                  <div className="relative flex items-start animate-on-scroll" style={{ transitionDelay: '200ms' }}>
                      <MilestoneIcon/>
                      <div className="ml-6">
                          <h4 className="font-bold text-lg text-indigo-800">2015 - First Batch Graduated</h4>
                          <p className="text-sm text-gray-500 mt-1">Celebrating our first wave of successful engineers.</p>
                      </div>
                  </div>
                   <div className="relative flex items-start animate-on-scroll" style={{ transitionDelay: '300ms' }}>
                      <MilestoneIcon/>
                      <div className="ml-6">
                          <h4 className="font-bold text-lg text-indigo-800">2018 - NAAC 'B+' Accreditation</h4>
                          <p className="text-sm text-gray-500 mt-1">A testament to our commitment to quality education.</p>
                      </div>
                  </div>
              </div>
            </div>
            <div className="md:col-span-2 space-y-8">
              <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-100 flex items-center transform hover:-translate-y-2 transition-transform duration-300 animate-on-scroll" style={{ transitionDelay: '200ms' }}>
                <div className="flex-shrink-0 w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mr-6">
                  <TargetIcon />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-indigo-900">Our Mission</h3>
                  <p className="text-gray-600 mt-1">To provide quality education, foster research and innovation, and develop socially responsible professionals in a lifelong learning environment.</p>
                </div>
              </div>
              <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-100 flex items-center transform hover:-translate-y-2 transition-transform duration-300 animate-on-scroll" style={{ transitionDelay: '300ms' }}>
                <div className="flex-shrink-0 w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mr-6">
                  <EyeIcon />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-indigo-900">Our Vision</h3>
                  <p className="text-gray-600 mt-1">To be a leading institution contributing to technological and socio-economic development through excellence in engineering.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Our Guiding Force Section --- */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              <div className="relative w-full max-w-sm mx-auto animate-on-scroll">
                  <img src={pageConfig.founderImage} alt="Founder" className="rounded-2xl shadow-2xl w-full h-auto object-cover aspect-square" onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/400x400/e2e8f0/4a5568?text=Image+Error'; }}/>
              </div>
              <div className="animate-on-scroll" style={{ transitionDelay: '100ms' }}>
                  <h2 className="text-3xl font-bold text-indigo-900 mb-4">Our Guiding Force</h2>
                  <h3 className="text-xl font-semibold text-gray-700 mb-4">The Suman Ramesh Tulsiani Charitable Trust</h3>
                  <p className="text-gray-600 leading-relaxed">SRTTC is a proud initiative of the Suman Ramesh Tulsiani Charitable Trust, a renowned philanthropic organization from Mumbai. The trust is dedicated to the cause of education and social welfare, believing firmly that quality education is the cornerstone of a progressive society. Their unwavering support and vision are the bedrock of our institution's success.</p>
              </div>
          </div>
        </section>

        {/* --- Recognitions & Accreditations --- */}
        <section className="py-24 px-6 bg-indigo-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold text-indigo-900">Recognitions & Accreditations</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Our commitment to excellence is recognized by leading national bodies.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
              {['ISO 9001:2015', "NAAC 'B+' Grade", 'AICTE Approval', 'SPPU Affiliation', 'MSBTE Affiliation'].map((item, index) => (
                <div key={item} className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center justify-center hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-on-scroll" style={{ transitionDelay: `${index * 100}ms`}}>
                  <AwardIcon />
                  <h3 className="font-semibold text-indigo-800 mt-4 text-sm md:text-base">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Campus & Facilities --- */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 animate-on-scroll">
              <h2 className="text-3xl font-bold text-indigo-900 mb-6">World-Class Campus & Facilities</h2>
              <ul className="space-y-4 text-gray-600">
                {['Library & Digital Library', 'Computer Center & Internet', 'Hostel for Boys & Girls', 'Sports & Gymnasium', 'Canteen & Mess', 'Transportation Services', 'Seminar Hall'].map((facility, index) => (
                  <li key={facility} className="flex items-center text-lg animate-on-scroll" style={{ transitionDelay: `${index * 100}ms`}}>
                    <CheckCircleIcon />
                    <span>{facility}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 md:order-2 relative animate-on-scroll" style={{ transitionDelay: '100ms' }}>
              <img src={pageConfig.campusImage} alt="SRTTC Campus" className="rounded-2xl shadow-2xl w-full h-auto object-cover aspect-video" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/e2e8f0/4a5568?text=Image+Not+Found'; }}/>
            </div>
          </div>
        </section>

        {/* --- Extracurricular & Activities --- */}
        <section className="py-24 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold text-indigo-900">Vibrant Student Life</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Fostering creativity, leadership, and holistic development beyond academics.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white shadow-xl rounded-xl p-8 text-center transform hover:-translate-y-2 transition-transform duration-300 animate-on-scroll" style={{ transitionDelay: '100ms' }}>
                <h3 className="text-xl font-bold text-indigo-800 mb-2">Sneh Suman</h3>
                <p className="text-gray-600">Our grand annual social gathering with cultural events that foster creativity and community.</p>
              </div>
              <div className="bg-white shadow-xl rounded-xl p-8 text-center transform hover:-translate-y-2 transition-transform duration-300 animate-on-scroll" style={{ transitionDelay: '200ms' }}>
                <h3 className="text-xl font-bold text-indigo-800 mb-2">Student Clubs</h3>
                <p className="text-gray-600">Engage with technical and cultural clubs like MESA, CESA, and CSI to explore your passions.</p>
              </div>
              <div className="bg-white shadow-xl rounded-xl p-8 text-center transform hover:-translate-y-2 transition-transform duration-300 animate-on-scroll" style={{ transitionDelay: '300ms' }}>
                <h3 className="text-xl font-bold text-indigo-800 mb-2">Technical Fests</h3>
                <p className="text-gray-600">Participate in workshops and events that promote innovation, problem-solving, and learning.</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- Contact CTA --- */}
        <section className="py-24 px-6 text-center bg-white">
          <div className="max-w-4xl mx-auto animate-on-scroll">
              <h2 className="text-3xl font-bold text-indigo-900 mb-4">Ready to Start Your Journey?</h2>
              <p className="text-gray-600 mb-8 max-w-xl mx-auto">Contact us for admissions or visit our campus to experience the SRTTC difference.</p>
              <div className="mb-8">
                  <p className="font-semibold">Old Pune-Mumbai Highway, At Post: Khamshet, Ta. Maval, Dist. Pune-410405</p>
                  <p className="text-gray-500">Email: admissions@srttc.ac.in | Phone: +91-9096766068</p>
              </div>
              <a href="https://srttc.ac.in/admissions.html" className="inline-block bg-indigo-600 text-white font-bold py-4 px-8 rounded-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg">Learn About Admissions</a>
          </div>
        </section>

      </div>
    </>
  );
}

