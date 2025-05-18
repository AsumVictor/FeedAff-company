import React, { useState } from "react";
import Navbar from "./Navbar";
import HeroContent from "./HeroContent";
import NavDots from "./NavDots";
import SlideIndicator from "./SlideIndicator";

const Hero: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const totalSlides = 3;

  const handleDotClick = (index: number) => {
    setActiveSlide(index + 1);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden ">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden hero-bg bg-white">
        <div
          className="absolute inset-0 bg-cover bg-center  rounded-2xl"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg?auto=compress&cs=tinysrgb&w=1600)",
            backgroundPosition: "center 30%",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a3c1e]/80 to-[#1a3c1e]/60 rounded-2xl"></div>
        <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full">
        <div className="container mx-auto px-4 md:px-8 h-full flex items-center">
          <HeroContent />
        </div>
      </div>

      {/* Navigation Dots */}
      <NavDots
        total={totalSlides}
        active={activeSlide - 1}
        onDotClick={handleDotClick}
      />

      {/* Slide Indicator */}
      <SlideIndicator current={activeSlide} total={totalSlides} />
    </section>
  );
};

export default Hero;
