import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
  return (
    <div>
      <div className="flex justify-center bg-[#FAF6F1]">
        <img
          className="pt-4 w-52"
          src="https://i.ibb.co/pyHFVLB/cover-removebg.png"
          alt=""
        />
      </div>
      <div className="lg:flex bg-opacity-50  bg-black lg:h-16 items-center absolute z-10 left-0 right-0">
        <div className="lg:w-2/3 ">
          <ul className=" md:flex text-col0 font-light justify-evenly items-center gap-y-4 text-lg menu-vertical lg:menu-horizontal px-1">
            <li>
              <NavLink
                className="relative after:bg-[#B1A296] after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="relative after:bg-[#B1A296] after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer"
                to="/rooms"
              >
                Rooms
              </NavLink>
            </li>
            <li>
              <NavLink
                className="relative after:bg-[#B1A296] after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer"
                to="/mybookings"
              >
                My Bookings
              </NavLink>
            </li>
            <li>
              <NavLink
                className="relative after:bg-[#B1A296] after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer"
                to="/aboutus"
              >
                About Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="lg:w-1/3 mb-2 flex lg:justify-end justify-center items-center pr-4 ">
          <div className="">
           <Link to='/signup'>
           <button className="mr-4 border border-col0 hover:border-col5 rounded h-10 w-32 mt-2  text-lg font-light  bg-transparent text-col0 hover:text-col5 hover:font-bold">
              Sign Up
            </button>
           </Link>
            <Link to='/login'>
            <button className="border border-col0 hover:border-col5 rounded h-10 w-32 mt-2  text-lg font-light  bg-transparent text-col0 hover:text-col5 hover:font-bold">Login</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
