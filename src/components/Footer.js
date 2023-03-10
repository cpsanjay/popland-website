import React from "react";
import FooterBG from "../../src/assets/footer.svg";
import Logo from "../../src/assets/logo.png";

const Footer = () => {
  return (
    <div
      className=""
      style={{
        background: `url(${FooterBG})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto font-montserrat font-semibold text-base">
        <div className="flex items-center">
          <div className=" basis-2/6 ">
            <img src={Logo} alt="logo" />
          </div>
          <div className=" basis-1/6 ">
            <div>Home</div>
            <div>About Us</div>
            <div>Blog</div>
            <div>Our Services</div>
          </div>
          <div className=" basis-1/6 ">
            <div>Contact Us</div>
            <div>Franchise Enquiry</div>
            <div>Privacy Policy</div>
            <div>Terms & Conditions</div>
          </div>
          <div className=" basis-2/6 ">
            <div>Subscribe to Newsletter</div>
            <input placeholder="Enter Your Email" />
            <button>Submit</button>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
