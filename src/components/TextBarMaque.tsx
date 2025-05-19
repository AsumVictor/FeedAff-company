import React, { useRef, useMemo } from "react";
import { motion, useScroll, useTransform, wrap } from "framer-motion";

interface ScrollingTextProps {
  texts: string[];
  className?: string;
}

const colorPalette = [
//   "text-[color:#1a3c1e]",
//   "text-[color:#224c26]",
//   "text-[color:#2d5e32]",
  "text-[color:#3a713e]",
  "text-[color:#e6c288]",
  "text-[color:#ddb76f]",
  "text-[color:#404A3D]",
];

const ScrollingText: React.FC<ScrollingTextProps> = ({
  texts,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const baseX = useTransform(scrollYProgress, [0, 1], [0, -1000]);
  const x = useTransform(baseX, (value) => `${wrap(-1000, 0, value)}px`);


  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden py-10 ${className}`}
    >
      <motion.div className="flex whitespace-nowrap" style={{ x }}>
        {[...texts, ...texts, ...texts].map((text, index) => {
            const i = Math.floor(Math.random() * colorPalette.length)
          return (
            <div
              key={`${text}-${index}`}
              className={`inline-flex items-center mx-4 text-6xl font-bold ${colorPalette[i]}`}
            >
              <span>{text}</span>
              <span className="mx-4 text-[#65B741]">*</span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default ScrollingText;
