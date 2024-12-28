// import React from "react";
// import { MdAddCall, MdOutlineAttachEmail } from "react-icons/md";
// import { IoMdTime } from "react-icons/io";

// const AppointmentCard = ({ appointment, onAccept, onReject }) => {
//   if (!appointment) {
//     return (
//       <div className="text-red-500">Error: Appointment data is missing</div>
//     );
//   }

//   const isActionDisabled =
//     appointment.status === "Accepted" || appointment.status === "Rejected";

//   const getStatusColor = () => {
//     if (appointment.status === "Accepted") {
//       return "text-green-500";
//     } else if (appointment.status === "Rejected") {
//       return "text-red-500";
//     } else if (
//       appointment.status === "Pending" ||
//       appointment.status === "pending"
//     ) {
//       return "text-yellow-500";
//     } else {
//       return "text-gray-500";
//     }
//   };

//   return (
//     <div className="flex flex-wrap items-center md:items-center justify-evenly bg-white p-4 rounded-lg shadow-md mb-4 gap-6">
//       {/* Name Section */}
//       <div className=" text-center min-w-[150px]">
//         <h4 className="font-semibold text text-lg">
//           {appointment.name || "No Name"}
//         </h4>
//       </div>
//       <div className="flex items-center min-w-[170px]">
//         <p className="font-medium text-gray-600">Consultation:</p>
//         <p className="text-gray-950">
//           {appointment.patientConsult || "Not Specified"}
//         </p>
//       </div>
//       <div className="flex-1 flex flex-col  max-md:items-center max-md:justify-center gap-2 min-w-[150px]">
//         <div className="flex items-center gap-2">
//           <MdOutlineAttachEmail />
//           <p className="text-gray-600 break-all text-sm">
//             {appointment.email || "No Email"}
//           </p>
//         </div>
//         <div className="flex items-center gap-2">
//           <MdAddCall />
//           <p className="text-gray-600 text-sm">
//             {appointment.phone || "No Phone"}
//           </p>
//         </div>
//       </div>

//       <div className="flex-1 flex flex-col justify-center  items-center gap-2 min-w-[100px]">
//         <div className="flex items-center gap-2">
//           <p className="font-medium text-gray-600">Gender:</p>
//           <p className="text-gray-600">{appointment.gender || "Unknown"}</p>
//         </div>
//         <div className="flex   items-center gap-2">
//           <p className="font-medium text-gray-600">Age:</p>
//           <p className="text-gray-600">{appointment.age || "N/A"}</p>
//         </div>
//       </div>

//       {/* Type and Date Section */}
//       <div className="flex-1 flex flex-col gap-2 text-sm items-center justify-center   min-w-[150px] text-left md:text-center">
//         <p className="text-base font-medium">{appointment.type || "No Type"}</p>
//         <div className="flex items-center justify-center text-center gap-2">
//           <IoMdTime className="text-xl " />
//           <p className="text-gray-600">{appointment.date || "No Date"}</p>
//         </div>
//       </div>

//       {/* Status Section */}
//       <div className="flex-1 flex flex-col justify-center items-center gap-2  min-w-[150px]">
//         <h2 className="font-medium text-gray-700">Status</h2>
//         <p className={`font-medium ${getStatusColor()}`}>
//           {appointment.status === "pending"
//             ? "Pending"
//             : appointment.status || "N/A"}
//         </p>
//       </div>

//       {appointment.status !== "Accepted" &&
//         appointment.status !== "Rejected" && (
//           <div className="flex gap-2 flex-col ">
//             <button
//               onClick={() => onAccept(appointment.id)}
//               className={`btn ${
//                 isActionDisabled
//                   ? "cursor-not-allowed opacity-50 bg-gray-300 py-1 px-2 rounded-md"
//                   : "bg-green-500 hover:bg-green-600 text-white py-1 px-2 rounded-md"
//               }`}
//               disabled={isActionDisabled} navigate
//             >
//               Accept
//             </button>
//             <button
//               onClick={() => onReject(appointment.id)}
//               className={`btn ${
//                 isActionDisabled
//                   ? "cursor-not-allowed opacity-50 bg-gray-300 py-1 px-2 rounded-md"
//                   : "bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded-md"
//               }`}
//               disabled={isActionDisabled}
//             >
//               Reject
//             </button>
//           </div>
//         )}
//     </div>
//   );
// };

// export default AppointmentCard;

// import React from "react";
// import { MdAddCall } from "react-icons/md";
// import { IoMdTime } from "react-icons/io";

// const AppointmentCard = ({ appointment, onAccept, onReject }) => {
//   if (!appointment) {
//     return (
//       <div className="text-red-500">Error: Appointment data is missing</div>
//     );
//   }

//   const getStatusColor = () => {
//     switch (appointment.status) {
//       case "Accepted":
//         return "text-green-500";
//       case "Rejected":
//         return "text-red-500";
//       case "Pending":
//       case "pending":
//         return "text-yellow-500";
//       default:
//         return "text-gray-500";
//     }
//   };

//   const isActionDisabled =
//     appointment.status === "Accepted" || appointment.status === "Rejected";

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 items-center bg-white p-6 rounded-lg shadow-md mb-4 gap-y-4 gap-x-6">
//       {/* Name Section */}
//       <div className="text-start">
//         <h4 className="font-semibold text-base">
//           {appointment.name || "No Name"}
//         </h4>
//       </div>

//       {/* Consultation Section */}
//       <div className="text-start">
//         <p className="font-medium text-gray-600">Consultation:</p>
//         <p className="text-gray-950">
//           {appointment.patientConsult || "Not Specified"}
//         </p>
//       </div>

//       {/* Doctor Section */}
//       <div className="text-start">
//         <p className="font-medium text-gray-600">Doctor Name:</p>
//         <p className="text-gray-950">
//           {appointment.doctorFirstName || "Not Specified"}
//         </p>
//       </div>

//       {/* Contact Info */}
//       <div className="text-start">
//         <div className="flex flex-col items-center justify-center gap-2">
//           <p className="text-gray-600 text-sm">
//             {appointment.email || "No Email"}
//           </p>
//           <p className="text-gray-600 text-sm flex gap-2">
//             <MdAddCall className="mt-1" />
//             {appointment.phone || "No Phone"}
//           </p>
//         </div>
//       </div>

//       {/* Gender and Age */}
//       <div className="text-start">
//         <div className="flex items-center justify-center gap-2">
//           <p className="font-medium text-gray-600">Gender:</p>
//           <p className="text-gray-600">{appointment.gender || "Unknown"}</p>
//         </div>
//         <div className="flex items-center justify-center gap-2">
//           <p className="font-medium text-gray-600">Age:</p>
//           <p className="text-gray-600">{appointment.age || "N/A"}</p>
//         </div>
//       </div>

//       {/* Appointment Type and Date or Payment */}
//       <div className="text-start">
//         {appointment.payment ? (
//           <h3 className="flex flex-col">
//             <h3 className="">Payment:</h3>
//             <span className="text-gray-600">RS: {appointment.payment}</span>
//           </h3>
//         ) : (
//           <>
//             <p className="text-sm font-sm">{appointment.type || "No Type"}</p>
//             <div className="flex items-center justify-center gap-2">
//               <IoMdTime className="text-sm" />
//               <p className="text-gray-600">{appointment.date || "No Date"}</p>
//             </div>
//           </>
//         )}
//       </div>

//       {/* Status Section */}
//       <div className="text-start">
//         {appointment.joinUrl ? (
//           <a
//             href={appointment.joinUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-blue-500 font-medium underline"
//           >
//             Join Meeting
//           </a>
//         ) : (
//           <>
//             <h2 className="font-medium text-gray-700">Status</h2>
//             <p className={`font-medium ${getStatusColor()}`}>
//               {appointment.status === "pending"
//                 ? "Pending"
//                 : appointment.status || "N/A"}
//             </p>
//           </>
//         )}
//       </div>

//       {/* Action Buttons */}
//       {!appointment.joinUrl && (
//         <div className="text-start flex gap-2 flex-col">
//           <button
//             onClick={() => onAccept(appointment.id)}
//             className={`btn ${
//               isActionDisabled
//                 ? "cursor-not-allowed opacity-50 bg-gray-300 py-1 px-2 rounded-md"
//                 : "bg-green-500 hover:bg-green-600 text-white py-1 px-2 rounded-md"
//             }`}
//             disabled={isActionDisabled}
//           >
//             Accept
//           </button>
//           <button
//             onClick={() => onReject(appointment.id)}
//             className={`btn ${
//               isActionDisabled
//                 ? "cursor-not-allowed opacity-50 bg-gray-300 py-1 px-2 rounded-md"
//                 : "bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded-md"
//             }`}
//             disabled={isActionDisabled}
//           >
//             Reject
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AppointmentCard;

import React from "react";
import { MdAddCall } from "react-icons/md";
import { IoMdTime } from "react-icons/io";

const AppointmentCard = ({ appointment, onAccept, onReject }) => {
  if (!appointment) {
    return (
      <div className="text-red-500">Error: Appointment data is missing</div>
    );
  }

  const getStatusColor = () => {
    switch (appointment.status) {
      case "Accepted":
        return "text-green-500";
      case "Rejected":
        return "text-red-500";
      case "Pending":
      case "pending":
        return "text-yellow-500";
      default:
        return "text-gray-500";
    }
  };

  const showButtons =
    appointment.status !== "Accepted" && appointment.status !== "Rejected";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 items-center bg-white p-6 rounded-lg shadow-md mb-4 gap-y-4 gap-x-6">
      {/* Name Section */}
      <div className="text-start">
        <h4 className="font-semibold text-base">
          {appointment.name || "No Name"}
        </h4>
      </div>

      {/* Consultation Section */}
      <div className="text-start">
        <p className="font-medium text-gray-600">Consultation:</p>
        <p className="text-gray-950">
          {appointment.patientConsult || "Not Specified"}
        </p>
      </div>

      {/* Doctor Section */}
      <div className="text-start">
        <p className="font-medium text-gray-600">Doctor Name:</p>
        <p className="text-gray-950">
          {appointment.doctorFirstName || "Not Specified"}
        </p>
      </div>

      {/* Contact Info */}
      <div className="text-start">
        <div className="flex flex-col items-center justify-center gap-2">
          <p
            className="text-gray-600 text-sm truncate max-w-full"
            title={appointment.email || "No Email"}
          >
            {appointment.email || "No Email"}
          </p>
          <p className="text-gray-600 text-sm flex gap-2">
            <MdAddCall className="mt-1" />
            {appointment.phone || "No Phone"}
          </p>
        </div>
      </div>

      {/* Gender and Age */}
      <div className="text-start">
        <div className="flex items-center justify-center gap-2">
          <p className="font-medium text-gray-600">Gender:</p>
          <p className="text-gray-600">{appointment.gender || "Unknown"}</p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <p className="font-medium text-gray-600">Age:</p>
          <p className="text-gray-600">{appointment.age || "N/A"}</p>
        </div>
      </div>

      {/* Appointment Type and Date or Payment */}
      <div className="text-start">
        {appointment.payment ? (
          <h3 className="flex flex-col">
            <h3 className="">Payment:</h3>
            <span className="text-gray-600">RS: {appointment.payment}</span>
          </h3>
        ) : (
          <>
            <p className="text-sm font-sm">{appointment.type || "No Type"}</p>
            <div className="flex items-center justify-center gap-2">
              <IoMdTime className="text-sm" />
              <p className="text-gray-600">{appointment.date || "No Date"}</p>
            </div>
          </>
        )}
      </div>

      {/* Status or Action Section */}
      <div className="text-start">
        {appointment.joinUrl ? (
          <a
            href={appointment.joinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 font-medium underline"
          >
            Join Meeting
          </a>
        ) : showButtons ? (
          <div className="flex gap-2">
            <button
              onClick={() => onAccept(appointment.id)}
              className="bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded-md"
            >
              Accept
            </button>
            <button
              onClick={() => onReject(appointment.id)}
              className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-md"
            >
              Reject
            </button>
          </div>
        ) : (
          <div>
            <h2 className="font-medium text-gray-700">Status</h2>
            <p className={`font-medium ${getStatusColor()}`}>
              {appointment.status || "N/A"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppointmentCard;

