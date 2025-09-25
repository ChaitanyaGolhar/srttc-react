import React from 'react';
import { useNavigate } from 'react-router-dom';

// --- SVG Icons ---
// Using inline SVGs to avoid external dependencies.
const BookOpenIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const HeartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
  </svg>
);

const GlobeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h8a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.724 8.724a2 2 0 012.828 0l2.828 2.829a2 2 0 010 2.828l-2.828 2.828a2 2 0 01-2.828 0l-2.829-2.828a2 2 0 010-2.828z" />
    </svg>
);

const UsersIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283-.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);


// --- Main Component ---
export default function OurTrustPage() {
    const navigate = useNavigate();
    const handleContactClick = () => {
        navigate('/contact');
    };

    // --- Data for Trustees ---
    const trustees = [
        { name: 'Mr. Ramesh Chandumal Tulsiani', title: 'Founder & Settlor', imageUrl: 'https://placehold.co/400x400/EBF4FF/333?text=R+T', description: 'A successful entrepreneur and visionary philanthropist, he believes, "Your Greatness is not what you have, it\'s what you Give."' },
        { name: 'Mrs. Suman Ramesh Tulsiani', title: 'Settlor', imageUrl: 'https://placehold.co/400x400/EBF4FF/333?text=S+T', description: 'The better half of Shri Ramesh Tulsiani, passionately involved in the day-to-day activities and projects of the Trust.' },
        { name: 'Mr. Shripad Mukund Kuvelkar', title: 'Trustee', imageUrl: 'https://placehold.co/400x400/EBF4FF/333?text=S+K', description: 'A Chartered Accountant by profession, instrumental in giving shape to some of the landmark projects of the Trust.' },
        { name: 'Mr. Raghuvir S. Kuwelker', title: 'Trustee', imageUrl: 'https://placehold.co/400x400/EBF4FF/333?text=R+K', description: 'A Mechanical Engineer by profession, he oversees the construction business of the Tulsiani Group.' },
        { name: 'Mr. Bahadur Lal Jain', title: 'Trustee', imageUrl: 'https://placehold.co/400x400/EBF4FF/333?text=B+J', description: 'A Chartered Accountant and a full time Director of Century Textiles & Industries Ltd. with rich industry exposure.' },
    ];


    // --- Animation Styles ---
    const animationStyle = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        .fade-in-up {
            opacity: 0;
            animation: fadeInUp 0.8s ease-out forwards;
        }
    `;

    return (
        <div className="bg-gray-50 font-sans antialiased">
            <style>{animationStyle}</style>
            
            {/* --- Hero Section --- */}
            <header 
                className="relative text-white text-center py-24 md:py-40"
                style={{
                    backgroundImage: 'linear-gradient(to right, #001f3f, #003366)',
                }}
            >
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div 
                    className="absolute inset-0 opacity-10" 
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    }}
                ></div>
                <div className="relative container mx-auto px-6">
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-lg fade-in-up">A Legacy of Service and Excellence</h1>
                    <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto drop-shadow-md fade-in-up" style={{ animationDelay: '0.2s' }}>Discover the Suman Ramesh Tulsiani Charitable Trust, the foundation of our institution.</p>
                </div>
            </header>

            <main>
                {/* --- Our Story Section --- */}
                <section className="py-20 md:py-28 bg-white">
                    <div className="container mx-auto px-6 fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <div className="max-w-4xl mx-auto text-center">
                             <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 relative pb-4 inline-block">
                                Our Story
                                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-blue-600 rounded-full"></span>
                            </h2>
                            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                                Established in 1989, the Suman Ramesh Tulsiani Charitable Trust is the brainchild of the octogenarian couple Smt. Suman Tulsiani and her entrepreneur husband Shri Ramesh Tulsiani. The Trust is dedicated to enriching people's lives by providing financial assistance for Education, Healthcare, Culture, and Welfare. Over three decades, their projects have helped thousands of individuals overcome dire circumstances and rebuild their lives.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                                <a href="https://tulsianitrust.com/" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 transform hover:scale-105 transition-all duration-300">
                                    Visit Trust Website
                                </a>
                                <a href="#" className="inline-block bg-gray-200 text-gray-800 font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-gray-300 transform hover:scale-105 transition-all duration-300">
                                    Our Activities
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- Mission & Vision Section --- */}
                <section className="bg-blue-800 py-20 md:py-28">
                    <div className="container mx-auto px-6 text-center fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">Our Core Pillars</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                            {['Education', 'Healthcare', 'Culture', 'Welfare'].map((pillar, index) => (
                                <div key={pillar} className="flex flex-col items-center group fade-in-up" style={{ animationDelay: `${0.4 + index * 0.15}s` }}>
                                    <div className="bg-blue-600 p-5 rounded-full mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg">
                                        {pillar === 'Education' && <BookOpenIcon />}
                                        {pillar === 'Healthcare' && <HeartIcon />}
                                        {pillar === 'Culture' && <GlobeIcon />}
                                        {pillar === 'Welfare' && <UsersIcon />}
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-2">{pillar}</h3>
                                    <p className="text-blue-200">
                                        {pillar === 'Education' && 'Providing financial assistance to empower students and foster a brighter future.'}
                                        {pillar === 'Healthcare' && 'Supporting patients and healthcare initiatives to ensure well-being for all.'}
                                        {pillar === 'Culture' && 'Preserving and promoting cultural heritage for future generations.'}
                                        {pillar === 'Welfare' && 'Engaging in social welfare activities to uplift and support communities.'}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- Meet the Trustees Section --- */}
                <section className="py-20 md:py-28 bg-gray-100">
                    <div className="container mx-auto px-6 fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-16 relative pb-4 inline-block left-1/2 -translate-x-1/2">
                            Meet Our Trustees
                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-blue-600 rounded-full"></span>
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 justify-center">
                            {trustees.map((trustee, index) => (
                                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group border-t-4 border-transparent hover:border-blue-600 fade-in-up" style={{ animationDelay: `${0.4 + index * 0.1}s` }}>
                                    <div className="overflow-hidden">
                                        <img 
                                            src={trustee.imageUrl} 
                                            alt={`Portrait of ${trustee.name}`} 
                                            className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                                            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x400/EBF4FF/333?text=Image'; }}
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-gray-900">{trustee.name}</h3>
                                        <p className="text-blue-600 font-medium">{trustee.title}</p>
                                        <p className="text-gray-600 mt-4 text-sm">{trustee.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- Call to Action Section --- */}
                <section className="bg-white py-20 md:py-28">
                    <div className="container mx-auto px-6 text-center fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Become a Part of Our Journey</h2>
                        <p className="text-gray-600 text-lg mt-4 mb-8 max-w-2xl mx-auto">
                            Join us in our mission to make a difference. Explore our programs and see how you can contribute to our legacy.
                        </p>
                        <button 
                                onClick={handleContactClick}
                                className="cursor-pointer mt-4 w-full sm:w-auto py-3 px-6 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 transition-all duration-300"
                            >
                                Contact Us
                            </button>
                    </div>
                </section>
            </main>
        </div>
    );
}

