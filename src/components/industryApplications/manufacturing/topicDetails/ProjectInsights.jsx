import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { projectInsightsData } from "../../../utility/projectData/projectInsightsData";

const ProjectInsights = ({ onTopicClick, selectedTopic }) => {
  const topictoShow = projectInsightsData.filter(
    (topic) => topic.title !== selectedTopic
  );

  return (
    <div className="py-12 px-4 sm:px-6 md:px-16 max-w-6xl mx-auto text-white overflow-hidden">
      <motion.div
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-5xl font-semibold text-center mb-16">
          Project Insights
        </h1>
      </motion.div>

      <div className="flex flex-col gap-6 sm:gap-8 md:gap-16">
        {topictoShow.map((card, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-16 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {/* Image Container */}
            <motion.div
              className="flex-shrink-0 w-full md:w-1/2 overflow-hidden rounded-2xl shadow-lg"
              whileHover={{ scale: window.innerWidth > 768 ? 1.05 : 1 }}
              transition={{ duration: 0.4 }}
              style={{ maxWidth: "100%" }}
            >
              <motion.img
                src={card.image}
                alt={card.title}
                className="w-full h-80 md:h-96 object-cover block"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                loading="lazy"
                style={{ maxWidth: "100%" }}
              />
            </motion.div>

            {/* Text Content */}
            <motion.div
              className="w-full md:w-1/2 text-center md:text-left"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              <h3 className="text-3xl font-semibold mb-4">{card.title}</h3>
              <p className="text-xl mb-6 leading-relaxed">{card.description}</p>

              {/* Read More Button */}
              <motion.button
                className="relative inline-flex items-center text-white px-6 py-3 rounded-lg text-lg font-semibold hover:text-orange-500 transition-all transform"
                whileHover={{ scale: 1.05 }}
                onClick={() => onTopicClick(card.title)}
              >
                Read More <FiArrowRight className="ml-2 text-lg" />
              </motion.button>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectInsights;
