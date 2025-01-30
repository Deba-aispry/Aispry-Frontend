import React, { useEffect, useState } from "react";
import Header from "../projectHeader/Header";
import Embryo from "./topicDetails/Embryo";
import Oocyte from "./topicDetails/Oocyte";
import AutismDetection from "./topicDetails/AutismDetection";
import Pharmabot from "./topicDetails/Pharmabot";
import MedicalInventory from "./topicDetails/MedicalInventory";
import ProjectInsights from "./ProjectInsights";


const HealthCare = () => {
  const topics = [
    "Embryo Viability AI",
    "Oocyte Project",
    "Autism Detection",
    "PharmaBot - Drug Classification",
    "Optimization for Medical Inventry",
  ];

  const topicComponents = {
    "Embryo Viability AI": <Embryo />,
    "Oocyte Project": <Oocyte />,
    "Autism Detection": <AutismDetection />,
    "PharmaBot - Drug Classification": <Pharmabot />,
    "Optimization for Medical Inventry": <MedicalInventory />,
  };

  const [selectedTopic, setSelectedTopic] = useState(topics[0]);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [selectedTopic]);

  return (
    <div>
      <Header
        topics={topics}
        onTopicClick={(topic) => setSelectedTopic(topic)}
        selectedTopic={selectedTopic}
      />
      <div className="mt-20">
        {topicComponents[selectedTopic] || <p>No details available.</p>}
      </div>
      <ProjectInsights onTopicClick={(topic) => setSelectedTopic(topic)} />
    </div>
  );
};

export default HealthCare;
