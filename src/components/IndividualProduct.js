import React from "react";
import Product from "../../src/assets/product1.svg";

const IndividualProduct = () => {
  return (
    <div className="bg-white p-10 rounded-xl z-10 flex flex-col items-center shadow-2xl">
      <img src={Product} alt="product" />
      <span className=" font-fredoka text-base my-4 font-bold">WATERMELON</span>
    </div>
  );
};

export default IndividualProduct;
