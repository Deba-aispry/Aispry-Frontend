import React, { useEffect, useState } from 'react'
import Header from '../projectHeader/Header';
import WindTurbineFailure from "../manufacturing/topicDetails/WindTurbineFailure"


const Energy = () => {
  const topics = ["Wind Turbine Failure"];
  const [selectedTopic, setSelectedTopic] = useState(topics[0]);
  const topicComponents = {
    "Wind Turbine Failure": <WindTurbineFailure />,
   
  };
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
  )
}

export default Energy
