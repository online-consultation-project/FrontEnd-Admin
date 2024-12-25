import { Route, Routes } from "react-router-dom";
import Appointment from "./Components/Appointment/Appointment";
import OnlineAppointment from "./Components/Appointment/OnlineAppointment";
import OfflineAppointment from "./Components/Appointment/OfflineAppointment";
import AdminReview from "./Components/Reviews/AdminReview";
import ProfileSettings from "./Components/Profile/ProfileSettings";
import BasicDetials from "./Components/Profile/BasicDetials";

import ChangePassword from "./Components/Settings/ChangePassword/ChangePassword";
import Logout from "./Components/Settings/LogOut/Logout";
import MyPatients from "./Components/Patients/Mypatients";
import Slots from "./Components/Timing/Slots";
import Signin from "./Components/auth/Signin";
import DashBoardMain from "./Components/DashBoardComponent/DashBoardMain";
import HomeSection from "./Components/Home/Home";
import PrivateRoute from "./Components/auth/private";
import ResetPassword from "./Components/auth/ForgotPassword";
import UpdateProfile from "./Components/Profile/updateProfile";
import AppointmentList from "./Components/Appointment/Bookedappointment";
import Report from "./Components/Settings/Report/Report";

const RouteComp = () => {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/forgot-password" element={<ResetPassword/>}/>
      <Route element={<PrivateRoute />}>
        <Route path="/admin" element={<HomeSection />}>
          <Route index element={<DashBoardMain />} />

            <Route path="appointments/:doctorId" element={<AppointmentList />} />
            {/* <Route path="appointments/:appointmentId" element={<AppointmentList />} /> */}
            

          <Route path="profile" element={<ProfileSettings />}>
            <Route index element={<BasicDetials />} />
            <Route path="update/:_id" element={<UpdateProfile />} />
          </Route>

          <Route path="patients/:doctorId" element={<MyPatients />} />
          <Route path="reviews" element={<AdminReview />} />
          <Route path="availabletimimgs" element={<Slots />} />
          <Route
            path="availabletimimgs/updateslots/:doctor_id" element={<Slots />}
          />
          <Route path="report" element={<Report/>} />
          <Route path="changepassword" element={<ChangePassword />} />
          <Route path="logout" element={<Logout />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default RouteComp;
