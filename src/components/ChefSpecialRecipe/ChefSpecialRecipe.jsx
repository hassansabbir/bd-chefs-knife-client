import React, { useState } from "react";
import { FaHeart, FaStar, FaStarHalf, FaStarHalfAlt } from "react-icons/fa";
import { toast } from "react-toastify";

const ChefSpecialRecipe = ({ dish }) => {
  const [disabled, setDisabled] = useState(false);
  const addToFavButton = () => {
    setDisabled(true);
    toast.success("Recipe added to your favorites Successfully!");
  };

  const { name, dishImg, description, rating, ingredients, instructions } =
    dish;
  // console.log(dish);
  return (
    <div>
      <div className="border-2 w-3/4 mx-auto rounded-3xl p-3 border-emerald-500">
        <h2 className="text-4xl mb-3">{name}</h2>
        <div className="flex gap-10 items-center justify-around ">
          <img
            className="rounded-2xl"
            style={{ width: "400px", height: "400px" }}
            src={dishImg}
            alt=""
          />
          <div className="w-3/6 text-left">
            <h2 className="my-5">
              <span className="text-xl font-bold">Description:</span> <br />{" "}
              {description}
            </h2>
            <h2>
              <span className="font-bold text-xl my-5">Ingredients:</span>
              {ingredients.map((ing, i) => (
                <li key={i}>{ing}</li>
              ))}
            </h2>
            <p className="my-5">
              <span className="text-xl font-bold">How to Cook:</span> <br />
              {instructions}
            </p>
            <p className="my-5 flex items-center gap-3 text-xl font-bold">
              Ratings:{" "}
              <div className="flex">
                <FaStar className="text-emerald-500" />
                <FaStar className="text-emerald-500" />
                <FaStar className="text-emerald-500" />
                <FaStar className="text-emerald-500" />
                <FaStarHalfAlt className="text-emerald-500" />
              </div>{" "}
              {rating}
            </p>
          </div>
        </div>
        <button
          onClick={() => {
            addToFavButton();
          }}
          disabled={disabled}
          className="btn gap-2 hover:bg-emerald-500 hover:border-emerald-500"
        >
          Add to Favorites <FaHeart />
        </button>
      </div>
    </div>
  );
};

export default ChefSpecialRecipe;
