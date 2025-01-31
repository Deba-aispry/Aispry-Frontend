import React, { useEffect, useState } from "react";
import Header from "../projectHeader/Header";
import ForecastingInventry from "./topicDetails/ForecastingInventry";
import MachineFailure from "./topicDetails/MachineFailure";
import CementManufacture from "./topicDetails//CementManufacture";
import Optimization from "./topicDetails/Optimization";
import BBSExtraction from "./topicDetails/BBSExtraction";
import WindTurbineFailure from "./topicDetails/WindTurbineFailure";
import ProjectInsights from "./topicDetails/ProjectInsights";

const Manufacturing = () => {
  const topics = [
    "Inventory Forecasting",
    "Predictive Maintenance for Machines",
    "Smart Automation in Cement Production",
    "Minimizing Machine Downtime",
    "BBS Data Extraction",
    "Wind Turbine Failure Prediction",
  ];

  const topicComponents = {
    "Inventory Forecasting": <ForecastingInventry />,
    "Predictive Maintenance for Machines": <MachineFailure />,
    "Smart Automation in Cement Production": <CementManufacture />,
    "Minimizing Machine Downtime": <Optimization />,
    "BBS Data Extraction": <BBSExtraction />,
    "Wind Turbine Failure Prediction": <WindTurbineFailure />,
  };

  const [selectedTopic, setSelectedTopic] = useState(topics[0]);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [selectedTopic]);
  return (
    <>
      <Header
        topics={topics}
        onTopicClick={(topic) => setSelectedTopic(topic)}
        selectedTopic={selectedTopic}
      />
      <div className="md:mt-10">
        {topicComponents[selectedTopic] || <p>No details available.</p>}
      </div>
      <ProjectInsights onTopicClick={(topic) => setSelectedTopic(topic)} selectedTopic={selectedTopic} />
    </>
  );
};

export default Manufacturing;
