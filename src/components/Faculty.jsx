import React, { useState } from 'react';

// --- Data for the team members ---
// Added color and vertical offset to match the reference image style
const teamMembers = [
  {
    id: 1,
    name: 'Sarah Mills',
    designation: 'Lead Designer',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=500&auto=format&fit=crop',
    color: 'bg-amber-400',
    offset: 'mb-8',
  },
  {
    id: 2,
    name: 'James Carter',
    designation: 'Product Manager',
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=500&auto=format&fit=crop',
    color: 'bg-emerald-600',
    offset: 'mb-0',
  },
  {
    id: 3,
    name: 'Olivia Chen',
    designation: 'Lead Developer',
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=500&auto=format&fit=crop',
    color: 'bg-rose-400',
    offset: 'mb-16',
  },
  {
    id: 4,
    name: 'David Lee',
    designation: 'Marketing Head',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500&auto=format&fit=crop',
    color: 'bg-sky-500',
    offset: 'mb-4',
  },
  {
    id: 5,
    name: 'Emily Ray',
    designation: 'UX Researcher',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop',
    color: 'bg-orange-500',
    offset: 'mb-20',
  },
];

// --- The Card Component ---
const PersonCard = ({ member, isHovered, onMouseEnter, onMouseLeave }) => {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`
        relative 
        h-[450px]
        ${member.offset}
        cursor-pointer 
        overflow-hidden 
        rounded-xl
        shadow-lg
        transition-all 
        duration-700 
        ease-[cubic-bezier(0.25,1,0.5,1)]
        ${isHovered ? 'w-72' : 'w-20'}
        ${member.color}
      `}
    >
      {/* Image Container */}
      <div className="absolute left-0 top-0 h-full w-full">
        <img
          src={member.imageUrl}
          alt={member.name}
          className={`
            absolute
            h-full 
            w-full 
            object-cover 
            object-center
            transition-all 
            duration-700 
            ease-[cubic-bezier(0.25,1,0.5,1)]
            ${isHovered ? 'scale-110' : 'scale-100'}
          `}
        />
      </div>

      {/* Gradient Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
      
      {/* Text Content */}
      <div className="absolute bottom-0 left-0 w-full p-4">
        {/* Vertical line that appears on hover */}
        <div className={`
            absolute 
            left-0 
            top-0
            h-full
            w-1 
            bg-white/70
            transform
            transition-transform
            duration-500
            ease-in-out
            ${isHovered ? 'scale-y-100' : 'scale-y-0'}
            origin-bottom
        `}></div>

        <div
          className={`
            transform 
            pl-4
            transition-all 
            duration-500 
            delay-100
            ease-in-out
            ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}
          `}
        >
          <h3 className="text-2xl font-bold text-white tracking-wide">{member.name}</h3>
          <p className="text-sm text-white/80">{member.designation}</p>
        </div>
      </div>
    </div>
  );
};

// --- The Main Component ---
const Faculty = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F3F1EC] font-sans">
      <div className="flex items-end space-x-2 p-8 h-[550px]">
        {teamMembers.map((member) => (
          <PersonCard
            key={member.id}
            member={member}
            isHovered={hoveredId === member.id}
            onMouseEnter={() => setHoveredId(member.id)}
            onMouseLeave={() => setHoveredId(null)}
          />
        ))}
      </div>
    </div>
  );
};

export default Faculty;

