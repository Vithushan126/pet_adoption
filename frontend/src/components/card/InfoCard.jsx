import React from "react";

const InfoCard = ({ imageSrc, title, altText }) => {
  return (
    <div className="relative group overflow-hidden  shadow-lg">
      <img
        src={imageSrc}
        alt={altText}
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
        <h3 className="text-white text-xl md:text-2xl font-bold mb-2">
          {title}
        </h3>
        <div className="h-1 w-16 bg-pink-500 mb-4" />
        <button className="text-white text-xl uppercase tracking-wider hover:text-pink-600 transition-colors hover:scale-125 transition-transform duration-300 font-semibold cursor-pointer">
          More Info
        </button>
      </div>
    </div>
  );
};

export default InfoCard;
