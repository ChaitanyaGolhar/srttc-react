import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./shared/SectionWrapper";

// 1. Accept `statsData` as a prop
const QuickStats = ({ statsData }) => (
    <SectionWrapper id="stats">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
        {/* 2. Map over the received prop */}
        {statsData.map((stat, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div
              className={`w-20 h-1 bg-${stat.color} mb-4`}
            ></div>
            <p className="text-4xl lg:text-5xl font-bold text-gray-900">{stat.value}</p>
            <p className="text-base text-gray-600 mt-2">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
);

export default QuickStats;