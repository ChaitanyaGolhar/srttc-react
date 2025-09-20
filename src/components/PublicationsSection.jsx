import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search } from "lucide-react";
import SectionWrapper from "./shared/SectionWrapper";
import SectionTitle from "./shared/SectionTitle";
// import { publicationsData } from "../utils/constants"; // Adjust path if needed

const PublicationsSection = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterTag, setFilterTag] = useState('All');

    const tags = ['All', 'SCI', 'Scopus', 'UGC'];

    const filteredPublications = publicationsData
        .filter(p => filterTag === 'All' || p.tag === filterTag)
        .filter(p => 
            p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.authors.toLowerCase().includes(searchTerm.toLowerCase())
        );

    return (
        <SectionWrapper id="publications">
            <SectionTitle>Research & Publications</SectionTitle>
            <div className="max-w-4xl mx-auto space-y-3 p-4 bg-white rounded-xl shadow-md border border-gray-200">
                <div className="flex flex-col sm:flex-row gap-4 mb-4">
                    <div className="relative flex-grow">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input 
                            type="text" 
                            placeholder="Search by title or author..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                    <div className="flex gap-2">
                        {tags.map(tag => (
                            <button
                                key={tag}
                                onClick={() => setFilterTag(tag)}
                                className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors duration-200 ${
                                    filterTag === tag
                                        ? "bg-blue-600 text-white border-blue-600"
                                        : "bg-white text-gray-700 border-gray-200 hover:bg-gray-100"
                                }`}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>
                {filteredPublications.map((p, index) => (
                    <div key={index} className="rounded-xl border border-gray-200 overflow-hidden">
                        <motion.div
                            className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer"
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        >
                            <div className="flex-grow pr-4">
                                <h3 className="font-semibold text-gray-800 text-base md:text-lg">{p.title}</h3>
                                <p className="text-sm text-gray-600 mt-1">{p.authors} - {p.year}</p>
                            </div>
                            <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                                <ChevronDown className="text-gray-500" />
                            </motion.div>
                        </motion.div>
                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    className="overflow-hidden"
                                >
                                    <div className="p-4 bg-blue-50 text-sm text-gray-700 border-t border-blue-100">
                                        <p className="font-semibold mb-1">Abstract:</p>
                                        <p>{p.abstract}</p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default PublicationsSection;