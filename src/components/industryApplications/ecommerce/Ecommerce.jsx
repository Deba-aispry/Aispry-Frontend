import React, { useEffect, useState } from "react";
import Header from "../projectHeader/Header";
import InventryAI from "./topicDetails/InventryAI";
import StoreBills from "./topicDetails/StoreBills";

const Ecommerce = () => {
  const topics = ["Inventory AI", "Text Extraction from Store Bills"];

  const topicComponents = {
    "Inventory AI": <InventryAI />,
    "Text Extraction from Store Bills": <StoreBills />,
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

export default Ecommerce;
