import React from "react";
import homebanner from "../../assets/homePage/homebanner.webp";
import aiImage from "../../assets/homePage/aiImage.webp";
import mission from "../../assets/homePage/mission.png";
import vision from "../../assets/homePage/vision.png";
const Banner = () => {
  return (
    <>
      <div className="relative">
        {/* banner section */}
        <img
          src={homebanner}
          alt="homebanner"
          className="h-auto w-full object-cover"
          lazy="true"
        />

        <div className="absolute mt-5 md:mt-0 top-1/2 max-w-6xl px-4 md:px-0 transform -translate-y-1/2 text-white md:ml-44 flex flex-col text-left">
          <h1 className="text-xl md:text-5xl font-semibold">
            Unleashing the Future with AI
          </h1>
          <p className="text-sm md:text-lg md:py-4  py-2 mb-6">
            Transforming Industries with Advanced AI, ML, and Digital
            Innovations
          </p>
        </div>
      </div>
      <div className=" mx-auto py-10 px-4 ">
        <div className="max-w-6xl mx-auto  flex flex-col md:flex-row items-center  justify-between space-x-16 space-y-8 ">
          {/* Text Content */}
          <section className="flex-1 text-left">
            <h1 className="text-2xl md:text-2xl text-red-500 font-semibold mb-6">
              AiSPRY: Bridging Tradition and Tomorrow through AI
            </h1>
            <div className="space-y-6 text-gray-700">
              <p>
                Founded in 2018, AiSPRY stands at the nexus of tradition and AI
                innovation. Our mission is to integrate AI into business
                processes, driving efficiency, creativity, and transformation.
                We blend past wisdom with future potential to foster true
                innovation.
              </p>
              <p>
                Our AI solutions, tailored for healthcare, manufacturing, and
                finance, streamline operations, enhance security, and provide
                insightful data. Our dedication to digital transformation and
                pushing technological boundaries is evident in every solution we
                create.
              </p>
              <p>
                AiTutor, our revolutionary educational platform, epitomizes our
                commitment to transforming education through AI. It offers
                personalized learning experiences, improving outcomes and
                democratizing access to high-quality education. It embodies our
                vision of technology’s transformative power.
              </p>
              <p>
                Collaboration drives our success. Our alliance with 360DigiTMG
                fosters knowledge sharing and professional development.
                Together, we nurture emerging AI talent, ensuring the field’s
                continuous evolution and societal benefit.
              </p>
            </div>
          </section>

          {/* Image */}
          <div className="relative rounded-full custom-bg mr-10">
            <div className="wave-effect"></div>
            <div className="">
              <img
                src={aiImage}
                alt="ai-image"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>

      <section className=" max-w-6xl mx-auto py-4 px-8 rounded-lg shadow-lg my-8 bg-white ">
        <div className="flex flex-col md:flex-row items-center justify-between md:space-x-4 space-y-8 md:space-y-0">
          {/* Mission Section */}
          <div className="flex items-center flex-col md:flex-row space-x-4 md:w-[45%] w-full">
            <img
              src={mission}
              alt="Mission"
              className="w-20 h-full object-contain mr-2"
            />
            <p className="text-gray-700 text-md flex-1 my-4">
              <span className="font-semibold text-lg">Our Mission:</span> To set
              global standards in AI applications, forging a future where
              technology and tradition coalesce.
            </p>
          </div>

          {/* Vision Section */}
          <div className="flex items-center flex-col md:flex-row space-x-4 md:w-[45%] w-full">
            <img
              src={vision}
              alt="Vision"
              className="w-20 h-full object-contain mr-2"
            />
            <p className="text-gray-700 text-md my-4">
              <span className="font-semibold text-lg">Our Vision:</span> To set
              global standards in AI applications, forging a future where
              technology and tradition coalesce.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
