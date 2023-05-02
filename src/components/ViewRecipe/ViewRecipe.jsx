import React from "react";
import { useLoaderData } from "react-router-dom";
import ChefBanner from "../ChefBanner/ChefBanner";

const ViewRecipe = () => {
  const viewRecipe = useLoaderData();
  return (
    <div>
      <ChefBanner viewRecipe={viewRecipe}></ChefBanner>
      <div>
        <h2 className="text-4xl my-10 ">Some of Chefs Special Recipes</h2>
      </div>
    </div>
  );
};

export default ViewRecipe;
