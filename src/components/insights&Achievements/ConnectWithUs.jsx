import React from "react";
import { motion } from "framer-motion";

const cardsData = [
  {
    title: "Networking",
    description:
      "Discuss, debate, and share your thoughts on AI trends, innovations, and challenges with our team.",
  },
  {
    title: "Tech Events Participation",
    description:
      "Meet us at tech events, seminars, and workshops. Engage with us as we exhibit, present, and discuss.",
  },
  {
    title: "LinkedIn Engagements",
    description:
      "Connect with us on LinkedIn to stay abreast of our latest achievements.",
  },
  {
    title: "Research Paper Submissions:",
    description:
      "Explore our extensive library of research papers and findings.",
  },
  {
    title: "Proof of Concepts (POC)",
    description: "Experience our innovations first-hand through our POCs.",
  },
  {
    title: "Demo & Project Presentations",
    description:
      "Understand our solutions deeply through tailored demos and presentations.",
  },
];

const ConnectWithUs = () => {
  return (
    <div>
      <div className="text-white p-8 max-w-6xl container mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-2"
          initial={{ x: -600, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-4xl font-bold text-orange-400">
            Connect with Us Beyond the Screen
          </h3>
        </motion.div>

        {/* Paragraph */}
        <motion.div
          className="text-center mb-12"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-lg max-w-3xl mx-auto text-gray-300">
            Engage with the brilliant minds behind our innovations
          </p>
        </motion.div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardsData.map((card, index) => (
            <motion.div
              key={index}
              className="bg-white mb-4 p-6 rounded-lg shadow-lg  hover:shadow-2xl hover:transform hover:scale-110 transition-transform duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h4 className="text-xl font-semibold text-orange-400 mb-2">
                {card.title}
              </h4>
              <p className="text-black">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConnectWithUs;
