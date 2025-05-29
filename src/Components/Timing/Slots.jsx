import React from "react";
import AdminSlotCreation from "./AdminSlotCreation";

const Slots = () => {
  return (
    <div className="bg-gray-200 w-full min-h-screen">
      <h1 className="text-2xl font-bold mb-7 border-b-2 pb-3 border-slate-600">
        Create Slots For Appointments
      </h1>
    <AdminSlotCreation/>
    </div>
  );
};

export default Slots;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";

// const SlotManager = ({ doctorId }) => {
//   const [date, setDate] = useState("");
//   const [slots, setSlots] = useState([]);
//   const [newSlot, setNewSlot] = useState("");

//   const API_URL = "http://localhost:7000/api";

//   // Fetch slots for the selected date
//   const fetchSlots = async () => {
//     if (!date) return;
//     try {
//       const { data } = await axios.get(`${API_URL}/slots`, {
//         params: { doctorId, date },
//       });
//       setSlots(data.slots || []);
//     } catch (error) {
//       console.error(error.response?.data || "Error fetching slots");
//       setSlots([]);
//     }
//   };

//   // Add a new slot to the list
//   const handleAddSlot = () => {
//     if (newSlot) {
//       setSlots([...slots, { time: newSlot, available: true }]);
//       setNewSlot("");
//     }
//   };

//   // Save slots to the database
//   const handleSaveSlots = async () => {
//     try {
//       await axios.post(`${API_URL}/slots`, { doctorId, date, slots });
//       toast.success("Slots saved successfully");
//     } catch (error) {
//       toast.error(error.response.data.message);
//     }
//   };

//   // Delete slots for the selected date
//   const handleDeleteSlots = async () => {
//     try {
//       await axios.delete(`${API_URL}/slots`, {
//         params: { doctorId, date },
//       });
//       setSlots([]);
//       alert("Slots deleted successfully");
//     } catch (error) {
//       console.error(error.response?.data || "Error deleting slots");
//     }
//   };

//   // Fetch slots whenever the date changes
//   useEffect(() => {
//     fetchSlots();
//   }, [date]);

//   return (
//     <div>
//       <h2>Manage Slots</h2>
//       <input
//         type="date"
//         value={date}
//         onChange={(e) => setDate(e.target.value)}
//       />
//       <div>
//         <input
//           type="time"
//           value={newSlot}
//           onChange={(e) => setNewSlot(e.target.value)}
//         />
//         <button onClick={handleAddSlot}>Add Slot</button>
//       </div>
//       <ul>
//         {slots.map((slot, index) => (
//           <li key={index}>{slot.time}</li>
//         ))}
//       </ul>
//       <button onClick={handleSaveSlots}>Save Slots</button>
//       <button onClick={handleDeleteSlots}>Delete Slots</button>
//     </div>
//   );
// };

// export default SlotManager;
