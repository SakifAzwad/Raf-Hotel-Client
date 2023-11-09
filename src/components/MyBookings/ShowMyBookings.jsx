/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function getDaysDifference(dateString) {
  const inputDate = new Date(dateString.split("/").reverse().join("-"));
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const timeDifference = inputDate.getTime() - today.getTime();
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  return daysDifference;
}

const ShowMyBookings = ({ pro, alldata, setalldata }) => {
  let { _id, room, roomID, availability, bookingDate, mainImage, price } = pro;

  const handel = (_id) => {
    const difference = getDaysDifference(bookingDate);

    if (difference > 1) {
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
    } else {
      Swal.fire({
        icon: "error",
        text: "You can't cancel the booking",
      });
    }
  };

  return (
    <div>
      <div className="card card-compact  bg-col0 shadow-xl">
        <figure>
          <img className="h-72 " src={mainImage} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title justify-center">{room}</h2>
          <p className="text-center">Date : {bookingDate}</p>
          <p className="text-center">Price : {price}$</p>
          <div className="card-actions justify-center">
            <Link to={`/update/${_id}`}>
              <button className="btn border border-col5 hover:border-col5 rounded h-10 w-32 mt-2 mr-4 text-lg font-bold bg-col5 text-col0 hover:text-col5 hover:bg-col0 ">Update</button>
            </Link>
            <button onClick={() => handel(_id)} className="btn border border-col5 hover:border-col5 rounded h-10 w-32 mt-2 mr-4 text-lg font-bold bg-col5 text-col0 hover:text-col5 hover:bg-col0 ">
              Cancel
            </button>
            <Link to={`/review/${roomID}`}>
            <button className="btn w-full border border-col5 hover:border-col5 rounded h-10  mt-2  text-lg font-bold bg-col5 text-col0 hover:text-col5 hover:bg-col0 ">
              Write a Review
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowMyBookings;
