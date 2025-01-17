import React, { useState } from "react";
import DemoModal from "./DemoModal";

import { IoChatboxEllipsesOutline } from "react-icons/io5";

const SupportButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div
        className={`transition-all duration-300 flex items-center  ${
          isHovered ? "w-48" : "w-12 px-2"
        } h-12 bg-gradient-to-r from-[#ef8e38] to-[#108dc7] text-white rounded-full cursor-pointer`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsModalOpen(true)}
      >
        <div className="flex items-center justify-center w-12 h-12 rounded-full">
          <IoChatboxEllipsesOutline className="text-2xl ml-1" />
        </div>
        <div
          className={`whitespace-nowrap overflow-hidden ${
            isHovered ? "visible opacity-100" : "invisible opacity-0"
          } transition-opacity duration-300`}
        >
          <span className="font-semibold text-md">Request a Demo</span>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && <DemoModal setIsModalOpen={setIsModalOpen} />}
    </div>
  );
};

export default SupportButton;
