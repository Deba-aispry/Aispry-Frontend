import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { howWeWorksData } from "../utility/howWeWorksData";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";


const HowWeWorks = () => {
  const [animatedCards, setAnimatedCards] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const cardId = entry.target.id;
          if (entry.isIntersecting) {
            setAnimatedCards((prev) => new Set(prev).add(cardId));
          } else {
            setAnimatedCards((prev) => {
              const newSet = new Set(prev);
              newSet.delete(cardId);
              return newSet;
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    const cardElements = document.querySelectorAll(".card");
    cardElements.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="h-screen overflow-y-scroll hide-scrollbar mb-20  bg-[#487cec] text-white ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 max-w-6xl mx-auto py-16">
        <div className="sticky md:top-20 mr-6 self-start">
        <motion.h2
            className="text-5xl font-semibold"
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            How We Work
          </motion.h2>
          <motion.p
            className="mt-4 text-xl font-semibold"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            We collaborate closely with you to understand your business
            challenges, design tailored AI solutions, and ensure long-term
            measurable success.
          </motion.p>
        </div>

        <div>
          {howWeWorksData.map((step) => (
            <motion.div
              key={step.id}
              id={step.id}
              className="card relative bg-white shadow-lg rounded-lg py-6 px-4 mt-6"
              initial={{ opacity: 0, rotateX: -90 }}
              animate={
                animatedCards.has(String(step.id))
                  ? { opacity: 1, rotateX: 0 }
                  : { opacity: 0, rotateX: -90 }
              }
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
            >
              <div className="absolute top-0 right-0 w-6 bg-[#ef8e38] h-full "></div>
              <h3 className="text-3xl font-semibold text-center mt-2 mb-4 text-black">
                {step.title}
              </h3>
              {step?.description.map((item, key) => (
                <div key={key} className="flex items-center">
                  <IoMdCheckmarkCircleOutline className="text-2xl mr-3 rounded-full text-blue-500" />
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
