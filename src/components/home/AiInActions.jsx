import React from "react";
import bgImage from "../../assets/homePage/bgImage.webp";
import { aiInActionData } from "../utility/aiInActionData";

const AiInActions = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden">
      <img
        src={bgImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="absolute inset-0 bg-[#487cec] bg-opacity-90 z-10"></div>

      <div className="relative z-20 text-center mt-12 header-animation">
        <h1 className="text-5xl  text-white mb-4">AI In Actions</h1>
        <p className="text-white text-lg max-w-3xl mx-auto">
          Redefine the way you do business with our cutting-edge AI Solutions.
          From revolutionizing customer experiences to unlocking the power of
          predictive insights, we help you innovate and lead in a competitive
          world.
        </p>
      </div>

      {/* Cards Container */}
      <div className="relative z-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-6xl py-12">
        {aiInActionData.map((card) => (
          <div
            key={card.id}
            className="bg-[#6486f0] bg-opacity-35 text-white p-6 rounded-lg shadow-lg hover:transform hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-3xl font-semibold mb-8">{card.label}</h3>
            <p className="text-lg mb-6">{card.text}</p>

            <div className="mt-4 flex items-start">
              {/* Image */}
              <img
                src={card.image}
                alt="images"
                className="hover:scale-105 h-auto w-8 mr-3 flex-shrink-0"
              />

              {/* Text Container */}
              <div className="flex-1">
                <span className="font-semibold text-lg">{card.keyPoint} </span>
                <span className="text-md">{card.details}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AiInActions;
