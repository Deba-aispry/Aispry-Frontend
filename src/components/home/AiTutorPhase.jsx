import React from "react";

import AccordionWithImage from "../accordian/AccordianWithImage";

const AiTutorPhase = () => {
  return (
    <div className=" mx-auto p-6 bg-gray-50 my-10 ">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-6">
          <h3 className="text-3xl font-semibold text-red-500">
            <span>AiTutor: Phase 3</span>
          </h3>
          <h4 className="text-3xl text-red-500 mt-2">
            The Future of Personalized Learning & Real-Time Insights
          </h4>
          <p className="text-gray-600 mt-2">
            Pioneering New Heights in AI-Powered Education with Real-time
            Behavior Insights and Autism Detection
          </p>
        </div>
        <div className="mt-10">
          <h3 className="text-3xl font-semibold text-red-500 mb-2 text-center ">
            Intuitive Learning with AiTutor
          </h3>
          <p className="text-gray-700 leading-relaxed text-center">
            Manually gauging a student's grasp or a tutor's effectiveness can be
            overwhelmingly complex. Enter AiTutor: our advanced solution
            designed to make the educational process more insightful,
            personalized, and effective.
          </p>
        </div>
        <div className="mt-12">
          <h4 className="text-lg text-red-500 text-center">
            <span className="font-semibold">For the student: </span>
            <span>A Tailored Learning Experience</span>
          </h4>
        </div>

        <div className="mt-4 flex items-start gap-6">
          <AccordionWithImage />
        </div>
      </div>
    </div>
  );
};

export default AiTutorPhase;
