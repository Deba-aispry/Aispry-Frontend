import React, { useState } from "react";
import { motion } from "framer-motion";
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
  ];

  const headingAnimation = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const paragraphAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4 } },
  };

  return (
    <section
      className="testimonial-section bg-[#487cec] text-white py-14 md:py-24 mt-20 px-4"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="w-full md:w-2/3 lg:max-w-lg mx-auto">
          <motion.h2
            className="text-5xl font-semibold mb-4 mx-auto  ml-4"
            variants={headingAnimation}
            initial="hidden"
            whileInView="visible" 
            viewport={{ once: false, amount: 0.5 }}
          >
            What Our Clients Say
          </motion.h2>
        </div>
        <motion.p
          className="text-xl font-semibold md:w-2/3 mx-auto text-center"
          variants={paragraphAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }} 
        >
          Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam
          maiores, illum at, aliquid blanditiis eligendi qui.
        </motion.p>
        <TestimonialList testimonials={testimonialList[index]} />
      </div>
    </section>
  );
};

export default Testimonial20;
