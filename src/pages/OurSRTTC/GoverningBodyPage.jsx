import React from 'react';

// --- Data for the Governing Body ---
// Sourced from the provided URL. Images are placeholders.
const governingBodyData = [
  { id: 1, name: 'Shri. Ramchandra N. Galla', title: 'Hon\'ble Chairman', imageUrl: 'https://placehold.co/400x500/EFEFEF/333?text=RNG' },
  { id: 2, name: 'Dr. Ramadevi R. Galla', title: 'Hon\'ble Secretary', imageUrl: 'https://placehold.co/400x500/EFEFEF/333?text=RRG' },
  { id: 3, name: 'Dr. V. S. S. Kumar', title: 'Member (UGC Nominee)', imageUrl: 'https://placehold.co/400x500/EFEFEF/333?text=VSSK' },
  { id: 4, name: 'Dr. G. S. Kumaraswamy', title: 'Member (University Nominee)', imageUrl: 'https://placehold.co/400x500/EFEFEF/333?text=GSK' },
  { id: 5, name: 'Sri. K. Prabhakara Rao', title: 'Member (State Govt. Nominee)', imageUrl: 'https://placehold.co/400x500/EFEFEF/333?text=KPR' },
  { id: 6, name: 'Shri. S. V. Ramachandran', title: 'Member', imageUrl: 'https://placehold.co/400x500/EFEFEF/333?text=SVR' },
  { id: 7, name: 'Shri. R. Surender Reddy', title: 'Member', imageUrl: 'https://placehold.co/400x500/EFEFEF/333?text=RSR' },
  { id: 8, name: 'Shri. M. A. Jabbar', title: 'Member', imageUrl: 'https://placehold.co/400x500/EFEFEF/333?text=MAJ' },
  { id: 9, name: 'Dr. R. Murugesan', title: 'Member', imageUrl: 'https://placehold.co/400x500/EFEFEF/333?text=RM' },
  { id: 10, name: 'Dr. T. Nageswara Rao', title: 'Member', imageUrl: 'https://placehold.co/400x500/EFEFEF/333?text=TNR' },
  { id: 11, name: 'Dr. P. Sathyanarayana', title: 'Member (Teacher Representative)', imageUrl: 'https://placehold.co/400x500/EFEFEF/333?text=PS' },
  { id: 12, name: 'Dr. C. Suneetha', title: 'Member (Teacher Representative)', imageUrl: 'https://placehold.co/400x500/EFEFEF/333?text=CS' },
  { id: 13, name: 'Dr. D. Vasumathi', title: 'Member-Secretary & Principal', imageUrl: 'https://placehold.co/400x500/EFEFEF/333?text=DV' },
];

// --- Reusable Member Card Component ---
// This component displays the photo, name, and title of a member.
// The 'isLeader' prop applies slightly different styles for top leadership roles.
const MemberCard = ({ name, title, imageUrl, isLeader = false }) => {
  const cardBorderColor = isLeader ? 'border-indigo-500' : 'border-gray-300';
  const titleColor = isLeader ? 'text-indigo-600' : 'text-gray-700';
  const cardSize = isLeader ? 'w-full max-w-sm' : 'w-full';

  return (
    <div className={`group bg-white rounded-2xl shadow-lg overflow-hidden border-b-4 ${cardBorderColor} transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 ${cardSize}`}>
      {/* Image and Name Overlay Section */}
      <div className="relative">
        <img
          className="w-full h-80 object-cover object-center"
          src={imageUrl}
          alt={`Professional portrait of ${name}`}
          onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/400x500/CCCCCC/FFFFFF?text=Image+Not+Found'; }}
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>
        <div className="absolute top-0 left-0 p-5">
          <h3 className="text-2xl font-bold text-white tracking-wide">{name}</h3>
        </div>
      </div>

      {/* Title/Footer Section */}
      <div className="p-5 bg-gray-50">
         <p className={`text-base font-semibold ${titleColor}`}>{title}</p>
      </div>
    </div>
  );
};

// --- Main Governing Body Page Component ---
export default function App() {
  // Separate the key leaders to feature them prominently
  const chairman = governingBodyData.find(m => m.title.includes('Chairman'));
  const secretary = governingBodyData.find(m => m.title.includes('Secretary'));
  const members = governingBodyData.filter(m => !m.title.includes('Chairman') && !m.title.includes('Secretary'));

  return (
    <div className="bg-gray-50 font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* 1. Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Our Governing Body
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated and experienced leaders guiding our institution towards a future of academic excellence and innovation.
          </p>
        </div>

        {/* 2. Key Leadership Section */}
        <div className="flex justify-center items-stretch gap-8 md:gap-12 mb-20 flex-wrap">
          {chairman && <MemberCard {...chairman} isLeader={true} />}
          {secretary && <MemberCard {...secretary} isLeader={true} />}
        </div>
        
        {/* Divider */}
        <div className="relative mb-16">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-gray-50 px-3 text-lg font-medium text-gray-900">Members</span>
          </div>
        </div>


        {/* 3. Members Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
          {members.map(member => (
            <MemberCard key={member.id} {...member} />
          ))}
        </div>

      </div>
    </div>
  );
}

