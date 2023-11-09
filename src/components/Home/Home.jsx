/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext } from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import AwesomeSliderStyles from "react-awesome-slider/src/styles";
import { Parallax } from "react-parallax";
import { Link, useLoaderData } from "react-router-dom";
import { AuthCon } from "../Provider/AuthProv";
import './Home.css';
import Marquee from "react-fast-marquee";
import Room from "../Rooms/Room";
import Room2 from "./Room2";


const AutoplaySlider = withAutoplay(AwesomeSlider);

const Home = () => {

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

  const {user}=useContext(AuthCon);

  const roms=useLoaderData();

  const rooms = roms.filter((item, index) => index < 3);
  const slider = (
    <AutoplaySlider
      className="h-full"
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={2000}
    >
      <div className="w-full h-full">
        <div
          className="hero min-h-screen h-full"
          style={{
            backgroundImage: "url(https://i.ibb.co/fC7QC7h/download.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="">
              <h1 className="mb-5 text-5xl text-col0 font-bold">
                Discover Your Perfect Retreat at Raf Hotel
              </h1>
              <p className="mb-5 text-xl">
              Raf Hotel invites you to a realm of refined luxury. Immerse yourself in a haven of comfort, where every moment is crafted for a sophisticated and unforgettable experience. Welcome.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full">
        <div
          className="hero min-h-screen h-full"
          style={{
            backgroundImage: "url(https://i.ibb.co/RccGSsv/download-1.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="">
              <h1 className="mb-5 text-5xl text-col0 font-bold">
              Embrace sophistication, indulge in comfort. Your perfect getaway starts here!
              </h1>
              <p className="mb-5">
              Welcome to Raf Hotel, where sophistication meets warmth. Experience unparalleled hospitality and modern comfort. Your journey begins in a haven of tranquility, curated for an unforgettable stay.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full">
        <div
          className="hero min-h-screen h-full"
          style={{
            backgroundImage: "url(https://i.ibb.co/gSTD8fJ/download-2.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="">
              <h1 className="mb-5 text-5xl text-col0 font-bold">
              Stay in Style at Raf Hotel: Unwind in opulent rooms, savor exquisite cuisine, and make every moment extraordinary
              </h1>
              <p className="mb-5">
              Discover Raf Hotel, a sanctuary of elegance and comfort. Immerse yourself in unparalleled luxury, where every detail is designed to elevate your stay. Welcome to a world of refined indulgence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AutoplaySlider>
  );

  return (
    <div className="relative">
      <div className="pb-12 bg-col0">{slider}</div>

      <div className="bg-col0 flex">
        <div className="w-1/2">
          <h1 className="text-center text-3xl pt-20">Weekend Escape Package</h1>

          <h1 className="text-center mx-auto w-1/3 text-lg pt-4">
            Enjoy a relaxing weekend getaway with special rates, complimentary
            breakfast, and a late checkout
          </h1>
          <h1 className="text-center text-3xl pt-12">
          Enjoy a 20% discount on weekend getaways! 
          </h1>
        </div>
        <div  className="w-1/2 p-20">
            <img className="rounded-xl" src="https://i.ibb.co/rdfPgHh/deluxe-twin-4.jpg" alt="" />
        </div>
      </div>
      <div className="bg-col0 flex flex-row-reverse">
        <div className="w-1/2">
          <h1 className="text-center text-3xl pt-20">Family Fun Deal</h1>

          <h1 className="text-center mx-auto w-1/3 text-lg pt-4">
          Treat the family to a memorable stay! Kids stay and eat free, plus enjoy family-friendly activities and amenities
          </h1>
          <h1 className="text-center text-3xl pt-12 mx-12">
          Enjoy a 25% discount on family-friendly activities and amenities.
          </h1>
        </div>
        <div className="w-1/2 p-20">
            <img className="rounded-xl" src="https://i.ibb.co/djj65kL/3.jpg" alt="" />
        </div>
      </div>
      <Parallax  bgImage="https://i.ibb.co/HYrw9Bw/4.jpg" strength={1000}>
      <div className="bg-black bg-opacity-60" style={{ height: '500px' }}>
        <div className="content ">
          <h1 className="text-center text-5xl pt-24 text-col5 font-bold mx-40">Embrace sophistication, indulge in comfort. Your perfect getaway starts here!Elevate your stay with unparalleled service and modern amenities. Book your retreat now!</h1>
        </div>
        <div className="flex justify-center">
            {
                user ? <>
                
                <Link to="/rooms">
            <button className="btn  border border-col5 hover:border-col5 rounded h-16 w-46 mt-2 mr-4 text-lg font-bold bg-col5 text-col0 hover:text-col5 hover:bg-col0 ">Book Now!</button>
            </Link>
               
                </>: <>
                
                <Link to="/signup">
            <button className="btn  border border-col5 hover:border-col5 rounded h-10 w-32 mt-2 mr-4 text-lg font-bold bg-col5 text-col0 hover:text-col5 hover:bg-col0 ">Join US</button>
            </Link>
                
                
                </>
            }
        </div>
        <div>
                
        </div>
      </div>
    </Parallax>
    <div className="bg-col0">
        <h1 className="text-center font-bold text-5xl text-col5 py-12 bg-col0">
          Featured Rooms
        </h1>
        <div className="grid lg:grid-cols-3 grid-cols-1 w-4/5 gap-8 mx-auto py-16">
            
            {
            rooms &&
              rooms?.map((rooom,index) => 
              
                // if(index>3)return;
                (
                    <Room2 key={rooom._id} rooom={rooom}></Room2>
                )
              )}
          </div>
    </div>
    

    <div className="bg-col0">
    <h1 className="text-center font-bold text-5xl text-col5 py-12 bg-col0">
          Testimonials
        </h1>
        
       <div className="mx-96">
       <Marquee className="px-12" speed={100} >
        <div className="card w-1/2  shadow-xl bg-white">
                <div className="p-4">
                <h1>Incredible ambiance! Raf Hotel combines comfort and style effortlessly. The attention to detail and friendly staff make it exceptional.</h1>
                </div>
                <div className="mx-auto">
                <StarRating rating={4} />
                </div>
                <div>
                    <h1 className="pl-4">{"Sakif Azwad"}</h1>
                </div>
            
              </div>
        <div className="card w-1/2  shadow-xl bg-white">
                <div className="p-4">
                <h1>Outstanding hospitality! From the elegant decor to the courteous staff, Raf Hotel provides a delightful and comfortable stay.</h1>
                </div>
                <div className="mx-auto">
                <StarRating rating={4} />
                </div>
                <div>
                    <h1 className="pl-4">{"Sakif Azwad"}</h1>
                </div>
            
              </div>
        <div className="card w-1/2  shadow-xl bg-white">
                <div className="p-4">
                <h1>Incredible ambiance! Raf Hotel combines comfort and style effortlessly. The attention to detail and friendly staff make it exceptional.</h1>
                </div>
                <div className="mx-auto">
                <StarRating rating={4} />
                </div>
                <div>
                    <h1 className="pl-4">{"Sakif Azwad"}</h1>
                </div>
            
              </div>
        <div className="card w-1/2  shadow-xl bg-white">
                <div className="p-4">
                <h1>Raf Hotel exceeded expectations! Modern facilities, impeccable cleanliness, and a welcoming atmosphere. A must-visit for travelers.</h1>
                </div>
                <div className="mx-auto">
                <StarRating rating={4} />
                </div>
                <div>
                    <h1 className="pl-4">{"Saniad Faruqe"}</h1>
                </div>
            
              </div>

        </Marquee>
       </div>

    </div>
    <div className="">
    <div className='w-full py-16 text-col5 bg-col0 px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
          Experience unparalleled luxury and comfort
          with our latest offerings. Dive into the world of Raf Hotel and make every stay extraordinary
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input
              className='p-3 flex w-full rounded-md text-black'
              type='email'
              placeholder='Enter Email'
            />
            <button className='bg-col5 text-col0 rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>
              Notify Me
            </button>
          </div>
          <p>
            We care bout the protection of your data. Read our{' '}
            <span className='text-col5'>Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Home;
