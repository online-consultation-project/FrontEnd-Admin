import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaKey, FaStethoscope, FaUserEdit } from "react-icons/fa";
import { MdPreview } from "react-icons/md";
import { IoMdTimer } from "react-icons/io";
import { TbLogout } from "react-icons/tb";
import { RiContactsFill } from "react-icons/ri";

import Logo from ".././assets/CC_logo3.png";
import HeaderMain from "../Header/Header";

const navItems = [
  { icon: LuLayoutDashboard, text: "Dashboard", path: "/admin" },
  { icon: FaStethoscope, text: "Appointments", path: "/admin/appointments" },
  { icon: RiContactsFill, text: "My Patients", path: "/admin/patients" },
  { icon: IoMdTimer, text: "Available Timings", path: "/admin/availabletimimgs" },
  { icon: MdPreview, text: "Reviews", path: "/admin/reviews" },
  { icon: FaUserEdit, text: "Profile Settings", path: "/admin/profile" },
  { icon: FaKey, text: "Change Password", path: "/admin/changepassword" },
  { icon: TbLogout, text: "Log Out", path: "/admin/logout" },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <div>
      <div className="relative top-0 sm:hidden">
        <HeaderMain />
      </div>

      <div className="relative bg-white h-screen w-full border-r border-gray-200 shadow-lg flex flex-col max-sm:hidden">
        {/* Logo Section */}
        <div className="p-5 border-b border-gray-200">
          <div className="flex items-center justify-center">
            <Link to="/">
              <img src={Logo} alt="Company Logo" className="h-16 w-44" />
            </Link>
          </div>
        </div>

        <nav className="flex flex-col p-4 gap-3">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center space-x-3 p-3 rounded-lg text-gray-600 transition-all duration-200 
                ${
                  isActive && location.pathname === item.path
                    ? "bg-gradient-to-r from-blue-900 to-blue-500 text-white"
                    : "hover:bg-gray-100 hover:shadow"
                }`
              }
            >
              <item.icon className="h-5 w-5 text-xl" />
              <span className="font-medium">{item.text}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
