/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { AuthCon } from "../Provider/AuthProv";
import Swal from "sweetalert2";



const Reviews = () => {

    const rm = useLoaderData();
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
    
      
    const {user}=useContext(AuthCon);
    
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const ratingChanged = (newRating) => {
        setRating(newRating);
      };
    const handleReviewSubmit = () => {
        
      const timestamp = new Date().toLocaleString();
      const usr=user.displayName;
      const newReview = { usr,room, rating, comment, timestamp };
  
      // Update reviews state with the new review
      fetch("https://raf-hotel-server.vercel.app/reviews", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newReview),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire(
              "Thank You for your review",
              "",
              "success"
            );
          }
        });
      
      
      
      setRating(0);
      setComment('');
    };
    
    return (
        <div className="relative" >
            <div className="hero min-h-screen lg:pt-0 md:pt-40 pt-60" style={{backgroundImage: `url(${images[0]})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content flex-col">
   <div>
   <h1 className="text-5xl text-col0 font-bold text-left">Write a Review</h1>
   </div>
   <div>
    <h1 className="text-col0 text-3xl">Comment</h1>
    <textarea value={comment} onChange={(e) => setComment(e.target.value)} className="text-black border border-col5 rounded-lg mt-2" name="" id="" cols="40" rows="10"></textarea>
   </div>
   <div>
   <h1 className="text-col0 text-3xl">Rating</h1>
   <div className="bg-col0 border border-col0 rounded-xl">
   <ReactStars
    count={5}
    onChange={ratingChanged}
    size={64}
    activeColor="#ffd700"
  />
   </div>
   <button onClick={handleReviewSubmit} className=" btn border border-col5 hover:border-col5 rounded h-10 w-32 mt-2 mr-4 text-lg font-bold bg-col5 text-col0 hover:text-col5 hover:bg-col0  ">Submit</button>
   </div>
  </div>
</div>
        </div>
    );
};

export default Reviews;