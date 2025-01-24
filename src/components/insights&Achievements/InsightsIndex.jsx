import React from "react";
import { motion } from "framer-motion";
import steelImage from "../../assets/projectImage/steelImage.jpeg";

const cardsData = [
  {
    image: "https://source.unsplash.com/random/800x600?nature,1",
    title: "Innovation in Automation",
    description:
      "Revolutionizing processes through smart automation solutions.",
  },
  {
    image: "https://source.unsplash.com/random/800x600?nature,2",
    title: "Eco-Friendly Solutions",
    description:
      "Implementing sustainable practices to reduce environmental impact.",
  },
  {
    image: "https://source.unsplash.com/random/800x600?nature,3",
    title: "AI-Powered Insights",
    description: "Leveraging AI to derive actionable insights for industries.",
  },
  {
    image: "https://source.unsplash.com/random/800x600?nature,4",
    title: "Seamless Integration",
    description: "Integrating advanced technologies into legacy systems.",
  },
  {
    image: "https://source.unsplash.com/random/800x600?nature,5",
    title: "Data-Driven Decision Making",
    description: "Utilizing data analytics for precision and efficiency.",
  },
  {
    image: "https://source.unsplash.com/random/800x600?nature,6",
    title: "Smart Manufacturing",
    description: "Enabling smart factories with IoT and advanced systems.",
  },
  {
    image: "https://source.unsplash.com/random/800x600?nature,7",
    title: "Customer-Centric Design",
    description: "Building solutions tailored to customer needs.",
  },
  {
    image: "https://source.unsplash.com/random/800x600?nature,8",
    title: "Agile Processes",
    description: "Streamlining workflows with agile methodologies.",
  },
];


const InsightsIndex = () => {
  return (
    <div className="w-full bg-[#487cec] text-white min-h-screen">
      <div className="p-8 max-w-6xl container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h3
            className="text-5xl font-semibold mb-4"
            initial={{ x: -600, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Insights & Achievements
          </motion.h3>
          <motion.p
            className="text-xl max-w-xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            Our relentless pursuit of innovation has garnered recognition and
            profound insights across various domains.
          </motion.p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardsData.map((card, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              {/* Card Image */}
              <img
                src={steelImage}
                alt={card.title}
                className="w-full h-60 object-cover rounded-lg"
              />
              {/* Title (always visible at the bottom) */}
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white text-lg font-semibold px-4 py-2">
                {card.title}
              </div>
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center">
                <p className="text-white text-md px-6">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InsightsIndex;
