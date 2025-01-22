import React from "react";
import { Link } from "react-router-dom";

const Submenu = ({ items }) => {
  return (
    <div className="absolute left-0 w-72 bg-gray-100 rounded-lg shadow-md z-10">
      <ul className="py-2">
        {items.map((item, index) => (
          <li key={index}>
            <Link
              to={item?.path}
              className="block px-6 py-3 text-md font-medium  hover:text-[#f48220] 
              transition-all duration-300 ease-in-out rounded-md"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Submenu;
