import React from 'react';

// --- SVG Icons for Steps ---
const ApplicationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
);

const VerificationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const AllotmentIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V7a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
);

const ConfirmationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
);


// --- Data Arrays ---
const admissionSteps = [
    { id: 1, title: "Online Application & Enquiry", description: "Submit your application through the official state CET Cell portal. For queries, use the 'Admission Enquiry' section on our website.", icon: <ApplicationIcon /> },
    { id: 2, title: "Document Verification", description: "Visit the designated facilitation center for physical verification of your documents, or follow the online process as per DTE guidelines.", icon: <VerificationIcon /> },
    { id: 3, title: "Merit List & Seat Allotment", description: "Check provisional and final merit lists. Seats are allotted through the Centralized Admission Process (CAP).", icon: <AllotmentIcon /> },
    { id: 4, title: "Confirm Admission", description: "Report to the institute with the allotment letter and required documents to confirm your admission and pay the fees.", icon: <ConfirmationIcon /> },
];

const firstYearRequiredDocuments = [
    "CAP Allotment Letter", "SSC (10th) Mark Sheet", "HSC (12th) Mark Sheet", "MHT-CET / JEE Main Score Card",
    "Leaving Certificate / Transfer Certificate", "Certificate of Indian Nationality", "Domicile Certificate", "Aadhaar Card",
    "Caste Certificate (if applicable)", "Caste Validity Certificate (if applicable)", "Non-Creamy Layer Certificate (if applicable)",
    "Migration Certificate (for other than Maharashtra board)", "Gap Certificate (if applicable)", "2 recent passport size photographs",
];

const dseRequiredDocuments = [
    "CAP Allotment Letter", "SSC (10th) Mark Sheet", "HSC Mark Sheet / Diploma Mark Sheet", "Final Year Diploma/B.Sc. Mark Sheet",
    "Leaving Certificate / Transfer Certificate", "Certificate of Indian Nationality", "Domicile Certificate / Birth Certificate",
    "Aadhaar Card", "Caste Certificate (if applicable)", "Caste Validity Certificate (if applicable)",
    "Non-Creamy Layer Certificate (if applicable)", "Migration Certificate (if applicable)", "Gap Certificate (if applicable)",
    "2 recent passport size photographs",
];

// --- Reusable Components ---
const DocumentList = ({ documents }) => (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200 h-full">
         <h3 className="text-xl font-bold text-slate-800 mb-6 border-l-4 border-blue-600 pl-4">
            Required Documents
        </h3>
        <ul className="space-y-4">
            {documents.map((doc, index) => (
                <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-slate-600 font-medium">{doc}</span>
                </li>
            ))}
        </ul>
    </div>
);

const SectionTitle = ({ children }) => (
    <h2 className="text-3xl font-extrabold text-slate-800 mb-8 text-center bg-slate-200 py-4 rounded-xl shadow-inner">
        {children}
    </h2>
);

const EligibilityCard = ({ title, criteria }) => (
    <div>
        <h4 className="font-bold text-lg text-slate-800 mb-3">{title}</h4>
        <ul className="list-disc list-inside text-slate-600 space-y-2 font-medium">
            {criteria.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
    </div>
);


// --- Main Page Component ---
const AdmissionsProcedurePage = () => {
    return (
        <div className="bg-slate-50 font-sans p-4 sm:p-6 md:p-8">
            <main className="container mx-auto max-w-7xl">
                <div className="text-center mb-12 md:mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                        Admissions
                    </h1>
                    <p className="mt-3 text-lg text-slate-600 max-w-3xl mx-auto">Your journey to a successful engineering career starts here. Follow these steps to join us.</p>
                </div>

                {/* Admission Procedure Section */}
                <section className="mb-16 md:mb-20">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {admissionSteps.map((step) => (
                            <div key={step.id} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center border-t-4 border-transparent hover:border-blue-600">
                                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-blue-100 text-blue-600 mb-5 flex-shrink-0 transition-colors duration-300">
                                    {step.icon}
                                </div>
                                <h3 className="text-lg font-bold text-slate-800 mb-2">{step.title}</h3>
                                <p className="text-slate-600 text-sm flex-grow">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* First Year Admission Details */}
                <section className="mb-16 md:mb-20">
                    <SectionTitle>First Year Engineering (FY)</SectionTitle>
                    <div className="grid lg:grid-cols-3 gap-8 items-start">
                        <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-lg border border-slate-200 space-y-8">
                            <h3 className="text-2xl font-bold text-slate-800 border-l-4 border-blue-600 pl-4">Eligibility Criteria</h3>
                            <EligibilityCard 
                                title="For Maharashtra State & All India Candidates"
                                criteria={[
                                    "Candidate must be an Indian National.",
                                    "Passed HSC (10+2) or equivalent with Physics and Mathematics as compulsory subjects, alongside one from Chemistry, Biotechnology, Biology, or Technical/Vocational subjects, with at least 50% marks (45% for reserved categories).",
                                    "Alternatively, passed a Diploma in Engineering and Technology with at least 50% marks (45% for reserved categories).",
                                    "Alternatively, passed B.Sc. Degree from a UGC recognized institution with at least 50% marks (45% for reserved categories) and passed HSC with Mathematics as a subject.",
                                    "Obtained a non-zero score in MHT-CET (for Maharashtra candidates) or JEE Main Paper-I."
                                ]}
                            />
                            <div className="border-t border-slate-200 pt-8">
                                 <EligibilityCard 
                                    title="For Children of NRI / OCI / PIO, etc."
                                    criteria={[
                                        "Passed HSC (10+2) or equivalent with the subjects mentioned above and obtained at least 50% marks in the above subjects combined."
                                    ]}
                                />
                            </div>
                        </div>
                        <aside>
                           <DocumentList documents={firstYearRequiredDocuments} />
                        </aside>
                    </div>
                </section>

                 {/* Direct Second Year Admission Details */}
                <section>
                    <SectionTitle>Direct Second Year Engineering (DSE)</SectionTitle>
                    <div className="grid lg:grid-cols-3 gap-8 items-start">
                        <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
                             <h3 className="text-2xl font-bold text-slate-800 border-l-4 border-blue-600 pl-4 mb-8">Eligibility Criteria</h3>
                             <EligibilityCard 
                                title="For all Candidates"
                                criteria={[
                                    "Candidate must be an Indian National.",
                                    "Passed a Diploma in Engineering and Technology with at least 45% marks (40% for Backward class categories and Persons with Disability candidates belonging to Maharashtra State only).",
                                    "Alternatively, passed a B.Sc. Degree from a UGC recognized institution with at least 45% marks (40% for reserved categories) and passed HSC with Mathematics as a subject.",
                                    "Any other criterion declared by the appropriate authority from time to time."
                                ]}
                            />
                        </div>
                        <aside>
                           <DocumentList documents={dseRequiredDocuments} />
                        </aside>
                    </div>
                </section>

            </main>
        </div>
    );
};

export default AdmissionsProcedurePage;

