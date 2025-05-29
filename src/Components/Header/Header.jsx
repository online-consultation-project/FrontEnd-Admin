// import React from "react";
// import { IoMenu, IoSearchSharp } from "react-icons/io5";
// import Logo from "../assets/CC_logo3.png";
// import { IoMdNotifications } from "react-icons/io";
// import { FaUserCircle } from "react-icons/fa";
// import { shadowColor} from "../ReusableComp/ColorComp";

// const HeaderMain = () => {
//   return (
//     <div className={`w-full h-16 px-4 bg-white shadow-md shadow-${shadowColor} flex justify-between items-center gap-5`}>
//       <IoMenu className="text-[20px] cursor-pointer" />
//       <img src={Logo} alt="" className="h-10 w-28" />
//       <div className="flex items-center gap-3 text-xl">
//         <IoSearchSharp className="cursor-pointer text-[20px]" />
//         <IoMdNotifications className="cursor-pointer text-[20px]" />
//         <FaUserCircle className="cursor-pointer text-[20px]" />
//       </div>
//     </div>
//   );
// };

// export default HeaderMain;

import React, { useState } from "react";
import { IoMenu, IoSearchSharp } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import Logo from "../assets/CC_logo3.png";
import Sidebar from "../SideBar/ToggleSideBar";

const HeaderMain = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="w-full h-16 px-4 bg-white shadow-md flex justify-between items-center gap-5">
      {/* Burger Menu */}
      <IoMenu className="text-2xl cursor-pointer" onClick={toggleSidebar} />
      
      {/* Logo */}
      <img src={Logo} alt="Logo" className="h-10 w-28" />
      
      {/* Right-side Icons */}
      <div className="flex items-center gap-3 text-xl">
        <IoSearchSharp className="cursor-pointer text-2xl" />
        <IoMdNotifications className="cursor-pointer text-2xl" />
        <FaUserCircle className="cursor-pointer text-2xl" />
      </div>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
};

export default HeaderMain;


