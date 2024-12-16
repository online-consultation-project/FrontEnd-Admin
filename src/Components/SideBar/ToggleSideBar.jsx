import React from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaStethoscope, FaUserEdit, FaKey } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";
import { IoMdTimer } from "react-icons/io";
import { MdPreview } from "react-icons/md";
import { Link } from "react-router-dom";
import Logo from "../../images/CureConnect.png"; // Path to your logo

const navItems = [
  { icon: LuLayoutDashboard, text: "Dashboard", path: "/admin" },
  { icon: FaStethoscope, text: "Appointments", path: "/admin/appointments" },
  { icon: RiContactsFill, text: "My Patients", path: "/admin/patients" },
  { icon: IoMdTimer, text: "Available Timings", path: "/admin/availabletimimgs" },
  { icon: MdPreview, text: "Reviews", path: "/admin/reviews" },
  { icon: FaUserEdit, text: "Profile Settings", path: "/admin/profile" },
  { icon: FaKey, text: "Change Password", path: "/admin/changepassword" },
];

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-blue-950 shadow-lg z-50 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300`}
    >
      {/* Logo Section */}

      {/* Close Button */}
      <div className="flex justify-end px-4 pt-4">
        <button
          onClick={toggleSidebar}
          className="text-gray-400 text-2xl"
        >
          &times;
        </button>
      </div>
      <div className="flex items-center justify-center px-4 pb-4 border-b border-gray-300">
        <img src={Logo} alt="Logo" className="h-14 w-auto" />
      </div>

      {/* Navigation Items */}
      <div className="flex flex-col gap-4 pt-4 ">
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="flex items-center gap-3 pl-5 p-3 hover:bg-blue-500 hover:border-l-8 border-white hover:text-white text-gray-400"
          >
            <item.icon className="text-xl" />
            <span>{item.text}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
