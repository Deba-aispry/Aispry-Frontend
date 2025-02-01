import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { howWeWorksData } from "../utility/howWeWorksData";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import howweworkimage from "../../assets/projectImage/howwework.png";

const HowWeWorks = () => {
  const { scrollYProgress } = useScroll();
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);
  const backgroundOpacity = useTransform(
    scrollYProgress,
    [0.2, 0.5],
    [0.2, 0.5]
  );

  return (
    <div className="bg-[#487cec] text-white py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl w-full mx-auto px-6">
        <div className="lg:col-span-7 w-full">
          <div className="lg:sticky lg:top-10 flex flex-col text-center md:px-0 relative">
            <div className="relative w-full max-h-[480px] overflow-hidden rounded-lg shadow-lg">
              <motion.img
                src={howweworkimage}
                alt="How We Work"
                className="w-full object-cover h-full"
                initial={{ opacity: 0.8 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              />

              <motion.div
                className="absolute inset-0 bg-black"
                style={{ opacity: backgroundOpacity }}
              ></motion.div>
            </div>

            <motion.div
              style={{ opacity: textOpacity }}
              className="absolute inset-0 flex flex-col justify-center items-center text-center px-4"
            >
              <motion.h2
                className="text-4xl md:text-5xl font-semibold mb-4"
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                How We Work
              </motion.h2>
              <motion.p
                className="text-lg md:text-xl font-semibold max-w-3xl text-center"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                We collaborate closely with you to understand your business
                challenges, design tailored AI solutions, and ensure long-term
                measurable success.
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:col-span-5 col-span-1 lg:max-h-[75vh] lg:overflow-y-auto my-auto hide-scrollbar  ">
          {howWeWorksData.map((step, index) => (
            <motion.div
              key={step.id}
              className="card relative bg-white shadow-xl shadow-blue-900 rounded-lg py-6 px-6 mt-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
            >
              <div className="absolute top-0 right-0 w-6 bg-[#ef8e38] h-full"></div>
              <h3 className="text-2xl md:text-3xl font-semibold text-center mt-2 mb-4 text-black">
                {step.title}
              </h3>
              {step?.description.map((item, key) => (
                <div key={key} className="flex items-start">
                  <IoMdCheckmarkCircleOutline className="text-xl md:text-2xl mr-3 mt-3 rounded-full text-blue-500" />
                  <span className="text-black my-2 text-lg">{item}</span>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowWeWorks;
