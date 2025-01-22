import React from 'react'
import { Tooltip } from 'react-tooltip'

const Header = ({topics}) => {
  return (
    <div className="bg-[#0066b1] ">
      {/* <div className='overflow-x-auto'> */}
    <div className="flex  max-w-6xl space-x-4 p-2  mx-auto">
      {topics.map((topic, index) => (
        <div
          key={index}
          className="relative flex  items-center  text-white text-md font-medium py-2 px-4 cursor-pointer border-r border-gray-300 hover:text-orange-500 last:border-none"
        >
          <div
            data-tooltip-id={`tooltip-${index}`}
            data-tooltip-content={topic}
          >
            {topic.length > 20 ? `${topic.slice(0, 18)}...` : topic}
          </div>
          <Tooltip
            id={`tooltip-${index}`}
            place="bottom-end"
            offset={{ bottom: 24 }}
            style={{
              marginTop: "32px",
              backgroundColor: "#2d3748",
              color: "#fff",
              fontSize: "0.875rem",
              borderRadius: "0.5rem",
              padding: "0.5rem",
              whiteSpace: "wrap",
              zIndex: "50"
            }}
          />
        </div>
      ))}
    </div>
    {/* </div> */}
  </div>
  )
}

export default Header
