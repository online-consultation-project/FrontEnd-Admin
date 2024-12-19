import React from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "Offline Appointments", path: "/admin/appointments" },
  { name: "Online Appointments", path: "/admin/appointments/onlineappointment" },

];

const AppointmentNav = () => {
  const location = useLocation();

  return (
    <nav className="w-full h-auto px-5 py-4 bg-slate-50 shadow-gray-300 rounded-2xl mb-3 border border-gray-300">

      <div className="flex flex-col  lg:flex-row justify-around items-center gap-5">
        {navItems.map((item, index) => (
          <Link to={item.path} key={index}>
            <span
              className={`font-bold px-7  py-3 transition-all duration-150 ${
                item.path === location.pathname
                  ? `bg-gradient-to-r from-blue-500 to-blue-900 text-white bg-blue-600 rounded-3xl`
                  : `bg-white text-black`
              }`}
            >
              {item.name}
            </span>
          </Link>
        ))}
      </div>

    
    
    </nav>
  );
};

export default AppointmentNav;
