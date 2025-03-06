import React from "react";

const IdeaCard = ({ title, description, tags, difficulty }) => {
  const CARD_HEIGHT = 250; // Set your desired fixed height

  return (
    <div className="bg-[#202127] text-white p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-95 hover:shadow-lg flex flex-col relative overflow-hidden" style={{ height: `${CARD_HEIGHT}px` }}> {/* Added fixed height */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1B1B1F] to-[#1B1B1F]/50 transition duration-300 group-hover:opacity-100 opacity-0"></div>
      <div className="relative z-10 flex flex-col h-full"> {/* Added flex flex-col h-full here */}
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 mb-3 text-sm line-clamp-3 overflow-hidden grow">{description}</p> {/* Added grow to description */}
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <span key={index} className="bg-gray-700 text-white text-xs px-3 py-1 rounded-full transition duration-300 hover:bg-gray-600">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto flex justify-between items-center"> {/* mt-auto keeps the button at the bottom */}
          <span className="text-sm font-medium text-blue-400">{difficulty}</span>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-600 transition duration-300">
            View Idea
          </button>
        </div>
      </div>
    </div>
  );
};

export default IdeaCard;