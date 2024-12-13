import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const GetSlot = () => {
  const authtoken = localStorage.getItem("token");
  const [slot, setSlot] = useState([]);
  console.log("slots",slot);
    
  const [docId, setDocId] = useState([]);
  const AdminId = localStorage.getItem("adminId");

  useEffect(() => {
    const FetchSlots = async () => {
      try {
        const response = await axios.get(
          `http://localhost:7000/admin/slots?doctor_id=${AdminId}`,
          {
            headers: {
              authorization: `Bearer ${authtoken}`,
            },
          }
        );
        if (response.status === 200) {
          const data = response.data;

          setDocId(data);
          setSlot(data.slots);
        }
      } catch (error) {
        console.error("Error fetching slots:", error);
      }
    };
    if (AdminId) {
      FetchSlots();
    }
  }, [AdminId]);
  return (
    <div>
      <div className="mb-5 w-full flex items-center justify-between px-5  border-2 border-gray-300 rounded-2xl">
        <h2 className="text-2xl font-medium py-2 ">Schedule</h2>
        <Link to={`/admin/availabletimimgs/updateslots/${docId.doctor_id}`}>
          <FaEdit className="text-xl cursor-pointer" />
        </Link>
      </div>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {slot?.map((getslot, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-3 border border-gray-300 flex justify-between items-center"
          >
            <span className="text-gray-700 font-medium">{getslot}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetSlot;
