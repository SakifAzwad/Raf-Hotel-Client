/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { AuthCon } from "../Provider/AuthProv";

const UpdateRoom = () => {
    const rm = useLoaderData();
    const [rooom, setroom] = useState(rm);
    const today = new Date();
    
  
    const [bookings, setbookings] = useState([]);
  
    useEffect(() => {
      fetch("https://raf-hotel-server.vercel.app/bookings")
        .then((res) => res.json())
        .then((data) => {
          setbookings(data);
        });
    }, []);
    const { user } = useContext(AuthCon);
    let {
      _id,
      room,
      price,
      availability,
      mainImage,
      bookingDate
    } = rm;
    console.log(rm);
  
    const [selectedDate, setSelectedDate] = useState(today);
  
    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
    
    const handleBookRoom = () => {

        const datas = {
            bookingDate: selectedDate.toLocaleDateString("en-GB"),
          };
          fetch(`https://raf-hotel-server.vercel.app/bookings/${_id}`, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(datas),
          })
            .then((res) => res.json())
            .then((data) => {
              
                Swal.fire(
                  "Thank You for staying!",
                  "Booking Date has been changed",
                  "success"
                );
              
            });

    }
    return (
      <div className="relative">
        <div
          className="hero min-h-screen"
          style={{ backgroundImage: `url(${mainImage}})` }}
        >
          <div className="hero-overlay bg-opacity-80"></div>
          <div className="flex pt-20 pb-20">
            <div className="w-2/3">
              <img className=" px-40" src={mainImage} alt="" />
              
            </div>
            <div className="w-1/3">
              <div className="card w-96 bg-col4 bg-opacity-50 shadow-xl">
                <div className="card-body text-center text-lg text-col0">
                  <h2 className="text-4xl text-center font-bold ">{room}</h2>
                  <p className="border-t-2 py-2">New Booking Date :</p>
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
                      className="rounded h-10 w-32 mt-2  text-lg font-bold bg-col5 text-col0 hover:text-col5 hover:bg-col0  "
                    >
                      Update
                    </button>
                    <dialog
                      id="my_modal_5"
                      className="modal text-black modal-bottom sm:modal-middle"
                    >
                      <div className="modal-box">
                        <h3 className="font-bold text-lg">{room}</h3>
                        <h1>Date : {selectedDate.toLocaleDateString("en-GB")}</h1>
                        
                        <p className="font-bold">Price : {price}$</p>
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
  
      </div>
    );
  };


export default UpdateRoom;