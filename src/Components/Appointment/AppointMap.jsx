import { useState } from "react";
import { MdAddCall, MdOutlineAttachEmail } from "react-icons/md";
import { IoMdTime } from "react-icons/io";

// AppointmentCard Component
const AppointmentCard = ({ appointment, onAccept, onReject }) => {
  return (
    <div className="flex flex-wrap items-start md:items-center justify-between bg-white p-4 rounded-lg shadow-md mb-4 gap-4">
      {/* Name Section */}
      <div className="flex-1 min-w-[100px]">
        <h4 className="font-semibold text-lg">{appointment.name}</h4>
      </div>

      {/* Contact Information Section */}
      <div className="flex-1 flex flex-col justify-center items-start gap-2 min-w-[150px]">
        <div className="flex items-center gap-2">
          <MdOutlineAttachEmail />
          <p className="text-gray-600 break-all text-sm">{appointment.email}</p>
        </div>
        <div className="flex items-center gap-2">
          <MdAddCall />
          <p className="text-gray-600 text-sm">{appointment.phone}</p>
        </div>
      </div>

      {/* Gender and Age Section */}
      <div className="flex-1 flex flex-col justify-center items-start gap-2 min-w-[100px]">
        <div className="flex items-center gap-2">
          <p className="font-medium text-gray-600">Gender:</p>
          <p className="text-gray-600">{appointment.gender}</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="font-medium text-gray-600">Age:</p>
          <p className="text-gray-600">{appointment.age}</p>
        </div>
      </div>

      {/* Type and Date Section */}
      <div className="flex-1 flex flex-col gap-2 text-sm min-w-[150px] text-left md:text-center">
        <p className="text-base font-medium">{appointment.type}</p>
        <div className="flex items-center gap-2">
          <IoMdTime className="text-xl" />
          <p className="text-gray-600">{appointment.date}</p>
        </div>
      </div>

      {/* Status Section */}
      <div className="flex-1 flex flex-col justify-center items-start gap-2 min-w-[100px]">
        <h2 className="font-medium text-gray-700">Status</h2>
        <p className="font-medium">
          {appointment.status === "pending" ? "Pending" : appointment.status}
        </p>
      </div>

      {/* Buttons Section */}
      <div className="flex gap-2">
        <button
          onClick={() => onAccept(appointment.id)}
          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
          disabled={appointment.status !== "pending"}
        >
          Accept
        </button>
        <button
          onClick={() => onReject(appointment.id)}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          disabled={appointment.status !== "pending"}
        >
          Reject
        </button>
      </div>
    </div>
  );
};

// AppointmentList Component
const AppointmentList = () => {
  const [appointments, setAppointments] = useState([
    {
      id: "p1",
      name: "Adrian",
      date: "11 Nov 2024 10:45 AM",
      email: "sri123@gmail.com",
      phone: "1234567898",
      type: "Consult for Fever",
      status: "pending",
      gender: "Male",
      age: 20,
    },
    {
      id: "p2",
      name: "Kelly",
      date: "10 Nov 2024 02:00 PM",
      email: "deva123@gmail.com",
      phone: "1234567898",
      type: "Consult for body pain",
      status: "pending",
      gender: "Female",
      age: 23,
    },
  ]);

  // Handle Accept Action
  const handleAccept = (id) => {
    setAppointments((prevAppointments) =>
      prevAppointments.map((appointment) =>
        appointment.id === id
          ? { ...appointment, status: "Accepted" }
          : appointment
      )
    );
  };

  // Handle Reject Action
  const handleReject = (id) => {
    setAppointments((prevAppointments) =>
      prevAppointments.map((appointment) =>
        appointment.id === id
          ? { ...appointment, status: "Rejected" }
          : appointment
      )
    );
  };

  return (
    <div className="container mx-auto px-4 mb-4">
      {appointments.map((appointment) => (
        <AppointmentCard
          key={appointment.id}
          appointment={appointment}
          onAccept={handleAccept}
          onReject={handleReject}
        />
      ))}
    </div>
  );
};

export default AppointmentList;
