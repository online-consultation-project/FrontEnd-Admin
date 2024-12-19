import React from "react";
import { MdOutlineDateRange } from "react-icons/md";

const appointments = [
  {
    id: "p1",
    name: "Catherine Gracey",
    age: 36,
    gender: "Female",
    date: "11 Nov 2024 10:45 AM",
    email: "sri123@gmail.com",
    phone: "1234567898",
    type: "Consult for Fever",
  },
  {
    id: "p2",
    name: "Robert Miller",
    age: 38,
    gender: "Male",
    date: "11 Nov 2024 10:45 AM",
    email: "sri123@gmail.com",
    phone: "1234567898",
    type: "Consult for Fever",
  },
  {
    id: "p3",
    name: "Robert Miller",
    age: 38,
    gender: "Male",
    date: "11 Nov 2024 10:45 AM",
    email: "sri123@gmail.com",
    phone: "1234567898",
    type: "Consult for Fever",
  },
  {
    id: "p4",
    name: "Robert Miller",
    age: 38,
    gender: "Male",
    date: "11 Nov 2024 10:45 AM",
    email: "sri123@gmail.com",
    phone: "1234567898",
    type: "Consult for Fever",
  },
  {
    id: "p5",
    name: "Robert Miller",
    age: 38,
    gender: "Male",
    date: "11 Nov 2024 10:45 AM",
    email: "sri123@gmail.com",
    phone: "1234567898",
    type: "Consult for Fever",
  },
];

const AppointmentCard = ({ appointment }) => (
  <div className="bg-white shadow-md rounded-lg p-6 flex flex-col gap-4">
    <div className="flex flex-col justify-center items-center text-center">
      <h3 className="font-semibold text-lg">{appointment.name}</h3>
      <p className="text-sm text-gray-500">
        Age: {appointment.age} | {appointment.gender}
      </p>
    </div>

    <div className="flex flex-col items-center bg-gray-200 p-4 rounded-md text-sm gap-2">
      <p className="text-gray-800 font-medium text-lg">{appointment.type}</p>

      <div className="flex items-center gap-2 text-gray-800">
        <MdOutlineDateRange className="text-xl" />
        <p>{appointment.date}</p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-700">
        <p className="break-words">{appointment.email}</p>
        <p>{appointment.phone}</p>
      </div>
    </div>
  </div>
);

const MyPatients = () => (
  <div className="bg-gray-200 w-full min-h-screen">
    <h1 className="text-2xl font-bold mb-7 border-b-2 pb-3 border-slate-600">
      My Patients
    </h1>

    <div className="grid gap-6 max-[545px]:grid-cols-1 max-sm:grid-cols-2 sm:max-[900px]:grid-cols-1 sm:max-xl:grid-cols-2 xl:max-2xl:grid-cols-3 2xl:grid-cols-3">
      {appointments.map((appointment) => (
        <AppointmentCard key={appointment.id} appointment={appointment} />
      ))}
    </div>
  </div>
);

export default MyPatients;
