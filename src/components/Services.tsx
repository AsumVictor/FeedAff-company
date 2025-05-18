import React from "react";
import { Truck, Bird, Sprout, Plane as Plant } from "lucide-react";
import { Link } from "react-router";
import { ExternalIcon } from "./icons";

interface ProductCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServicesCard: React.FC<ProductCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className=" relative min-h-[5cm] overflow-hidden rounded-xl">
      {/* Overlay Container */}
      <div className="h-full w-full bg-white rounded-2xl service-overlay"></div>

      {/* Icon Container */}
      <div className=" absolute top-0 left-0 flex flex-col items-center text-center w-full  min-h-[5cm] p-3 bg-transparent">
        <div className=" flex flex-row items-center gap-5 w-full">
          <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-yellow-400/30 transition-colors duration-300">
            <div className="w-8 h-8 text-yellow-400">{icon}</div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-semibold text-[#1a3c1e] mb-4">{title}</h3>
        </div>

        {/* Description */}
        <div className="flex flex-row w-full text-[14px]">
          <p
            className="text-gray-600 mb-6 max-w-sm 
         w-[70%] text-left
        "
          >
            {description}
          </p>
          <div className=" w-[30%] pb-2  flex justify-end items-end">
            <Link to="." className=" px-3 py-3 bg-yellow-400 rounded-full">
            <ExternalIcon />
            </Link>
          </div>
        </div>

        {/* Arrow Icon */}
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const products = [
    {
      icon: <Truck className="w-full h-full" />,
      title: "Fresh Vegetables",
      description:
        "We grow and harvest natural vegetables to provide you with fresh, healthy nutritious produce every day.",
    },
    {
      icon: <Bird className="w-full h-full" />,
      title: "Poultry Products",
      description:
        "We raise broilers and layers, providing poultry and eggs at affordable prices for everyday consumption.",
    },
    {
      icon: <Plant className="w-full h-full" />,
      title: "Green Manure Fertilizers",
      description:
        "We produce organic fertilizers using natural materials, including eggshells, to enrich soil with calcium and lime.",
    },
    {
      icon: <Sprout className="w-full h-full" />,
      title: "Delivery System",
      description:
        "We ensure timely delivery of fresh produce straight to your doorstep within our service zones. Check your zone here",
    },
  ];

  return (
    <section className="py-20 w-full px-auto px-4">
      <div className="w-full">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-6">
          {products.map((product, index) => (
            <ServicesCard
              key={index}
              icon={product.icon}
              title={product.title}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
