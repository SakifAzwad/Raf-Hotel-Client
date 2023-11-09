import { useContext, useState } from "react";
import { AuthCon } from "../Provider/AuthProv";
import { useLoaderData } from "react-router-dom";
import ShowMyBookings from "./ShowMyBookings";

const MyBookings = () => {
  const { user } = useContext(AuthCon);
  const datas = useLoaderData();
  const xs = datas.filter((x) => x.email === user.email);
  const [alldata, setalldata] = useState(xs);

  return (
    <div className="relative">
      <div
        className="hero min-h-screen lg:pt-0 md:pt-40 pt-60"
        style={{
          backgroundImage: "url(https://i.ibb.co/zNQQyPR/download.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-80"></div>
        <div>
            {
                <div className="grid lg:grid-cols-3 grid-cols-1 md:mx-auto md:w-4/5 gap-8 lg:ml-4 py-16">
                {alldata &&
                  alldata?.map((pro) => (
                    <ShowMyBookings key={pro._id} pro={pro} alldata={alldata} setalldata={setalldata}></ShowMyBookings>
                  ))}
              </div>
            }
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
