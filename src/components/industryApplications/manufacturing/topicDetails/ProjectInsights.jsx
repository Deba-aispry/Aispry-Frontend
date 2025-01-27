import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import cement from "../../../../assets/projectImage/cement.jpg";
import windenergy from "../../../../assets/projectImage/windenergy.jpg";
import optimization from "../../../../assets/projectImage/optimization.webp";

const ProjectInsights = () => {
  const cards = [
    {
      title: "Machine Failure with ML",
      description:
        "Use machine learning algorithms to predict and prevent unexpected machine failures in the manufacturing industry. This helps reduce costs and improve efficiency.",
      image: cement,
    },
    {
      title: "Cement Manufacturing Automation",
      description:
        "Streamline production processes with cutting-edge automation systems designed for the cement industry, ensuring high precision and lower downtime.",
      image: windenergy,
    },
    {
      title: "Optimization of Machine Downtime",
      description:
        "Leverage advanced analytics and predictive maintenance to minimize machine downtime and maximize productivity across the board.",
      image: optimization,
    },
    {
      title: "BBS Extraction",
      description:
        "Efficiently extract and analyze BBS data for improved decision-making in industrial operations, ensuring optimized workflows.",
      image: cement,
    },
    {
      title: "Wind Turbine Failure",
      description:
        "Enhance the reliability of wind turbines by predicting potential failures and addressing issues with data-driven insights and predictive analytics.",
      image: windenergy,
    },
  ];

  return (
    <div className="py-12 px-6 md:px-16 max-w-7xl mx-auto text-white">
      <motion.div
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-5xl font-semibold text-center  mb-16">
          Project Insights
        </h1>
      </motion.div>
      <div className="flex flex-col gap-16">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-8 ${
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
            <motion.div
              className="flex-shrink-0 w-full md:w-1/2 overflow-hidden rounded-2xl shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <motion.img
                src={card.image}
                alt={card.title}
                className="w-full h-64 md:h-80 object-cover"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              />
            </motion.div>

            <motion.div
              className="w-full md:w-1/2 text-center md:text-left"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              <h3 className="text-3xl font-semibold  mb-4">{card.title}</h3>
              <p className="text-xl mb-6 leading-relaxed">{card.description}</p>
              <motion.button
                className="relative inline-flex items-center text-white px-6 py-3 rounded-lg text-lg font-semibold hover:text-orange-500 hover:text-xl transition-all transform"
                whileHover={{
                  backgroundPosition: "100% 0",
                  transition: { duration: 0.8 },
                }}
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
