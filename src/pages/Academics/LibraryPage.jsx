import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Book,
  Library,
  BookOpen,
  Globe,
  Gavel,
  Users,
  Search,
  ArrowUpRight,
  ShieldCheck,
  ChevronDown,
  Building,
  ScrollText,
} from "lucide-react";

// --- DATA (From previous update) ---

const libraryIntro = {
  title: "A Hub of Knowledge and Information",
  paragraphs: [
    "In the present situation, a library can be called an excellent information center. The dissemination of knowledge and information is the main function of the library, which generates information through various forms of collection, such as books, journals, and periodicals. We are committed to providing easy and ready access to library resources for updating the knowledge base of students and staff.",
    "The ambience of the library provides a pleasant and quiet atmosphere for studies. Self-development and learning start from a student's mind. Keeping the same in mind, our library has been designed to provide a conducive atmosphere for our students.",
    "The college has a well-equipped library with a Reference Section, Journal Section, Reading Hall & Stack-Room. The library is enriched with a wide variety of books and is well-equipped with modern facilities and resources in the form of books, e-journals, CD-ROMs, etc. The Central Library uses SLIM Software Package, an Integrated Library Management System (ILMS) with Barcode Scanner, and is accessible via the On-line Public Access Catalogue (OPAC) within the campus.",
  ],
};

const libraryStats = [
  { label: "Total Volume of Books", value: "9446", icon: Library, color: "text-sky-600" },
  { label: "Number of Titles", value: "2559", icon: Book, color: "text-emerald-600" },
  { label: "Reference Books", value: "1645", icon: BookOpen, color: "text-amber-600" },
  { label: "Donated Books", value: "222", icon: Book, color: "text-indigo-600" },
  { label: "Donated Bound Volumes", value: "700", icon: Library, color: "text-pink-600" },
  { label: "Project Reports", value: "197", icon: ScrollText, color: "text-teal-600" },
  { label: "Books and Journal CD", value: "514", icon: Globe, color: "text-slate-600" },
];

const journalsData = [
  // Degree
  { name: "Indian Journal of Computer Application Research and Development", frequency: "Half yearly", branch: "Computer", level: "Degree" },
  { name: "International Journal of Computer Vision and Image Processing", frequency: "Half yearly", branch: "Computer", level: "Degree" },
  { name: "Indian Journal of Advances in Software Engineering", frequency: "Half yearly", branch: "Computer", level: "Degree" },
  { name: "International Journal of Computers & Applications", frequency: "Half yearly", branch: "Computer", level: "Degree" },
  { name: "International Journal of 'Advanced Networking and Application", frequency: "Bi- Monthly", branch: "Computer", level: "Degree" },
  { name: "Journal of E Technology", frequency: "Quarterly", branch: "Computer", level: "Degree" },
  { name: "Indian Concrete Journal", frequency: "Monthly", branch: "Civil", level: "Degree" },
  { name: "Indian Geotechnical Journal", frequency: "Quarterly", branch: "Civil", level: "Degree" },
  { name: "Indian Journal of Advances in Civil Engineering", frequency: "Half yearly", branch: "Civil", level: "Degree" },
  { name: "Journal of Structural Engineering", frequency: "Bi- Monthly", branch: "Civil", level: "Degree" },
  { name: "NICMAR Journal of Construction Management", frequency: "Quarterly", branch: "Civil", level: "Degree" },
  { name: "Indian Journal of Civil Engineering Research & Technology", frequency: "Half yearly", branch: "Civil", level: "Degree" },
  { name: "Advances in Applied Computational Mechanics", frequency: "Half yearly", branch: "Mechanical", level: "Degree" },
  { name: "HPAC Engineering (Heating/Piping/Air Conditioning)", frequency: "Monthly", branch: "Mechanical", level: "Degree" },
  { name: "Journal of Energy storage and conversion", frequency: "Half yearly", branch: "Mechanical", level: "Degree" },
  { name: "Indian Journal of Engineering & Material Sciences", frequency: "Bi- Monthly", branch: "Mechanical", level: "Degree" },
  { name: "Indian Journal of Advances & Applications in Fluid Mechanics", frequency: "Half yearly", branch: "Mechanical", level: "Degree" },
  { name: "Indian Journal of Advances in Mechanical Engineering", frequency: "Half yearly", branch: "Mechanical", level: "Degree" },
  { name: "Indian Journal of Engineering & Manufacturing Science", frequency: "Half yearly", branch: "Mechanical", level: "Degree" },
  { name: "Indian Journal of Heat & Mass Transfer", frequency: "Half yearly", branch: "Mechanical", level: "Degree" },
  { name: "Indian Journal of Advances in Automobile Engineering", frequency: "Half yearly", branch: "Mechanical", level: "Degree" },
  { name: "Industrial Product Finder", frequency: "Monthly", branch: "Mechanical", level: "Degree" },
  { name: "Machine Design", frequency: "Monthly", branch: "Mechanical", level: "Degree" },
  { name: "Journal of Tribology research", frequency: "Half yearly", branch: "Mechanical", level: "Degree" },
  { name: "Sadhana Engineering Sciences", frequency: "Monthly", branch: "Science & Humanities", level: "Degree" },
  { name: "Pramana- Journal of Physics", frequency: "Monthly", branch: "Science & Humanities", level: "Degree" },
  // Diploma
  { name: "Institute of Engineering Journal of Mechanical engineering Series C", frequency: "Bi- Monthly", branch: "Mechanical", level: "Diploma" },
  { name: "Invention Intelligence Journal NRDC", frequency: "Bi- Monthly", branch: "Mechanical", level: "Diploma" },
  { name: "Journal of Scientific and Industrial Research", frequency: "Monthly", branch: "Mechanical", level: "Diploma" },
  { name: "Indian Journal of advanced in thermal science and engineering", frequency: "Half yearly", branch: "Mechanical", level: "Diploma" },
  { name: "Institute of Engineering Journal of Civil Engineering- Series A", frequency: "Quarterly", branch: "Civil", level: "Diploma" },
  { name: "Civil Engineering and Construction Review", frequency: "Monthly", branch: "Civil", level: "Diploma" },
  { name: "Indian Construction", frequency: "Monthly", branch: "Civil", level: "Diploma" },
  // Magazines
  { name: "Indian Infrastructure", frequency: "Monthly", branch: "Civil", level: "Magazine" },
  { name: "Digit", frequency: "Monthly", branch: "Computer", level: "Magazine" },
  { name: "PC- Quest", frequency: "Monthly", branch: "Computer", level: "Magazine" },
  { name: "Electronics for you", frequency: "Monthly", branch: "Computer", level: "Magazine" },
];

const onlineServices = [
    { 
        title: "SRTTC Library E-Books", 
        description: "A dedicated collection of e-books available for all SRTTC Staff and students.",
        action: { type: 'button', text: 'Click Me', link: '#' }
    },
    { 
        title: "National Digital Library (NDL)", 
        description: "A Ministry of Human Resource Development project providing free access to a massive repository of books in English and Indian languages.",
        action: { type: 'info', text: 'Login with: library@srttc.ac.in', link: 'https://ndl.iitkgp.ac.in' }
    },
    { 
        title: "Open Access Resources", 
        description: "A collection of useful links to e-journals, NPTEL videos, and other educational content.",
        sublinks: [
            "Open Access Engineering e-books URLs",
            "Open access Engineering E- Journals URLs",
            "Open Access Institutional Repositories",
            "UGC Shared links for Online Courses",
            "Virtual lab courses",
            "Free E-learning courses of AICTE"
        ]
    },
];

const bookBankInfo = {
    objective: "To help the student community, especially toppers and those from weaker sections.",
    details: [
        "The scheme is available to all Degree and Diploma students of all branches.",
        "We provide the book bank scheme for the top three rankers and two TFWS students from each class.",
        "A set of 5 books is issued to each student for the entire semester.",
        "Students must bring their library cards to avail the facility.",
        "Books must be returned in good condition on or before the last theory examination to avoid fines.",
        "Writing, highlighting, or damaging books is strictly prohibited."
    ]
};

const libraryRules = [
    {
        title: "Entering the Library",
        points: [
            "Deposit your personal belongings at the baggage counter.",
            "Please keep absolute silence.",
            "Please keep mobile phones on silent/vibration mode."
        ]
    },
    {
        title: "Using Reference Material",
        points: [
            "Reference materials (books, periodicals, question papers, CDs) must be used in the reference room only.",
            "Reference material cannot be taken home. A fine of Rs.10/- will be charged per day for violations."
        ]
    },
    {
        title: "Issuing Books for Home Reading",
        points: [
            "Books are issued to the cardholder only for a maximum period of 10 days.",
            "A maximum of two books will be issued at a time.",
            "For delays beyond 10 days, a fine of Rs.1/day is levied, increasing for longer delays.",
            "Readers are not allowed to borrow books on another reader's card."
        ]
    },
    {
        title: "Loss or Damage of Books",
        points: [
            "Inform the library staff immediately in case of any loss or damage.",
            "The lost book must be replaced with a new one of the same title (latest edition), along with any applicable fines.",
            "Defacing or tearing pages will result in recovery of the cost, and the library committee may suspend membership."
        ]
    }
];

const committeeMembers = [
  { name: "Prof. Satpute Jitendra B", department: "Mechanical", designation: "Faculty Incharge - Library" },
  { name: "Prof. Sandeep Deshpande", department: "Civil", designation: "Member" },
  { name: "Prof. Dhumal Nilesh Vinayak", department: "Mechanical", designation: "Member" },
  { name: "Prof. Suresh V Reddy", department: "Computer Engg. & AI&DS", designation: "Member" },
  { name: "Prof. Swati B Hankar", department: "DESH", designation: "Member" },
  { name: "Miss. Amrapali Waghmare", department: "Librarian", designation: "Member Secretary" },
];

// --- REUSABLE COMPONENTS ---

const Section = ({ id, title, children, className = "" }) => (
  <motion.section
    id={id}
    className={`py-12 ${className}`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    <h2 className="text-3xl font-bold text-slate-800 mb-8">{title}</h2>
    {children}
  </motion.section>
);

const StatCard = ({ icon: Icon, label, value, color }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 flex items-center gap-5 border-l-4 border-sky-500">
    <Icon className={`w-10 h-10 flex-shrink-0 ${color}`} />
    <div>
      <p className="text-3xl font-extrabold text-slate-800">{value}</p>
      <p className="text-sm text-slate-500 font-medium">{label}</p>
    </div>
  </div>
);

const AccordionItem = ({ title, points, isOpen, onToggle }) => {
    return (
        <div className="border-b border-slate-200">
            <button
                onClick={onToggle}
                className="w-full flex justify-between items-center py-4 text-left font-semibold text-slate-800"
            >
                <span>{title}</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && (
                <div className="pb-4 pl-2">
                    <ul className="space-y-2 text-slate-600">
                        {points.map((point, i) => (
                           <li key={i} className="flex items-start gap-3">
                                <ShieldCheck className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

// --- MAIN LIBRARY PAGE COMPONENT ---
const LibraryPage = () => {
  const [search, setSearch] = useState("");
  const [journalLevel, setJournalLevel] = useState("All");
  const [openAccordion, setOpenAccordion] = useState(0); // Open the first rule by default

  const handleAccordionToggle = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const filteredJournals = useMemo(() => {
    return journalsData.filter(
      (j) =>
        (journalLevel === "All" || j.level === journalLevel) &&
        j.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, journalLevel]);

  const navLinks = [
    { id: "about", title: "About" },
    { id: "collection", title: "Collection" },
    { id: "journals", title: "Journals" },
    { id: "bookbank", title: "Book Bank" },
    { id: "eresources", title: "E-Resources" },
    { id: "rules", title: "Rules" },
    { id: "committee", title: "Committee" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Hero Section */}
      <div className="relative bg-sky-800 text-white py-24 sm:py-32 overflow-hidden">
         <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyyNTUsMC4wNSkiIHN0cm9rZS13aWR0aD0iMiI+PHBhdGggZD0iTTAgMTYgSCAzMiBNIDE2IDAgViAzMiIvPjwvc3ZnPg==')] opacity-50"></div>
        <div className="relative container mx-auto px-6 text-center z-10">
          <motion.h1 
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          >
            SRTTC Central Library
          </motion.h1>
          <motion.p 
            className="text-lg text-sky-200"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
          >
            Your Gateway to Knowledge & Research Excellence
          </motion.p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto max-w-7xl px-6">
        {/* Sticky Navbar */}
        <nav className="sticky top-0 z-30 bg-white/80 backdrop-blur-sm border-b border-slate-200 -mx-6 px-6">
          <div className="py-3 max-w-7xl mx-auto">
             <div className="flex items-center overflow-x-auto pb-2 -mb-2 no-scrollbar">
                {navLinks.map((link) => (
                    <a key={link.id} href={`#${link.id}`}
                       className="flex-shrink-0 px-4 py-2 text-sm font-semibold text-slate-600 rounded-md hover:bg-slate-100 hover:text-sky-600 transition-colors">
                        {link.title}
                    </a>
                ))}
            </div>
          </div>
        </nav>
        
        {/* Page Sections */}
        <main className="min-w-0 divide-y divide-slate-200">
            <Section id="about" title={libraryIntro.title} className="pt-12">
                <div className="space-y-4 text-slate-600 leading-relaxed">
                    {libraryIntro.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
                </div>
            </Section>

          <Section id="collection" title="Library Collection at a Glance">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {libraryStats.map((stat) => <StatCard key={stat.label} {...stat} />)}
            </div>
          </Section>

          <Section id="journals" title="Journals, Periodicals & Magazines">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input type="text" placeholder="Search publications by name..." value={search} onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500" />
              </div>
              <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-lg">
                {["All", "Degree", "Diploma", "Magazine"].map((level) => (
                  <button key={level} onClick={() => setJournalLevel(level)} className={`px-4 py-1 text-sm font-semibold rounded-md transition-all ${journalLevel === level ? "bg-white text-sky-600 shadow-sm" : "text-slate-600 hover:bg-slate-200"}`}>
                    {level}
                  </button>
                ))}
              </div>
            </div>
            <div className="overflow-x-auto bg-white shadow-md rounded-lg border border-slate-200/80">
              <table className="w-full text-left">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="p-4 text-sm font-semibold text-slate-600">Name</th>
                    <th className="p-4 text-sm font-semibold text-slate-600">Branch</th>
                    <th className="p-4 text-sm font-semibold text-slate-600">Level</th>
                    <th className="p-4 text-sm font-semibold text-slate-600">Frequency</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredJournals.length > 0 ? (
                    filteredJournals.map((j, idx) => (
                      <tr key={idx} className="border-b border-slate-100 last:border-b-0 hover:bg-slate-50/70">
                        <td className="p-4 font-medium text-slate-800">{j.name}</td>
                        <td className="p-4 text-slate-600">{j.branch}</td>
                        <td className="p-4">
                          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                              j.level === 'Degree' ? 'bg-sky-100 text-sky-700' :
                              j.level === 'Diploma' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                          }`}>{j.level}</span>
                        </td>
                        <td className="p-4 text-slate-600">{j.frequency}</td>
                      </tr>
                    ))
                  ) : (
                    <tr><td colSpan="4" className="text-center p-8 text-slate-500">No publications found.</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </Section>
          
          <Section id="bookbank" title="Book Bank Facility">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200/80">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Objective</h3>
                <p className="text-slate-600 mb-6">{bookBankInfo.objective}</p>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Important Information</h3>
                <ul className="space-y-3">
                    {bookBankInfo.details.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-700">
                             <ShieldCheck className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                             <span>{item}</span>
                        </li>
                    ))}
                </ul>
              </div>
          </Section>

          <Section id="eresources" title="Online Services & E-Resources">
            <div className="grid md:grid-cols-1 gap-6">
              {onlineServices.map((res) => (
                <div key={res.title} className="group block bg-white shadow-sm rounded-lg p-6 border border-slate-200/80">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-sky-700">{res.title}</h3>
                      <p className="text-sm text-slate-600 mt-1">{res.description}</p>
                      {res.sublinks && (
                           <div className="mt-4 space-y-2">
                                {res.sublinks.map(link => <a href="#" key={link} className="flex items-center gap-2 text-sm text-slate-600 hover:text-sky-600 transition-colors"><ArrowUpRight className="w-4 h-4" />{link}</a>)}
                           </div>
                      )}
                    </div>
                    {res.action && (
                        <a href={res.action.link} target="_blank" rel="noopener noreferrer" className={`flex-shrink-0 ml-4 text-sm font-semibold py-2 px-4 rounded-lg transition-colors ${res.action.type === 'button' ? 'bg-sky-600 text-white hover:bg-sky-700' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}>
                            {res.action.text}
                        </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Section>
          
          <Section id="rules" title="Library Rules & Regulations">
             <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200/80">
                {libraryRules.map((rule, index) => 
                  <AccordionItem 
                    key={rule.title} 
                    {...rule} 
                    isOpen={openAccordion === index} 
                    onToggle={() => handleAccordionToggle(index)}
                  />
                )}
            </div>
          </Section>

          <Section id="committee" title="Library Advisory Committee">
            <div className="grid md:grid-cols-2 gap-6">
              {committeeMembers.map((member) => (
                <div key={member.name} className="bg-white shadow-sm rounded-lg p-5 flex items-start gap-4 border border-slate-200/80">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold flex-shrink-0">
                    {member.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">{member.name}</p>
                    <p className="text-sm text-slate-500">{member.designation}</p>
                    <p className="text-xs text-slate-400 mt-1">{member.department}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </main>
      </div>
    </div>
  );
};

export default LibraryPage;