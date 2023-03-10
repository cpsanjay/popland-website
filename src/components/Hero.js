import React from "react";
import Banner1 from "../../src/assets/banner1.png";

const Hero = () => {
  return (
    <div
      className="h-screen pt-20 w-full"
      style={{
        background: `url(${Banner1})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className=" max-w-7xl mx-auto"></div>
    </div>
  );
};

export default Hero;
