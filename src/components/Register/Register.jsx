import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
  const { createUser, profileUpdate } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();
    setError("");
    const form = event.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, photoUrl, email, password);

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
    }

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
      })
      .catch((err) => {
        console.log(err);
      });

    profileUpdate({ displayName: name, photoURL: photoUrl })
      .then(() => {
        console.log("Username updated successfully");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <form onSubmit={handleRegister} className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register Now</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="photoUrl"
                  name="photoUrl"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  required
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
              </div>
              <p>{error}</p>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
                <small>
                  Already have an account?
                  <Link className="underline" to="/login">
                    {" "}
                    Please Login
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

export default Register;
