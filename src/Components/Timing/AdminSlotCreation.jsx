import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import { toast } from "react-toastify";

const urlApi = "http://localhost:7000";
const token = localStorage.getItem("token");
const doctorId = localStorage.getItem("adminId").toString();

const SlotGenerator = () => {
  const [startTime, setStartTime] = useState("10:00 AM");
  const [endTime, setEndTime] = useState("05:00 PM");
  const [interval, setInterval] = useState(30); // Default interval in minutes
  const [slots, setSlots] = useState([]);
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [existingSlots, setExistingSlots] = useState([]);

  useEffect(() => {
    fetchSlots();
  }, [date]);

  const fetchSlots = async () => {
    try {
      const response = await axios.get(
        `${urlApi}/api/slots/${doctorId}?date=${date}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setExistingSlots(response.data.slots || []);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        toast.error("Unauthorized. Please log in again.");
      } else {
        toast.error("Failed to fetch slots. Please try again later.");
      }
    }
  };

  const handleSlots = () => {
    if (interval <= 0 || interval > 1440) {
      toast.error("Invalid interval. Please enter a value between 1 and 1440.");
      return;
    }

    let start = moment(startTime, "hh:mm A");
    let end = moment(endTime, "hh:mm A");

    if (!start.isValid() || !end.isValid()) {
      toast.error("Invalid start or end time.");
      return;
    }

    if (end.isBefore(start)) {
      toast.error("End time cannot be earlier than start time.");
      return;
    }

    const generatedSlots = [];

    while (start.isBefore(end)) {
      const slotStart = start.clone();
      start.add(interval, "minutes");
      const slotEnd = start.clone();

      if (slotEnd.isAfter(end)) break;

      generatedSlots.push(
        `${slotStart.format("hh:mm A")} - ${slotEnd.format("hh:mm A")}`
      );
    }

    setSlots(generatedSlots);
    toast.success("Slots generated successfully.");
  };

  const saveSlots = async () => {
    try {
      await axios.post(
        `${urlApi}/api/slots`,
        { doctorId, date, slots },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      toast.success("Slots saved successfully.");
      fetchSlots();
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to save slots. Please try again."
      );
    }
  };

  const updateSlots = async () => {
    try {
      await axios.put(
        `${urlApi}/api/slots/${doctorId}`,
        { date, slots },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      toast.success("Slots updated successfully.");
      fetchSlots();
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to update slots. Please try again."
      );
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-xl font-bold mb-4">Manage Available Slots</h1>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Select Date</label>
        <input
          type="date"
          className="w-full border rounded px-3 py-2"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Start Time</label>
        <div className="flex gap-2">
          <input
            type="time"
            className="w-full border rounded px-3 py-2"
            value={moment(startTime, "hh:mm A").format("HH:mm")}
            onChange={(e) =>
              setStartTime(moment(e.target.value, "HH:mm").format("hh:mm A"))
            }
          />
          <select
            value={startTime.split(" ")[1]}
            onChange={(e) =>
              setStartTime(`${startTime.split(" ")[0]} ${e.target.value}`)
            }
            className="border rounded px-3 py-2"
          >
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">End Time</label>
        <div className="flex gap-2">
          <input
            type="time"
            className="w-full border rounded px-3 py-2"
            value={moment(endTime, "hh:mm A").format("HH:mm")}
            onChange={(e) =>
              setEndTime(moment(e.target.value, "HH:mm").format("hh:mm A"))
            }
          />
          <select
            value={endTime.split(" ")[1]}
            onChange={(e) =>
              setEndTime(`${endTime.split(" ")[0]} ${e.target.value}`)
            }
            className="border rounded px-3 py-2"
          >
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">
          Interval (Minutes)
        </label>
        <input
          type="number"
          className="w-full border rounded px-3 py-2"
          value={interval}
          onChange={(e) => setInterval(Number(e.target.value))}
        />
      </div>

      <button
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        onClick={handleSlots}
      >
        Generate Slots
      </button>

      <div className="mt-4">
        <h2 className="text-lg font-semibold">Generated Slots</h2>
        <ul className="list-disc ml-5">
          {slots.map((slot, index) => (
            <li key={index}>{slot}</li>
          ))}
        </ul>
      </div>

      <div className="flex gap-2 mt-4">
        <button
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
          onClick={saveSlots}
        >
          Save Slots
        </button>
        <button
          className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600"
          onClick={updateSlots}
        >
          Update Slots
        </button>
      </div>

      <div className="mt-4">
        <h2 className="text-lg font-semibold">Existing Slots for {date}</h2>
        {existingSlots.length > 0 ? (
          <table className="w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 px-2 py-1">Slot</th>
              </tr>
            </thead>
            <tbody>
              {existingSlots.map((slot, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-2 py-1">{slot}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No slots available for this date.</p>
        )}
      </div>
    </div>
  );
};


export default SlotGenerator;