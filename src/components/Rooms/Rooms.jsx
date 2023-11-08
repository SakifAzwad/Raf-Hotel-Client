/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import Room from "./Room";
import { useState } from "react";

const Rooms = () => {
  const rooms = useLoaderData();
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [filteredRooms, setFilteredRooms] = useState(rooms);

  const handlePriceRangeChange = () => {
    // if(isNaN(minPrice))setMinPrice(0);
    // if(isNaN(maxPrice))setMaxPrice(1000);
    const min = parseInt(minPrice);
    const max = parseInt(maxPrice);

    if (!isNaN(min) && !isNaN(max)) 
    {
        const filtered = rooms.filter(
            (room) => room.pricePerNight >= minPrice && room.pricePerNight <= maxPrice
          );
         setFilteredRooms(filtered); 
    }
    else{
        setFilteredRooms(rooms); 
    }

    
  };


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
          <h1 className="text-center text-4xl px-60 py-12 font-bold bg-col0 text-col5">
            Explore our range of beautifully appointed rooms and suites that
            cater to your every need.
          </h1>

          <div className="text-center bg-col0">
            <label className="text-lg flex justify-center items-center">
              <h1 className="mr-4">Price Range :</h1>
              <input
              className="border border-col5 rounded mr-2 h-10"
                type="number"
                placeholder="Min Price"
                  value={minPrice}
                  onChange={(e) => setMinPrice(parseInt(e.target.value))}
              />
              <input
                type="number"
                className="border border-col5 rounded mr-2 h-10"
                placeholder="Max Price"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(parseInt(e.target.value))}
              />
              <button onClick={handlePriceRangeChange} className="border border-col5  rounded h-10 w-32 text-lg font-bold   text-col5  ">Apply</button>
            </label>
          </div>
        </div>
        <div className="bg-col0">
          <div className="grid lg:grid-cols-2 grid-cols-1 w-4/5 gap-8 mx-auto py-16">
            {filteredRooms &&
              filteredRooms?.map((rooom) => (
                <Room key={rooom._id} rooom={rooom}></Room>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
