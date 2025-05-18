import React from "react";

interface NavDotsProps {
  total: number;
  active: number;
  onDotClick: (index: number) => void;
}

const NavDots: React.FC<NavDotsProps> = ({ total, active, onDotClick }) => {
  return (
    <div className=" z-[10] absolute right-8 top-1/2 transform -translate-y-1/2 hidden md:block">
      <div className="flex flex-col space-y-4 items-center">
        {Array.from({ length: total }).map((_, index) => (
          <button
            key={index}
            onClick={() => onDotClick(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              active === index
                ? "bg-yellow-400 w-4 h-4"
                : "bg-white/60 hover:bg-white"
            }`}
            aria-label={`Navigate to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default NavDots;
