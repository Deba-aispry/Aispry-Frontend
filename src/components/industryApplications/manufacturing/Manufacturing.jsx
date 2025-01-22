import React from "react";
import Header from "../projectHeader/Header";

const Manufacturing = () => {
  const topics = [
    "Forecasting Inventory of Steel Rods",
    "Machine Failure with ML",
    "Cement Manufacturing Automation",
    "Optimization of Machine Downtime",
    "BBS Extraction",
    "Wind Turbine Failure",
  ];

  return <Header topics={topics} />;
};

export default Manufacturing;
