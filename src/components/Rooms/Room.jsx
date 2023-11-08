/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Room = ({ rooom }) => {
  const {
    _id,
    room,
    pricePerNight,
    availability,
    mainImage,
    shortdescription,
  } = rooom;

  return (
    <div>
      <Link to={`/rooms/${_id}`}>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
          className="h-72 w-full"
            src={mainImage}
            alt=""
          />
        </figure>
        <div className="card-body">
          <h2 className="text-3xl font-medium text-center">{room}</h2>
          <p className="text-center">{shortdescription}</p>
          <h1 className="text-xl text-center">Available Room {availability}</h1>
          <h1 className="text-2xl text-center font-bold">Starts at {pricePerNight}$ </h1>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default Room;
