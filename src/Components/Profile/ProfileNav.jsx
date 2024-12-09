import React from "react";
import { Link, useLocation } from "react-router-dom";

import {
  blackColor,
  primaryColor,
  secondaryColor,
  whiteColor,
} from "../../ReusableComp/ColorComp";

const navItems = [
  { name: "Basic Details", path: "/admin/profile" },
  { name: "Education", path: "/admin/profile/education" },
  { name: "Experience", path: "/admin/profile/experience" },
];

const ProfileNav = () => {
  const location = useLocation();

  return (
    <nav className="w-full h-auto px-5 py-4 bg-slate-50 shadow-gray-300 rounded-2xl mb-3 border border-gray-300">

      <div className="flex flex-col  sm:flex-row justify-around items-center space-y-4 sm:space-y-0">
        {navItems.map((item, index) => (
          <Link to={item.path} key={index}>
            <span
              className={`font-bold px-7  max-md:px-28     py-3 transition-all duration-150 ${
                item.path === location.pathname
                  ? `bg-gradient-to-r from-${primaryColor} to-${secondaryColor} text-${whiteColor} border-2 text-white bg-blue-600 rounded-xl`
                  : `bg-${whiteColor} text-${blackColor} border-transparent`
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

export default ProfileNav;
