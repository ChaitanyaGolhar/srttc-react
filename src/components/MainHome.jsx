// src/components/MainHome.jsx
import { ChevronRight, Code2, Globe, Quote } from 'lucide-react';

// --- Image Imports (Commented Out for now) ---
// import imageCenter from '../assets/images/career-center.jpg';
// import imageLeft from '../assets/images/career-left.jpg';
// import imageRight from '../assets/images/career-right.jpg';
// import imageFarRight from '../assets/images/career-far-right.jpg';

// Reusable Floating Icon Component
const FloatingIcon = ({ icon, colorClass, positionClass }) => {
  const glowClass = colorClass === 'text-orange-500' 
    ? 'shadow-[0_0_30px_rgba(249,115,22,0.4)]' 
    : 'shadow-[0_0_30px_rgba(16,185,129,0.4)]';

  return (
    <div className={`absolute ${positionClass} hidden lg:block`}>
      <div className={`relative flex items-center justify-center w-14 h-14 border rounded-xl ${colorClass} border-current`}>
        {icon}
        <div className={`absolute w-full h-full rounded-xl ${glowClass} opacity-70`}></div>
      </div>
    </div>
  );
};

export const MainHome = () => {
  // Gradient classes for placeholders
  const gradient1 = "bg-gradient-to-br from-purple-500 to-indigo-600";
  const gradient2 = "bg-gradient-to-br from-teal-400 to-emerald-600";
  const gradient3 = "bg-gradient-to-br from-orange-400 to-red-500";
  const gradient4 = "bg-gradient-to-br from-sky-400 to-blue-600";


  return (
    <section className="bg-white py-12 sm:py-16 overflow-hidden"> {/* Reduced vertical padding */}
      <div className="container mx-auto px-4 relative">
        
        {/* Breadcrumbs */}
        <div className="flex items-center justify-center text-xs font-semibold tracking-wider mb-4 lg:mb-6"> {/* Reduced margin-bottom */}
          <span className="text-gray-500">HOME</span>
          <ChevronRight size={14} className="text-gray-400 mx-1" /> {/* Smaller icon */}
          <span className="text-emerald-500">Career</span>
        </div>

        {/* Floating Icons - Adjusted positions and sizes for conciseness */}
        <FloatingIcon 
          icon={<Code2 size={24} />} 
          colorClass="text-orange-500" 
          positionClass="top-[5%] left-[10%] transform -rotate-12" 
        />
        <FloatingIcon 
          icon={<Globe size={24} />} 
          colorClass="text-emerald-500" 
          positionClass="top-[5%] right-[10%] transform rotate-12" 
        />

        {/* Main Title and Subtitle */}
        <div className="text-center max-w-2xl mx-auto"> {/* Max width for more conciseness */}
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"> {/* Removed lg:text-6xl, adjusted leading */}
            Build Your Future with Us
          </h1>
          <p className="mt-3 text-base text-slate-600"> {/* Reduced margin-top, smaller text */}
            Discover exciting opportunities and grow your career in a thriving environment.
          </p>
        </div>

        {/* Image Collage Section - now with color gradients */}
        <div className="mt-12 lg:mt-16"> {/* Reduced margin-top */}
          <div className="relative max-w-4xl mx-auto aspect-[4/3] sm:aspect-[2/1] lg:aspect-[3/2]"> {/* Adjusted max-width */}
            
            {/* Quote Bubble */}
            <div className="absolute z-30 top-0 left-[0%] lg:left-[-5%] w-60 bg-white rounded-xl shadow-xl p-4 border-l-4 border-emerald-400"> {/* Adjusted position, smaller padding, border-radius */}
              <div className="absolute -top-3 -left-3 w-9 h-9 bg-emerald-400 rounded-full flex items-center justify-center"> {/* Smaller icon circle */}
                <Quote size={18} className="text-white" /> {/* Smaller quote icon */}
              </div>
              <p className="text-slate-700 text-xs mt-3"> {/* Smaller text */}
                At Coreik, we merge creativity with strategy to craft digital experiences that captivate and perform.
              </p>
            </div>
            
            {/* Image 1 (Center) - Now Gradient */}
            <div className="absolute z-10 w-[55%] sm:w-[50%] lg:w-[45%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-xl shadow-2xl overflow-hidden">
                <div className={`${gradient1} w-full h-full flex items-center justify-center text-white text-xl font-bold`}>
                    {/* Placeholder text or icon */}
                </div>
                {/* <img src={imageCenter} alt="Team collaborating in an office" className="w-full h-full object-cover"/>
                */}
            </div>

            {/* Image 2 (Left) - Now Gradient */}
            <div className="absolute z-20 w-[35%] sm:w-[30%] lg:w-[28%] top-[45%] left-0 transform -translate-y-1/2 rounded-xl shadow-xl overflow-hidden">
                <div className={`${gradient2} w-full h-full flex items-center justify-center text-white text-lg font-bold`}>
                    {/* Placeholder text or icon */}
                </div>
                {/*
                <img src={imageLeft} alt="Creative workspace" className="w-full h-full object-cover"/>
                */}
            </div>
            
            {/* Image 3 (Right) - Now Gradient */}
            <div className="absolute z-20 w-[35%] sm:w-[30%] lg:w-[28%] top-[55%] right-0 transform -translate-y-1/2 rounded-xl shadow-xl overflow-hidden">
                <div className={`${gradient3} w-full h-full flex items-center justify-center text-white text-lg font-bold`}>
                    {/* Placeholder text or icon */}
                </div>
                {/*
                <img src={imageRight} alt="Two colleagues working together" className="w-full h-full object-cover"/>
                */}
            </div>

            {/* Image 4 (Far Right, behind) - Now Gradient */}
            <div className="absolute z-0 w-[25%] sm:w-[20%] lg:w-[22%] top-1/2 right-[-5%] sm:right-[-2%] transform -translate-y-1/2 hidden sm:block rounded-xl shadow-lg overflow-hidden">
                <div className={`${gradient4} w-full h-full flex items-center justify-center text-white text-base font-bold`}>
                    {/* Placeholder text or icon */}
                </div>
                {/*
                <img src={imageFarRight} alt="Another office view" className="w-full h-full object-cover"/>
                */}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};