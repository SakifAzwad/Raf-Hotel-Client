/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link, useLoaderData } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { AuthCon } from "../Provider/AuthProv";
const RoomDetails = () => {
    
  const rm = useLoaderData();
  const [rooom, setroom] = useState(rm);
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(today);
  const { user } = useContext(AuthCon);
  let {
    _id,
    room,
    description,
    pricePerNight,
    sizeType,
    availability,
    mainImage,
    images,
    specialOffers,
    shortdescription,
  } = rm;
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const [bookings, setbookings] = useState([]);

  const [rev,setrev]=useState([]);

  useEffect(() => {
    fetch("https://raf-hotel-server.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => {
        setrev(data);
      });
  }, []);

  const xs=rev.filter((x)=>x.room===room);


  useEffect(() => {
    fetch("https://raf-hotel-server.vercel.app/bookings")
      .then((res) => res.json())
      .then((data) => {
        setbookings(data);
      });
  }, []);
  
  
let [av,setav]=useState(availability);

  const isDateAlreadyBooked = (rom, seldDate) => {
    return (
      bookings &&
      bookings?.some((g) => g.room === rom && g.bookingDate === seldDate)
    );
  };

  const handleBookRoom = () => {

    
    if (av > 0) {
      const pp = isDateAlreadyBooked(
        room,
        selectedDate.toLocaleDateString("en-GB")
      );

      if (pp) {
        Swal.fire({
          icon: "error",
          text: "The Room is already booked in this date",
        });
      } else {
        const datas = {
          email: user.email,
          roomID:_id,
          availability:av,
          room: room,
          mainImage:mainImage,
          bookingDate: selectedDate.toLocaleDateString("en-GB"),
          price: pricePerNight,
        };

        bookings.push(datas);
        av--;
        availability=av;
        
        const newdata = {
          availability,
        };
        console.log(newdata);
        fetch(`https://raf-hotel-server.vercel.app/rooms/${_id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newdata),
        })
          .then((res) => res.json())
          .then((data) => {
            setav(av);
            setroom(data);
          });

        fetch("https://raf-hotel-server.vercel.app/bookings", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(datas),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire(
                "Thank You for staying!",
                "Room has been booked",
                "success"
              );
            }
          });
      }
    }
    else{
        Swal.fire({
            icon: "error",
            text: "This Room is not Available",
          });

    }
  };

  const StarRating = ({ rating }) => {
    const stars = Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-2xl ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
      >
        ★
      </span>
    ));
  
    return <div className="flex ">{stars}</div>;
  };

  return (
    <div className="relative">
      <div
        className="hero min-h-screen lg:pt-0 md:pt-40 pt-60"
        style={{ backgroundImage: `url(${images[1]})` }}
      >
        <div className=" hero-overlay bg-opacity-80"></div>
        <div className="lg:flex pt-20 pb-20">
          <div className="lg:w-2/3">
            <img className=" lg:px-40" src={mainImage} alt="" />
            <p className="lg:px-40 text-center pt-12 text-col0">{description}</p>
          </div>
          <div className="lg:w-1/3 ml-4 md:ml-0 lg:pt-0 pt-12 lg:px-0 md:px-48">
            <div className="card w-96 bg-col4 bg-opacity-50 shadow-xl">
              <div className="card-body text-center text-lg text-col0">
                <h2 className="text-4xl text-center font-bold ">{room}</h2>
                <p>
                  Room Size: <span className="font-bold">{sizeType}</span>
                </p>
                <p>
                  Available Rooms:{" "}
                  <span className="font-bold">{av}</span>
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

                    {
                        user ? <><button
                    onClick={() => 
                      document.getElementById("my_modal_5").showModal()
                    }
                    className="rounded h-10 w-32 mt-2  text-lg font-bold bg-col5 text-col0 hover:text-col5 hover:bg-col0  "
                  >
                    Book
                  </button></> : <>
                 <Link to="/login"> <button
                    className="rounded h-10 w-32 mt-2  text-lg font-bold bg-col5 text-col0 hover:text-col5 hover:bg-col0  "
                  >
                    Book
                  </button></Link>
                  
                  
                  </>
                    }
                  
                  <dialog
                    id="my_modal_5"
                    className="modal text-black modal-bottom sm:modal-middle"
                  >
                    <div className="modal-box">
                      <h3 className="font-bold text-lg">{room}</h3>
                      <h1>Date : {selectedDate.toLocaleDateString("en-GB")}</h1>
                      <p className="py-4">{shortdescription}</p>
                      <p className="font-bold">Price : {pricePerNight}$</p>
                      <div className="modal-action justify-center">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}

                          <button
                            onClick={handleBookRoom}
                            className="btn border border-col5 hover:border-col5 rounded h-10 w-32 mt-2 mr-4 text-lg font-bold bg-col5 text-col0 hover:text-col5 hover:bg-col0 "
                          >
                            Confirm
                          </button>
                          <button className="btn border border-col5 hover:border-col5  rounded h-10 w-32 mt-2  text-lg font-bold bg-col5 text-col0 hover:text-col5 hover:bg-col0 ">
                            Cancel
                          </button>
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
      <div className="bg-col0">
      <h1 className="text-center font-bold text-5xl text-col5 py-12 bg-col0">
          Customer Reviews
        </h1>
        {
            xs.length ? (<div className="grid lg:grid-cols-3 grid-cols-1 w-4/5 gap-8 mx-auto pb-16">
          {xs &&
            xs?.map((i) => (
              <div key={i._id} className="card w-full  shadow-xl">
                <div className="p-4">
                <h1>{i.comment}</h1>
                </div>
                <div className="mx-auto">
                <StarRating rating={i.rating} />
                </div>

                <div>
                    <h1 className="pl-4">{i.usr}</h1>
                </div>
                <div>
                    <h1 className="text-right pr-4">{i.timestamp}</h1>
                </div>
        
              </div>
            ))}
        </div>) : 
        <>
        
        <h1 className="text-center font-bold text-3xl text-black py-12 bg-col0">
          No Reviews
        </h1>
            
        </>
        }


      </div>
    </div>
  );
};

export default RoomDetails;
