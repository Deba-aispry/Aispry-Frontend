import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const DemoModal = ({ setIsModalOpen }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50">
      <div className="bg-[#023e8a] w-[90%] max-w-md rounded-lg shadow-lg overflow-hidden">
        {/* Header Section */}
        <div className="relative p-6 text-white">
          <button
            className="absolute top-4 right-4 text-white hover:text-red-400 text-2xl"
            onClick={() => setIsModalOpen(false)}
          >
            <AiOutlineClose />
          </button>
          <div className="text-center mt-4">
            <h2 className="text-3xl font-semibold">
              Claim Your Free AI Consultation!
            </h2>
            <p className="mt-2 ">
              Our expert team is here to guide you through the possibilities and
              tailor solutions that fit your needs.
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-[#023e8a] px-4 pb-4">
          <form className="space-y-3">
            {/* Name */}
            <div>
              <input
                type="text"
                name="name"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Name*"
              />
            </div>

            {/* Company/Institute */}
            <div>
              <input
                type="text"
                name="lastName"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Company/Institute"
              />
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Email ID*"
              />
            </div>

            {/* Contact No */}
            <div>
              <input
                type="tel"
                name="phone"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Contact No.*"
              />
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Message"
                rows="2"
              ></textarea>
            </div>
            <p className="text-white">
              <span className="text-lg font-semibold text-[#ef8e38]"> No Obligation: </span>
              This consultation is completely free—no strings attached!
            </p>

            {/* Submit Button */}
            <div className="w-full">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-8 rounded-lg hover:from-purple-500 hover:to-pink-500 transition-all"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DemoModal;
