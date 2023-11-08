/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";

const RoomDetails = () => {
  const rooom = useLoaderData();
  const {
    room,
    description,
    pricePerNight,
    sizeType,
    availability,
    mainImage,
    images,
    specialOffers,
  } = rooom;

  return (
    <div className="relative">
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${images[0]})` }}
      >
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="flex pt-20 pb-20">
          <div className="w-2/3">
            <img className=" px-40" src={mainImage} alt="" />
            <p className="px-40 text-center pt-12 text-col0">{description}</p>
          </div>
          <div className="w-1/3">
            <div className="card w-96 bg-col4 bg-opacity-50 shadow-xl">
              <div className="card-body text-center text-lg text-col0">
                <h2 className="text-4xl text-center font-bold ">{room}</h2>
                <p>Room Size: {sizeType}</p>
                <p>Available Rooms: {availability}</p>
                <p>Price per night: {pricePerNight}$</p>
                <div className="card-actions justify-center">
                  <button className="btn btn-primary ">Book</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
