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
  const [revenue, setRevenue] = useState(0); 
  const [revenuePerWeek, setRevenuePerWeek] = useState([]); // Weekly revenue data
  const COLORS = ["#fb923c", "#f87171", "#4ade80", "#60a5fa", "#a78bfa"];
  console.log(revenue);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const adminId = localStorage.getItem("adminId");
        if (!adminId) {
          console.error("Doctor ID not found in local storage.");
          return;
        }

        const response = await axios.get(
          `http://localhost:7000/api/appointment/dashboard?doctorId=${adminId}`
        );
        setPatients(response.data);

        const revenueResponse = await axios.get(
          `http://localhost:7000/api/dashboard/revenue?doctorId=${adminId}`
        );
        setRevenue(revenueResponse.data.totalRevenue);

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
