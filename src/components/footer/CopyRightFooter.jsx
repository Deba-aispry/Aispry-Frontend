import React from "react";
import microsoft from "../../assets/footer/microsoft.png";
import rapidminer from "../../assets/footer/rapidminer.jpg";
import futureSkill from "../../assets/footer/futureskills.png";
import tcsIon from "../../assets/footer/tcsIon.png";

const CopyRigthFooter = () => {
  return (
    <div className="py-4 bg-slate-200">
      {/* Image Row */}
      <div className="flex justify-center items-center space-x-6 mb-4">
        <img
          src={microsoft}
          alt="Microsoft"
          className="h-auto w-24 px-2 py-1 bg-white object-contain"
        />
        <img
          src={rapidminer}
          alt="RapidMiner"
          className="h-auto w-24 object-contain  px-2 py-1 bg-white "
        />

        <img
          src={futureSkill}
          alt="Future Skills"
          className="h-auto w-16 object-contain  px-2 py-1 bg-white "
        />
        <img
          src={tcsIon}
          alt="TCS Ion"
          className="h-auto w-20 object-contain  px-2 py-1 bg-white "
        />
      </div>
      {/* Copyright Text */}
      <div className="text-center text-gray-500 text-sm font-semibold">
        © {new Date().getFullYear()} AiSPRY. All rights reserved.
      </div>
    </div>
  );
};

export default CopyRigthFooter;
