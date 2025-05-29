// import React, { useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";

// const ChangePasswordForm = () => {
//   const [formData, setFormData] = useState({
//     oldPassword: "",
//     newPassword: "",
//     confirmPassword: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const authToken = localStorage.getItem("token");
//     try {
//       const response = await axios.put(
//         "http://localhost:7000/admin/change-password",
//         formData,
//         {
//           headers: { Authorization: `Bearer ${authToken}` },
//         }
//       );
//       toast.success(response.data.message);
//       setFormData({
//         oldPassword: "",
//         newPassword: "",
//         confirmPassword: "",
//       });
//     } catch (error) {
//       toast.error(error.response.data.message);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center">
//       <div className="bg-white  shadow-sm shadow-slate-600 rounded-lg px-8 py-8 w-96">
//         <h2 className="text-2xl font-bold mb-4 text-center text-blue-900">
//           Change Password
//         </h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label
//               htmlFor="oldPassword"
//               className="block text-sm font-medium mb-2"
//             >
//               Old Password
//             </label>
//             <input
//               type="password"
//               id="oldPassword"
//               name="oldPassword"
//               className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
//               value={formData.oldPassword}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               htmlFor="newPassword"
//               className="block text-sm font-medium mb-2"
//             >
//               New Password
//             </label>
//             <input
//               type="password"
//               id="newPassword"
//               name="newPassword"
//               className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
//               value={formData.newPassword}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               htmlFor="confirmPassword"
//               className="block text-sm font-medium mb-2"
//             >
//               Confirm Password
//             </label>
//             <input
//               type="password"
//               id="confirmPassword"
//               name="confirmPassword"
//               className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-900 focus:outline-none focus:ring focus:ring-blue-200"
//           >
//             Change Password
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ChangePasswordForm;




import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Grid, TextField, Button, Typography, Paper } from "@mui/material";

const ChangePasswordForm = () => {
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const authToken = localStorage.getItem("token");
    try {
      const response = await axios.put(
        "http://localhost:7000/admin/change-password",
        formData,
        {
          headers: { Authorization: `Bearer ${authToken}` },
        }
      );
      toast.success(response.data.message);
      setFormData({
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    } catch (error) {
      toast.error(error.response?.data?.message || "Error changing password");
    }
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh", backgroundColor: "#f4f6f8" }}
    >
      <Grid item xs={12} sm={8} md={4}>
        <Paper elevation={3} style={{ padding: "2rem" }}>
          <Typography
            variant="h4"
            component="h1"
            align="center"
            gutterBottom
            style={{ color: "#1565c0" }}
          >
            Change Password
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  label="Old Password"
                  type="password"
                  name="oldPassword"
                  fullWidth
                  value={formData.oldPassword}
                  onChange={handleChange}
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="New Password"
                  type="password"
                  name="newPassword"
                  fullWidth
                  value={formData.newPassword}
                  onChange={handleChange}
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Confirm Password"
                  type="password"
                  name="confirmPassword"
                  fullWidth
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  style={{
                    backgroundColor: "#1565c0",
                    color: "white",
                  }}
                >
                  Change Password
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ChangePasswordForm;



