import React from "react";

const ChefSpecialRecipe = ({ dish }) => {
  const { name, dishImg, description, ingredients, instructions } = dish;
  console.log(dish);
  return (
    <div>
      <div className="border-2 w-3/4 mx-auto rounded-3xl p-3 border-emerald-500">
        <h2 className="text-4xl mb-3">{name}</h2>
        <div className="flex gap-10 items-center justify-around ">
          <img
            style={{ width: "400px", height: "400px" }}
            src={dishImg}
            alt=""
          />
          <div className="w-3/6 text-left">
            <h2 className="my-5">{description}</h2>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefSpecialRecipe;
