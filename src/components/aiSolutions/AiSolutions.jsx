import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { AiSolutionsData } from "../utility/AiSolutionsData";

const AiSolutions = () => {
  const [activeSection, setActiveSection] = useState("ml");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    AiSolutionsData.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => {
      AiSolutionsData.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <>
      <div className="sticky top-28 z-30 bg-[#0066b1] text-white shadow-md overflow-auto">
        <div className="flex max-w-6xl space-x-4 p-2 mx-auto  whitespace-nowrap md:whitespace-normal">
          {AiSolutionsData.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`text-md font-medium py-2 px-4 rounded-lg transition ${
                activeSection === section.id
                  ? "text-[#ef8e38] font-bold"
                  : "text-white"
              }`}
            >
              {section.title}
            </a>
          ))}
        </div>
      </div>

      <div>
        {AiSolutionsData.map((section) => (
          <Section key={section.id} section={section} />
        ))}
      </div>
    </>
  );
};

const Section = ({ section }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const headerVariants = {
    hidden: { opacity: 0, x: -600 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cardsContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      id={section.id}
      ref={ref}
      className="flex flex-col mb-14 items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={cardsContainerVariants}
    >
      <motion.div variants={headerVariants} className="text-center my-14">
        <h2 className="text-5xl font-semibold mb-4 text-white">
          {section.title}
        </h2>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={cardsContainerVariants}
      >
        {section.cards.map((card, index) => (
          <motion.div
            key={index}
            className="p-4 bg-[#1a202c] rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-out text-white relative overflow-hidden group"
            variants={cardVariants}
          >
            <img
              src={card.imageSrc}
              alt={card.title}
              loading="lazy"
              className="w-full h-60 object-cover mb-4 rounded-lg transform transition-transform duration-500 group-hover:scale-105"
            />
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-md text-gray-300">{card.description}</p>
            {card?.link && (
              <a
                href={card.link}
                target="blank"
                className="text-center flex justify-around mt-4 hover:text-[#ef8e38] font-bold "
              >
                More Details
              </a>
            )}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default AiSolutions;
