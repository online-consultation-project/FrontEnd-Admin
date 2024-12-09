import React, { useEffect, useState } from "react";
import axios from "axios";
import GetSlot from "./GetSlot";
import { FaEdit } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const AdminSlotCreation = () => {
  const defaultDate = new Date().toISOString().split("T")[0];
  const intervalOptions = [30, 60]; // Time intervals in minutes
  const [date, setDate] = useState(defaultDate);
  const [slots, setSlots] = useState([]);
  const [interval, setInterval] = useState(intervalOptions[1]);
  const [startTime, setStartTime] = useState("09:00 AM");
  const [endTime, setEndTime] = useState("08:00 PM");
  const { doctor_id } = useParams();
  const [editMode, setEditMode] = useState(false);
  const navigate = useNavigate();

  const convertTimeToDate = (time) => {
    const [hour, minPart] = time.split(":");
    const [minutes, period] = minPart.split(" ");
    let hours = parseInt(hour, 10);
    if (period === "PM" && hours !== 12) hours += 12;
    if (period === "AM" && hours === 12) hours = 0;
    return new Date(2000, 0, 1, hours, parseInt(minutes, 10));
  };

  const convertDateToTime = (date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const period = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes.toString().padStart(2, "0");
    return `${formattedHours}:${formattedMinutes} ${period}`;
  };

  const generateSlots = () => {
    const start = convertTimeToDate(startTime);
    const end = convertTimeToDate(endTime);
    const slotsGenerated = [];
    let current = new Date(start);

    while (current < end) {
      const next = new Date(current.getTime() + interval * 60000);
      if (next <= end) {
        slotsGenerated.push(
          `${convertDateToTime(current)} - ${convertDateToTime(next)}`
        );
      }
      current = next;
    }
    setStartTime("");
    setEndTime("");
    setSlots(slotsGenerated);
  };

  //save

  const handleSaveSlots = async () => {
    const authtoken = localStorage.getItem("token");
    const admin_id = localStorage.getItem("adminId");

    try {
      editMode
        ? await axios
            .put(
              `http://localhost:7000/admin/slots/?objId=${doctor_id}`,
              {
                slotDate: date,
                slots,
              },
              {
                headers: {
                  authorization: `Bearer ${authtoken}`,
                },
              }
            )
            .then((res) => {
              toast.success(res.data.message);
              navigate("/admin/profile");
            })
            .catch((err) => {
              toast.error(err.response.data.message);
            })
        : await axios.post(
            `http://localhost:7000/admin/slots`,
            {
              slotDate: date,
              slots,
              doctor_id: admin_id,
            },
            {
              headers: {
                authorization: `Bearer ${authtoken}`,
              },
            }
          );

      setDate(defaultDate);
    } catch (error) {
      console.error(error);
      alert("Error saving slots");
    }
  };

  const getSlotsForupdate = async (doctor_id) => {
    const authtoken = localStorage.getItem("token");

    try {
      await axios
        .get(
          `http://localhost:7000/admin/getslotforupdate?doctor_id=${doctor_id}`,
          {
            headers: {
              Authorization: `Bearer ${authtoken}`,
            },
          }
        )
        .then((res) => {
          setSlots(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (doctor_id) {
      getSlotsForupdate(doctor_id);
    }
  });

  return (
    <div className="container max-w-4xl mx-auto p-2">
      {/* Slots Display */}

      <div>
        {" "}
        <GetSlot />
      </div>

      {/* Form Inputs */}
      <div className="space-y-6 py-4">
        {/* Date Input */}
        <div>
          <label className="block font-medium mb-2">Select Date:</label>
          <input
            type="date"
            className="w-full px-4 py-3 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div>
          <label className="block font-medium mb-2">Select Interval:</label>
          <select
            className="w-full px-4 py-3 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={interval}
            onChange={(e) => setInterval(parseInt(e.target.value))}
          >
            {intervalOptions.map((option, index) => (
              <option key={index} value={option}>
                {option === 60 ? "1 Hour" : "30 Minutes"}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-medium mb-2">Start Time:</label>
          <input
            type="text"
            placeholder="e.g. 09:00 AM"
            className="w-full px-4 py-3 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
        </div>
        <div>
          <label className="block font-medium mb-2">End Time:</label>
          <input
            type="text"
            placeholder="e.g. 05:00 PM"
            className="w-full px-4 py-3 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />
        </div>
        <div className="mb-12">
          <h3 className="font-medium text-lg mb-4">Generated Slots:</h3>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {slots.map((slot, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-3 border border-gray-300 flex justify-between items-center"
              >
                <span className="text-gray-700 font-medium">{slot}</span>
                <button
                  onClick={() => setSlots(slots.filter((_, i) => i !== index))}
                  className="text-red-500 font-bold"
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-6 space-x-4">
        <button
          onClick={generateSlots}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600 transition"
        >
          Generate Slots
        </button>
        <button
          onClick={handleSaveSlots}
          className="bg-green-500 text-white px-6 py-2 rounded-lg shadow hover:bg-green-600 transition"
        >
          Save Slots
        </button>
      </div>
    </div>
  );
};

export default AdminSlotCreation;
