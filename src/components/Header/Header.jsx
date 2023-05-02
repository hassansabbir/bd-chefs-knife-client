import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Banner from "./Banner";
import { AuthContext } from "../../providers/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="navbar bg-neutral-600 text-white">
        <div className="navbar-start">
          <div className="dropdown"></div>
          <a className="btn btn-ghost normal-case text-xl">BD Chefs Knife</a>
        </div>
        <div>
          <Link className="mx-4" to="/home">
            Home
          </Link>
          <Link className="mx-4" to="/blog">
            Blog
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex"></div>
        <div className="navbar-end space-x-4">
          <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
            <img
              className="w-12 h-12 rounded-full"
              src={user ? user.photoURL : <FaUserCircle />}
              alt=""
            />
          </div>
          {user ? (
            <Link onClick={handleLogOut} to="/home" className="btn">
              LogOut
            </Link>
          ) : (
            <Link to="/login" className="btn">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
