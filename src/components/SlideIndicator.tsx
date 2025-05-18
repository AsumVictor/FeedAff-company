import React from 'react';

interface SlideIndicatorProps {
  current: number;
  total: number;
}

const SlideIndicator: React.FC<SlideIndicatorProps> = ({ current, total }) => {
  return (
    <div className="fixed bottom-8 left-8 z-20 hidden md:block">
      <div className="flex items-center space-x-2">
        <span className="text-4xl font-bold text-yellow-400">{current < 10 ? `0${current}` : current}</span>
        <div className="w-12 h-0.5 bg-white/50"></div>
        <span className="text-xl font-medium text-white/70">{total < 10 ? `0${total}` : total}</span>
      </div>
    </div>
  );
};

export default SlideIndicator;