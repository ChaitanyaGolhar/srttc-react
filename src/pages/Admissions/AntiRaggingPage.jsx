import React from 'react';

// Main component for the Anti-Ragging Page
export default function AntiRaggingPage() {
  // Data for the Anti-Ragging Committee
  const committeeMembers = [
    { id: 1, name: 'Dr. Sankpal Jaywant B.', position: 'Head of the Institution', representation: 'Chairperson' },
    { id: 2, name: 'Adv. Smita Awale', position: 'Member', representation: 'Civil Administration' },
    { id: 3, name: 'Mr. Gholap Santosh Vaman', position: 'Member', representation: 'Police Administration' },
    { id: 4, name: 'Mr. Sakhvalkar Suresh', position: 'Member', representation: 'Local Media' },
    { id: 5, name: 'Mrs. Moon Yogita', position: 'Member', representation: 'NGO Member' },
    { id: 6, name: 'Mr. Dhumal Nilesh Vinayak', position: 'Member', representation: 'Faculty Member' },
    { id: 7, name: 'Mr. Garud Eknath', position: 'Member', representation: 'Parent' },
    { id: 8, name: 'Mr. Pawar Bajirao', position: 'Member', representation: 'Parent' },
    { id: 9, name: 'Mr. Jadhav Vedant Prakash', position: 'Member', representation: 'Senior Student' },
    { id: 10, name: 'Ms. Mahajan Sakshi', position: 'Member', representation: 'Fresher Student' },
    { id: 11, name: 'Mrs. Rajashri Mukund Kulkarni', position: 'Member', representation: 'Non-Teaching Member' },
  ];

  // Data for the Anti-Ragging Squad
  const squadMembers = [
    { id: 1, name: 'Dr. Satpute Jitendra Balasaheb', designation: 'Faculty Member' },
    { id: 2, name: 'Mr. Suresh V Reddy', designation: 'Faculty Member' },
    { id: 3, name: 'Mr. Deshpande Sandip Shridhar', designation: 'Faculty Member' },
    { id: 4, name: 'Mrs. Pawar Pooja Vishram', designation: 'Faculty Member' },
  ];

  // Reusable card component for sections
  const InfoCard = ({ title, children }) => (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8 transition-shadow duration-300 hover:shadow-xl">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 border-b-2 border-red-500 pb-3 mb-6">{title}</h2>
      {children}
    </div>
  );

  // Reusable list item component
  const ListItem = ({ children }) => (
    <li className="flex items-start mb-3">
      <svg className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      <span className="text-gray-700">{children}</span>
    </li>
  );

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <main className="container mx-auto px-4 py-8 md:py-12">
        {/* Header Section */}
        <header className="text-center mb-12">
           <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">Anti-Ragging Policy & Committee</h1>
           <p className="text-lg text-gray-600">Committed to a Safe and Ragging-Free Campus</p>
        </header>

        {/* What is Ragging? Section */}
        <InfoCard title="What is Ragging?">
          <p className="text-gray-700 leading-relaxed">
            Ragging is any disorderly conduct, whether by words spoken or written, or by an act which has the effect of teasing, treating, or handling with rudeness any other student, indulging in rowdy or undisciplined activities which causes or is likely to cause annoyance, hardship or psychological harm or to raise fear or apprehension thereof in a fresher or a junior student or asking the students to do any act or perform something which such student will not do in the ordinary course and which has the effect of causing or generating a sense of shame or embarrassment so as to adversely affect the physique or psyche of a fresher or a junior student.
          </p>
        </InfoCard>

        {/* Consequences of Ragging Section */}
        <InfoCard title="Consequences of Ragging">
          <p className="text-gray-700 leading-relaxed mb-6">
            Ragging is a criminal offense and is strictly prohibited. As per the directives of the UGC and the Supreme Court, any student found guilty of ragging can face severe consequences, including:
          </p>
          <ul className="list-none">
            <ListItem>Suspension from attending classes and academic privileges.</ListItem>
            <ListItem>Withholding/withdrawing scholarship/fellowship and other benefits.</ListItem>
            <ListItem>Debarring from appearing in any test/examination or other evaluation processes.</ListItem>
            <ListItem>Suspension/expulsion from the hostel and cancellation of admission.</ListItem>
            <ListItem>Rustication from the institution for a period ranging from one to four semesters.</ListItem>
            <ListItem>Expulsion from the institution and debarring from admission to any other institution.</ListItem>
            <ListItem>A fine of up to Rs. 2.5 Lakhs and imprisonment for up to two years.</ListItem>
          </ul>
        </InfoCard>

        {/* How to File a Complaint Section */}
        <InfoCard title="How to File a Complaint">
          <p className="text-gray-700 mb-4">Any student who is a victim of ragging or has witnessed an incident can file a complaint through the following channels:</p>
          <ol className="list-decimal list-inside text-gray-700 space-y-3">
              <li>Inform the Anti-Ragging Squad or any member of the Anti-Ragging Committee directly.</li>
              <li>Drop a written complaint in the designated complaint boxes on campus.</li>
              <li>Call the National Anti-Ragging Helpline or the institutional helpline number.</li>
              <li>Send an email to the designated email address for anti-ragging complaints.</li>
          </ol>
        </InfoCard>
        
        {/* Anti-Ragging Committee Table */}
        <InfoCard title="Anti-Ragging Committee">
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Sr. No.</th>
                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Name</th>
                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Representation</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700">
                        {committeeMembers.map((member, index) => (
                            <tr key={member.id} className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="text-left py-3 px-4">{index + 1}</td>
                                <td className="text-left py-3 px-4 font-medium">{member.name}</td>
                                <td className="text-left py-3 px-4">{member.representation}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </InfoCard>

        {/* Anti-Ragging Squad Table */}
        <InfoCard title="Anti-Ragging Squad">
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Sr. No.</th>
                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Name</th>
                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Designation</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700">
                        {squadMembers.map((member, index) => (
                            <tr key={member.id} className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="text-left py-3 px-4">{index + 1}</td>
                                <td className="text-left py-3 px-4 font-medium">{member.name}</td>
                                <td className="text-left py-3 px-4">{member.designation}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </InfoCard>

        {/* Contact Information Section */}
        <InfoCard title="Important Contact Information & Helplines">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg">
                    <p className="font-bold">National Anti-Ragging Helpline</p>
                    <p>Toll-Free: <a href="tel:1800-180-5522" className="hover:underline">1800-180-5522</a></p>
                    <p>Email: <a href="mailto:helpline@antiragging.in" className="hover:underline">helpline@antiragging.in</a></p>
                </div>
                 <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 rounded-lg">
                    <p className="font-bold">College Helpline</p>
                    <p>Phone: <span className="font-mono">[Insert College Helpline Number]</span></p>
                    <p>Email: <span className="font-mono">[Insert College Email]</span></p>
                </div>
            </div>
        </InfoCard>

        {/* Online Affidavits Section */}
        <InfoCard title="Online Anti-Ragging Affidavits">
          <p className="text-gray-700 leading-relaxed mb-4">
            As per UGC regulations, it is mandatory for every student and their parents/guardians to submit an anti-ragging affidavit online at the beginning of each academic year. You can fill out the affidavit at the following official websites. After filling the form, you will receive an email with a link to download the affidavit. Please print and submit the signed affidavit to the college office.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://www.antiragging.in" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 text-center">
              www.antiragging.in
            </a>
            <a href="https://www.amanmovement.org" target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300 text-center">
              www.amanmovement.org
            </a>
          </div>
        </InfoCard>

        {/* Student Undertaking Section */}
        <InfoCard title="Student Undertaking">
            <p className="text-gray-700 leading-relaxed italic">
                "I, [Student's Name], have read and understood the rules and regulations regarding anti-ragging. I hereby declare that I will not engage in any form of ragging and will help in creating a ragging-free campus. If I am found guilty of ragging, I am liable for any punishment deemed fit by the institution and the law."
            </p>
        </InfoCard>

      </main>
    </div>
  );
}
