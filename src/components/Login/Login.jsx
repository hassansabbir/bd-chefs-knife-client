import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const { signIn, googleSignIn, gitHubSignIn } = useContext(AuthContext);
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  console.log("login page location", location);
  const from = location.state?.from?.pathname || "/home";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((res) => {
        const loggedUser = res.user;
        console.log(loggedUser);
        setUser(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const googleProvider = new GoogleAuthProvider();
  const handleGoogleLogin = () => {
    googleSignIn(googleProvider)
      .then((res) => {
        const loggedUser = res.user;
        console.log(loggedUser);
        setUser(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const gitHubProvider = new GithubAuthProvider();
  const handleGitHubLogin = () => {
    gitHubSignIn(gitHubProvider)
      .then((res) => {
        const loggedUser = res.user;
        console.log(loggedUser);
        setUser(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={handleLogin} className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  required
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div>
                <p className="text-red-600">{error}</p>
              </div>
              <div className="">
                <button
                  onClick={handleGoogleLogin}
                  className="btn w-64 btn-outline btn-info gap-2"
                >
                  <FaGoogle /> Login with Google
                </button>
                <button
                  onClick={handleGitHubLogin}
                  className="btn w-64 mt-3 btn-outline gap-2"
                >
                  <FaGithub /> Login with GitHub
                </button>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
                <small>
                  New to BD Chefs Knife?{" "}
                  <Link className="underline" to="/register">
                    Register Now.
                  </Link>
                </small>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
