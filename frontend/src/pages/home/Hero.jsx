import Button from "../../components/button";
import HeroImage from "../../assets/hero_image.png";
import Baground from "../../assets/Baground.jpg";

const Hero = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-screen flex flex-col "
        style={{
          backgroundImage: `url(${Baground})`,
          backgroundBlendMode: "overlay",
        }}
      >
        {/* Content Container */}
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            WELCOME TO UNITED PETS
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            We offer the best services for your pets, contact us today and book
            a service
          </p>
          <Button className="">CONTACT US</Button>
        </div>

        <div className=" bottom-0  w-full">
          <div className="container mx-auto px-4">
            <img
              src={HeroImage}
              alt="Dog 1"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
