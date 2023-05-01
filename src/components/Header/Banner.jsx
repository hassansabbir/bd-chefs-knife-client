import React from "react";
import bannerImg from "../../../public/top-view-tomato-salad-with-feta-cheese-rucola-copy-space.jpg";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="lg:relative">
      <img style={{ width: "100%" }} src={bannerImg} alt="" />
      <div className="absolute top-20 right-80 text-white">
        <h1 className="text-7xl ml-36 mb-10 flex">
          BD Chefs Knife <GiForkKnifeSpoon />
        </h1>
        <h2 className="text-4xl ml-32 w-7/12">
          All The Best Chefs in Bangladesh Are Here{" "}
        </h2>
        <p className="w-3/4 ml-16 mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          et, nobis facere perspiciatis quam accusantium laudantium
          exercitationem commodi explicabo non?
        </p>
        <a className="link link-neutral flex items-center gap-2 ml-56 text-4xl text-white">
          Know more about us <FaArrowRight />
        </a>
      </div>
    </div>
  );
};

export default Banner;
