import React from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaKey, FaStethoscope, FaUserEdit } from "react-icons/fa";
import { MdPreview } from "react-icons/md";
import { IoMdTimer } from "react-icons/io";
import { TbLogout } from "react-icons/tb";
import { RiContactsFill } from "react-icons/ri";

import Logo from "../../images/CureConnect.png";
import HeaderMain from "../Header/Header";
import { BiLogOut, BiSolidLogOut } from "react-icons/bi";

const navItems = [
  { icon: LuLayoutDashboard, text: "Dashboard", path: "/admin" },
  { icon: FaStethoscope, text: "Appointments", path: "/admin/appointments" },
  { icon: RiContactsFill, text: "My Patients", path: "/admin/patients" },
  { icon: IoMdTimer, text: "Available Timings", path: "/admin/availabletimimgs" },
  { icon: MdPreview, text: "Reviews", path: "/admin/reviews" },
  { icon: FaUserEdit, text: "Profile Settings", path: "/admin/profile" },
  { icon: FaKey, text: "Change Password", path: "/admin/changepassword" },
  
];

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate()


const handleLogout = () =>{
  localStorage.clear()
  navigate("/")
}

  return (
    <div>
      <div className="relative top-0 sm:hidden">
        <HeaderMain />
      </div>

      <div className="relative bg-blue-950 h-screen w-full border-r border-gray-200 shadow-lg flex flex-col max-sm:hidden">
        {/* Logo Section */}
        <div className="p-5 border-b border-gray-200">
          <div className="flex items-center justify-center">
            <Link to="/">
              <img src={Logo} alt="Company Logo" className="h-16 w-44" />
            </Link>
          </div>
        </div>

        <nav className="flex flex-col gap-3">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center space-x-3 pl-6 p-3 transition-all duration-200 
                ${
                  isActive && location.pathname === item.path
                    ? "bg-blue-500 text-white border-l-8 border-white"
                    : "hover:bg-blue-500 hover:text-white hover:border-l-8 border-white hover:shadow text-gray-400"
                }`
              }
            >
              <item.icon className="h-5 w-5 text-xl" />
              <span className="font-medium">{item.text}</span>
            </NavLink>
          ))}
          <div onClick={handleLogout} className="flex items-center space-x-3 pl-5 p-3 text-gray-400 hover:bg-blue-500  hover:text-white hover:border-l-8 border-white hover:shadow cursor-pointer">
            <span>
              <BiLogOut className="h-5 w-5 text-xl" />
            </span>
            <span className="font-medium">
              Log Out
            </span>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
