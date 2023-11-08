/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";

const RoomDetails = () => {
  const rooom = useLoaderData();
  const {
    room,
    description,
    pricePerNight,
    sizeType,
    availability,
    mainImage,
    images,
    specialOffers,
  } = rooom;

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
                      <p className="text-left">{offerIndex+1}) {offer.description}</p>
                    </div>
                  ))}

                <div className="card-actions justify-center border-t-2">
                  <button className="    rounded h-10 w-32 mt-2  text-lg font-bold bg-col5 text-col0 hover:text-col5 hover:bg-col0  ">
                    Book
                  </button>
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
                <img className="h-60 w-full rounded-lg" key={imageIndex} src={image} />
              </figure>
            </div>
          ))}
          </div>
        
      </div>
    </div>
  );
};

export default RoomDetails;
