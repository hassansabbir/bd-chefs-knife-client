import React from "react";
import { useLoaderData } from "react-router-dom";
import ChefCard from "../ChefCard/ChefCard";
import Banner from "../Header/Banner";
import GoodFood from "../GoodFood/GoodFood";
import AreUChef from "../AreUChef/AreUChef";

const Home = () => {
  const chefsData = useLoaderData();
  // console.log(chefsData);
  return (
    <div>
      <Banner></Banner>
      <GoodFood></GoodFood>
      <div className="my-10">
        <h2 className="font-bold mb-5 text-5xl ">
          Our <span className="text-emerald-500 underline">C</span>hefs
        </h2>
        <div className="grid lg:grid-cols-3 gap-10">
          {chefsData.map((chef) => (
            <ChefCard chef={chef} key={chef.id}></ChefCard>
          ))}
        </div>
      </div>
      <AreUChef></AreUChef>
    </div>
  );
};

export default Home;
