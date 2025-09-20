import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Target } from "lucide-react";
import SectionWrapper from "./shared/SectionWrapper";
import SectionTitle from "./shared/SectionTitle";

// Receive hodData as a prop
const AboutSection = ({ hodData }) => (
  <SectionWrapper id="about">
    <SectionTitle>About The Department</SectionTitle>
    <div className="grid md:grid-cols-5 gap-8">
      {/* Vision & Mission Section */}
      <div className="md:col-span-3 space-y-8">
        {/* ... (rest of the Vision & Mission content remains the same) ... */}
        <div className="grid sm:grid-cols-2 gap-6">
          <motion.div
            className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg border border-white/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-3">
              <Lightbulb className="w-8 h-8 text-orange-500" />
              <h3 className="text-xl font-semibold text-gray-800">Vision</h3>
            </div>
            <p className="text-gray-700">
              To be a center of excellence in fundamental engineering sciences, nurturing innovative and ethical engineers for the future.
            </p>
          </motion.div>
          <motion.div
            className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg border border-white/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-4 mb-3">
              <Target className="w-8 h-8 text-orange-500" />
              <h3 className="text-xl font-semibold text-gray-800">Mission</h3>
            </div>
            <p className="text-gray-700">
              To provide a strong foundation in core sciences, foster critical thinking, and inculcate professional skills through quality education.
            </p>
          </motion.div>
        </div>
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Goals</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-gray-700 mb-2">Short-term</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Enhance lab infrastructure.</li>
                <li>Organize more industry talks.</li>
                <li>Improve student-faculty ratio.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-700 mb-2">Long-term</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Establish research collaborations.</li>
                <li>Introduce interdisciplinary projects.</li>
                <li>Achieve 100% student success rate.</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>

      {/* HOD Card */}
      {hodData && (
        <motion.div
          className="md:col-span-2 bg-blue-50 p-6 rounded-lg shadow-lg text-center"
        >
          <img
            src={hodData.img}
            alt="Head of Department"
            className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-600"
          />
          <h3 className="text-xl font-bold text-gray-800">{hodData.name}</h3>
          <p className="text-blue-700 font-semibold">{hodData.designation}</p>
          <p className="text-gray-700 mt-4 text-sm italic">
            "We are committed to building a strong base for our budding engineers..."
          </p>
        </motion.div>
      )}
    </div>
  </SectionWrapper>
);

export default AboutSection;