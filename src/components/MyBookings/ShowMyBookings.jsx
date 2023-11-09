/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const ShowMyBookings = ({ pro, alldata, setalldata }) => {
  let { _id, room, roomID, availability, bookingDate, mainImage, price } = pro;

  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(today);
  const [bookdate, setbookdate] = useState(bookingDate);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const hanupd = (_id) => {
    console.log(_id);
    console.log(room);
    const dat = selectedDate.toLocaleDateString("en-GB");
    console.log(dat);
    const newdata = {
      bookingDate: dat,
    };

    fetch(`http://localhost:5000/bookings/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newdata),
    })
      .then((res) => res.json())
      .then((data) => {
        setbookdate(dat);
        //setalldata(data)
      });
  };

  const handel = (_id) => {
    console.log(_id);
    console.log(room);
   
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const newdata = {
          availability,
        };
        console.log(newdata);
        fetch(`http://localhost:5000/rooms/${roomID}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newdata),
        })
          .then((res) => res.json())
          .then((data) => {});

        fetch(`http://localhost:5000/bookings/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your booking has been cancelled",
                "success"
              );
              const rem = alldata.filter((pr) => pr._id !== _id);
              setalldata(rem);
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="card card-compact  bg-col0 shadow-xl">
        <figure>
          <img className="h-72 " src={mainImage} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title justify-center">{room}</h2>
          <p className="text-center">Date : {bookdate}</p>
          <p className="text-center">Price : {price}$</p>
          <div className="card-actions justify-center">
            
            <Link to={`/update/${_id}`}><button className="btn btn-primary">
              Update
            </button></Link>
            <button onClick={() => handel(_id)} className="btn btn-primary">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowMyBookings;
