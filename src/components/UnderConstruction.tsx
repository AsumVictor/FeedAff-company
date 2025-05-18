import { useEffect, useState } from "react";
import { HardHat, Hammer, Wrench, Loader2 } from "lucide-react";

export default function UnderConstruction() {
  const [dots, setDots] = useState(".");
  const [toolIndex, setToolIndex] = useState(0);

  useEffect(() => {
    // Animate the loading dots
    const dotsInterval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "." : prev + "."));
    }, 500);

    // Animate the tools
    const toolsInterval = setInterval(() => {
      setToolIndex((prev) => (prev + 1) % 3);
    }, 2000);

    return () => {
      clearInterval(dotsInterval);
      clearInterval(toolsInterval);
    };
  }, []);

  const tools = [
    <HardHat key="hardhat" className="h-12 w-12 text-yellow-400" />,
    <Hammer key="hammer" className="h-12 w-12 text-yellow-400" />,
    <Wrench key="wrench" className="h-12 w-12 text-yellow-400" />,
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#1a3c1e] p-4">
      <div className="max-w-md w-full mx-auto text-center space-y-8">
        {/* Construction animation */}
        <div className="relative h-40 w-full">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="construction-gear animate-spin-slow">
              <div className="h-24 w-24 rounded-full border-8 border-dashed border-yellow-400 opacity-70"></div>
            </div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            {tools[toolIndex]}
          </div>

          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-1 items-center bg-yellow-400 text-[#1a3c1e] px-3 py-1 rounded-t-md font-mono text-sm">
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Building{dots}</span>
            </div>
          </div>
        </div>

        {/* Text content */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-yellow-400 tracking-tight">
            Under Construction
          </h1>

          <div className="relative h-2 bg-yellow-400/20 rounded-full overflow-hidden">
            <div className="absolute h-full bg-yellow-400 rounded-full progress-bar"></div>
          </div>

          <p className="text-yellow-100 text-lg">
            We're working hard to build something amazing for you.
          </p>

          <p className="text-yellow-100/70">
            Please check back soon to see our new site!
          </p>
        </div>

        {/* Construction tape decoration */}
        <div className="py-4">
          <div className="h-6 w-full bg-yellow-400 relative overflow-hidden construction-tape">
            <div className="absolute inset-0 flex items-center">
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className="h-12 w-12 bg-[#1a3c1e] rotate-45 transform -translate-y-6"
                  style={{ marginLeft: `${i * 10}px` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
