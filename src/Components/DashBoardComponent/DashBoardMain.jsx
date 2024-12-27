// // import React, { useState } from "react";
// // import {
// //   XAxis,
// //   YAxis,
// //   CartesianGrid,
// //   Tooltip,
// //   Legend,
// //   ResponsiveContainer,
// //   PieChart,
// //   Pie,
// //   Cell,
// //   AreaChart,
// //   Area,
// // } from "recharts";
// // import DashboardCard from "../ReusableComp/DashboardCard";
// // import { RiAdminLine } from "react-icons/ri";

// // const DashBoardMain = () => {
// //   const revenueData = [
// //     { month: "Jan", revenue: 100, admin: 10, user: 30 },
// //     { month: "Feb", revenue: 200, admin: 25, user: 56 },
// //     { month: "Mar", revenue: 300, admin: 146, user: 95 },
// //     { month: "Apr", revenue: 400, admin: 368, user: 153 },
// //     { month: "May", revenue: 500, admin: 643, user: 458 },
// //   ];

// //   const usersData = [
// //     { day: "Mon", users: 100,  },
// //     { day: "Tue", users: 200,  },
// //     { day: "Wed", users: 300,  },
// //     { day: "Thu", users: 400,  },
// //     { day: "Fri", users: 500,  },
// //   ];

// //   const COLORS = ["#fb923c", "#f87171", "#4ade80", "#60a5fa", "#a78bfa"];

// //   return (
// //     <div className="bg-gray-200 w-full min-h-screen">
// //       <h1 className="text-2xl font-bold mb-7 border-b-2 pb-3 border-slate-600">
// //         Admin DashBoard
// //       </h1>
// //       <div className="grid grid-cols-4 max-[540px]:grid-cols-1 max-sm:grid-cols-2 sm:max-md:grid-cols-1 md:max-lg:grid-cols-2 lg:max-xl:grid-cols-3 gap-5">
// //         <DashboardCard
// //           props={{
// //             img: RiAdminLine,
// //             title: "Total Patients",
// //             count: 102,
// //             date: new Date().toISOString().split("T")[0],
// //             color: "blue-900",
// //           }}
// //         />
// //         <DashboardCard
// //           props={{
// //             img: RiAdminLine,
// //             title: "Total Patients",
// //             count: 102,
// //             date: new Date().toISOString().split("T")[0],
// //             color: "blue-900",
// //           }}
// //         />
// //         <DashboardCard
// //           props={{
// //             img: RiAdminLine,
// //             title: "Total Patients",
// //             count: 102,
// //             date: new Date().toISOString().split("T")[0],
// //             color: "blue-900",
// //           }}
// //         />
// //         <DashboardCard
// //           props={{
// //             img: RiAdminLine,
// //             title: "Total Patients",
// //             count: 102,
// //             date: new Date().toISOString().split("T")[0],
// //             color: "blue-900",
// //           }}
// //         />
// //       </div>

// //       <div className="mt-8 grid grid-cols-1 xl:grid-cols-2 gap-6 z-10">
// //         <div className="bg-white w-full h-[500px] max-sm:h-[350px] pb-16 rounded-lg p-6 max-sm:px-1 shadow-sm shadow-slate-600">
// //           <h2 className="text-lg font-bold text-gray-800 mb-4">
// //             Monthly Revenue
// //           </h2>
// //           <ResponsiveContainer>
// //             <AreaChart
// //               data={revenueData}
// //               margin={{ top: 5, right: 30, left: 5, bottom: 5 }}
// //             >
// //               <CartesianGrid strokeDasharray="3 3" />
// //               <XAxis dataKey="month" />
// //               <YAxis />
// //               <Tooltip />
// //               <Legend />
// //               {/* Multiple areas for different data sets */}
// //               <Area
// //                 type="monotone"
// //                 dataKey="revenue"
// //                 stroke="#fb923c"
// //                 fill="#fb923c"
// //                 name="Revenue"
// //               />
// //               <Area
// //                 type="monotone"
// //                 dataKey="admin"
// //                 stroke="#4169e1"
// //                 fill="#4169e1"
// //                 name="Admin"
// //               />
// //               <Area
// //                 type="monotone"
// //                 dataKey="user"
// //                 stroke="#32cd32"
// //                 fill="#32cd32"
// //                 name="User"
// //               />
// //             </AreaChart>
// //           </ResponsiveContainer>
// //         </div>

// //         <div className="bg-white w-full h-[500px] max-sm:h-[350px] pb-16 rounded-lg p-6 max-sm:px-1 shadow-sm shadow-slate-600 z-10">
// //           <h2 className="text-lg font-bold text-gray-800 mb-4">Daily Users</h2>
// //           <ResponsiveContainer>
// //             <PieChart>
// //               <Pie
// //                 data={usersData}
// //                 dataKey="users"
// //                 nameKey="day"
// //                 cx="50%"
// //                 cy="50%"
// //                 innerRadius="40%"
// //                 outerRadius="90%"
// //                 fill="#8884d8"
// //                 label
// //               >
// //                 {usersData.map((entry, index) => (
// //                   <Cell
// //                     key={`cell-${index}`}
// //                     fill={COLORS[index % COLORS.length]}
// //                   />
// //                 ))}
// //               </Pie>
// //               <Tooltip />
// //               <Legend
// //                 iconSize={10}
// //                 layout="horizontal"
// //                 verticalAlign="bottom"
// //                 align="center"
// //                 wrapperStyle={{ paddingTop: 10 }}
// //               />
// //             </PieChart>
// //           </ResponsiveContainer>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default DashBoardMain;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import {
//   AreaChart,
//   PieChart,
//   Area,
//   Pie,
//   Cell,
//   ResponsiveContainer,
//   CartesianGrid,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
// } from "recharts";
// import { RiAdminLine } from "react-icons/ri";
// import DashboardCardComp from "../ReusableComp/DashboardCardCompo";

// const DashBoardMain = () => {
//   const [patients, setPatients] = useState([]);
//   const [revenue, setRevenue] = useState(0); // State to store the revenue
//   const COLORS = ["#fb923c", "#f87171", "#4ade80", "#60a5fa", "#a78bfa"];

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const adminId = localStorage.getItem("adminId");
//         if (!adminId) {
//           console.error("Doctor ID not found in local storage.");
//           return;
//         }

//         // Fetch the patient data
//         const response = await axios.get(`http://localhost:7000/api/appointment/dashboard?doctorId=${adminId}`);
//         setPatients(response.data);

//         // Fetch the revenue data
//         const revenueResponse = await axios.get(`http://localhost:7000/api/dashboard/revenue?doctorId=${adminId}`);
//         setRevenue(revenueResponse.data.revenue); // Assuming the backend sends { revenue: totalRevenue }

//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const totalAccepted = patients.filter((patient) => patient.status === "Accepted").length;
//   const totalRejected = patients.filter((patient) => patient.status === "Rejected").length;

//   return (
//     <div className="bg-gray-200 w-full min-h-screen">
//       <h1 className="text-2xl font-bold mb-7 border-b-2 pb-3 border-slate-600">
//         Doctor Dashboard
//       </h1>
//       <div className="grid grid-cols-3 gap-5">
//         <DashboardCardComp
//           props={{
//             img: RiAdminLine,
//             title: "Total Patients",
//             count: patients.length,
//             date: new Date().toISOString().split("T")[0],
//             color: "blue-900",
//           }}
//         />
//         <DashboardCardComp
//           props={{
//             img: RiAdminLine,
//             title: "No of Accepted",
//             count: totalAccepted,
//             date: new Date().toISOString().split("T")[0],
//             color: "green-600",
//           }}
//         />
//         <DashboardCardComp
//           props={{
//             img: RiAdminLine,
//             title: "No of Rejected",
//             count: totalRejected,
//             date: new Date().toISOString().split("T")[0],
//             color: "red-600",
//           }}
//         />
//         {/* Revenue Card */}
//         <DashboardCardComp
//           props={{
//             img: RiAdminLine,
//             title: "Revenue",
//             count: revenue,  // Display the fetched revenue
//             date: new Date().toISOString().split("T")[0],
//             color: "green-500", // Customize color as needed
//           }}
//         />
//       </div>
//       <div className="mt-8 grid grid-cols-1 xl:grid-cols-2 gap-6">
//         <div className="bg-white w-full h-[500px] rounded-lg p-6 shadow-sm">
//           <h2 className="text-lg font-bold text-gray-800 mb-4">Patient Distribution</h2>
//           <ResponsiveContainer>
//             <PieChart>
//               <Pie
//                 data={patients}
//                 dataKey="patientName"
//                 nameKey="patientConsult"
//                 cx="50%"
//                 cy="50%"
//                 outerRadius="90%"
//                 fill="#8884d8"
//                 label
//               >
//                 {patients.map((entry, index) => (
//                   <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                 ))}
//               </Pie>
//               <Tooltip />
//               <Legend />
//             </PieChart>
//           </ResponsiveContainer>
//         </div>
//         <div className="bg-white w-full h-[500px] rounded-lg p-6 shadow-sm">
//           <h2 className="text-lg font-bold text-gray-800 mb-4">Patient Status Over Time</h2>
//           <ResponsiveContainer>
//             <AreaChart data={patients}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="date" />
//               <YAxis />
//               <Tooltip />
//               <Legend />
//               <Area type="monotone" dataKey="status" stroke="#4ade80" fill="#4ade80" />
//             </AreaChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashBoardMain;


import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  PieChart,
  BarChart,
  LineChart,
  Pie,
  Bar,
  Line,
  Cell,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import { RiAdminLine } from "react-icons/ri";
import DashboardCardComp from "../ReusableComp/DashboardCardCompo";

const DashBoardMain = () => {
  const [patients, setPatients] = useState([]);
  const [revenue, setRevenue] = useState(0); // Total revenue
  const [revenuePerDay, setRevenuePerDay] = useState([]); // Daily revenue data
  const [revenuePerWeek, setRevenuePerWeek] = useState([]); // Weekly revenue data
  const COLORS = ["#fb923c", "#f87171", "#4ade80", "#60a5fa", "#a78bfa"];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const adminId = localStorage.getItem("adminId");
        if (!adminId) {
          console.error("Doctor ID not found in local storage.");
          return;
        }

        // Fetch the patient data
        const response = await axios.get(
          `http://localhost:7000/api/appointment/dashboard?doctorId=${adminId}`
        );
        setPatients(response.data);

        // Fetch the total revenue data
        const revenueResponse = await axios.get(
          `http://localhost:7000/api/dashboard/revenue?doctorId=${adminId}`
        );
        setRevenue(revenueResponse.data.revenue);

        // Fetch the daily revenue data
        const revenuePerDayResponse = await axios.get(
          `http://localhost:7000/api/dashboard/revenue/perday?doctorId=${adminId}`
        );
        setRevenuePerDay(revenuePerDayResponse.data);

        // Fetch the weekly revenue data (revenue per day of the week)
        const revenuePerWeekResponse = await axios.get(
          `http://localhost:7000/api/dashboard/revenue/perweek?doctorId=${adminId}`
        );
        setRevenuePerWeek(revenuePerWeekResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const totalAccepted = patients.filter(
    (patient) => patient.status === "Accepted"
  ).length;
  const totalRejected = patients.filter(
    (patient) => patient.status === "Rejected"
  ).length;

  return (
    <div className=" w-full min-h-screen">
      <h1 className="text-3xl font-semibold mb-7 border-b-2 pb-3 border-slate-600">
        Doctor Dashboard
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCardComp
          props={{
            img: RiAdminLine,
            title: "Total Patients",
            count: patients.length,
            date: new Date().toISOString().split("T")[0],
            color: "blue-600",
          }}
        />
        <DashboardCardComp
          props={{
            img: RiAdminLine,
            title: "No of Accepted",
            count: totalAccepted,
            date: new Date().toISOString().split("T")[0],
            color: "green-600",
          }}
        />
        <DashboardCardComp
          props={{
            img: RiAdminLine,
            title: "No of Rejected",
            count: totalRejected,
            date: new Date().toISOString().split("T")[0],
            color: "red-600",
          }}
        />
        <DashboardCardComp
          props={{
            img: RiAdminLine,
            title: "Total Revenue",
            count: revenue,
            date: new Date().toISOString().split("T")[0],
            color: "green-500",
          }}
        />
      </div>

      <div className="mt-8 grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Patient Distribution */}
        <div className="bg-white w-full h-[500px] rounded-lg p-6 shadow-md shadow-slate-300">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Patient Distribution
          </h2>
          <ResponsiveContainer width="100%" height="100%" className="p-6">
            <PieChart>
              <Pie
                data={[
                  { name: "Total Patients", value: patients.length },
                  { name: "Accepted Patients", value: totalAccepted },
                  { name: "Rejected Patients", value: totalRejected },
                ]}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius="40%"
                outerRadius="80%"
                fill="#8884d8"
                label
              >
                {[{ name: "Total Patients", value: patients.length },
                  { name: "Accepted Patients", value: totalAccepted },
                  { name: "Rejected Patients", value: totalRejected },
                ].map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Daily Revenue - BarChart */}
        <div className="bg-white w-full h-[500px] rounded-lg p-6 shadow-md shadow-slate-300">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Revenue Per Week</h2>
          <ResponsiveContainer width="100%" height="100%" className="p-6">
          <LineChart data={revenuePerWeek}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="totalRevenue" stroke="#a78bfa" fill="#a78bfa" />
          </LineChart>
        </ResponsiveContainer>

        </div>
      </div>
    </div>
  );
};

export default DashBoardMain;
