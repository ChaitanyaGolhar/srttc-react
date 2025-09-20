import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./shared/SectionWrapper";
import SectionTitle from "./shared/SectionTitle";
// import { eventsData } from "../utils/constants"; // Adjust path if needed

const EventsSection = () => {
    const [view, setView] = useState('upcoming');
    const [expandedEvent, setExpandedEvent] = useState(null);

    return (
        <SectionWrapper id="events">
            <SectionTitle>Events</SectionTitle>
            <div className="flex justify-center mb-8">
                <div className="bg-gray-100 rounded-full p-1 flex border border-gray-200">
                    <button onClick={() => setView('upcoming')} className={`px-6 py-2 rounded-full font-semibold ${view === 'upcoming' ? 'bg-white shadow' : ''}`}>Upcoming</button>
                    <button onClick={() => setView('past')} className={`px-6 py-2 rounded-full font-semibold ${view === 'past' ? 'bg-white shadow' : ''}`}>Past</button>
                </div>
            </div>

            {view === 'upcoming' && (
                <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                    {eventsData.upcoming.map((event, index) => (
                        <motion.div 
                            key={index} 
                            className="bg-white p-6 rounded-xl shadow-md border-l-4 border-orange-500"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <span className="text-sm font-bold text-blue-600">{event.date}</span>
                            <h3 className="text-xl font-semibold my-2">{event.title}</h3>
                            <p className="text-gray-600 text-sm">{event.description}</p>
                        </motion.div>
                    ))}
                </div>
            )}
            
            {view === 'past' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {eventsData.past.map((event, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-xl shadow-md overflow-hidden relative group cursor-pointer border border-gray-100"
                            onClick={() => setExpandedEvent(expandedEvent === index ? null : index)}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <img src={event.image} alt={event.title} className="w-full h-48 object-cover"/>
                            <div className="p-4">
                                <h3 className="font-bold text-lg text-gray-800">{event.title}</h3>
                                <p className="text-sm text-gray-500">Year: {event.year}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}
        </SectionWrapper>
    );
};

export default EventsSection;