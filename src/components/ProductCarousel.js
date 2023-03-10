import React from "react";
import IndividualProduct from "./IndividualProduct";

const ProductCarousel = () => {
  return (
    <div className=" py-5 flex flex-col items-center">
      <div className="font-bebas text-4xl my-10">heading</div>
      <div className="flex gap-10">
        <IndividualProduct />
        <IndividualProduct />
        <IndividualProduct />
        <IndividualProduct />
      </div>
    </div>
  );
};

export default ProductCarousel;
