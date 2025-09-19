// src/components/MainHome.jsx
import { useState } from 'react';
import { ChevronRight, Calendar, Users } from 'lucide-react';

export const MainHome = () => {
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [isAboutHovered, setIsAboutHovered] = useState(false);
  const [isContactHovered, setIsContactHovered] = useState(false);
  const [isDiscoverHovered, setIsDiscoverHovered] = useState(false);

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Empowering Minds, <span className="text-emerald-600">Inspiring Futures</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Welcome to St. Ignatius College School! Get ready for another year of learning and growing together. We're excited to have you here!
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button
                className={`bg-emerald-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 ${isAboutHovered ? '-translate-y-1 shadow-lg' : 'shadow-md'}`}
                onMouseEnter={() => setIsAboutHovered(true)}
                onMouseLeave={() => setIsAboutHovered(false)}
              >
                About School
              </button>
              <button
                className={`bg-white text-emerald-600 border border-emerald-600 font-medium py-3 px-6 rounded-lg transition-all duration-300 ${isContactHovered ? '-translate-y-1 shadow-lg' : 'shadow-md'}`}
                onMouseEnter={() => setIsContactHovered(true)}
                onMouseLeave={() => setIsContactHovered(false)}
              >
                Contact Us
              </button>
            </div>
          </div>
          
          {/* Right Content */}
          <div className="w-full lg:w-1/2">
            <div 
              className="relative rounded-xl overflow-hidden shadow-lg transition-all duration-500"
              onMouseEnter={() => setIsImageHovered(true)}
              onMouseLeave={() => setIsImageHovered(false)}
            >
              {/* Image */}
              <div className="relative h-80 sm:h-96 bg-gray-100 flex items-center justify-center overflow-hidden">
                <img 
                  src=""
                  alt="Students in school hallway"
                  className={`w-full h-full object-cover transition-transform duration-500 ${isImageHovered ? 'scale-105' : 'scale-100'}`}
                />
                <div className={`absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-500 ${isImageHovered ? 'opacity-0' : 'opacity-100'}`}></div>
              </div>
              
              {/* Yellow Announcement Bar */}
              <div className="bg-yellow-400 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Calendar className="text-yellow-800" size={24} />
                  <div>
                    <p className="font-bold text-yellow-900">July 4 PA Day</p>
                    <p className="text-sm text-yellow-800">For Elementary and Secondary Schools</p>
                  </div>
                </div>
                <button
                  className={`bg-yellow-500 hover:bg-yellow-600 text-yellow-900 font-medium py-2 px-5 rounded-lg transition-all duration-300 ${isDiscoverHovered ? '-translate-y-1 shadow-md' : 'shadow-sm'}`}
                  onMouseEnter={() => setIsDiscoverHovered(true)}
                  onMouseLeave={() => setIsDiscoverHovered(false)}
                >
                  Discover Event
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};