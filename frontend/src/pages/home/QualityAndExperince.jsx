import React from "react";
import Button from "../../components/button";
import InfoCard from "../../components/card/InfoCard";
import OurService from "../../assets/Service.jpg";
import AboutUs from "../../assets/AboutUs.jpg";
import OurTeam from "../../assets/OurTeam.jpg";

const cardData = [
  {
    imageSrc: OurService,
    title: "Our Services",
    altText: "Pet grooming service",
  },
  {
    imageSrc: AboutUs,
    title: "About Us",
    altText: "Cat close-up",
  },
  {
    imageSrc: OurTeam,
    title: "Our Team",
    altText: "Veterinarian with pets",
  },
];

const QualityAndExperince = () => {
  return (
    <section className="w-full  bg-gray-50  relative overflow-hidden py-8 flex flex-col  space-y-8 lg:space-y-0  md:justify-center md:items-center">
      <div className="md:h-1/2 container mx-auto px-4 md:px-8 lg:px-16 relative z-10 flex items-center justify-center ">
        <div className="w-full flex flex-col lg:flex-row">
          <div className="w-full lg:w-2/3 ">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Quality & Experience
            </h2>

            <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
              At the Virtual Pet Adoption Center, we prioritize a seamless and
              joyful experience for every adopter. Our user-friendly interface,
              responsive design, and modern features ensure hassle-free browsing
              and adoption. With a commitment to quality and compassion, we
              connect loving homes with deserving pets in a meaningful way.
            </p>
          </div>
          <div className="w-full md:w-1/3 flex justify-center items-center  ">
            <Button className="mt-8 md:mt-0 bg-pink-600 text-white px-20 py-3 rounded-full font-medium hover:bg-pink-700 transition text-nowrap">
              Contact US
            </Button>
          </div>
        </div>
      </div>

      {/* Experience Cards */}
      <div className="md:h-1/2 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
          {cardData.map((card, index) => (
            <InfoCard
              key={index}
              imageSrc={card.imageSrc}
              title={card.title}
              altText={card.altText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(QualityAndExperince);
