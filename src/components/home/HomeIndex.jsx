import React from "react";
import Banner from "./Banner";
import CarouselComponent from "./Carousel";
import MultiRowCarousel from "./MultiRowCarousel";

import digital from "../assets/homePage/digital.webp";

const HomeIndex = () => {
  return (
    <>
      <Banner />
      <CarouselComponent />
      <section className="mt-16 ">
        <div>
          <h1 className="text-2xl md:text-2xl text-red-500 font-semibold text-center">
            Pushing Digital Boundaries
          </h1>
          <p className="text-gray-600 py-4 md:w-1/3 mx-auto">
            Beyond borders, beyond conventions; we redefine the digital horizon.
            Melding traditional wisdom with modern technology, we lead the AI
            evolution.
          </p>
        </div>
      </section>
      <div className="flex w-4/5 mx-auto  mt-8 flex-wrap">
        <img
          src={digital}
          alt="DigitalImage"
          className="w-auto object-contain h-96 m-auto shadow-md"
        />

        <div className="w-1/2">
          <MultiRowCarousel />
        </div>
      </div>
    </>
  );
};

export default HomeIndex;
