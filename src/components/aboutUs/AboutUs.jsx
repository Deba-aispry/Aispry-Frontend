import React from "react";
import { motion } from "framer-motion";
// import picture from "../../assets/aboutus/Picture1.png";

const AboutUs = () => {
  return (
    <>
     
      <div className="text-white max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 my-12">
        <div className="flex justify-start items-center w-full pl-5 pr-5">
          <div className="w-full">
            <motion.h3
              className="text-4xl mb-4 text-[#108dc7] font-semibold"
              initial={{ opacity: 0, rotateX: 90 }}
              animate={{ opacity: 1, rotateX: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              Who We Are
            </motion.h3>
            <motion.p
              className="text-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
            >
              Founded in 2017 by distinguished IIT and ISB alumni, we're a
              leader in Artificial Intelligence and Generative AI.
              <br />
              Our team of 182+ data experts brings decades of experience,
              delivering innovative solutions that revolutionize industries.
            </motion.p>
          </div>
        </div>

        <div className="flex justify-center items-start w-full">
          <div className="w-full ">
            <motion.h3
              className="text-4xl mb-4 text-[#ef8e38] font-semibold"
              initial={{ opacity: 0, rotateX: 90 }}
              animate={{ opacity: 1, rotateX: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
            >
              Our Global Presence
            </motion.h3>
            <motion.p
              className="text-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut", delay: 0.5 }}
            >
              With a strong presence in four key metros across India and
              Malaysia, we are strategically positioned to serve the ASEAN
              market and beyond.
              <br />
              Our global footprint enables us to deliver customized, high-impact
              AI solutions, ensuring businesses worldwide stay competitive in an
              evolving digital landscape.
            </motion.p>
          </div>
        </div>

        <div className="flex  w-full pl-5 pr-5">
          <div className="w-full ">
            <motion.h3
              className="text-4xl mb-4 text-[#213f9e] font-semibold"
              initial={{ opacity: 0, rotateX: 90 }}
              animate={{ opacity: 1, rotateX: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.6 }}
            >
              Our Achievements
            </motion.h3>
            <motion.p
              className="text-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut", delay: 0.8 }}
            >
              We've empowered 45+ clients across India, Malaysia, Canada, and
              the Middle East.
              <br />
              Achieved measurable improvements in process efficiency,
              decision-making, and growth through our impactful AI strategies.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Image Section at the bottom */}
      {/* <div className="text-white max-w-6xl mx-auto flex justify-center">
        <img
          src={picture}
          alt="About Us"
          className="w-full md:w-2/3 lg:w-1/2 h-auto object-cover rounded-lg shadow-lg"
        />
      </div> */}
    </>
  );
};

export default AboutUs;
