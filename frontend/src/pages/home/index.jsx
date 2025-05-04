import React from "react";
import Hero from "./Hero";

import PetDisplaySlider from "./PetDisplaySlider";
import QualityAndExperince from "./QualityAndExperince";

const Home = () => {
  return (
    <div div className="flex flex-col space-y-20">
      <Hero />
      <QualityAndExperince />
      <PetDisplaySlider />
    </div>
  );
};

export default Home;
