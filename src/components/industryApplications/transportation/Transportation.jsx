import React, { useEffect, useState } from "react";
import Header from "../projectHeader/Header";
import PalletDamage from "./topicDetails/PalletDamage";
import ClassificationPallet from "./topicDetails/ClassificationPallet";
import PalletCounting from "./topicDetails/PalletCounting";
import WoodenPallet from "./topicDetails/WoodenPallet";
import Volvo from "./topicDetails/Volvo";

const Transportation = () => {
  const topics = [
    "Pallet Damage AI",
    "Pallet Damage Classification",
    "Pallet Counting",
    "Wooden Pallet Forecasting",
    "Volvo"
  ];

  const topicComponents = {
    "Pallet Damage AI": <PalletDamage />,
    "Pallet Damage Classification": <ClassificationPallet />,
    "Pallet Counting": <PalletCounting />,
    "Wooden Pallet Forecasting": <WoodenPallet />,
    "Volvo": <Volvo />
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
    </div>
  );
};

export default Transportation;
