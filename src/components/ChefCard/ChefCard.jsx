import React from "react";

const ChefCard = ({ chef }) => {
  const { name, badge, photoUrl, awards, specialty } = chef;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl hover:shadow-2xl">
        <figure>
          <img className="h-72" src={photoUrl} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            {badge ? <div className="badge badge-secondary">{badge}</div> : ""}
          </h2>

          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
