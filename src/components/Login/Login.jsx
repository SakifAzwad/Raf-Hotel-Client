

const Login = () => {
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
                  We are delighted to see you again. Please log in to your Raf Hotel account to unlock a world of exclusive benefits and personalized experiences. 
                  </h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-col4 bg-opacity-70">
                  <form className="card-body">
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
                  </form>
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