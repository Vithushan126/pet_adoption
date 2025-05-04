import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "../../components/button";
import Baground from "../../assets/Dog.jpg";
import Card from "../../components/card/Card";
import { useDispatch, useSelector } from "react-redux";
import { GetAllPets } from "../../redux/features/petDetailsSlice";

export default function PetDisplaySlider() {
  const dispatch = useDispatch();
  const sliderRef = useRef(null);
  const { petDetails, loading, error, message } = useSelector(
    (state) => state.petDetails
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);

  // Fetch pet details
  useEffect(() => {
    dispatch(GetAllPets());
  }, [dispatch]);

  // Detect screen size
  useEffect(() => {
    const updateCardsPerView = () => {
      setCardsPerView(window.innerWidth >= 768 ? 2 : 1);
    };
    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const totalSlides = Math.ceil(petDetails?.length / cardsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1 >= totalSlides ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 < 0 ? totalSlides - 1 : prev - 1));
  };

  // Auto Slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [cardsPerView, petDetails]);

  const translateX = (currentIndex * 100) / totalSlides;

  return (
    <div
      className="flex flex-col items-center py-8 px-4 bg-black/50 text-white min-h-screen bg-cover"
      style={{
        backgroundImage: `url(${Baground})`,
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Header Section */}
      <div className="text-center mb-8">
        <p className="text-sm font-medium">FIND YOUR FRIEND</p>
        <h1 className="text-4xl font-bold mb-2">ADOPTION</h1>
        <div className="w-16 h-1 bg-blue-500 mx-auto mb-6" />
        <h2 className="text-2xl font-semibold mb-2">
          Adopting is an act of <span className="text-pink-500">love</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-4">
          Browse through our furry friends who are looking for a forever family.
          Each one has a story, and you could be their happy ending.
        </p>
        <p className="text-gray-400 text-sm max-w-3xl mx-auto">
          Whether you're looking for a playful puppy, a calm companion, or a
          cuddly kitten, our adoption center has a variety of pets ready to meet
          you.
        </p>
      </div>

      {/* Slider Section */}
      <div className="relative w-full max-w-6xl overflow-hidden">
        <div
          ref={sliderRef}
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${translateX}%)`,
            width: `${(petDetails?.length / cardsPerView) * 100}%`,
          }}
        >
          {petDetails?.map((pet) => (
            <div
              key={pet._id}
              className={`px-2`}
              style={{ width: `${100 / petDetails.length}%` }}
            >
              <Card pet={pet} />
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 text-main-color hover:text-button-color transition hover:scale-110"
          aria-label="Previous pets"
        >
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 text-main-color hover:text-button-color transition hover:scale-110"
          aria-label="Next pets"
        >
          <ChevronRight size={40} />
        </button>

        {/* Dots */}
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex ? "bg-blue-500 w-6" : "bg-gray-400"
              } transition-all duration-300`}
            />
          ))}
        </div>
      </div>

      {/* Gallery Button */}
      <Button className="mt-8 bg-pink-600 text-white px-8 py-3 rounded-full font-medium hover:bg-pink-700 transition">
        SEE ADOPTION GALLERY
      </Button>
    </div>
  );
}
