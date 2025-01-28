import React from "react";
import Slider from "react-slick";
import thirdVideo from "../../assets/videos/thirdVideo.mp4";
import secondVideo from "../../assets/videos/secondVideo.mp4";
import firstVideo from "../../assets/videos/firstVideo.mp4";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const VideoCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="overflow-hidden ">
      <Slider {...settings}>
        <div className="relative">
          <video
            className="w-full h-auto"
            muted
            loop
            autoPlay
            preload="metadata"
          >
            <source src={firstVideo} type="video/mp4" />
          </video>
          <div className=" absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center">
            <div className="md:mb-64">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 ">
                Transform Data into Results: Your AI Advantage Starts Here.
              </h1>
              <p className="text-lg md:text-xl">
                Start your AI journey with tailored solutions to drive growth
                and innovation.
              </p>
            </div>
          </div>
        </div>
        <div className="relative">
          <video
            className="w-full h-auto"
            muted
            loop
            autoPlay
            preload="metadata"
          >
            <source src={secondVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center">
            <div className="md:mb-52">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Your AI Transformation Partner
              </h1>
              <p className="text-lg md:text-xl">
                {" "}
                Partner with us to unlock the true value of AI and scale your
                business like never before.
              </p>
            </div>
          </div>
        </div>
        <div className="relative">
          <video
            className="w-auto h-full"
            muted
            loop
            autoPlay
            preload="metadata"
          >
            <source src={thirdVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center">
            <div className="md:mb-64">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Maximize ROI with Smarter AI
              </h1>
              <p className="text-lg md:text-xl">
                Leverage intelligent AI strategies to boost your efficiency and
                profitability.
              </p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default VideoCarousel;
