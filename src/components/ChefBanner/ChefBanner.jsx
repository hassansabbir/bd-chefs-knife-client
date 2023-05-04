import React from "react";
import { FaThumbsUp } from "react-icons/fa";

const ChefBanner = ({ viewRecipe }) => {
  const { name, photoUrl, specialty, awards, Experience, recipe, Likes, bio } =
    viewRecipe;
  return (
    <div>
      <div className="flex justify-around rounded-xl items-center shadow-2xl">
        <img className="w-5/12 ml-10 my-10 rounded-xl" src={photoUrl} alt="" />
        <div className="text-left my-20 ml-36">
          <h2 className="text-2xl">
            Meet <span className="text-emerald-500">C</span>hef
          </h2>
          <h2 className="text-7xl mb-10">{name}</h2>
          <h5 className="w-3/4 my-8 text-xl">
            <span className="text-2xl text-emerald-500">Bio:</span> <br />
            {bio}
          </h5>
          <h4 className="text-2xl">
            <span className="text-emerald-500">Specialty: </span>
            {specialty}
          </h4>
          <h4 className="text-2xl flex gap-5">
            <span className="text-emerald-500">Awards: </span>
            <div>
              {awards.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </div>
          </h4>
          <h4 className="text-2xl">
            <span className="text-emerald-500">Experience: </span>
            {Experience} Years.
          </h4>
          <h4 className="text-2xl">
            <span className="text-emerald-500">Recipe: </span>
            {recipe} Items.
          </h4>
          <h4 className="text-2xl flex gap-2">
            <span className="text-emerald-500">Likes: </span>
            <FaThumbsUp />
            {Likes}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ChefBanner;
