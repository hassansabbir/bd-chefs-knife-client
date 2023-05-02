import React from "react";
import { useLoaderData } from "react-router-dom";
import ChefBanner from "../ChefBanner/ChefBanner";
import ChefSpecialRecipe from "../ChefSpecialRecipe/ChefSpecialRecipe";

const ViewRecipe = () => {
  const viewRecipe = useLoaderData();
  return (
    <div>
      <ChefBanner viewRecipe={viewRecipe}></ChefBanner>
      <div>
        <h2 className="text-4xl my-10 ">Some of Chefs Special Recipes</h2>
        <div className="grid gap-10 my-10">
          {viewRecipe.dishes.map((dish, i) => (
            <ChefSpecialRecipe dish={dish} key={i}></ChefSpecialRecipe>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewRecipe;
