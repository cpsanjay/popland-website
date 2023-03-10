import React from "react";
import Shape1 from "../../src/assets/shape1.svg";
import Shape2 from "../../src/assets/shape2.svg";
import ProductsTypography from "../../src/assets/products.svg";
import ProductCarousel from "./ProductCarousel";

const Products = () => {
  return (
    <div className="bg-[#FFF3D4] relative">
      <img src={Shape1} alt="shape" className="absolute top-0 left-0 w-56" />
      <img
        src={Shape2}
        alt="shape"
        className="absolute bottom-0 right-0 w-56"
      />
      <div className="max-w-7xl mx-auto py-5 flex flex-col items-center">
        <img src={ProductsTypography} alt="products" className=" w-72" />
        <ProductCarousel />
        <ProductCarousel />
        <ProductCarousel />
      </div>
    </div>
  );
};

export default Products;
