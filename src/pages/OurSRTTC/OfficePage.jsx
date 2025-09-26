import React from 'react';

// --- Data for the office staff ---
// Updated based on the new information provided.
const officeStaff = [
  { id: 1, name: 'Mr. Sandip Deshpande', section: 'Estate Manager' },
  { id: 2, name: 'Mrs. Rajeshri Kulkarni', section: 'Establishment, Student Section' },
  { id: 3, name: 'Mr. Tejas Dixit', section: 'Student Section' },
  { id: 4, name: 'Mrs. Minakshi Bhongale', section: 'Accounts Section' },
  { id: 5, name: 'Mr. Yogesh Kadam', section: 'Accounts Section' },
  { id: 6, name: 'Mr. Navnath Shinde', section: 'Store Incharge' },
];

const UserIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-10 w-10 text-gray-400"
  >
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const DepartmentIcon = () => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="h-5 w-5 mr-2 text-gray-500"
    >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        <path d="M12 11v0"></path>
    </svg>
);


// --- Staff Card Component ---
// This component renders a single staff member's information in a card format.
const StaffCard = ({ name, section }) => (
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out flex items-center space-x-4">
    <div className="flex-shrink-0">
        <div className="h-16 w-16 bg-gray-100 rounded-full flex items-center justify-center">
            <UserIcon />
        </div>
    </div>
    <div>
      <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
      <div className="flex items-center mt-1">
        <DepartmentIcon />
        <p className="text-gray-600">{section}</p>
      </div>
    </div>
  </div>
);

// --- Main Office Page Component ---
// This is the main component that pulls everything together.
export default function OfficePage() {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <div className="container mx-auto px-4 py-12 md:py-16">
        
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight">
            Institute Office
          </h1>
        </header>
        
        {/* Introduction Section */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">About the Administrative Department</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
                The main aim of the Administrative Department of SRTTC is to provide satisfactory service to the external customers (students and parents) and the internal customers (the staff of SRTTC). The Administrative Department is functionally divided into four Sections: Establishment, Accounts, Students, and Examination Section.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Establishments Section Responsibilities</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Handles approvals for affiliation from AICTE, New Delhi, S.P.P.U. Pune, DTE, Mumbai etc.</li>
                <li>Manages staff recruitment, promotions, and retirements.</li>
                <li>Maintains staff service and leave records.</li>
                <li>Handles Teacher's approvals from SPPU.</li>
                <li>Documents proceedings of meetings for committees like GB, LMC, Ladies Grievance Committee, RTI, etc.</li>
                <li>Manages incoming and outgoing documents (Inwards & Outwards).</li>
            </ul>
        </section>


        {/* Staff Grid Section */}
        <main>
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {officeStaff.map((staff) => (
              <StaffCard key={staff.id} name={staff.name} section={staff.section} />
            ))}
          </div>
        </main>

      </div>
    </div>
  );
}

