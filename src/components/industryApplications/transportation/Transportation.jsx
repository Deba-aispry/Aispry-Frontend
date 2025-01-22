import React from "react";
import Header from "../projectHeader/Header";

const Transportation = () => {
  const topics = [
    "Pallet Damage AI",
    "Pallet Damage Classification",
    "Pallet Counting",
    "Wooden Pallet Forecasting",
  ];
  return (
    <div>
      <Header topics={topics} />
    </div>
  );
};

export default Transportation;
