import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const DemoModal = ({ setIsModalOpen }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-[90%] max-w-lg rounded-lg shadow-lg overflow-hidden">
        {/* Header Section */}
        <div className="relative bg-gradient-to-r from-[#e28743] to-[#108dc7] p-6 text-white">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Request a Demo</h2>
            <button
              className="text-white hover:text-red-400 text-2xl"
              onClick={() => setIsModalOpen(false)}
            >
              <AiOutlineClose />
            </button>
          </div>
        </div>

        {/* Form Section */}
        <div className="p-6 space-y-4">
          <form className="space-y-6">
            {/* Name */}
            <div>
              <input
                type="text"
                name="name"
                className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Name"
              />
            </div>

            {/* Company/Institute */}
            <div>
              <input
                type="text"
                name="lastName"
                className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Company/Institute"
              />
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Email ID"
              />
            </div>

            {/* Contact No */}
            <div>
              <input
                type="tel"
                name="phone"
                className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Contact No."
              />
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Message"
                rows="1"
              ></textarea>
            </div>

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
