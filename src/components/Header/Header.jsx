import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import ActiveLink from "../Activelink/ActiveLink";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user);

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
          <a className="btn btn-ghost normal-case text-3xl">BD Chefs Knife</a>
        </div>
        <div className="space-x-10">
          <ActiveLink className="mx-4" to="/">
            Home
          </ActiveLink>
          <ActiveLink className="mx-4" to="/blog">
            Blogs
          </ActiveLink>
        </div>
        <div className="navbar-center hidden lg:flex"></div>
        <div className="navbar-end space-x-4">
          <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
            {user && (
              <img
                className="w-12 h-12 rounded-full"
                src={user.photoURL}
                alt=""
              />
            )}
          </div>
          {user ? (
            <Link onClick={handleLogOut} to="/" className="btn">
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
