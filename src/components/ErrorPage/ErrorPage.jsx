import React from "react";
import errorImg from "../../../public/5155999_2704891.jpg";

const ErrorPage = () => {
  return (
    <div className="my-10 mb-20">
      <img className="w-6/12 mx-auto" src={errorImg} alt="" />
      <h1 className="text-5xl text-red-600 font-bold mb-5">Oppss!!</h1>
      <p className="text-5xl text-red-600">Page Not Found!!!</p>
      <p className="text-2xl text-red-500 my-5">
        The page you are trying to find is not found. Please try again later.
      </p>
    </div>
  );
};

export default ErrorPage;
