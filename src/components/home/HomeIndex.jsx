import React from "react";
import Banner from "./Banner";
import CarouselComponent from "./Carousel";
import MultiRowCarousel from "./MultiRowCarousel";
import AiTutorPhase from "./AiTutorPhase";
import AiTutorCharter from "./AiTutorCharter";
import AispryLearning from "./AispryLearning";
import Awards from "./Awards";

import digital from "../../assets/homePage/digital.webp";


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
          <p className="text-gray-600 py-4 md:w-2/5 mx-auto px-4 text-center">
            Beyond borders, beyond conventions; we redefine the digital horizon.
            Melding traditional wisdom with modern technology, we lead the AI
            evolution.
          </p>
        </div>
      </section>
      <div className="flex max-w-6xl mx-auto  mt-10 flex-wrap">
        <img
          src={digital}
          alt="DigitalImage"
          className="w-auto h-auto object-contain md:mr-10 md:h-96 shadow-md mt-8"
        />

        <div className="w-1/2">
          <MultiRowCarousel />
        </div>
      </div>
      <AiTutorPhase />
      <AiTutorCharter />
      <AispryLearning />
      <Awards />
    </>
  );
};

export default HomeIndex;
