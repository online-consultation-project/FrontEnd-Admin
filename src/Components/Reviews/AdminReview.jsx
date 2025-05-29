import React from "react";
import ReviewSection from "./Reviews";

const AdminReview = () => {
  return (
    <div className="bg-gray-200 w-full min-h-screen">
      <h1 className="text-2xl font-bold mb-7 border-b-2 pb-3 border-slate-600">
        Patients Reviews
      </h1>

      <div className="profile-con w-full  mt-3  flex flex-col sm:flex-row justify-start gap-5 items-center px-4 border-2 border-b-gray-300 rounded-2xl">
        <ReviewSection />
      </div>
    </div>
  );
};

export default AdminReview;
