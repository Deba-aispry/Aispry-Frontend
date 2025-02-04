import React, { memo } from "react";
import { motion } from "framer-motion";
import { awardsData } from "../utility/awardsData";

// Award Card Component
const AwardCard = memo(({ imgSrc, title, description }) => (
  <motion.div
    className="p-6 text-center rounded-xl bg-white text-black border-2 border-orange-500"
    initial={{ opacity: 0, y: 50 }} // Start off-screen with low opacity
    whileInView={{ opacity: 1, y: 0 }} // Fade in and move to original position
    transition={{
      opacity: { duration: 0.5 },
      y: { type: "spring", stiffness: 100, damping: 20 },
    }}
    viewport={{ once: true, amount: 0.5 }} // Trigger animation when card is in view
  >
    <div className="">
      <img
        src={imgSrc}
        alt={title}
        className="w-full h-auto object-cover rounded-md mb-4"
        loading="lazy"
      />
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <p className="">{description}</p>
    </div>
  </motion.div>
));

// Rolling Cylinder Animation for Heading
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

// Container Variants for Award Cards
const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4, // Stagger the child animations
    },
  },
};

const Awards = () => {
  return (
    <div className="bg-[#487cec]">
      <div className="p-8 md:w-[75%] mx-auto mt-8">
        {/* Heading Animation */}
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

        {/* Award Cards Container */}
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
    </div>
  );
};

export default Awards;
