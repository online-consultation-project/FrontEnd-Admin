import React from "react";

import { Outlet } from "react-router-dom";

const ProfileSettings = () => {
  return (
    <div>
       <h1 className="text-2xl font-bold mb-3 border-b-2 pb-3 py-5 border-slate-600">
        Profile Settings
      </h1>

      <Outlet />
    </div>
  );
};

export default ProfileSettings;
