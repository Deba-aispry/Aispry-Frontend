import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Carousel from "react-multi-carousel";
import { sectorCarouselData } from "../utility/sectorCarouselData";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

// Variants for advanced animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Staggered animation for children
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: -100, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

const paragraphVariants = {
  hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const CarouselComponent = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-16 mx-auto">
      <motion.div
        className="w-full md:max-w-3xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 1 }}
      >
        <motion.h1
          className="text-5xl font-semibold text-white text-center"
          variants={headerVariants}
        >
          AI Solutions
        </motion.h1>
        <motion.p
          className="text-white py-4 text-center md:text-xl font-semibold md:text-center mx-4"
          variants={paragraphVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
        >
          Redefine the way you do business with our cutting-edge AI Solutions.
          From revolutionizing customer experiences to unlocking the power of
          predictive insights, we help you innovate and lead in a competitive
          world.
        </motion.p>
      </motion.div>

      <div className="carousel-container my-12">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          showDots={true}
          arrows={true}
          itemClass="carousel-item-padding"
        >
          {sectorCarouselData.map((card, index) => (
            <div
              key={card.id}
              className="carousel-card px-4 py-4 bg-[#0c0c24] mx-4 mb-12 rounded-lg shadow-lg flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, delay: index * 0.2 },
              }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <div className="text-white mb-4 font-semibold text-xl">
                {card.title}
              </div>
              <img
                src={card?.image}
                alt={card.heading}
                className="card-image w-full h-64 object-cover rounded-xl hover:scale-105 transition-all transform"
                loading="lazy"
              />
              <div className="p-4 mt-4 flex flex-col justify-between text-center">
                <h3 className="card-heading text-2xl font-bold text-gray-800 mb-4">
                  {card.heading}
                </h3>
                <p className="card-description text-white text-md leading-relaxed h-28 overflow-hidden">
                  {card.description}
                </p>
                <button
                  onClick={() => navigate(card?.path)}
                  className=" px-6 py-2 mt-2 bg-[#f48220] text-white rounded-full hover:bg-orange-500"
                >
                  See More
                </button>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselComponent;
