import React from "react";
import { Fence, Tractor } from "lucide-react";
import Multibed from "../assets/images/multi-bed.jpg";

const WhoWeAre: React.FC = () => {
  return (
    <section className=" pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image and Stats */}
          <div className="relative">
            {/* Main Image */}
            <div className="rounded-3xl overflow-hidden">
              <img
                src={Multibed}
                alt="Farmer harvesting organic produce"
                className="w-full h-[600px] object-cover"
              />
            </div>

            {/* Stats Box */}
            <div className="absolute bottom-0 right-0 bg-white rounded-tl-[30px]">
              <div className="relative h-full w-full bg-yellow-primary p-6 rounded-tl-3xl">
                {/* // SVG TOP CONNERS */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="31"
                  height="31"
                  viewBox="0 0 31 31"
                  fill="none"
                  className=" absolute -top-[29px] -right-[1px]"
                >
                  <path
                    d="M30.5 30.1599V0.159912C30.5 16.1599 16.5 30.1599 0.5 30.1599H30.5Z"
                    fill="white"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="31"
                  height="31"
                  viewBox="0 0 31 31"
                  fill="none"
                  className=" absolute -top-[29px] -right-[1px]"
                >
                  <path
                    d="M30.5 30.1599V0.159912C30.5 16.1599 16.5 30.1599 0.5 30.1599H30.5Z"
                    fill="#eddc5e33"
                  />
                </svg>

                <div className="relative bg-yellow-400 rounded-xl p-6 ">
                  <div className="text-[#1a3c1e] flex gap-2">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 46 46"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_1_191)">
                        <path
                          d="M40.0977 7.09L45.4977 16.63L29.0727 22.75L45.4977 28.735L39.9627 38.68L26.3277 27.79L28.9827 45.25H17.8227L20.2527 27.79L6.48266 38.905L0.722656 28.735L17.0127 22.615L0.857656 16.63L6.21266 6.955L20.2527 17.71L17.7327 0.25H28.9827L26.3277 17.71L40.0977 7.09Z"
                          fill="#5B8C51"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_191">
                          <rect
                            width="44.78"
                            height="45"
                            fill="white"
                            transform="matrix(1 0 0 -1 0.719727 45.25)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <span className="text-5xl font-bold">435</span>
                    <span className="text-4xl font-bold">+</span>
                  </div>
                  <hr className=" border-[1px] border-FeedAff-green-900 bg-FeedAff-green-900" />
                  <p className="text-[#1a3c1e]/80 mt-2 font-medium">
                    Growth Tons' of Harvest
                  </p>
                </div>

                {/* BOTTOM LEFT CONNER */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="31"
                  height="31"
                  viewBox="0 0 31 31"
                  fill="none"
                  className=" absolute -bottom-[.5px] -left-[30px]"
                >
                  <path
                    d="M30.8799 30.75V0.75C30.8799 16.75 16.8799 30.75 0.879883 30.75H30.8799Z"
                    fill="white"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="31"
                  height="31"
                  viewBox="0 0 31 31"
                  fill="none"
                  className=" absolute -bottom-[.5px] -left-[30px]"
                >
                  <path
                    d="M30.8799 30.75V0.75C30.8799 16.75 16.8799 30.75 0.879883 30.75H30.8799Z"
                    fill="#eddc5e33"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:pl-12">
            {/* Section Label */}
            <div className="text-sm font-semibold text-[#1a3c1e]/80 mb-4 ">
              <span className="bg-yellow-400 px-3 py-1 rounded-2xl">
                Who We Are
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a3c1e] leading-tight mb-8">
              Currently we grow and sell organic food
            </h2>

            {/* Description */}
            <p className="text-gray-600 mb-12 text-lg">
              Feed Africa Farms is a sustainable farming business dedicated to producing
              fresh vegetables and poultry products for healthy living. We grow
              and deliver nutritious, affordable food directly from our farm to
              consumers across Ghana. Beyond farming, we support local
              agriculture by turning poultry waste into organic fertilizers and
              helping low-income farmers reach wider markets through our
              platform. At Agrimo, we're building a healthier future—one harvest
              at a time.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Feature
                icon={<Fence className="w-8 h-8" />}
                title="Healthy Diet"
                description="We ensure our produce meets the highest standards of nutrition and food safety for a healthier community."
              />
              <Feature
                icon={<Tractor className="w-8 h-8" />}
                title="Improve Low-Income harvest"
                description="We empower small-scale farmers with resources and market access to enhance their productivity."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div>
      <div className="text-yellow-400  mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-[#1a3c1e] mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default WhoWeAre;
