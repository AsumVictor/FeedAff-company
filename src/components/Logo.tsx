import React from 'react';
import { Leaf } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center cursor-pointer group">
      <div className="relative mr-2">
        <Leaf className="h-8 w-8 text-yellow-400 transition-transform group-hover:rotate-12 duration-300" />
      </div>
      <h1 className="text-2xl font-bold text-white">
        <span className="text-yellow-400">F</span>eed
         <span className="text-yellow-400">Aff</span>
      </h1>
    </div>
  );
};

export default Logo;