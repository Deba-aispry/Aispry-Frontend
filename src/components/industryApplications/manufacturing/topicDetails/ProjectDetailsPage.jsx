import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ProjectDetailsPage = ({
  headerImage,
  headerTitle,
  objectives,
  constraints,
  successCriteria,
  businessBenefits,
  ProblemStatement,
  architecture,
}) => {
  const [activeSection, setActiveSection] = useState("Problem Statement");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const sections = {
    "Problem Statement": ProblemStatement,
    Objectives: objectives,
    Constraints: constraints,
    "Success Criteria": successCriteria,
    "Business Benefits": businessBenefits,
    ...(architecture ? { Architecture: architecture } : {}),
  };

  return (
    <div className="container mx-auto px-4">
      <motion.div
        className="fixed top-28 left-0 h-2 bg-gradient-to-r from-blue-600 to-orange-400 z-50"
        style={{
          width: `${scrollProgress}%`,
        }}
      />

      <div className="flex flex-col-reverse md:flex-row items-center  md:space-x-8">
        <img
          src={headerImage}
          alt="Header"
          loading="lazy"
          className="w-full md:w-3/5 h-96 object-cover rounded-lg shadow-lg"
        />

        <motion.div
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-4 md:mt-0 text-center md:text-left"
        >
          <h3 className="text-4xl md:text-5xl font-bold mb-8">{headerTitle}</h3>
        </motion.div>
      </div>

      {/* 🔹 Horizontal Scrollbar (Mobile) */}
      <h3 className=" md:invisible text-2xl font-bold text-white text-center mt-8">
        Project Details
      </h3>
      <div className="md:hidden mt-6 overflow-x-auto whitespace-nowrap scrollbar-hide border-b-2">
        <ul className="flex space-x-4 pb-2">
          {Object.keys(sections).map((section) => (
            <li
              key={section}
              className={`cursor-pointer text-lg font-semibold px-4 py-2 rounded-md ${
                activeSection === section
                  ? "text-[#ef8e38] "
                  : "text-white hover:text-[#108dc7]"
              }`}
              onClick={() => setActiveSection(section)}
            >
              {section}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex mt-14 ">
        {/* 🔹 Sidebar (Left Side for Desktop) */}
        <motion.aside
          className="hidden md:block w-1/5  border-r-4  p-4"
          initial={{ x: -400 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4 text-center border-b-2 pb-2">
            Project Details
          </h3>
          <ul className="space-y-4">
            {Object.keys(sections).map((section) => (
              <li
                key={section}
                className={`cursor-pointer text-lg font-semibold p-3 rounded-md ${
                  activeSection === section
                    ? "text-[#ef8e38]"
                    : "text-white hover:text-[#108dc7]"
                }`}
                onClick={() => setActiveSection(section)}
              >
                {section}
              </li>
            ))}
          </ul>
        </motion.aside>

        {/* 🔹 Main Content */}
        <main className="w-full md:w-3/4 md:mt-0">
          <div className="mb-6 md:pl-8">
            {activeSection === "Architecture"
              ? architecture && (
                  <div className="border-gray-300 py-4">
                    <h4 className="text-xl font-semibold text-white">
                      Architecture
                    </h4>
                    <img
                      src={architecture}
                      alt="Project Architecture"
                      className="w-full md:w-3/4 h-auto rounded-lg shadow-lg mt-5"
                      loading="lazy"
                    />
                  </div>
                )
              : sections[activeSection]?.map((item, index) => (
                  <div key={index} className="border-gray-300 py-4">
                    <h4 className="text-xl font-semibold text-white">
                      {item?.title}
                    </h4>
                    <p className="text-lg text-gray-300">{item.description}</p>
                  </div>
                ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
