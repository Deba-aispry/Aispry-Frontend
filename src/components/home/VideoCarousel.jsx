import React from 'react';
import Slider from 'react-slick';
import videoabc from "../../assets/videos/video1.mp4";
import secondVideo from "../../assets/videos/video2.mp4";
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
    <div className='overflow-hidden'>
    <Slider {...settings}>
      <div>
        <video width="100%" muted loop autoPlay>
          <source src={videoabc} type="video/mp4" />
        </video>
      </div>
      <div>
        <video width="100%" muted loop autoPlay>
          <source src={secondVideo} type="video/mp4" />
        </video>
      </div>
      <div>
        <video width="100%" muted loop autoPlay>
          <source src={videoabc} type="video/mp4" />
        </video>
      </div>
    </Slider>
    </div>
  );
};

export default VideoCarousel;
