import React from "react";
import chefImg from "../../../public/14669964_5499390.jpg";

const AreUChef = () => {
  return (
    <div className="flex items-center my-10">
      <img className="w-3/6" src={chefImg} alt="" />
      <div>
        <h2 className="text-5xl text-left">
          You can also become a{" "}
          <span className="text-emerald-500">Master Chef</span> just like them.
          How?
        </h2>
        <hr className="w-5/6 my-5" />
        <h2 className="text-3xl text-left">
          We introduce you a Master Chef Cooking Course which will be taken by
          our top Chefs. <a className="link">Check out for more details.</a>
        </h2>
        <h2 className="text-5xl mt-8 text-left">Apply Now!!</h2>
        <div className="mt-5 text-left w-10/12 flex gap-20">
          <div className="indicator">
            <span className="indicator-item badge">15% off! Now</span>
            <input
              type="text"
              placeholder="Your email address"
              className="input input-bordered w-96"
            />
          </div>
          <button className="btn w-40 btn-success">Apply</button>
        </div>
      </div>
    </div>
  );
};

export default AreUChef;
