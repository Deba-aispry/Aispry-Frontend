import React from "react";
import Header from "../projectHeader/Header";

const HealthCare = () => {
  const topics = [
    "Embryo Viability AI",
    "Oocyte Project",
    "Autism Detection",
    "PharmaBot: A Natural Response Chatbot for Drug Classification and Information (LLM)",
    "Optimization for Medical Inventry",
  ];
  return (
    <div>
    <Header topics={topics} />
    </div>
  );
};

export default HealthCare;
