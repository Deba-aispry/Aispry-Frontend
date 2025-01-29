import React from "react";

import CarouselComponent from "./Carousel";
// import Testimonial20 from "../testimonials/Testimonial20";
import HowWeWorks from "../howWeWorks/HowWeWorks";
import Awards from "./Awards";

import AiInActions from "./AiInActions";
import VideoCarousel from "./VideoCarousel";
import Achievements from "./Achievements";

const HomeIndex = () => {
  return (
    <>
      <VideoCarousel />
      <AiInActions />
      <CarouselComponent />
      <HowWeWorks />
      <Achievements />
      {/* <Testimonial20 /> */}
      <Awards />
    </>
  );
};

export default HomeIndex;
