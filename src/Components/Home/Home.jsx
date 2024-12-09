import React from "react";
import Sidebar from "../SideBar/SideBar";
import { Outlet } from "react-router-dom";

const HomeSection = () => {
  return (
    <div className="flex">
      <div className="fixed top-0 left-0 h-full sm:h-screen sm:w-72 w-full">
        <Sidebar />
      </div>
      <div className="  sm:ml-72 min-h-screen overflow-x-scroll flex-1 ml-0 max-sm:mt-16">
        <div className="bg-gray-200 w-full min-h-screen  px-3 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
