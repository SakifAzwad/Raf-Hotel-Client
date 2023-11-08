/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { AuthCon } from "../Provider/AuthProv";
import { Link, useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";

const Login = () => {
  const { signIn, signInWithGoogle } = useContext(AuthCon);
  const navigate = useNavigate();
  const location = useLocation();
  const [registerError, setRegisterError] = useState("");

  const autolog = () => {
    signInWithGoogle()
      .then((result) => {
        const p = result.user.displayName;
        swal(
          `Welcome Back ${p}!`,
          `You've successfully logged in to Raf Hotel.`,
          "success"
        );
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
        setRegisterError(error.message);
      });
  };

  const hanlogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    signIn(email, password)
      .then((result) => {
        const p = result.user.displayName;
        swal(
          `Welcome Back ${p}!`,
          `You've successfully logged in to Raf Tech.`,
          "success"
        );
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.code);
        setRegisterError(error.message);
      });

    e.target.email.value = "";
    e.target.password.value = "";
  };

  return (
    <div className="relative">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <div className="hero min-h-screen">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                  <h1 className="text-5xl text-col0 font-bold">
                    Welcome Back!
                  </h1>
                  <h1 className="text-3xl text-col0">
                    We are delighted to see you again. Please log in to your Raf
                    Hotel account to unlock a world of exclusive benefits and
                    personalized experiences.
                  </h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-col4 bg-opacity-70">
                  <form onSubmit={hanlogin} className="card-body">
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
                        Login
                      </button>
                    </div>
                    <h2 className="text-col0 pt-4 text-center">Or</h2>
                  </form>
                  <div className="form-control px-8 pb-6">
                    <button
                      onClick={autolog}
                      className="btn  bg-col4  text-col0 hover:bg-col5 hover:text-col4"
                    >
                      Login in With <span className="text-[#4285F4]">G</span>
                      <span className="text-[#EA4335]">O</span>
                      <span className="text-[#FBBC05]">O</span>
                      <span className="text-[#4285F4]">G</span>
                      <span className="text-[#34A853]">L</span>
                      <span className="text-[#EA4335]">E</span>
                    </button>
                  </div>
                  {registerError && (
                        <p className="text-center  pt-4 font-extrabold  text-red-700">Invalid Email or Password</p>
                  )}
                    <p className="text-center pb-4 w-full text-col0">
                    Do not have an account? {"   "} 
                    <Link className="text-col5 w-full font-extrabold" to="/signup">
                         Sign Up
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

export default Login;
