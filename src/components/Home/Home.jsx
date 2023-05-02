import React from "react";
import { useLoaderData } from "react-router-dom";
import ChefCard from "../ChefCard/ChefCard";

const Home = () => {
  const chefsData = useLoaderData();
  console.log(chefsData);
  return (
    <div className="my-10">
      <h2>this is Home.</h2>
      <div className="grid grid-cols-3 gap-10">
        {chefsData.map((chef) => (
          <ChefCard chef={chef} key={chef.id}></ChefCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
