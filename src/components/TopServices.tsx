import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { BottomLeftMask, TopRightMask } from "./mask";
import { ExternalIcon } from "./icons";
import harvest from '../assets/images/vegetables loop.jpg'
import fert from '../assets/images/fertilizer.jpg'
import delivery from '../assets/images/devivery.webp'



interface Service {
  category: string;
  title: string;
  description: string;
  image: string;
}

const services: Service[] = [
  {
    category: "POST-HARVEST LOSES",
    title: "Harvest Concepts",
    description:
      "To minimize post-harvest losses experience by local farmers and preserve nutrients, we offer a pre-order service.",
    image: harvest,
  },
  {
    category: "YOUR DOORSTEP",
    title: "Market Availability",
    description:
      "To help low-income farmers access the market, we do these by featuring their produce on our platform.",
    image: delivery,
  },
  {
    category: "FERTILIZER",
    title: "Soil Fertilization",
    description:
      "To protect the environment and boost the yield of low-income farmers, we produce high-quality organic fertilizers.",
    image: fert,
  },
];

const TopServices: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section className="py-20 bg-[#1a3c1e] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0opacity-10" />

      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-xs font-semibold text-white mb-4">
              Our Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Best Agriculture Services
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              aria-label="Previous slide"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              aria-label="Next slide"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative rounded-3xl p-6 group cursor-pointer transform transition-transform duration-300 hover:-translate-y-2 "
            >
              <div className="z-[10]">
                {/* Image */}
                <div className="rounded-2xl overflow-hidden mb-6 z-[5]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover"
                  />
                </div>

                {/* Content */}
                <div className="space-y-4 z-[5]">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                    <span className="text-sm font-semibold text-yellow-400">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#1a3c1e]">
                    {service.title}
                  </h3>

                  <p className="text-gray-600">{service.description}</p>

                  <div className="flex justify-end">
                    <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center transition-colors">
                      <ExternalIcon />
                    </div>
                  </div>
                </div>
              </div>

{/* // Overlay */}
              <div className="z-[-1] h-full w-full absolute top-0 left-0 ">
                <div className=" rounded-2xl w-full relative h-full bg-white flex justify-end items-end">
                  {/* // main container */}
                  <div className=" bg-[#1a3c1e] h-[2.5cm] w-[2.5cm] rounded-tl-2xl relative">
                    <BottomLeftMask
                      className=" absolute bottom-0 -left-[30px]"
                      primaryColor="#1a3c1e"
                      secondaryColor="#1a3c1e"
                    />

                    <TopRightMask
                      className=" absolute -top-[30px] -right-[2px]"
                      primaryColor="#1a3c1e"
                      secondaryColor="#1a3c1e"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopServices;
