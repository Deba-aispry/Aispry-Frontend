import React, { useState } from "react";
import { IoChatboxEllipsesOutline } from "react-icons/io5";

import { AiOutlineClose } from "react-icons/ai";

const SupportButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      
      <div
        className={`transition-all duration-300 flex items-center  ${
          isHovered ? "w-48" : "w-12 px-2"
        } h-12 bg-gradient-to-r from-[#ef8e38] to-[#108dc7] text-white rounded-full cursor-pointer`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsModalOpen(true)}
      >
        <div className="flex items-center justify-center w-12 h-12 rounded-full">
          <IoChatboxEllipsesOutline className="text-2xl ml-1" />
        </div>
        <div
          className={`whitespace-nowrap overflow-hidden ${
            isHovered ? "visible opacity-100" : "invisible opacity-0"
          } transition-opacity duration-300`}
        >
          <span className="font-semibold text-md">Request a Demo</span>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white w-96 p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Request a Demo
              </h2>
              <button
                className="text-gray-600 hover:text-red-500"
                onClick={() => setIsModalOpen(false)}
              >
                <AiOutlineClose className="text-2xl" />
              </button>
            </div>
            <form>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Message"
                  rows="3"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded-lg hover:from-purple-500 hover:to-pink-500 transition-all"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SupportButton;
