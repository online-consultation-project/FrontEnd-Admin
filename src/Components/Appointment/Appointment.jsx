import React from "react";
import AppointmentNav from "./AppointmentsNav";
import { Outlet } from "react-router-dom";

const Appointment = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-3 border-b-2 pb-3 py-5 border-slate-600">
        Appointments
      </h1>
      <AppointmentNav />

      <Outlet/>
    </div>
  );
};

export default Appointment;
