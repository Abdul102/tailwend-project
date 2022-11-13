import React from "react";
import pic1 from "../sidebar/imgs/pic1.png";
import pic2 from "../sidebar/imgs/msg.png";
import { FaBeer } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className="nav 5/6 shadow-lg flex items-center bg-white ml-5">
        <div className="leftbar w-full jus text-center p-2 ">
          <input
            type="search"
            placeholder="enter your text here"
            className="w-4/5 p-2 bg-gray-200 text-black "
          />
        </div>
        <div className="centerbar w-5/6 text-end  ">
          <button className="w-20 bg-slate-200  h-10 mx-1 rounded ">
            00:00
          </button>
          <button className="w-32 item-center  bg-slate-200  h-10 mx-3 rounded  ">
            Start Timer
          </button>
          <button className="w-36 bg-blue-800  text-white h-10 mx-1 rounded ">
            + create new
          </button>
        </div>
        <div className="endbar w-1/3  text-end px-20 flex">
          <span className="text-black">
           
            <FaBeer />
          </span>

          <span className="text-black">
            <img src={pic2} className="w-5 ml-6 cursor-pointer" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
