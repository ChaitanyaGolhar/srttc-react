import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import SectionWrapper from "./shared/SectionWrapper";
import SectionTitle from "./shared/SectionTitle";

const LabsWorkshopsSection = ({labsData}) => {
    const [filter, setFilter] = useState('All');
    const [modalItem, setModalItem] = useState(null);
    const filters = ['All', 'Physics', 'Chemistry', 'Programming'];

    const filteredData = labsData.filter(item => filter === 'All' || item.type === filter);
    
    return (
        <SectionWrapper id="labs">
            <SectionTitle>Labs & Workshops</SectionTitle>
            <div className="flex justify-center flex-wrap gap-2 mb-10">
                {filters.map(f => (
                    <motion.button 
                        key={f}
                        onClick={() => setFilter(f)}
                        className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${filter === f ? 'bg-blue-600 text-white shadow-md' : 'text-gray-700 bg-white border border-gray-200 hover:bg-gray-100'}`}
                        whileHover={{y: -3}}
                    >
                        {f}
                    </motion.button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredData.map(item => (
                    <motion.div 
                        key={item.id} 
                        className="bg-white rounded-xl shadow-lg overflow-hidden group border border-gray-100"
                        layout
                    >
                        <div className="overflow-hidden relative h-56">
                            <img src={item.images[0]} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <h3 className="absolute bottom-4 left-4 text-2xl font-semibold text-white">{item.title}</h3>
                        </div>
                        <div className="p-6">
                            <p className="text-gray-600 mb-4">{item.description.substring(0, 80)}...</p>
                            <button onClick={() => setModalItem(item)} className="font-semibold text-blue-600 hover:text-blue-800">Explore Lab →</button>
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {modalItem && (
                    <motion.div 
                        className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    >
                        <motion.div 
                            className="bg-white rounded-xl max-w-4xl w-full h-[90vh] overflow-y-auto"
                            initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }}
                        >
                            <div className="sticky top-0 bg-white/80 backdrop-blur-sm flex justify-between items-center p-4 border-b z-10">
                                <h2 className="text-2xl font-bold">{modalItem.title}</h2>
                                <button onClick={() => setModalItem(null)} className="text-gray-500 hover:text-gray-800"><X /></button>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-4">Photo Gallery</h3>
                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    {modalItem.images.map(img => <img key={img} src={img} alt="" className="rounded-xl w-full h-auto object-cover"/>)}
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Description</h3>
                                <p className="text-gray-700 mb-6">{modalItem.description}</p>
                                <h3 className="text-xl font-semibold mb-2">Key Equipment</h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    {modalItem.equipment.map(eq => <li key={eq}>{eq}</li>)}
                                </ul>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </SectionWrapper>
    );
};

export default LabsWorkshopsSection;