import React from "react";
import pic6 from "../sidebar/imgs/pic6.png";

import fjson from "./fjson";
const Feature = () => {
  return (
    <>
      <div className="main  h-80 m-6 flex">
        <div className="left shadow-2xl bg-white rounded-lg w-3/6 ">
          <div className="inner p-8 ">
            <h1>
              <b>Awaiting Aprovel</b>
              <div className="data">
                <div className="smalldata  mt-3">
                  <button>
                    Expence <span>0</span>
                  </button>
                  <button className="ml-6">
                    invoice <span>0</span>
                  </button>
                </div>
              </div>
            </h1>
            <div className="bottom mt-20 ml-16 justify-center">
              <img src={pic6} width="100" />
            </div>
          </div>
        </div>

        <div className="right ml-4  p-4 w-full shadow-2xl bg-white rounded-lg">
          <h1>Quick Action</h1>
          <div className=" grid grid-rows-2 mt-2 text-center grid-flow-col gap-2 ">
            {fjson.map((val) => {
              return (
                <div className=" p-4 shadow-xl content-center border-2 rounded-lg mx-2 border-black h-28">
                  {val.category}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
