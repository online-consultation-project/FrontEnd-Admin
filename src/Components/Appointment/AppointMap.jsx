// // import { useState } from "react";
// // import { MdAddCall, MdOutlineAttachEmail } from "react-icons/md";
// // import { IoMdTime } from "react-icons/io";

// // const AppointmentCard = ({ appointment, onAccept, onReject }) => {
// //   if (!appointment) {
// //     return (
// //       <div className="text-red-500">Error: Appointment data is missing</div>
// //     );
// //   }

// //   return (
// //     <div className="flex flex-wrap items-start md:items-center justify-between bg-white p-4 rounded-lg shadow-md mb-4 gap-6">
// //       {/* Name Section */}
// //       <div className="flex-1 min-w-[90px]">
// //         <h4 className="font-semibold text-lg">
// //           {appointment.name || "No Name"}
// //         </h4>
// //       </div>

// //       {/* Contact Information Section */}
// //       <div className="flex-1 flex flex-col justify-center items-start gap-2 min-w-[150px]">
// //         <div className="flex items-center gap-2">
// //           <MdOutlineAttachEmail />
// //           <p className="text-gray-600 break-all text-sm">
// //             {appointment.email || "No Email"}
// //           </p>
// //         </div>
// //         <div className="flex items-center gap-2">
// //           <MdAddCall />
// //           <p className="text-gray-600 text-sm">
// //             {appointment.phone || "No Phone"}
// //           </p>
// //         </div>
// //       </div>

// //       {/* Gender and Age Section */}
// //       <div className="flex-1 flex flex-col justify-center items-start gap-2 min-w-[100px]">
// //         <div className="flex items-center gap-2">
// //           <p className="font-medium text-gray-600">Gender:</p>
// //           <p className="text-gray-600">{appointment.gender || "Unknown"}</p>
// //         </div>
// //         <div className="flex items-center gap-2">
// //           <p className="font-medium text-gray-600">Age:</p>
// //           <p className="text-gray-600">{appointment.age || "N/A"}</p>
// //         </div>
// //       </div>

// //       {/* Type and Date Section */}
// //       <div className="flex-1 flex flex-col gap-2 text-sm min-w-[150px] text-left md:text-center">
// //         <p className="text-base font-medium">{appointment.type || "No Type"}</p>
// //         <div className="flex items-center gap-2">
// //           <IoMdTime className="text-xl" />
// //           <p className="text-gray-600">{appointment.date || "No Date"}</p>
// //         </div>
// //       </div>

// //       {/* Status Section */}
// //       <div className="flex-1 flex flex-col justify-center items-start gap-2 min-w-[100px]">
// //         <h2 className="font-medium text-gray-700">Status</h2>
// //         <p className="font-medium">
// //           {appointment.status === "pending"
// //             ? "Pending"
// //             : appointment.status || "N/A"}
// //         </p>
// //       </div>

// //       {/* Buttons Section */}
// //       <div className="flex gap-2">
// //         <button
// //           style={{ position: "relative", zIndex: 9999 }}
// //           onClick={() => {
// //             console.log("Accept clicked for ID:", appointment.id);
// //             onAccept(appointment.id);
// //           }}
// //           className="btn btn-success"
// //         >
// //           Accept
// //         </button>
// //         <button
// //           style={{ position: "relative", zIndex: 9999 }}
// //           onClick={() => {
// //             console.log("Accept clicked for ID:", appointment.id);
// //             onReject(appointment.id);
// //           }}
// //           className="btn btn-success"
// //         >
// //           Reject
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };


// // export default AppointmentCard;

// import React, { useState } from "react";
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

//   return (
//     <div className="flex flex-wrap items-start md:items-center justify-between bg-white p-4 rounded-lg shadow-md mb-4 gap-6">
//       {/* Name Section */}
//       <div className="flex-1 min-w-[90px]">
//         <h4 className="font-semibold text-lg">
//           {appointment.name || "No Name"}
//         </h4>
//       </div>

//       {/* Contact Information Section */}
//       <div className="flex-1 flex flex-col justify-center items-start gap-2 min-w-[150px]">
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

//       {/* Gender and Age Section */}
//       <div className="flex-1 flex flex-col justify-center items-start gap-2 min-w-[100px]">
//         <div className="flex items-center gap-2">
//           <p className="font-medium text-gray-600">Gender:</p>
//           <p className="text-gray-600">{appointment.gender || "Unknown"}</p>
//         </div>
//         <div className="flex items-center gap-2">
//           <p className="font-medium text-gray-600">Age:</p>
//           <p className="text-gray-600">{appointment.age || "N/A"}</p>
//         </div>
//       </div>

//       {/* Type and Date Section */}
//       <div className="flex-1 flex flex-col gap-2 text-sm min-w-[150px] text-left md:text-center">
//         <p className="text-base font-medium">{appointment.type || "No Type"}</p>
//         <div className="flex items-center gap-2">
//           <IoMdTime className="text-xl" />
//           <p className="text-gray-600">{appointment.date || "No Date"}</p>
//         </div>
//       </div>

//       {/* Status Section */}
//       <div className="flex-1 flex flex-col justify-center items-start gap-2 min-w-[100px]">
//         <h2 className="font-medium text-gray-700">Status</h2>
//         <p className="font-medium">
//           {appointment.status === "pending"
//             ? "Pending"
//             : appointment.status || "N/A"}
//         </p>
//       </div>

//       {/* Buttons Section */}
//       <div className="flex gap-2">
//         <button
//           onClick={() => onAccept(appointment.id)}
//           className={`btn btn-success ${isActionDisabled ? "cursor-not-allowed opacity-50" : ""}`}
//           disabled={isActionDisabled}
//         >
//           Accept
//         </button>
//         <button
//           onClick={() => onReject(appointment.id)}
//           className={`btn btn-danger ${isActionDisabled ? "cursor-not-allowed opacity-50" : ""}`}
//           disabled={isActionDisabled}
//         >
//           Reject
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AppointmentCard;

import React from "react";
import { MdAddCall, MdOutlineAttachEmail } from "react-icons/md";
import { IoMdTime } from "react-icons/io";

const AppointmentCard = ({ appointment, onAccept, onReject }) => {
  if (!appointment) {
    return (
      <div className="text-red-500">Error: Appointment data is missing</div>
    );
  }

  const isActionDisabled =
    appointment.status === "Accepted" || appointment.status === "Rejected";

  // Get status color based on the appointment status
  const getStatusColor = () => {
    if (appointment.status === "Accepted") {
      return "text-green-500";
    } else if (appointment.status === "Rejected") {
      return "text-red-500";
    } else if (appointment.status === "Pending" || appointment.status === "pending") {
      return "text-yellow-500";
    } else {
      return "text-gray-500"; // Default color for unknown status
    }
  };

  return (
    <div className="flex flex-wrap items-start md:items-center justify-between bg-white p-4 rounded-lg shadow-md mb-4 gap-6">
      {/* Name Section */}
      <div className="flex-1 min-w-[90px]">
        <h4 className="font-semibold text-lg">
          {appointment.name || "No Name"}
        </h4>
      </div>

      {/* Contact Information Section */}
      <div className="flex-1 flex flex-col justify-center items-start gap-2 min-w-[150px]">
        <div className="flex items-center gap-2">
          <MdOutlineAttachEmail />
          <p className="text-gray-600 break-all text-sm">
            {appointment.email || "No Email"}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <MdAddCall />
          <p className="text-gray-600 text-sm">
            {appointment.phone || "No Phone"}
          </p>
        </div>
      </div>

      {/* Gender and Age Section */}
      <div className="flex-1 flex flex-col justify-center items-start gap-2 min-w-[100px]">
        <div className="flex items-center gap-2">
          <p className="font-medium text-gray-600">Gender:</p>
          <p className="text-gray-600">{appointment.gender || "Unknown"}</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="font-medium text-gray-600">Age:</p>
          <p className="text-gray-600">{appointment.age || "N/A"}</p>
        </div>
      </div>

      {/* Type and Date Section */}
      <div className="flex-1 flex flex-col gap-2 text-sm min-w-[150px] text-left md:text-center">
        <p className="text-base font-medium">{appointment.type || "No Type"}</p>
        <div className="flex items-center gap-2">
          <IoMdTime className="text-xl" />
          <p className="text-gray-600">{appointment.date || "No Date"}</p>
        </div>
      </div>

      {/* Status Section */}
      <div className="flex-1 flex flex-col justify-center items-start gap-2 min-w-[100px]">
        <h2 className="font-medium text-gray-700">Status</h2>
        <p className={`font-medium ${getStatusColor()}`}>
          {appointment.status === "pending"
            ? "Pending"
            : appointment.status || "N/A"}
        </p>
      </div>

      {/* Buttons Section */}
      <div className="flex gap-2">
        <button
          onClick={() => onAccept(appointment.id)}
          className={`btn ${
            isActionDisabled
              ? "cursor-not-allowed opacity-50 bg-gray-300  py-1 px-2 rounded-md"
              : "bg-green-500 hover:bg-green-600 text-white  py-1 px-2 rounded-md"
          }`}
          disabled={isActionDisabled}
        >
          Accept
        </button>
        <button
          onClick={() => onReject(appointment.id)}
          className={`btn ${
            isActionDisabled
              ? "cursor-not-allowed opacity-50 bg-gray-300  py-1 px-2 rounded-md"
              : "bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded-md"
          }`}
          disabled={isActionDisabled}
        >
          Reject
        </button>
      </div>
    </div>
  );
};

export default AppointmentCard;

