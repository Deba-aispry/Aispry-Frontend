import React from "react";
import { motion } from "framer-motion";
import howwework from "../../assets/homePage/howwework.jpg";

const HowWeWorkDetailes = () => {
  const sections = [
    {
      title: "Our Process",
      steps: [
        {
          title: "Discovery",
          description:
            "Analyze business challenges and create a roadmap for AI-driven solutions.",
        },
        {
          title: "Development",
          description:
            "Build and test prototypes using cutting-edge technologies.",
        },
        {
          title: "Deployment",
          description:
            "Launch and optimize AI solutions for seamless integration.",
        },
      ],
    },
    {
      title: "Proof of Concept (PoC)",
      steps: [
        {
          title: "Pilot Projects",
          description: "Test small-scale prototypes to ensure feasibility.",
        },
        {
          title: "Agile Testing",
          description:
            "Iterative testing to refine and validate project goals.",
        },
      ],
    },
    {
      title: "From Data to Impact",
      steps: [
        {
          title: "Data Collection",
          description: "Gather and preprocess data from diverse sources.",
        },
        {
          title: "Modeling",
          description: "Develop predictive and analytical models.",
        },
        {
          title: "Insights",
          description: "Extract actionable insights to drive decisions.",
        },
      ],
    },
  ];

  return (
    <div className=" text-white pt-10 pb-20 px-6">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <img
          src={howwework}
          alt="happy-faces"
          className="h-1/3 w-full rounded-md"
        />

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mt-12"
        >
          Our Approach to AI Innovation
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg mt-4 max-w-3xl mx-auto"
        >
          At the heart of our approach is a commitment to collaboration,
          innovation, and delivering impactful results. We start by deeply
          understanding your business challenges and goals, ensuring we tailor
          solutions that meet your specific needs. Our process follows a
          structured yet flexible framework, where we work closely with you to
          design, develop, and deploy AI-powered solutions that create tangible
          value. Through rigorous testing and continuous feedback, we ensure
          that the solution aligns perfectly with your vision. Post-launch, we
          remain dedicated to your success by optimizing performance and
          identifying new opportunities for growth, ensuring that your
          investment in AI drives lasting, measurable outcomes.
        </motion.p>
      </div>

      {/* Sections */}
      <div className="max-w-7xl mx-auto">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="mb-16"
          > 
            {/* Section Title */}
            <motion.h2
              initial={{ opacity: 0, x: -500 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl font-semibold text-center mb-10"
            >
              {section.title}
            </motion.h2>

            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {section.steps.map((step, stepIndex) => (
                <motion.div
                  key={stepIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: stepIndex * 0.3,
                    type: "spring",
                    stiffness: 50,
                  }}
                  className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center space-x-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#ef8e38] to-[#108dc7] rounded-full flex items-center justify-center mb-4">
                      <span className="text-xl font-bold">{stepIndex + 1}</span>
                    </div>
                    <h3 className="text-3xl font-semibold mb-2">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-400">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HowWeWorkDetailes;
