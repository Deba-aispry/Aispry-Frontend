import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Rating = ({ rating }) => (
  <div className="rating flex space-x-1">
    {[...Array(5)].map((_, i) => {
      const index = i + 1;
      return (
        <span key={i} className="text-xl text-[#ef8e38]">
          {index <= Math.floor(rating) ? (
            <FaStar />
          ) : index <= rating ? (
            <FaStarHalfAlt />
          ) : (
            <FaRegStar />
          )}
        </span>
      );
    })}
  </div>
);

export default Rating;
