import React from "react";
import { motion } from "framer-motion";
import howwework from "../../assets/projectImage/wework.png";
import { howWeWorksData } from "../utility/howWeWorksData";

const HowWeWorkDetailes = () => {
  return (
    <div className="relative text-white pt-10 pb-20 px-6">
      {/* Background Image */}
      <motion.img
        src={howwework}
        alt="happy-faces"
        className="absolute top-0 left-0 h-full w-full object-cover z-0 opacity-50"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      />
      <div className="absolute top-0 left-0 h-full w-full bg-black opacity-80 z-1"></div>

      {/* Content Section */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center mb-8">
        {/* Header Section */}
        <motion.h1
            initial={{ opacity: 0, x: -500 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-semibold my-8 relative z-10"
        >
          Our Approach to AI Innovation
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg max-w-3xl mx-auto text-center"
        >
          At the heart of our approach is a commitment to collaboration,
          innovation, and delivering impactful results. We start by deeply
          understanding your business challenges and goals, ensuring we tailor
          solutions that meet your specific needs. Our process follows a
          structured yet flexible framework, where we work closely with you to
          design, develop, and deploy AI-powered solutions that create tangible
          value. Through rigorous testing and continuous feedback, we ensure
          that the solution aligns perfectly with your vision. Post-launch, we
          remain dedicated to your success by optimizing performance and
          identifying new opportunities for growth, ensuring that your
          investment in AI drives lasting, measurable outcomes.
        </motion.p>
      </div>

      <div className="relative max-w-5xl mx-auto mt-16">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-3 bg-gray-600 hidden lg:block"></div>

        {howWeWorksData.map((section, index) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`relative flex flex-col lg:flex-row items-center gap-6 lg:gap-12  ${
              index % 2 === 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#ef8e38] rounded-full border-4 border-gray-900"></div>

            <div className="w-full lg:w-1/2  p-6 rounded-lg shadow-md hover:shadow-lg border-b-2 border-gray-500 transition-shadow">
              <div className="flex items-center space-x-6">
                <motion.div className="w-12 h-12 bg-gradient-to-r from-[#ef8e38] to-[#108dc7] rounded-full flex items-center justify-center text-xl font-bold">
                  {section.id}
                </motion.div>
                <h3 className="text-3xl font-semibold">{section.title}</h3>
              </div>

              {/* Description */}
              <ul className="mt-4 space-y-2 text-white">
                {section.description.map((desc, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.2 }}
                    className="flex items-start space-x-2"
                  >
                    <span className="text-[#ef8e38] text-2xl">•</span>
                    <p className="text-lg mt-1">{desc}</p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HowWeWorkDetailes;
