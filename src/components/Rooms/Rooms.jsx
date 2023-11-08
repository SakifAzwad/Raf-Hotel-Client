/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";

const Rooms = () => {
  const rooms = useLoaderData();
  return (
    <div>
      <div className="relative">
        <div className="w-full h-full">
          <div
            className="hero min-h-screen h-full"
            style={{
              backgroundImage: "url(https://i.ibb.co/k5QxJ74/download-3.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="">
                <h1 className="mb-5 text-5xl text-col0 font-bold">
                  Discover Your Perfect Retreat at Raf Hotel
                </h1>
                <p className="mb-5 text-col0 text-2xl">
                  Welcome to Raf Hotel's exquisite collection of rooms and
                  suites. Our accommodations are thoughtfully designed to
                  provide the perfect blend of luxury, comfort, and style. Each
                  room tells a unique story and offers a distinct experience,
                  whether you are seeking a romantic getaway, a family vacation,
                  or a VIP escape
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-center text-4xl px-60 py-12">
            Explore our range of beautifully appointed rooms and suites that
            cater to your every need.
          </h1>
        </div>
        <div className="bg-col0">
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
              <img
                src="/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                alt="Album"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">New album is released!</h2>
              <p>Click the button to listen on Spotiwhy app.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Listen</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
