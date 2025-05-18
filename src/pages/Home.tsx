import Hero from "../components/Hero";
import Services from "../components/Services";
import "../styles/home.css";

export function Home() {
  return (
    <div className="w-full">
      <Hero />
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
      <Services />
      <div className=" h-screen bg-red-50 w-full"></div>
    </div>
  );
}
