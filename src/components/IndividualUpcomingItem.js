import React from "react";
import Froyo from "../../src/assets/froyo.svg";

const IndividualUpcomingItem = () => {
  return (
    <div className="bg-white rounded-xl flex flex-col items-center text-center p-10 w-80 shadow-2xl">
      <img src={Froyo} alt="individual" className="w-56" />
      <div className=" text-[#E9522A] font-fredoka text-2xl p-3 ">FROYO</div>
      <p className=" font-lexend text-xs">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita cum,
        enim placeat mollitia nobis corrupti laboriosam minima sint repudiandae,
        molestiae dolore dolor, numquam itaque animi consectetur temporibus a
        quasi ut?{" "}
      </p>
    </div>
  );
};

export default IndividualUpcomingItem;
