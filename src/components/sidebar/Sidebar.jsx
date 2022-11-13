import React from "react";
import { useState } from "react";
import { HiHome } from "react-icons/hi";
import { AiFillContacts } from "react-icons/ai";
import { BsPeopleFill } from "react-icons/bs";
import { BsBagDashFill } from "react-icons/bs";
import { GiProgression } from "react-icons/gi";
import { RiBilliardsLine } from "react-icons/ri";
import { FcRating } from "react-icons/fc";
import { FaArrowRight } from "react-icons/fa";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <div
        className={`${
          open ? "w-20" : "w-40"
        } duration-500 sidbar relative  shadow-lg p-2 `}
      >
        
        <div className="top h-16 flex text-center text-mm justify-center">
          <span className="logo">
            <FcRating className="text-3xl" />
          </span>
        </div>
       

        <div className="center flex text-center text-mm justify-center relative">
          
          <ul>
          <button
            className=" relative p-2 left-8 top-0 bg-red-200s rounded bg-white border-2"
            onClick={() => setOpen(!open)}
          >
            <FaArrowRight />
          </button>
            <li className="mt-12"></li>
            <li className="mt-12">
              <span className="logo">
                <HiHome className="text-2xl" />
              </span>
            </li>
            <li className="mt-12">
              <span className="logo">
                <AiFillContacts className="text-2xl" />
              </span>
            </li>
            <li className="mt-12">
              <span className="logo">
                <BsPeopleFill className="text-2xl" />
              </span>
            </li>
            <li className="mt-12 ">
              <span className="logo">
                <BsBagDashFill className="text-2xl" />
              </span>
            </li>
            {/* <li className="mt-12">
                <span className="logo">
            <IoTime className="text-2xl"/>
          </span>
            </li> */}
            <li className="mt-12">
              <span className="logo">
                <GiProgression className="text-2xl" />
              </span>
            </li>
            <li className="mt-12">
              <span className="logo">
                <RiBilliardsLine className="text-2xl" />
              </span>
            </li>
          </ul>
        </div>

        <div className="bottom flex text-center text-mm justify-center mt-10">
          color
        </div>
      </div>
    </>
  );
};

export default Sidebar;
