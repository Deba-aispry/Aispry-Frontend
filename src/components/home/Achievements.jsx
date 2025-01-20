import React from "react";

const Achievements = () => {
  return (
    <div className="flex flex-col md:flex-row items-start text-white max-w-6xl mx-auto border-b-2 border-gray-800 pb-8">
      {/* Heading Section */}
      <div className="md:w-1/4 m-auto">
        <h2 className="text-3xl font-semibold">Our Achievements</h2>
      </div>

      {/* Achievements Section */}
      <div className="md:w-3/4 grid grid-cols-1 md:grid-cols-3">
        {/* First Row */}
        <div className="text-center border-r-2 mb-10">
          <h3 className="text-5xl font-bold mb-3">170+</h3>
          <span className="text-xl">Digital Projects</span>
        </div>
        <div className="text-center border-r-2 mb-10">
          <h3 className="text-5xl font-bold mb-3">100+</h3>
          <span className="text-xl">Delighted Customers</span>
        </div>
        <div className="text-center border-r-2 mb-10">
          <h3 className="text-5xl font-bold mb-3">5+</h3>
          <span className="text-xl">Global Locations</span>
        </div>

        {/* Second Row */}
        <div className="text-center border-r-2">
          <h3 className="text-5xl font-bold mb-3">350+</h3>
          <span className="text-xl">Domain Specialists</span>
        </div>
        <div className="text-center border-r-2">
          <h3 className="text-5xl font-bold mb-3">50+</h3>
          <span className="text-xl">Advanced Services</span>
        </div>
        <div className="text-center">
          <h3 className="text-5xl font-bold mb-3">55+</h3>
          <span className="text-xl">Managed Services Contracts</span>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
