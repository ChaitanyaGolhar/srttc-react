import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./shared/SectionWrapper";
import SectionTitle from "./shared/SectionTitle";

const FacultyCard = ({ member }) => {
    <motion.div
            className="group bg-white rounded-xl shadow-md overflow-hidden text-center transition-all duration-300 hover:shadow-xl hover:scale-105 border border-gray-100"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <div className="relative">
                <img src={member.img} alt={member.name} className="w-full h-56 object-cover" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-all duration-300 flex items-end justify-center p-4">
                   <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-sm font-bold">{member.email}</p>
                        <p className="text-xs mt-1">Specialization: {member.specialization}</p>
                   </div>
                </div>
            </div>
            <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
                <p className="text-blue-600">{member.designation}</p>
            </div>
        </motion.div>
};

// Accept `facultyData` as a prop
const FacultySection = ({ facultyData }) => (
    <SectionWrapper id="faculty">
        <SectionTitle>Our Esteemed Faculty</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {facultyData.map((member) => <FacultyCard key={member.name} member={member} />)}
        </div>
    </SectionWrapper>
);

export default FacultySection;