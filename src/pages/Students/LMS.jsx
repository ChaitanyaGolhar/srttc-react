// Filename: LMS.js (Version 4)
// Changes: Fixed the Download button to be a functional download link.
// Prerequisites: React, Tailwind CSS, and lucide-react (npm install lucide-react)

import React, { useState, useEffect, useMemo } from 'react';
import { BookMarked, Search, Filter, X, FileText, Download, Star } from 'lucide-react';

// --- DATA ---
const allResourcesData = [
  { id: 1, branch: "Computer Engineering", semester: 3, type: "Question Bank", title: "Data Structures - Question Bank", fileUrl: "./../public/Gemini nptel.pdf", fileType: "PDF", updatedAt: "2025-09-18" },
  { id: 2, branch: "Computer Engineering", semester: 3, type: "Syllabus", title: "Semester 3 - Official Syllabus", fileUrl: "https://example.com/file2.pdf", fileType: "PDF", updatedAt: "2025-08-01" },
  { id: 3, branch: "Mechanical Engineering", semester: 5, type: "Lecture Plan", title: "Thermodynamics - Lecture Plan", fileUrl: "https://example.com/file3.docx", fileType: "DOCX", updatedAt: "2025-09-15" },
  { id: 4, branch: "Civil Engineering", semester: 7, type: "Old Papers", title: "Structural Analysis - 2024 Paper", fileUrl: "https://example.com/file4.pdf", fileType: "PDF", updatedAt: "2025-07-20" },
  { id: 5, branch: "AI & DS", semester: 1, type: "Practical QB", title: "Python Programming Practicals", fileUrl: "https://example.com/file5.pdf", fileType: "PDF", updatedAt: "2025-09-20" },
  { id: 6, branch: "Computer Engineering", semester: 4, type: "Old Papers", title: "Computer Networks - 2024 Paper", fileUrl: "https://example.com/file6.pdf", fileType: "PDF", updatedAt: "2025-09-10" }
];

// --- SUB-COMPONENTS ---

const Sidebar = ({ setFilters, currentFilters }) => {
  const branches = ["Computer Engineering", "Mechanical Engineering", "Civil Engineering", "AI & DS"];
  const resourceTypes = ["Syllabus", "Lecture Plan", "Question Bank", "Practical QB", "Old Papers"];

  const FilterButton = ({ filterType, value, children }) => (
    <li
      className={`cursor-pointer p-2 rounded transition-colors ${currentFilters[filterType] === value ? 'bg-blue-100 text-blue-700 font-semibold' : 'hover:bg-slate-100'}`}
      onClick={() => setFilters(prev => ({ ...prev, [filterType]: value }))}
    >
      {children}
    </li>
  );

  return (
    <div className="p-4 bg-white rounded-lg shadow-sm border">
      <h3 className="font-bold text-lg mb-4">Filters</h3>
      <div className="mb-6">
        <h4 className="font-semibold text-gray-700 mb-2">Branch</h4>
        <ul>
          <FilterButton filterType="branch" value="All">All Branches</FilterButton>
          {branches.map(b => <FilterButton key={b} filterType="branch" value={b}>{b}</FilterButton>)}
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-gray-700 mb-2">Resource Type</h4>
        <ul>
          <FilterButton filterType="type" value="All">All Types</FilterButton>
          {resourceTypes.map(t => <FilterButton key={t} filterType="type" value={t}>{t}</FilterButton>)}
        </ul>
      </div>
    </div>
  );
};

const ResourceCard = ({ resource, isFavorite, toggleFavorite }) => {
  // Stop propagation to prevent the card's link from firing when clicking an inner button/link
  const handleInnerClick = (e) => {
    e.stopPropagation();
  };

  return (
    <a
      href={resource.fileUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-white rounded-lg shadow-sm border hover:border-blue-500 hover:shadow-md transition-all duration-300 p-4 flex flex-col"
    >
      <div className="flex-grow">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            <FileText className="w-5 h-5 text-gray-400" />
            <span className="text-xs font-semibold text-gray-500 uppercase">{resource.fileType}</span>
          </div>
          <button 
            onClick={(e) => {
                e.preventDefault(); // Prevent link navigation
                handleInnerClick(e);
                toggleFavorite(resource.id);
            }}
            className="p-1 rounded-full opacity-50 group-hover:opacity-100 transition-opacity"
            title={isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
          >
            <Star size={18} className={isFavorite ? 'text-yellow-500 fill-current' : 'text-gray-400 hover:text-yellow-500'} />
          </button>
        </div>
        <h3 className="text-md font-semibold text-gray-800 my-2">{resource.title}</h3>
      </div>
      <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between items-center text-sm text-gray-500">
        <span>Updated: {new Date(resource.updatedAt).toLocaleString()}</span>
        
        {/* --- FIXED DOWNLOAD BUTTON --- */}
        <a
          href={resource.fileUrl}
          download
          onClick={handleInnerClick} // Stop propagation to the parent card link
          className="flex items-center gap-2 opacity-50 group-hover:opacity-100 transition-opacity text-blue-600 hover:underline"
          title="Download File"
        >
          <Download size={16} />
          <span>Download</span>
        </a>
      </div>
    </a>
  );
};


// --- MAIN LMS COMPONENT ---

function LMS() {
  const [filters, setFilters] = useState({ branch: 'All', type: 'All' });
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem('lmsFavorites')) || []);
  const [isFilterVisible, setFilterVisible] = useState(false);

  useEffect(() => localStorage.setItem('lmsFavorites', JSON.stringify(favorites)), [favorites]);

  const toggleFavorite = (id) => setFavorites(p => p.includes(id) ? p.filter(i => i !== id) : [...p, id]);

  const filteredResources = useMemo(() => {
    return allResourcesData.filter(res => 
      (filters.branch === 'All' || res.branch === filters.branch) &&
      (filters.type === 'All' || res.type === filters.type) &&
      (res.title.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [filters, searchTerm]);

  const favoriteResources = useMemo(() => allResourcesData.filter(res => favorites.includes(res.id)), [favorites]);
  
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div className="flex items-center gap-3">
          <BookMarked className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-800">LMS Resources</h1>
        </div>
        <div className="w-full md:max-w-md relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search resources..."
            className="w-full pl-10 pr-4 py-2 border rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
    
      <div className="flex flex-col lg:flex-row lg:gap-8">
        <aside className="lg:w-64 lg:flex-shrink-0">
          <div className="lg:sticky lg:top-8">
            <button 
              onClick={() => setFilterVisible(!isFilterVisible)}
              className="w-full flex justify-between items-center p-3 bg-white rounded-lg shadow-sm border mb-4 lg:hidden"
            >
              <span className="font-semibold">{isFilterVisible ? 'Hide' : 'Show'} Filters</span>
              {isFilterVisible ? <X size={20} /> : <Filter size={20} />}
            </button>
            <div className={`${isFilterVisible ? 'block' : 'hidden'} lg:block`}>
              <Sidebar setFilters={setFilters} currentFilters={filters} />
            </div>
          </div>
        </aside>

        <main className="flex-1 mt-6 lg:mt-0">
          {favoriteResources.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">⭐ My Favorites</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {favoriteResources.map(res => <ResourceCard key={res.id} resource={res} isFavorite={true} toggleFavorite={toggleFavorite} />)}
              </div>
            </div>
          )}
          
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">All Resources</h2>
            {filteredResources.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredResources.map(res => <ResourceCard key={res.id} resource={res} isFavorite={favorites.includes(res.id)} toggleFavorite={toggleFavorite} />)}
              </div>
            ) : (
              <div className="text-center py-10 px-4 bg-white rounded-lg shadow-sm border"><p className="text-gray-500">No resources found.</p></div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default LMS;