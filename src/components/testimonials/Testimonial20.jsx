import React, { useState } from "react";
// import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import TestimonialList from "./TestimonialList";

const Testimonial20 = () => {
  const [index, setIndex] = useState(0);

  const testimonialList = [
    [
      {
        photo:
          "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg",
        name: "Akshay Kumar",
        rating: 3.5,
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        photo:
          "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_2.jpeg",
        name: "Raima Sen",
        rating: 5,
        content:
          "Delectus magni tempore provident? Quaerat, dicta saepe praesentium eaque nobis.",
      },
      {
        photo:
          "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_3.jpeg",
        name: "Arjun Kapur",
        rating: 4.5,
        content:
          "Illum at aliquid blanditiis eligendi qui distinctio nihil dicta sapiente.",
      },
    ],
    [
      {
        photo:
          "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg",
        name: "Akshay Kumar",
        rating: 3.5,
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        photo:
          "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_2.jpeg",
        name: "Raima Sen",
        rating: 5,
        content:
          "Delectus magni tempore provident? Quaerat, dicta saepe praesentium eaque nobis.",
      },
      {
        photo:
          "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_3.jpeg",
        name: "Arjun Kapur",
        rating: 1.5,
        content:
          "Illum at aliquid blanditiis eligendi qui distinctio nihil dicta sapiente.",
      },
    ],
  ];

  //   const handleControl = (type) => {
  //     setIndex(
  //       type === "prev"
  //         ? index === 0
  //           ? testimonialList.length - 1
  //           : index - 1
  //         : (index + 1) % testimonialList.length
  //     );
  //   };

  return (
    <section className="testimonial-section bg-[#487cec] bg-opacity-90 text-white dark:text-white py-14 md:py-24 mt-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="w-full md:w-2/3 lg:max-w-lg mx-auto">
          <h2 className="text-5xl font-semibold md:text-4xl mb-4 mx-auto md:ml-24 ml-4">
            What Our Clients Say
          </h2>
        </div>
        <p className="text-lg md:w-2/3 mx-auto text-center">
          Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam
          maiores, illum at, aliquid blanditiis eligendi qui.
        </p>
        <TestimonialList testimonials={testimonialList[index]} />
      </div>
    </section>
  );
};

export default Testimonial20;
