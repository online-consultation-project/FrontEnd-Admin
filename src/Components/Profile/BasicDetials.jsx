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
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Header */}
      <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold">Profile</h2>
        <Link to={`/admin/profile/update/${profileData?._id}`}>
          <FaEdit className="text-2xl text-blue-500" />
        </Link>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="flex flex-wrap items-center gap-6">
          <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-lg border flex items-center justify-center overflow-hidden">
            <img
              src="https://purepng.com/public/uploads/large/purepng.com-doctorsdoctorsdoctors-and-nursesa-qualified-practitioner-of-medicine-aclinicianmedical-practitioner-1421526856614w2jt9.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <input type="file" className="mt-3 text-sm" accept="image/*" />
            <button className="text-red-500 mt-2 text-sm">Remove</button>
            <p className="text-gray-500 text-xs">
              Your image should be below 4 MB. Accepted formats: jpg, png, svg.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-2xl font-semibold mb-4">Basic Info </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <p className="text-gray-600 font-medium">Full Name:</p>
            <p className="text-gray-800">
              {profileData?.firstName || "N/A"} {profileData?.lastName || ""}
            </p>
          </div>
          <div>
            <p className="text-gray-600 font-medium">Email:</p>
            <p className="text-gray-800">{profileData?.email || "N/A"}</p>
          </div>
          <div>
            <p className="text-gray-600 font-medium">Phone:</p>
            <p className="text-gray-800">{profileData?.phoneNumber || "N/A"}</p>
          </div>
          <div>
            <p className="text-gray-600 font-medium">Category:</p>
            <p className="text-gray-800">{profileData?.category || "N/A"}</p>
          </div>
          <div>
            <p className="text-gray-600 font-medium">Gender:</p>
            <p className="text-gray-800">{profileData?.gender || "N/A"}</p>
          </div>
          <div>
            <p className="text-gray-600 font-medium">Experience:</p>
            <p className="text-gray-800">
              {profileData?.experience || "N/A"} years
            </p>
          </div>
          <div>
            <p className="text-gray-600 font-medium">Hospital:</p>
            <p className="text-gray-800">
              {profileData?.hospitalName || "N/A"}
            </p>
          </div>
        </div>
      </div>

      {/* Admin Info Form */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <AdminInfoForm />
      </div>
    </div>
  );
};

export default BasicDetails;
