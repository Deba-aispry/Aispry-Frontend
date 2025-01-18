import React, { useState, useRef, useEffect } from "react";
import equest from "../../assets/homePage/equest.png";
import llArrow from "../../assets/homePage/arrow-ktl.png";
import rlArrow from "../../assets/homePage/arrow-ktl-right.png";
import { aiTutorCharterData } from "../utility/aiTutorCharterData";

const AiTutorCharter = () => {
  const topics = [
    {
      label: "Broadly Distributed System",
      position: { left: "-10%", top: "5%" },
    },
    {
      label: "Data-Privacy & Security",
      position: { left: "-18%", top: "40%" },
    },
    { label: "Continuous Evolution", position: { left: "-25%", top: "75%" } },
    {
      label: "Innovative Pedagogical Insights",
      position: { right: "-10%", top: "5%" },
    },
    { label: "Empowering Educators", position: { right: "-17%", top: "40%" } },
    { label: "Collaborative Growth", position: { right: "-25%", top: "75%" } },
  ];

  const [activeIndex, setActiveIndex] = useState(0); 
  const [arrowHeight, setArrowHeight] = useState(null);
  const contentRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      setArrowHeight(contentRef.current.offsetTop); 
    }
  }, [activeIndex]);

  const handleClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div
      className="relative flex flex-col items-center justify-center my-10"
      ref={containerRef}
    >
      <h3 className="text-2xl font-semibold mb-8 text-red-500">
        AiTutor Charter
      </h3>

      {/* Topics and Image */}
      <div className="relative w-[400px] h-[400px]">
        <img
          src={equest}
          alt="Equest"
          className="absolute top-1/2 left-1/2 w-52 h-52 transform -translate-x-1/2 -translate-y-1/2"
        />

        {topics.map((topic, index) => {
          const [firstWord, ...restWords] = topic.label.split(" ");
          const restText = restWords.join(" ");

          return (
            <span
              key={index}
              onClick={() => handleClick(index)}
              style={topic.position}
              className={`absolute h-12 flex flex-col items-center justify-center transition cursor-pointer text-center hover:text-red-500 ${
                activeIndex === index ? "text-red-500" : "text-black"
              }`}
            >
              <span>{firstWord}</span>
              <span>{restText}</span>
            </span>
          );
        })}

        
        {activeIndex !== null && (
          <>
            {topics[activeIndex].position.left !== undefined && (
              <img
                src={llArrow}
                alt="Left Arrow"
                className="absolute"
                style={{
                  top: topics[activeIndex].position.top,
                  left: topics[activeIndex].position.left,
                  height: `calc(${arrowHeight || 0}px - ${
                    topics[activeIndex].position.top
                  })`,
                  transform: "translate(-150%, 7%)",
                }}
              />
            )}
            {topics[activeIndex].position.right !== undefined && (
              <img
                src={rlArrow}
                alt="Right Arrow"
                className="absolute"
                style={{
                  top: topics[activeIndex].position.top,
                  right: topics[activeIndex].position.right,
                  height: `calc(${arrowHeight || 0}px - ${
                    topics[activeIndex].position.top
                  })`,
                  transform: "translate(150%, 0)",
                }}
              />
            )}
          </>
        )}
      </div>

      {activeIndex !== null && aiTutorCharterData[activeIndex] && (
        <div
          ref={contentRef}
          className="mt-8 w-[45%] p-4 border rounded-md shadow-lg bg-white text-center"
        >
          <div className="flex text-start text-gray-600">
            <p className="ml-2">
              <span className="text-lg font-semibold">Objective: </span>
              {aiTutorCharterData[activeIndex].objective ||
                "Objective not provided."}
            </p>
          </div>
          <div className="flex text-start text-gray-600 mt-4">
            <p className="ml-2">
              <span className="text-lg font-semibold">Approach: </span>
              {aiTutorCharterData[activeIndex].approach ||
                "Approach not provided."}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AiTutorCharter;
