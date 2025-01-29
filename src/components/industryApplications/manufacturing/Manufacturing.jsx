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
    "Forecasting Inventory of Steel Rods",
    "Machine Failure with ML",
    "Cement Manufacturing Automation",
    "Optimization of Machine Downtime",
    "BBS Extraction",
    "Wind Turbine Failure",
  ];



  const topicComponents = {
    "Forecasting Inventory of Steel Rods": <ForecastingInventry />,
    "Machine Failure with ML": <MachineFailure />,
    "Cement Manufacturing Automation": <CementManufacture />,
    "Optimization of Machine Downtime": <Optimization />,
    "BBS Extraction": <BBSExtraction />,
    "Wind Turbine Failure": <WindTurbineFailure />,
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
      <div className="mt-20">
        {topicComponents[selectedTopic] || <p>No details available.</p>}
      </div>
      <ProjectInsights  onTopicClick={(topic) => setSelectedTopic(topic)} />
    </>
  );
};

export default Manufacturing;
