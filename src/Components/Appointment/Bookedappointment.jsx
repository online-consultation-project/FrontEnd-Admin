// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import AppointmentCard from "./AppointMap"; 
// import { toast } from "react-toastify";
// import Loader from "../ReusableComp/Loader"; 
// const apiUrl = "http://localhost:7000"; 

// const AppointmentList = () => {
//   const { doctorId } = useParams(); 
//   const [appointments, setAppointments] = useState([]);
//   const [loading, setLoading] = useState(false); 

//   useEffect(() => {
//     const fetchAppointments = async () => {
      

//       setLoading(true);

//       try {
//         const response = await axios.get(
//           `${apiUrl}/api/appointment/bydoctor`,
//           {
//             headers: {
//               Authorization: `Bearer ${localStorage.getItem("token")}`,
//             },
//           }
//         );

//         setAppointments(response.data.appointments || []);
//       } catch (error) {
//         toast.error(
//           error.response?.data?.message || "Error fetching appointments"
//         );
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAppointments();
//   }, [doctorId]);

//   const handleAccept = async (id) => {
//     try {
//       const response = await axios.put(
//         `${apiUrl}/api/appointment/statusupdate/${id}/status`,
//         { status: "Accepted" },
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );

//       setAppointments((prev) =>
//         prev.map((appointment) =>
//           appointment._id === id
//             ? { ...appointment, status: "Accepted" }
//             : appointment
//         )
//       );

//       toast.success(response.data.message || "Appointment accepted");
//     } catch (error) {
//       console.error("Error accepting appointment:", error);
//       toast.error("Failed to accept appointment");
//     }
//   };

//   const handleReject = async (id) => {
//     try {
//       const response = await axios.put(
//         `${apiUrl}/api/appointment/statusupdate/${id}/status`,
//         { status: "Rejected" },
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );

//       setAppointments((prev) =>
//         prev.map((appointment) =>
//           appointment._id === id
//             ? { ...appointment, status: "Rejected" }
//             : appointment
//         )
//       );

//       toast.success(response.data.message || "Appointment rejected");
//     } catch (error) {
//       console.error("Error rejecting appointment:", error);
//       toast.error("Failed to reject appointment");
//     }
//   };

//   return (
//     <div className="container mx-auto mb-4">
//       {loading ? (
//         <div className="text-center text-gray-600">
//           <Loader /> 
//         </div>
//       ) : appointments.length > 0 ? (
//         appointments.map((appointment) => (
//           <AppointmentCard
//             key={appointment._id} 
//             appointment={{
//               id: appointment._id,
//               name: appointment.patientName,
//               date: new Date(appointment.date).toLocaleDateString("en-US", {
//                 year: "numeric",
//                 month: "short",
//                 day: "numeric",
//               }),
//               email: appointment.patientEmail,
//               phone: appointment.patientPhone,
//               type: appointment.slot,
//               status: appointment.status,
//               patientConsult: appointment.patientConsult,
//               gender: appointment.patientGender,
//               age: appointment.patientAge,
//               doctorFirstName: appointment.doctorFirstName
//             }}
//             onAccept={handleAccept}
//             onReject={handleReject}
//           />
//         ))
//       ) : (
//         <p className="text-center text-gray-600">No appointments available.</p>
//       )}
//     </div>
//   );
// };

// export default AppointmentList;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import Loader from "../ReusableComp/Loader";

const apiUrl = "http://localhost:7000";

const AppointmentTable = () => {
  const { doctorId } = useParams();
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchAppointments = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${apiUrl}/api/appointment/bydoctor`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setAppointments(response.data.appointments || []);
      } catch (error) {
        toast.error(error.response?.data?.message || "Error fetching appointments");
      } finally {
        setLoading(false);
      }
    };
    fetchAppointments();
  }, [doctorId]);

  const handleAccept = async (id) => {
    try {
      await axios.put(`${apiUrl}/api/appointment/statusupdate/${id}/status`, { status: "Accepted" }, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setAppointments((prev) => prev.map((appointment) =>
        appointment._id === id ? { ...appointment, status: "Accepted" } : appointment
      ));
      toast.success("Appointment accepted");
    } catch (error) {
      toast.error("Failed to accept appointment");
    }
  };

  const handleReject = async (id) => {
    try {
      await axios.put(`${apiUrl}/api/appointment/statusupdate/${id}/status`, { status: "Rejected" }, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setAppointments((prev) => prev.map((appointment) =>
        appointment._id === id ? { ...appointment, status: "Rejected" } : appointment
      ));
      toast.success("Appointment rejected");
    } catch (error) {
      toast.error("Failed to reject appointment");
    }
  };

  const filteredAppointments = appointments.filter((appointment) =>
    (statusFilter === "all" || appointment.status === statusFilter) &&
    (appointment.patientName.toLowerCase().includes(search.toLowerCase()))
  );

  const totalPages = Math.ceil(filteredAppointments.length / itemsPerPage);
  const paginatedAppointments = filteredAppointments.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Search by name..."
          className="border p-2 rounded w-1/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="border p-2 rounded"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="Accepted">Accepted</option>
          <option value="Rejected">Rejected</option>
          <option value="Pending">Pending</option>
        </select>
      </div>

      {loading ? (
        <Loader />
      ) : (
        <table className="w-full border-collapse border border-gray-300 shadow-lg">
          <thead>
            <tr className="bg-blue-900 text-white">
              <th className="border p-3">Patient Name</th>
              <th className="border p-3">Email</th>
              <th className="border p-3">Phone</th>
              <th className="border p-3">Date</th>
              <th className="border p-3">Status</th>
              <th className="border p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedAppointments.length > 0 ? (
              paginatedAppointments.map((appointment, index) => (
                <tr key={appointment._id} className={`text-center border ${index % 2 === 0 ? "bg-gray-100" : "bg-white"} hover:bg-gray-200`}>
                  <td className="border p-3">{appointment.patientName || "N/A"}</td>
                  <td className="border p-3">{appointment.patientEmail || "N/A"}</td>
                  <td className="border p-3">{appointment.patientPhone || "N/A"}</td>
                  <td className="border p-3">{new Date(appointment.date).toLocaleDateString()}</td>
                  <td className={`border p-3 font-bold ${appointment.status === "Accepted" ? "text-green-500" : appointment.status === "Rejected" ? "text-red-500" : "text-yellow-500"}`}>{appointment.status}</td>
                  <td className="border p-3">
                    {appointment.status === "Pending" && (
                      <>
                        <button onClick={() => handleAccept(appointment._id)} className="bg-green-500 text-white px-3 py-1 rounded mr-2 hover:bg-green-600">Accept</button>
                        <button onClick={() => handleReject(appointment._id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Reject</button>
                      </>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center p-4 text-gray-600">No appointments available.</td>
              </tr>
            )}
          </tbody>
        </table>
      )}

      <div className="flex justify-between mt-4">
        <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)} className="bg-gray-500 text-white px-4 py-2 rounded disabled:opacity-50 hover:bg-gray-600">Previous</button>
        <span>Page {currentPage} of {totalPages}</span>
        <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)} className="bg-gray-500 text-white px-4 py-2 rounded disabled:opacity-50 hover:bg-gray-600">Next</button>
      </div>
    </div>
  );
};

export default AppointmentTable;

