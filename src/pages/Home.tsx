import Hero from "../components/Hero";
import Services from "../components/Services";
import WhoWeAre from "../components/WhoWeAre";
import "../styles/home.css";

export function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Services />
      <WhoWeAre />
      <div className=" h-screen bg-red-50 w-full"></div>

      {/* ALL MASK CLIPPATH IN HOME PAGE */}
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <clipPath id="heroClip" clipPathUnits="objectBoundingBox">
          <path
            d="
            M 0 0 
            L 0.83 0 
            A 0.02 0.02 0 0 1 0.85 0.02 
            L 0.85 0.08 
            A -0.02 -0.02 0 0 0 0.87 0.1 
            L 0.98 0.1
            A 0.02 0.02 0 0 1 01 0.12  
            L 1 1 
            L 0 1 Z
          "
          />
        </clipPath>
      </svg>
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <clipPath id="serviceClip" clipPathUnits="objectBoundingBox">
          <path
            d="
           M 0 0 L 1 0 L 1 0.73 A 11111 20 0 0 1 0.97 0.77 L 0.83 0.77 A 50000 30 0 0 0 0.8 0.8 L 0.8 0.95 A -0.92 20 0 0 1 0.75 1 L 0 1 z
          "
          />
        </clipPath>
      </svg>
    </div>
  );
}
