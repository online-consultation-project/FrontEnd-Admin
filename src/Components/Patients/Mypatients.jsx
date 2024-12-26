import React, { useEffect, useState } from "react";
import axios from "axios"; // Import axios
import { MdEmail, MdOutlineDateRange, MdPhone } from "react-icons/md";
import { format } from "date-fns"; // Import date formatting library
import Loader from "../ReusableComp/Loader";

const MyPatients = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const authToken = localStorage.getItem("token");
  const adminId = localStorage.getItem("adminId");

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get(
          `http://localhost:7000/api/appointment/acceptbookings?doctorId=${adminId}`,
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );
        setAppointments(response.data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching appointments");
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  if (loading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="bg-gray-200 w-full min-h-screen">
      <h1 className="text-2xl font-bold mb-7 border-b-2 pb-3 border-slate-600">
        My Patients
      </h1>

      <div className="grid gap-6 max-[545px]:grid-cols-1 max-sm:grid-cols-2 sm:max-[900px]:grid-cols-1 sm:max-xl:grid-cols-2 xl:max-2xl:grid-cols-3 2xl:grid-cols-3">
        {appointments.map((appointment) => (
          <AppointmentCard key={appointment._id} appointment={appointment} />
        ))}
      </div>
    </div>
  );
};

const AppointmentCard = ({ appointment }) => {
  // Format date and time
  const formattedDate = format(new Date(appointment.date), "dd MMM yyyy");
  const formattedTime = appointment.slot;

  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col gap-4">
      <div className="flex flex-col justify-center items-center text-center">
        <h3 className="font-semibold text-lg">{appointment.patientName}</h3>
        <p className="text-sm text-gray-500">
          Age: {appointment.patientAge} | {appointment.patientGender}
        </p>
      </div>

      <div className="flex flex-col items-center bg-gray-200 p-4 rounded-md text-sm gap-2">
        <p className="text-gray-800 font-medium text-lg">
          {appointment.patientConsult}
        </p>

        <div className="flex items-center gap-2 text-gray-800">
          <MdOutlineDateRange className="text-xl" />
          <p>{formattedDate}</p>
        </div>

        <p className="text-gray-800 font-medium">Time: {formattedTime}</p>

        <div className="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-4 text-gray-700">
       
          <div className="flex items-center gap-2">
            <MdPhone className="text-xl" />
            <p>{appointment.patientPhone}</p>
          </div>
        </div>

        <div className="text-gray-700 flex w-full justify-evenly">
          <p>Payment: ₹{appointment.payment}</p>
          <p>
            Status: <span className="text-green-700">{appointment.status}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyPatients;
