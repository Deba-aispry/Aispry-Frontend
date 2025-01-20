import React from "react";
import Rating from "./Rating";

const TestimonialItem = ({ item }) => {
  const { photo, name, rating, content } = item;

  return (
    <div className="testimonial-item bg-[#6486f0] bg-opacity-35 shadow-lg rounded-xl p-6 transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
      <Rating rating={rating} />
      <p className="text-white mt-4 mb-6">{content}</p>
      <div className="flex items-center">
        <img
          src={photo}
          alt={name}
          className="w-12 h-12 rounded-full border border-gray-300 dark:border-gray-700 mr-4 hover:scale-110 transition-transform duration-300"
        />
        <h5 className="font-bold text-lg hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">
          {name}
        </h5>
      </div>
    </div>
  );
};

export default TestimonialItem;
