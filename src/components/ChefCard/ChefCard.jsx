import React from "react";
import { Link } from "react-router-dom";

const ChefCard = ({ chef }) => {
  const {
    id,
    name,
    badge,
    photoUrl,
    Likes,
    recipe,
    Experience,
    awards,
    specialty,
  } = chef;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl hover:shadow-2xl">
        <figure>
          <img className="h-72" src={photoUrl} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-xl">
            {name}
            {badge ? <div className="badge badge-secondary">{badge}</div> : ""}
          </h2>
          <hr />
          <h3 className="text-xl">Experience: {Experience} Years.</h3>
          <div>
            <p className="text-xl">Likes: {Likes}</p>
            <p className="text-xl">Recipe: {recipe} Items.</p>
          </div>
          <Link to={`/chefs/${id}`}>
            <button className="btn btn-outline btn-success">View Recipe</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
