import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import AppointmentCard from "./AppointMap"; 
import { toast } from "react-toastify";
import Loader from "../ReusableComp/Loader";

const apiUrl = "http://localhost:7000"; 

const OnlineAppointment = () => {
  const { doctorId } = useParams(); 
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false); 

  useEffect(() => {
    const fetchAppointments = async () => {
      // if (!doctorId) {
      //   toast.error("Doctor ID is missing");
      //   return;
      // }

      setLoading(true);

      try {
        const response = await axios.get(
          `${apiUrl}/api/zoommetting/bydoctor`,
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


  return (
    <div className="container mx-auto mb-4">
      {loading ? (
        <div className="text-center text-gray-600">
          <Loader /> {/* Display Loader */}
        </div>
      ) : appointments.length > 0 ? (
        appointments.map((appointment) => (
          <AppointmentCard
          key={appointment._id}
          appointment={{
            id: appointment._id,
            name: appointment.patientName,
            date: new Date(appointment.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            }),
            doctorFirstName: appointment.doctorFirstName,
            email: appointment.patientEmail,
            phone: appointment.patientPhone,
            patientConsult: appointment.patientConsult,
            gender: appointment.patientGender,
            age: appointment.patientAge,
            payment: appointment.payment,
            joinUrl: appointment.joinUrl,
            }}
          />
        ))
      ) : (
        <p className="text-center text-gray-600">No appointments available.</p>
      )}
    </div>
  );
};

export default OnlineAppointment;
