import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import axios from "axios";
import AdminInfoForm from "./ProfileForm";

const BasicDetails = () => {
  const [profileData, setProfileData] = useState({});

  const authtoken = localStorage.getItem("token");

  const AdminId = localStorage.getItem("adminId");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:7000/admin/getadminProfile?_id=${AdminId}`,
          {
            headers: {
              authorization: `Bearer ${authtoken}`,
            },
          }
        );
        if (response.status === 200) {
          setProfileData(response.data);
        }
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    if (AdminId) {
      fetchData();
    }
  }, [AdminId]);

  return (
    <div className="min-h-[300px]">
      {/* Header */}
      <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold">Profile</h2>
        <Link to={`/admin/profile/update/${profileData?._id}`}>
          <FaEdit className="text-2xl text-blue-500" />
        </Link>
      </div>

      <div className="bg-white p-6 rounded-lg flex flex-col shadow-sm shadow-slate-600 mb-6">
        <h3 className="text-2xl font-semibold mb-4">Basic Info </h3>

        <div className="flex felx-row justify-around items-start gap-5 flex-wrap">
          <div className="w-36 h-36 sm:w-60 sm:h-60 rounded-full border-[10px] border-blue-900 overflow-hidden">
            <img
              src="https://purepng.com/public/uploads/large/purepng.com-doctorsdoctorsdoctors-and-nursesa-qualified-practitioner-of-medicine-aclinicianmedical-practitioner-1421526856614w2jt9.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          <div className=" grid max-[410px]:grid-cols-1 max-md:grid-cols-2 grid-cols-3 gap-8 ">
            <div className="flex flex-col gap-2">
              <p className="text-gray-600 font-medium">Full Name:</p>
              <p className="text-black">
                {profileData?.firstName || "N/A"} {profileData?.lastName || ""}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-gray-600 font-medium">Email:</p>
              <p className="text-black">{profileData?.email || "N/A"}</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-gray-600 font-medium">Phone:</p>
              <p className="text-black">
                {profileData?.phoneNumber || "N/A"}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-gray-600 font-medium">Category:</p>
              <p className="text-black">{profileData?.category || "N/A"}</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-gray-600 font-medium">Gender:</p>
              <p className="text-black">{profileData?.gender || "N/A"}</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-gray-600 font-medium">Experience:</p>
              <p className="text-black">
                {profileData?.experience || "N/A"} years
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-gray-600 font-medium">Hospital:</p>
              <p className="text-black">
                {profileData?.hospitalName || "N/A"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicDetails;
