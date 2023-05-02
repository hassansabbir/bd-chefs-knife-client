import React from "react";
import { useLoaderData } from "react-router-dom";
import ChefCard from "../ChefCard/ChefCard";
import Banner from "../Header/Banner";

const Home = () => {
  const chefsData = useLoaderData();
  console.log(chefsData);
  return (
    <div>
      <Banner></Banner>
      <div className="my-10">
        <h2 className="font-bold text-3xl text-emerald-500">Our Chefs</h2>
        <div className="grid lg:grid-cols-3 lg:mx-auto gap-10">
          {chefsData.map((chef) => (
            <ChefCard chef={chef} key={chef.id}></ChefCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
