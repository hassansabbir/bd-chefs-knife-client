import React from "react";
import foodBowl from "../../../public/meat-dish-with-vegetables.jpg";
import "./GoodFood.css";
import { FaBreadSlice, FaHamburger } from "react-icons/fa";
import { GiGrapes } from "react-icons/gi";

const GoodFood = () => {
  return (
    <div className="lg:flex px-10 lg:px-0 items-center my-32">
      <img className="w-6/12" src={foodBowl} alt="" />
      <div className="text-left">
        <h2 className="text-4xl">Its all about</h2>
        <h1 className="text-6xl">
          <span className="goodBorder">G</span>ood Food & Taste
        </h1>
        <h2 className="mt-8 text-2xl text-emerald-500 font-bold">
          Wood-Fired Garlic and Rosemary Crusted Beef Tenderloin with Roasted
          Root Vegetables
        </h2>
        <div className="my-10">
          <h2 className="text-2xl flex gap-5 my-4 hover:text-emerald-500 items-center">
            <FaHamburger />
            Dolor sit amet consectetur adipisicing elit.
          </h2>
          <hr className="w-5/6" />
          <h2 className="text-2xl flex gap-5 my-4 hover:text-emerald-500 items-center">
            <GiGrapes />
            Koluptates excepturi placeat, minima eveniet veritatis.
          </h2>
          <hr className="w-5/6" />
          <h2 className="text-2xl flex gap-5 my-4 hover:text-emerald-500 items-center">
            <FaBreadSlice />
            Sit amet, consectetur adipisicing elit, Excepturi.
          </h2>
        </div>
        <div className="space-x-3">
          <button className="btn w-5/12 btn-outline text-white bg-emerald-500 border-emerald-500 hover:bg-dark">
            Watch our Videos{" "}
          </button>
          <button className="btn w-5/12 btn-outline">Know More About Us</button>
        </div>
      </div>
    </div>
  );
};

export default GoodFood;
