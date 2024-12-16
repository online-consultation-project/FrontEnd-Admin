import React from "react";
import AppointmentNav from "./AppointmentsNav";
import { Outlet } from "react-router-dom";

const Appointment = () => {
  return (
    <div className="bg-gray-200 w-full min-h-screen">
      <h1 className="text-2xl font-bold mb-7 border-b-2 pb-3 border-slate-600">
        Appointments
      </h1>
      <AppointmentNav />

      <Outlet/>
    </div>
  );
};

export default Appointment;
