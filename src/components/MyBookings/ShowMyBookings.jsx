/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import Swal from "sweetalert2";


const ShowMyBookings = ({ pro, alldata, setalldata }) => {
  let {_id, room,roomID,availability, bookingDate, mainImage, price } = pro;

  const handel = _id =>
  {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
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
                .then((data) => {
                  
                });
        

          fetch(`http://localhost:5000/bookings/${_id}`,
          {
            method:'DELETE'
          })
          .then(res=>res.json())
          .then(data=>
            {
                console.log(data);
                if(data.deletedCount>0)
                {
                    Swal.fire(
                        'Deleted!',
                        'Your booking has been cancelled',
                        'success'
                      )
                      const rem=alldata.filter(pr=>pr._id!==_id);
                      setalldata(rem);
                }
            })
        }
      })
  }

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
            <button className="btn btn-primary">Update</button>
            <button onClick={()=>handel(_id)} className="btn btn-primary">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowMyBookings;
