import React from "react";
import TestimonialItem from "./TestimonialItem";

const TestimonialList = ({ testimonials }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
    {testimonials.map((item, i) => (
      <TestimonialItem key={i} item={item} />
    ))}
  </div>
);


export default TestimonialList;
