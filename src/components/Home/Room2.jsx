/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Room2 = ({ rooom }) => {
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
           <Link to={`/rooms/${_id}`}> <button className="btn  border border-col5 hover:border-col5 rounded  w-full mt-2  text-lg font-bold bg-col5 text-col0 hover:text-col5 hover:bg-col0">Book</button></Link>
        </div>
      </div>
      
    </div>
  );
};

export default Room2;
