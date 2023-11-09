/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthCon } from "../Provider/AuthProv";
import swal from "sweetalert";
import { updateProfile } from "firebase/auth";

const SignUp = () => {


 const { createUser } = useContext(AuthCon);
  const navigate = useNavigate();
  const location1 = useLocation();
  const [registerError, setRegisterError] = useState("");

  const hanreg = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const URL = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");

    if (password.length < 6) {
      setRegisterError("Password must be at least 6 characters long.");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setRegisterError("Password must include at least one uppercase letter.");
      return;
    }
    if (!/[@$!%*?&]/.test(password)) {
      setRegisterError(
        "Password must include at least one special character (e.g., @$!%*?&)."
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        updateProfile(result.user, {
          displayName: name,
          photoURL: URL,
        })
          .then(() => {
            const p = result.user.displayName;

            swal(
              `Welcome ${p}!`,
              `You've successfully registered to Raf Events.`,
              "success"
            );
          })
          .catch((error) => {
            setRegisterError(error.message);
          });
        setTimeout(() => {
          window.location.reload();
        }, 2500);
        navigate(location1?.state ? location1.state : "/");
      })
      .catch((error) => {
        setRegisterError(error.message);
      });

    e.target.name.value = "";
    e.target.photo.value = "";
    e.target.email.value = "";
    e.target.password.value = "";
  };



  return (
    <div className="relative">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/h7szKJt/2.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <div className="hero min-h-screen">
              <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                  <h1 className="text-5xl text-col0 font-bold">
                    New to Raf Hotel?{" "}
                  </h1>
                  <h1 className="text-3xl text-col0">
                    Sign up to create an account and enjoy the benefits of easy
                    bookings, exclusive offers, and a personalized experience.
                  </h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-col4 bg-opacity-70">
                  <form onSubmit={hanreg} className="card-body">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-col0">Name</span>
                      </label>
                      <input
                        name="name"
                        type="text"
                        placeholder="name"
                        className="input input-bordered bg-transparent text-white border-col0"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-col0">PhotoURL</span>
                      </label>
                      <input
                        name="photo"
                        type="text"
                        placeholder="PhotoURL"
                        className="input input-bordered bg-transparent text-white border-col0"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-col0">Email</span>
                      </label>
                      <input
                        name="email"
                        type="email"
                        placeholder="email"
                        className="input input-bordered bg-transparent text-white border-col0"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-col0">Password</span>
                      </label>
                      <input
                        name="password"
                        type="password"
                        placeholder="password"
                        className="input input-bordered bg-transparent text-white border-col0"
                        required
                      />
                    </div>
                    <div className="form-control mt-6">
                      <button className="btn bg-col5 border-0 text-col0 hover:bg-col3">
                        Sign Up
                      </button>
                    </div>
                  </form>
                  <p className="text-center pb-4 w-full text-col0">
                    Already have an account?{"  "} 
                    <Link className="text-col5 w-full font-extrabold" to="/login">
                        Login
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
