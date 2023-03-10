import React from "react";
import UpcomingBG from "../../src/assets/upcoming-bg.svg";
import UpcomingTypography from "../../src/assets/upcoming.svg";
import IndividualUpcomingItem from "./IndividualUpcomingItem";

const Upcoming = () => {
  return (
    <div
      className=" py-20"
      style={{
        background: `url(${UpcomingBG})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <img
          src={UpcomingTypography}
          alt="upcoming"
          className="mx-auto pb-20"
        />
        <div className="grid grid-cols-3 gap-10">
          <IndividualUpcomingItem />
          <IndividualUpcomingItem />
          <IndividualUpcomingItem />
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
