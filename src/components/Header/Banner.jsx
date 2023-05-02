import React from "react";
import bannerImg from "../../../public/top-view-tomato-salad-with-feta-cheese-rucola-copy-space.jpg";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa";
import "./banner.css";

const Banner = () => {
  return (
    <div className="lg:relative ">
      <img style={{ width: "100%" }} src={bannerImg} alt="" />
      <div className="absolute margin: 0; top-20 lg:right-80  text-white">
        <h1 className="text-7xl titleBanner ml-36 mb-10 flex">
          BD Chefs
          <span className="text-emerald-500 flex">
            Knife <GiForkKnifeSpoon />
          </span>
        </h1>
        <h2 className="text-4xl titleDescription ml-32 w-7/12">
          All The Best Chefs in Bangladesh Are Here{" "}
        </h2>
        <p className="w-3/4 titleDescription2 ml-16 mt-5">
          Before After dolor sit amet consectetur adipisicing elit. Perferendis
          et, nobis facere perspiciatis quam accusantium laudantium
          exercitationem commodi explicabo non?
        </p>
        <a className="link link-neutral linkBanner hover:text-gray-400 flex items-center gap-2 ml-56 text-4xl text-white">
          Know more about us <FaArrowRight />
        </a>
      </div>
    </div>
  );
};

export default Banner;
