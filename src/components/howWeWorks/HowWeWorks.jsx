import React from "react";
import { howWeWorksData } from "../utility/howWeWorksData";

const HowWeWorks = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 container mx-auto mb-10 max-w-7xl">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-5xl font-semibold text-white">How We Work</h2>
        <p className="mt-4 text-lg text-white">
          We collaborate closely with you to understand your business
          challenges, design tailored AI solutions, and ensure long-term
          measurable success.
        </p>
      </div>

      {/* Steps */}
      <div className="mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {howWeWorksData.map((step) => (
          <div
            key={step.id}
            className="relative bg-[#11192c] shadow-lg rounded-lg p-6 transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            {/* Step Number */}
            <div className="absolute text-center -top-6 left-6 bg-[#108dc7] text-white text-2xl font-bold w-14 h-14 flex items-center justify-center rounded-full">
              {step.id}
            </div>

            {/* Step Content */}
            <h3 className="text-3xl font-semibold text-center text-white mt-6">
              {step.title}
            </h3>
            <p className="mt-4 text-white ">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowWeWorks;
