import React, { useState } from "react";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { motion } from "framer-motion";
import { IoArrowUpSharp, IoArrowDownSharp } from "react-icons/io5";
import { accordionData } from "../utility/accordianData";

const ResourceIndex = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className=" text-white p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-semibold text-center mb-10">
          📚 Research Papers we published
        </h1>
        <Accordion className="space-y-4">
          {accordionData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 75 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <AccordionItem
                header={
                  <div className="flex items-start justify-between text-lg font-semibold text-white py-2 ">
                    <span>
                      {activeIndex === index ? (
                        <IoArrowUpSharp className="text-xl mt-1" />
                      ) : (
                        <IoArrowDownSharp className="text-xl mt-1" />
                      )}
                    </span>
                    <h3 className="ml-4 hover:text-[#ef8e38] text-start ">{item.header}</h3>
                  </div>
                }
                className="rounded-lg overflow-hidden shadow-md"
                buttonProps={{
                  className:
                    "flex items-center justify-between w-full text-white py-2 px-4 rounded-lg",
                }}
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
              >
                <div className="px-12 mb-4 border-b border-gray-500 pb-3">
                  <p className="mb-2">{item.description}</p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-300 hover:text-[#ef8e38]"
                  >
                    Read more ↗
                  </a>
                </div>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default ResourceIndex;
