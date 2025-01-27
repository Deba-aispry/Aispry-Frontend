import React, { memo } from "react";
import { motion } from "framer-motion";
import { awardsData } from "../utility/awardsData";

// Memoized AwardCard Component
const AwardCard = memo(({ imgSrc, title, description }) => (
  <div className="p-6 text-center rounded bg-[#0e2b52] text-white">
    <img
      src={imgSrc}
      alt={title}
      className="w-full h-auto object-cover rounded-md mb-4"
      loading="lazy"
    />
    <h4 className="text-lg font-semibold mb-2 text-white">{title}</h4>
    <p className="text-white">{description}</p>
  </div>
));

// Animation for Header (Rolling Effect)
const rollingCylinderAnimation = {
  hidden: {
    rotateX: 90,
    opacity: 0,
  },
  visible: {
    rotateX: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};

// Staggered Animation for Cards (Awards Section)
const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4, // Staggering delay between card animations
    },
  },
};

const Awards = () => {
  return (
    <div className="p-8 md:w-[75%] mx-auto mt-8">
      <motion.h3
        className="text-5xl font-semibold text-center mb-16 text-white"
        style={{
          transformOrigin: "center bottom",
          perspective: 1000,
        }}
        variants={rollingCylinderAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        Awards & Accolades
      </motion.h3>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        {awardsData.map((award, index) => (
          <AwardCard
            key={index}
            imgSrc={award.imgSrc}
            title={award.title}
            description={award.description}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Awards;
