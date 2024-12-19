import React, { useState } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts";
import DashboardCard from "../ReusableComp/DashboardCard";
import { RiAdminLine } from "react-icons/ri";

const DashBoardMain = () => {
  const revenueData = [
    { month: "Jan", revenue: 100, admin: 10, user: 30 },
    { month: "Feb", revenue: 200, admin: 25, user: 56 },
    { month: "Mar", revenue: 300, admin: 146, user: 95 },
    { month: "Apr", revenue: 400, admin: 368, user: 153 },
    { month: "May", revenue: 500, admin: 643, user: 458 },
  ];

  const usersData = [
    { day: "Mon", users: 100,  },
    { day: "Tue", users: 200,  },
    { day: "Wed", users: 300,  },
    { day: "Thu", users: 400,  },
    { day: "Fri", users: 500,  },
  ];

  const COLORS = ["#fb923c", "#f87171", "#4ade80", "#60a5fa", "#a78bfa"];

  return (
    <div className="bg-gray-200 w-full min-h-screen">
      <h1 className="text-2xl font-bold mb-7 border-b-2 pb-3 border-slate-600">
        Admin DashBoard
      </h1>
      <div className="grid grid-cols-4 max-[540px]:grid-cols-1 max-sm:grid-cols-2 sm:max-md:grid-cols-1 md:max-lg:grid-cols-2 lg:max-xl:grid-cols-3 gap-5">
        <DashboardCard
          props={{
            img: RiAdminLine,
            title: "Total Patients",
            count: 102,
            date: new Date().toISOString().split("T")[0],
            color: "blue-900",
          }}
        />
        <DashboardCard
          props={{
            img: RiAdminLine,
            title: "Total Patients",
            count: 102,
            date: new Date().toISOString().split("T")[0],
            color: "blue-900",
          }}
        />
        <DashboardCard
          props={{
            img: RiAdminLine,
            title: "Total Patients",
            count: 102,
            date: new Date().toISOString().split("T")[0],
            color: "blue-900",
          }}
        />
        <DashboardCard
          props={{
            img: RiAdminLine,
            title: "Total Patients",
            count: 102,
            date: new Date().toISOString().split("T")[0],
            color: "blue-900",
          }}
        />
      </div>

      <div className="mt-8 grid grid-cols-1 xl:grid-cols-2 gap-6 z-10">
        <div className="bg-white w-full h-[500px] max-sm:h-[350px] pb-16 rounded-lg p-6 max-sm:px-1 shadow-sm shadow-slate-600">
          <h2 className="text-lg font-bold text-gray-800 mb-4">
            Monthly Revenue
          </h2>
          <ResponsiveContainer>
            <AreaChart
              data={revenueData}
              margin={{ top: 5, right: 30, left: 5, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              {/* Multiple areas for different data sets */}
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#fb923c"
                fill="#fb923c"
                name="Revenue"
              />
              <Area
                type="monotone"
                dataKey="admin"
                stroke="#4169e1"
                fill="#4169e1"
                name="Admin"
              />
              <Area
                type="monotone"
                dataKey="user"
                stroke="#32cd32"
                fill="#32cd32"
                name="User"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white w-full h-[500px] max-sm:h-[350px] pb-16 rounded-lg p-6 max-sm:px-1 shadow-sm shadow-slate-600 z-10">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Daily Users</h2>
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={usersData}
                dataKey="users"
                nameKey="day"
                cx="50%"
                cy="50%"
                innerRadius="40%"
                outerRadius="90%"
                fill="#8884d8"
                label
              >
                {usersData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend
                iconSize={10}
                layout="horizontal"
                verticalAlign="bottom"
                align="center"
                wrapperStyle={{ paddingTop: 10 }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DashBoardMain;
