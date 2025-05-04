import React from "react";
import BagroundWhite from "../../assets/BagroundWhite.jpg";
import Dog from "../../assets/Dog.jpg";
import Button from "../button";

const Card = ({ pet }) => {
  console.log("pet", pet);

  const moodStyles = {
    Happy: "bg-green-200 text-green-800 animate-bounce",
    Sad: "bg-blue-200 text-blue-800 animate-pulse",
    Excited: "bg-yellow-200 text-yellow-800 animate-bounce",
  };

  return (
    <div
      className="flex flex-col bg-cover h-full w-full px-4 md:px-6 py-2 md:py-4 space-y-4 "
      style={{
        backgroundImage: `url(${BagroundWhite})`,
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="flex flex-col md:flex-row space-y-2 md:space-x-4 items-center justify-center h-full md:h-48 overflow-hidden ">
        <div className="w-full md:w-1/2 h-full overflow-hidden">
          <img
            src={Dog}
            alt={pet.name}
            className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-110"
          />
        </div>

        <div className="w-full md:w-1/2 h-full flex flex-col  space-y-4 pt-6 text-text-color">
          <h5 className="font-bold text-2xl cursor-pointer hover:text-main-color">
            {pet?.name}
          </h5>
          <div className="">
            <div className="border-b-1 border-dashed border-gray-400 pb-2 text-lg">
              <strong>Species:</strong>
              {pet?.species}
            </div>
            <div className="border-b-1 border-dashed border-gray-400 pb-2 text-lg ">
              <strong>Age:</strong> {pet.age} years
            </div>
            <div className="border-b-1 border-dashed border-gray-400 pb-2 text-lg gap-2 space-x-2">
              <strong>personality:</strong>
              {pet?.personality}
            </div>
          </div>
        </div>
      </div>

      {/* Mood & Adopted Section */}
      <div className="flex items-center justify-center space-x-4 bg-white py-2">
        {/* Adopted Badge */}
        {/* {pet?.adopted && ( */}
        <span
          className={` px-4 py-1 rounded-full font-semibold shadow-md  ${
            pet?.adopted
              ? "bg-green-500 text-white "
              : "bg-yellow-300 text-gray-700 animate-pulse"
          }`}
        >
          {pet?.adopted ? "🏠 Adopted" : "❌ Not Adopted"}
        </span>
        {/* )} */}

        {/* Mood Badge */}
        {pet?.mood && (
          <span
            className={`px-4 py-1 rounded-full font-semibold shadow-md ${
              moodStyles[pet.mood] || "bg-gray-200 text-gray-800"
            }`}
          >
            Mood: {pet.mood}
          </span>
        )}
      </div>
      <div className=" flex items-center justify-center">
        <Button className="text-nowrap">MORE INFO</Button>
      </div>
    </div>
  );
};

export default Card;
