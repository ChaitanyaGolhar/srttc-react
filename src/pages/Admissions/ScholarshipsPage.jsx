import React from 'react';

// --- Data extracted from the PDF ---

// Data for the main scholarship descriptions
const scholarshipDetails = [
  {
    title: 'Rajarshree Shahu Scholarship (EBC)',
    description: '(Only for Maharashtra Students) Financial help in tuition fees (Half of the Tuition Fees).',
    points: [
      'Applicable for Open Category CAP Students.',
      'Income Certificate (from Tahsildar) required (Income less than 8 Lacs per year).',
      'Ration Card required.'
    ]
  },
  {
    title: 'Minority Scholarship',
    description: 'Financial help up to a maximum of Rs. 25,000. Applicable for Minority CAP / Non-CAP students.',
    points: [
      'For Muslims, Christians, Sikhs, Buddhists, Parsis, Jains.',
      'Income Certificate (from Tahsildar) required (Income less than Rs. 6 Lacs per year).'
    ]
  },
  {
    title: 'Dr. Panjabrao Deshmukh Hostel Scheme',
    description: 'Financial help of max. Rs. 30,000 (with proof of Alpabhudharak or Rojgar Hami Yojana) or Rs. 10,000 in Hostel Fees.',
    points: [
      'Applicable for Open CAP Students.',
      'Hostel Documents, Rent Agreement required if not in college hostel.',
      'Income Certificate (from Tahsildar) required (Income less than Rs. 8 lacs).',
      '(*Only for Maharashtra Students & conditions apply.)'
    ]
  },
  {
    title: 'Scholarship & Freeship Concession',
    description: '(Only for Maharashtra Students) Financial help in tuition fees.',
    points: [
      'Applicable for SC/NTVJ/OBC/SBC/ST Category CAP Students.',
      'Income Certificate (from Tahsildar) required (Income less than 8 Lacs per year).'
    ]
  }
];

// Data for the required documents lists
const requiredDocuments = [
  {
    title: 'For Scholarship/Freeship (SC/NTVJ/OBC/SBC/ST)',
    income: 'Income below Rs. 8,00,000/- per year',
    documents: [
      "Original Income certificate of Father issued by Tahsildar.",
      "DTE- Receipt-Cum-Acknowledgement of Confirmation of Admission.",
      "SSC marksheet.",
      "HSC marksheet.",
      "Diploma final semester marksheet.",
      "HSC / Diploma Leaving certificate.",
      "Marksheet of previous year.",
      "GAP affidavit (if applicable).",
      "Caste Certificate.",
      "Caste Validity Certificate.",
      "Non creamy layer (NTVJ/OBC/SBC) - Valid upto 31/03/2020.",
      "Domicile certificate (Maharashtra).",
      "Bank passbook front page copy (Nationalized Bank - Aadhar linked).",
      "Aadhar card.",
      "Fee receipt of college.",
      "Death certificate of father, if not alive.",
      "Any other document if required by SWO/MAHADBT portal."
    ]
  },
  {
    title: 'For Minority Concession (Muslim, Sikh, Buddhist, etc.)',
    income: 'Income below Rs. 6,00,000/- per year',
    documents: [
      "Original Income certificate of Father issued by Tahsildar.",
      "Income and Minority declaration - Affidavit on non-judicial stamp paper.",
      "DTE- Receipt-Cum-Acknowledgement of Confirmation of Admission.",
      "SSC marksheet.",
      "HSC marksheet.",
      "Diploma final semester marksheet.",
      "HSC / Diploma Leaving certificate.",
      "Marksheet of previous year.",
      "GAP affidavit (if applicable).",
      "Domicile certificate (Maharashtra).",
      "Bank passbook front page copy (Nationalized Bank - Aadhar linked).",
      "Aadhar card.",
      "Fee receipt of college.",
      "Death certificate of father, if not alive.",
      "Any other document if required by DTE/MAHADBT portal."
    ]
  },
  {
    title: 'For RCSMSSSY (EBC) Concession',
    income: 'Income below Rs. 8,00,000/- per year',
    documents: [
      "Original Income certificate of Father issued by Tahsildar.",
      "DTE- Receipt-Cum-Acknowledgement of Confirmation of Admission.",
      "SSC marksheet.",
      "HSC marksheet.",
      "Diploma final semester marksheet.",
      "HSC / Diploma Leaving certificate.",
      "Marksheet of previous year.",
      "GAP affidavit (if applicable).",
      "Domicile certificate (Maharashtra).",
      "Ration Card - Only for first two children.",
      "Undertaking of Parent stating only 2 children are taking benefit of RCSMSSSY.",
      "Bank passbook front page copy (Nationalized Bank - Aadhar linked).",
      "Aadhar card.",
      "Fee receipt of college.",
      "Death certificate of father, if not alive.",
      "Any other document if required by DTE/MAHADBT portal."
    ]
  }
];

// --- Helper Components for better structure ---

const ScholarshipCard = ({ title, description, points }) => (
  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
    <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <ul className="list-disc list-inside text-gray-600 space-y-2">
      {points.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
  </div>
);

const DocumentListCard = ({ title, income, documents }) => (
  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-sm font-semibold text-red-600 mb-4 bg-red-50 p-2 rounded-md inline-block">{income}</p>
    <ol className="list-decimal list-inside text-gray-700 space-y-3">
      {documents.map((doc, index) => (
        <li key={index} className="pl-2">{doc}</li>
      ))}
    </ol>
  </div>
);


// --- Main Component ---

function ScholarshipsPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans p-4 sm:p-6 md:p-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800">Maharashtra Government Scholarships</h1>
          <p className="text-lg text-gray-600 mt-2">Available at SRTTC</p>
        </header>

        {/* Scholarship Details Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-200">
            Available Scholarships & Schemes
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {scholarshipDetails.map((scholarship, index) => (
              <ScholarshipCard key={index} {...scholarship} />
            ))}
          </div>
        </section>

        {/* Required Documents Section */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-200">
            List of Required Documents
          </h2>
          <div className="space-y-8">
            {requiredDocuments.map((list, index) => (
              <DocumentListCard key={index} {...list} />
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center mt-12 text-gray-500">
          <p>SRTTC Kamshet</p>
        </footer>

      </div>
    </div>
  );
}

export default function App() {
    return <ScholarshipsPage />;
}
