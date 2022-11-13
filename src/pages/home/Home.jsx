import React from "react";
import Feature from "../../components/features/Feature";
import Fcards from "../../components/footercom/Fcards";
import History from "../../components/history/History";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widgets/Widget";

const Home = () => {
  return (
    <>
      <div className="home flex h-screen ">
        <Sidebar />
        <div className="homeContainer bg-gray-200  w-screen flex-2 ">
          <Navbar />

          <div className="mainDiv w-full">
            <div className="user flex justify-between m-5 ">
              <div className="left">Wellcome<b> honny</b></div>

              <div className=" bg-white right w-32 justify-between  shadow-md px-3 p-1 flex border-2 rounded-md border-gray-400 ;" >

                year
                <select name="year" id="" className="bg-transparent">
                  <option>1</option>
                  <option>3232</option>
                  <option>3</option>
                  <option>4</option>
                </select>

              </div>
            </div>
            <div className="widgets flex   mx-5">
              <Widget />
            </div>
            <div className="charts m-4">
              
              <Feature />
            </div>
            <div className="history  bg-gray-200">
            <History/>
            </div>
            

            <div className="footercards  bg-gray-200">
           <Fcards/>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Home;
