import React from "react";

import { Outlet } from "react-router-dom";

const ProfileSettings = () => {
  return (
    <div className="bg-gray-200 w-full min-h-screen">
      <h1 className="text-2xl font-bold mb-7 border-b-2 pb-3 border-slate-600">
        Profile Settings
      </h1>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default ProfileSettings;
