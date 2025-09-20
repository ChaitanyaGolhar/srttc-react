// --- SVG ICONS ---
// Using a consistent, modern icon style enhances the visual appeal.
const GraduationCapIcon = () => (
    <div className="bg-indigo-100 p-3 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422A12.083 12.083 0 0112 21a12.083 12.083 0 01-6.16-10.422L12 14z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h8a2 2 0 002-2v-1a2 2 0 012-2h1.945M12 14v7" />
        </svg>
    </div>
);

const BookOpenIcon = () => (
    <div className="bg-indigo-100 p-3 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v11.494m0 0a7.5 7.5 0 007.5-7.5H4.5a7.5 7.5 0 007.5 7.5z" />
        </svg>
    </div>
);

const BusIcon = () => (
    <div className="bg-teal-100 p-3 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
    </div>
);

const BuildingIcon = () => (
    <div className="bg-teal-100 p-3 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0v-4m6 4v-4m6 4v-4" />
        </svg>
    </div>
);

const ArrowRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
);


// --- FEE STRUCTURE COMPONENTS ---

const UgFeesTable = () => {
  const ugFees = [
    { category: 'OPEN', tuition: '62,832.00', misc: '16,853.00', eligibility: '650.00', total: '80,335.00' },
    { category: 'OBC/EBC/EWS', tuition: '31,416.00', misc: '16,853.00', eligibility: '650.00', total: '48,919.00' },
    { category: 'VJNT/SBC/ST/TFWS', tuition: '—', misc: '16,853.00', eligibility: '650.00', total: '17,503.00' },
    { category: 'SC', tuition: '—', misc: '8,685.00', eligibility: '650.00', total: '9,335.00' },
  ];

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm mb-10 transition-all duration-300 hover:shadow-lg hover:border-indigo-200">
      <div className="flex items-center mb-6 gap-4">
        <GraduationCapIcon />
        <h3 className="text-2xl font-bold text-slate-800">Undergraduate (FE & DSE) Fees</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left table-auto">
          <thead>
            <tr className="bg-slate-50">
              <th className="px-6 py-4 text-sm font-semibold text-slate-600 uppercase tracking-wider">Category</th>
              <th className="px-6 py-4 text-sm font-semibold text-slate-600 uppercase tracking-wider text-right">Tuition Fee</th>
              <th className="px-6 py-4 text-sm font-semibold text-slate-600 uppercase tracking-wider text-right">Misc. & Development Fee</th>
              <th className="px-6 py-4 text-sm font-semibold text-slate-600 uppercase tracking-wider text-right">Eligibility Fee</th>
              <th className="px-6 py-4 text-sm font-semibold text-slate-600 uppercase tracking-wider text-right">Total</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {ugFees.map((row) => (
              <tr key={row.category} className="hover:bg-slate-50 transition-colors duration-200">
                <td className="px-6 py-4 font-medium text-slate-800">{row.category}</td>
                <td className="px-6 py-4 text-slate-600 text-right">₹{row.tuition}</td>
                <td className="px-6 py-4 text-slate-600 text-right">₹{row.misc}</td>
                <td className="px-6 py-4 text-slate-600 text-right">₹{row.eligibility}</td>
                <td className="px-6 py-4 font-bold text-indigo-600 text-right text-lg">₹{row.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const PgFeesTable = () => {
  const pgFees = [{ category: 'OPEN', tuition: '90,909.00', development: '9,091.00', misc: '10,335.00', total: '110,335.00' }];

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm mb-10 transition-all duration-300 hover:shadow-lg hover:border-indigo-200">
      <div className="flex items-center mb-6 gap-4">
        <BookOpenIcon />
        <h3 className="text-2xl font-bold text-slate-800">Postgraduate (PG) Fees</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left table-auto">
          <thead>
            <tr className="bg-slate-50">
              <th className="px-6 py-4 text-sm font-semibold text-slate-600 uppercase tracking-wider">Category</th>
              <th className="px-6 py-4 text-sm font-semibold text-slate-600 uppercase tracking-wider text-right">Tuition Fee</th>
              <th className="px-6 py-4 text-sm font-semibold text-slate-600 uppercase tracking-wider text-right">Development Fee</th>
              <th className="px-6 py-4 text-sm font-semibold text-slate-600 uppercase tracking-wider text-right">Misc. University Fee</th>
              <th className="px-6 py-4 text-sm font-semibold text-slate-600 uppercase tracking-wider text-right">Total</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {pgFees.map((row) => (
              <tr key={row.category} className="hover:bg-slate-50 transition-colors duration-200">
                <td className="px-6 py-4 font-medium text-slate-800">{row.category}</td>
                <td className="px-6 py-4 text-slate-600 text-right">₹{row.tuition}</td>
                <td className="px-6 py-4 text-slate-600 text-right">₹{row.development}</td>
                <td className="px-6 py-4 text-slate-600 text-right">₹{row.misc}</td>
                <td className="px-6 py-4 font-bold text-indigo-600 text-right text-lg">₹{row.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const OtherFees = () => (
    <div className="mb-10">
        <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">Additional Services</h2>
        <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-teal-200">
                <div className="flex items-center mb-6 gap-4">
                    <BusIcon />
                    <h3 className="text-2xl font-bold text-slate-800">Transportation</h3>
                </div>
                <div className="space-y-4 text-lg">
                    <div className="flex justify-between items-center">
                        <span className="font-medium text-slate-600">Route:</span>
                        <span className="text-slate-800 font-semibold text-right">SRTTC to Kamshet Station</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-medium text-slate-600">Monthly:</span>
                        <span className="text-slate-800 font-semibold">₹600</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-medium text-slate-600">Yearly (Concession):</span>
                        <span className="text-slate-800 font-semibold">₹6,500</span>
                    </div>
                </div>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-teal-200">
                <div className="flex items-center mb-6 gap-4">
                    <BuildingIcon />
                    <h3 className="text-2xl font-bold text-slate-800">Hostel</h3>
                </div>
                <div className="space-y-4 text-lg">
                    <div className="flex justify-between items-center">
                        <span className="font-medium text-slate-600">Hostel Fee:</span>
                        <span className="text-slate-800 font-semibold">₹30,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-medium text-slate-600">Deposit:</span>
                        <span className="text-slate-800 font-semibold">₹5,000</span>
                    </div>
                    <div className="border-t-2 border-slate-200 my-4"></div>
                    <div className="flex justify-between items-center">
                        <span className="font-bold text-slate-700 text-xl">Total:</span>
                        <span className="font-bold text-teal-600 text-2xl">₹35,000</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
);


const CallToAction = () => (
    <div className="bg-white text-center p-8 md:p-12 rounded-2xl border border-slate-200 shadow-sm">
        <h2 className="text-3xl font-bold text-slate-800 mb-2">Next Steps</h2>
        <p className="text-slate-600 max-w-2xl mx-auto mb-6">
            Have questions about the fees, scholarships, or the application process? Our admissions team is here to help you.
        </p>
        <div className="flex justify-center items-center gap-4 flex-wrap">
            <a href="#" className="group inline-flex items-center justify-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300">
                Apply Now <ArrowRightIcon />
            </a>
            <a href="#" className="group inline-flex items-center justify-center px-6 py-3 bg-slate-100 text-slate-700 font-semibold rounded-lg hover:bg-slate-200 transition-all duration-300">
                Contact Admissions
            </a>
        </div>
    </div>
);


const Footer = () => (
    <footer className="text-center p-6 mt-12">
        <p className="text-sm text-slate-500 italic max-w-3xl mx-auto">
            Disclaimer: Tuition Fee & Development Fee approved by FRA & Misc University Fee & Eligibility Fee approved by University of Pune. Fees are likely to vary.
        </p>
    </footer>
);


// --- MAIN APP COMPONENT ---
export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans p-4 sm:p-6 lg:p-12">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight">
                Fee Structure <span className="text-indigo-600">2025-26</span>
            </h1>
            <p className="text-lg text-slate-600 mt-3 max-w-2xl mx-auto">
                A clear and transparent breakdown of costs for the upcoming academic year at Suman Ramesh Tulsiani Technical Campus.
            </p>
        </header>
        <main>
          <UgFeesTable />
          <PgFeesTable />
          <OtherFees />
          <CallToAction />
        </main>
        <Footer />
      </div>
    </div>
  );
}
