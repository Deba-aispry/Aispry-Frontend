import React from "react";

const Header = ({ topics, onTopicClick, selectedTopic }) => {
  return (
    <div className="bg-[#0066b1] sticky top-28 z-30 overflow-auto ">
      <div className="flex max-w-6xl space-x-4 p-2 mx-auto  whitespace-nowrap md:whitespace-normal">
        {topics.map((topic, index) => (
          <div
            key={index}
            onClick={() => onTopicClick(topic)}
            className={`relative flex items-center md:text-md font-medium py-2 px-4 cursor-pointer border-r border-gray-300 last:border-none
              ${selectedTopic === topic ? "text-orange-500" : "text-white"} 
              hover:text-orange-500`}
          >
            <div>{topic}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
