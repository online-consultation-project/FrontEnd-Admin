import React from "react";
import AdminSlotCreation from "./AdminSlotCreation";

const Slots = () => {
  return (
    <div className="con">
      <h1 className="text-2xl font-bold mb-3 border-b-2 pb-3 py-5 border-slate-600">
        Create Slots For Appointments
      </h1>
    <AdminSlotCreation/>
    </div>
  );
};

export default Slots;
