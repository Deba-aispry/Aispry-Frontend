import { useState } from "react";
import DemoModal from "./DemoModal";

const FreeAIDemoButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <button
      onClick={handleButtonClick}
      className="relative inline-flex h-12 w-48 overflow-hidden rounded-full p-[3px] bg-transparent"
    >
      {/* Animated Border */}
      <span
        className="absolute inset-[-150%] animate-[spin_3s_linear_infinite] 
                   bg-[conic-gradient(from_90deg_at_50%_50%,#EF8E38_0%,#108DC7_50%,#EF8E38_100%)]"
      />

      {/* Inner Content (Covers the Background) */}
      <span
        className="relative inline-flex h-full w-full items-center justify-center 
                   rounded-full bg-white text-lg font-semibold text-gray-800 
                   backdrop-blur-3xl"
      >
        Book a Free AI Demo
      </span>

      {isModalOpen && <DemoModal setIsModalOpen={setIsModalOpen} />}
    </button>
  );
};

export default FreeAIDemoButton;
