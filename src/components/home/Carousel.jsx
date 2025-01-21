import React from "react";
import Carousel from "react-multi-carousel";
import { sectorCarouselData } from "../utility/sectorCarouselData";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
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

const CarouselComponent = () => {
  const handleSeeMore = (id) => {
    // Implement functionality for the "See More" button (e.g., navigate to detail page)
    console.log(`See more clicked for card ID: ${id}`);
  };

  return (
    <div className="mt-16 container max-w-7xl mx-auto">
      <div className="w-full md:max-w-3xl mx-auto">
        <h1 className="text-5xl font-semibold text-white  text-center">
          AI Solutions
        </h1>
        <p className="text-white py-4 text-center md:text-lg md:text-center mx-4">
          Redefine the way you do business with our cutting-edge AI Solutions.
          From revolutionizing customer experiences to unlocking the power of
          predictive insights, we help you innovate and lead in a competitive
          world.
        </p>
      </div>
      <div className="carousel-container my-12">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          showDots={true}
          arrows={true}
          itemClass="carousel-item-padding"
        >
          {sectorCarouselData.map((card) => (
            <div
              key={card.id}
              className="carousel-card px-6 py-10 bg-[#0c0c24]  mx-4 mb-12 rounded-lg shadow-lg flex flex-col items-center"
            >
              <img
                src={card?.image}
                alt={card.heading}
                className="card-image w-full h-64 object-cover rounded-xl  hover:scale-105 transition-all transform "
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
                  onClick={() => handleSeeMore(card.id)}
                  className="see-more-btn mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
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
