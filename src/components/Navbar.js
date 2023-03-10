import React from "react";
import Logo from "../assets/logo.png";
import { FaArrowRight } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className=" fixed w-screen bg-[#FCECE7] font-lexend z-20">
      <div className="max-w-7xl m-auto flex justify-between items-center ">
        <div>
          <img src={Logo} alt="logo" className="w-24" />
        </div>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-3 text-xs text-white bg-[#E9522A] px-5 py-2 rounded-full">
            <span>Our Locations</span>
            <FaArrowRight />
          </div>
          <span className="font-semibold">Partner with us</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
