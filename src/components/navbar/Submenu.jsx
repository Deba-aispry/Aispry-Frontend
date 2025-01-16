import React from "react";

const Submenu = ({ items }) => {
  return (
    <div className="absolute  left-0  w-72 bg-gradient-to-r from-[#108dc7] to-[#ef8e38] rounded-md shadow-lg z-10">
      <ul className="py-2">
        {items.map((item, index) => (
          <li
            key={index}
            className="px-6 py-3 text-md text-white cursor-pointer hover:text-md hover:scale-105 transition-all duration-300 transform"
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Submenu;
