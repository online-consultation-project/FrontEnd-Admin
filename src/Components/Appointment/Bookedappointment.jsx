// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import AppointmentCard from "./AppointMap"; // Ensure the name matches the file name
// import { toast } from "react-toastify";

// const apiUrl = "http://localhost:7000";

// const AppointmentList = () => {
//   const { doctorId } = useParams(); // Get doctorId from route parameters
//   const [appointments, setAppointments] = useState([]);

//   useEffect(() => {
//     const fetchAppointments = async () => {
//       if (!doctorId) {
//         toast.error("Doctor ID is missing");
//         return;
//       }

//       try {
//         const res = await axios.get(`${apiUrl}/api/appointment/bydoctor/${doctorId}`, {
//           headers: {
//             Authorization: "Bearer " + localStorage.getItem("token"),
//           },
//         });

//         toast.success(res.data.message);
//         setAppointments(res.data.appointments); // Update to use `appointments` from the response
//       } catch (err) {
//         toast.error(err.response?.data?.message || "Error fetching appointments");
//       }
//     };

//     fetchAppointments();
//   }, [doctorId]);

//   const handleAccept = async (id) => {
//     console.log("entering",id)
//     try {
//       const res = await axios.put(`${apiUrl}/api/appointment/statusupdate/${id}/status`, { status: "Accepted" }, {
//         headers: {
//           Authorization: "Bearer " + localStorage.getItem("token"),
//         },
//       });

//       setAppointments((prev) =>
//         prev.map((appointment) =>
//           appointment._id === id ? { ...appointment, status: "Accepted" } : appointment
//         )
//       );

//       toast.success("Appointment accepted");
//     } catch (error) {
//       console.error("Error accepting appointment:", error);
//       toast.error("Failed to accept appointment");
//     }
//   };

//   const handleReject = async (id) => {
//     try {
//       const res = await axios.put(`${apiUrl}/api/appointment/statusupdate/${id}/status`, { status: "Rejected" }, {
//         headers: {
//           Authorization: "Bearer " + localStorage.getItem("token"),
//         },
//       });

//       setAppointments((prev) =>
//         prev.map((appointment) =>
//           appointment._id === id ? { ...appointment, status: "Rejected" } : appointment
//         )
//       );

//       toast.success("Appointment rejected");
//     } catch (error) {
//       console.error("Error rejecting appointment:", error);
//       toast.error("Failed to reject appointment");
//     }
//   };

//   return (
//     <div className="container mx-auto mb-4">
//       {appointments.map((appointment) => (
//         <AppointmentCard
//           key={appointment._id} // Use _id from the backend
//           appointment={{
//             id: appointment._id, // Pass the _id as appointment.id
//             name: appointment.patientName,
//             date: new Date(appointment.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }),
//             email: appointment.patientEmail,
//             phone: appointment.patientPhone,
//             type: appointment.slot,
//             status: appointment.status,
//             gender: appointment.patientGender,
//             age: appointment.patientAge,
//           }}
//           onAccept={handleAccept}
//           onReject={handleReject}
//         />
//       ))}
//     </div>
//   );
// };

// export default AppointmentList;
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import AppointmentCard from "./AppointMap"; // Ensure this matches your component's file name
import { toast } from "react-toastify";
import Loader from "../ReusableComp/Loader"; // Import the Loader component

const apiUrl = "http://localhost:7000"; // Ensure your backend is running on this port

const AppointmentList = () => {
  const { doctorId } = useParams(); // Get doctorId from route parameters
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false); // Loader state

  useEffect(() => {
    const fetchAppointments = async () => {
      // if (!doctorId) {
      //   toast.error("Doctor ID is missing");
      //   return;
      // }

      setLoading(true);

      try {
        const response = await axios.get(
          `${apiUrl}/api/appointment/bydoctor`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        setAppointments(response.data.appointments || []);
      } catch (error) {
        toast.error(
          error.response?.data?.message || "Error fetching appointments"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, [doctorId]);

  const handleAccept = async (id) => {
    try {
      const response = await axios.put(
        `${apiUrl}/api/appointment/statusupdate/${id}/status`,
        { status: "Accepted" },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setAppointments((prev) =>
        prev.map((appointment) =>
          appointment._id === id
            ? { ...appointment, status: "Accepted" }
            : appointment
        )
      );

      toast.success(response.data.message || "Appointment accepted");
    } catch (error) {
      console.error("Error accepting appointment:", error);
      toast.error("Failed to accept appointment");
    }
  };

  const handleReject = async (id) => {
    try {
      const response = await axios.put(
        `${apiUrl}/api/appointment/statusupdate/${id}/status`,
        { status: "Rejected" },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setAppointments((prev) =>
        prev.map((appointment) =>
          appointment._id === id
            ? { ...appointment, status: "Rejected" }
            : appointment
        )
      );

      toast.success(response.data.message || "Appointment rejected");
    } catch (error) {
      console.error("Error rejecting appointment:", error);
      toast.error("Failed to reject appointment");
    }
  };

  return (
    <div className="container mx-auto mb-4">
      {loading ? (
        <div className="text-center text-gray-600">
          <Loader /> {/* Display Loader */}
        </div>
      ) : appointments.length > 0 ? (
        appointments.map((appointment) => (
          <AppointmentCard
            key={appointment._id} // Use _id as the key
            appointment={{
              id: appointment._id,
              name: appointment.patientName,
              date: new Date(appointment.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              }),
              email: appointment.patientEmail,
              phone: appointment.patientPhone,
              type: appointment.slot,
              status: appointment.status,
              patientConsult: appointment.patientConsult,
              gender: appointment.patientGender,
              age: appointment.patientAge,
            }}
            onAccept={handleAccept}
            onReject={handleReject}
          />
        ))
      ) : (
        <p className="text-center text-gray-600">No appointments available.</p>
      )}
    </div>
  );
};

export default AppointmentList;
