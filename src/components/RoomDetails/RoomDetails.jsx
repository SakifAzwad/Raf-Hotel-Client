/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
const RoomDetails = () => {
  const rm = useLoaderData();
  const [rooom, setroom] = useState(rm);
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(today);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  
  const {
    room,
    description,
    pricePerNight,
    sizeType,
    availability,
    mainImage,
    images,
    specialOffers,
    shortdescription
  } = rm;

  const handleBookRoom = () => {

    
    
  };

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
                <p>
                  Room Size: <span className="font-bold">{sizeType}</span>
                </p>
                <p>
                  Available Rooms:{" "}
                  <span className="font-bold">{availability}</span>
                </p>
                <p>
                  Price per night:{" "}
                  <span className="font-bold">{pricePerNight}$</span>{" "}
                </p>
                <p className="text-left border-t-2">Special Offers:</p>

                {specialOffers &&
                  specialOffers?.map((offer, offerIndex) => (
                    <div key={offerIndex}>
                      <p className="text-left">
                        {offerIndex + 1}) {offer.description}
                      </p>
                    </div>
                  ))}
                <p className="border-t-2 py-2">Booking Date :</p>
                <div className="pb-2 text-black font-bold">
                  <DatePicker
                    dateFormat="dd/MM/yyyy"
                    selected={selectedDate}
                    minDate={today}
                    onChange={handleDateChange}
    
                  />
                </div>

                <div className="card-actions justify-center border-t-2">
                  <button
                    onClick={() =>
                      document.getElementById("my_modal_5").showModal()
                    }
                    className="    rounded h-10 w-32 mt-2  text-lg font-bold bg-col5 text-col0 hover:text-col5 hover:bg-col0  "
                  >
                    Book
                  </button>
                  <dialog
                    id="my_modal_5"
                    className="modal text-black modal-bottom sm:modal-middle"
                  >
                    <div className="modal-box">
                      <h3 className="font-bold text-lg">{room}</h3>
                      <h1>Date : {selectedDate.toLocaleDateString('en-GB')}</h1>
                      <p className="py-4">
                        {shortdescription}
                      </p>
                      <p className="font-bold">Price : {pricePerNight}$</p>
                      <div className="modal-action justify-center">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          
                          <button onClick={handleBookRoom} className="btn border border-col5 hover:border-col5 rounded h-10 w-32 mt-2 mr-4 text-lg font-bold bg-col5 text-col0 hover:text-col5 hover:bg-col0 ">Confirm</button>
                          <button className="btn border border-col5 hover:border-col5  rounded h-10 w-32 mt-2  text-lg font-bold bg-col5 text-col0 hover:text-col5 hover:bg-col0 ">Cancel</button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="bg-col0">
        <h1 className="text-center font-bold text-5xl text-col5 py-12 bg-col0">
          Discover Our Rooms Through Captivating Images
        </h1>
        <div className="grid lg:grid-cols-3 grid-cols-1 w-4/5 gap-8 mx-auto pb-16">
          {images &&
            images?.map((image, imageIndex) => (
              <div key={imageIndex} className="card w-full  shadow-xl">
                <figure>
                  {" "}
                  <img
                    className="h-60 w-full rounded-lg"
                    key={imageIndex}
                    src={image}
                  />
                </figure>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
