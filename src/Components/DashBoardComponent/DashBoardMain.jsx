import React from "react";
import { Outlet } from "react-router-dom";

const DashBoardMain = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-3 border-b-2 pb-3 py-5 border-slate-600">
        Admin DashBoard
      </h1>

      <Outlet />
    </div>
  );
};

export default DashBoardMain;
