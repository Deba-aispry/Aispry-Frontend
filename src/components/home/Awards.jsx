import React, { memo } from "react";
import { awardsData } from "../utility/awardsData";

const AwardCard = memo(({ imgSrc, title, description }) => (
  <div className="p-6 text-center">
    <img
      src={imgSrc}
      alt={title}
      className="w-full h-auto object-cover rounded-md mb-4"
      loading="lazy" 
    />
    <h4 className="text-lg font-semibold mb-2 text-gray-800">{title}</h4>
    <p className="text-gray-600">{description}</p>
  </div>
));

const Awards = () => {
  return (
    <div className="p-8 md:w-[75%] mx-auto">
      
      <h3 className="text-3xl font-semibold text-center mb-6 text-red-500">
        Awards & Accolades
      </h3>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {awardsData.map((award, index) => (
          <AwardCard
            key={index}
            imgSrc={award.imgSrc}
            title={award.title}
            description={award.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Awards;
