import React from "react";
import bannerImg from "../../../public/top-view-tomato-salad-with-feta-cheese-rucola-copy-space.jpg";

const Banner = () => {
  return (
    <div className="relative">
      <img style={{ width: "100%" }} src={bannerImg} alt="" />
      <div className="absolute top-20 right-80 text-white">
        <h1 className="text-7xl ">
          BD Chefs <br /> Knife
        </h1>
        <h2 className="text-4xl">All The Best Chefs in Bangladesh Are Here </h2>
        <p className="w-3/4 mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          et, nobis facere perspiciatis quam accusantium laudantium
          exercitationem commodi explicabo non?
        </p>
      </div>
    </div>
  );
};

export default Banner;
