import React, { useEffect, useState } from "react";

import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Grid,
  Box,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  firstName: "",
  lastName: "",
  displayName: "",
  category: "",
  UgDegree: "",
  PgDegree: "",
  UgCompletedAt: "",
  PgCompletedAt: "",
  Ugyear: "",
  Pgyear: "",
  experience1: "",
  experience2: "",
  location: "",
  employement: "",
  about:"",
  image: null,
};


const getIdByData = async (_id,setAdminData) => {
  const authtoken = localStorage.getItem("token");


  try {
    await axios
      .get(`http://localhost:7000/admin/getprofile?_id=${_id}`, {
        headers: {
          Authorization: `Bearer ${authtoken}`,
        },
      })
      .then((res) => {
        setAdminData(res.data);
      
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  } catch (error) {
    console.log(error);
  }
};






const AdminInfoForm = () => {
  const [adminData, setAdminData] = useState(initialState);

  const { _id } = useParams();
  const navigate = useNavigate();

  // const handleOnChange = (e) => {
  //   const { name, value, type, files } = e.target;
  //   setAdminData({ ...adminData, [name]: type === "file" ? files[0] : value });
  // };


  const handleOnChange = (e) => {
    const { name, value, type, files } = e.target;
  console.log(value,name);
  
  
    setAdminData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? files[0] : value,
      ...(type === "file" && { fileOriginalName: files[0]?.name || "" }),
    }));
  };




  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();

    Object.keys(adminData).forEach((key) => {
      data.append(key, adminData[key]);
    });
    
console.log(data);


    const authtoken = localStorage.getItem("token");
    try {
          await axios
            .put(`http://localhost:7000/admin/profileadd/?objId=${_id}`, data,
              {
              headers: {
                Authorization: `Bearer ${authtoken}`,
                "Content-Type": "multipart/form-data",
              }
            })
            .then((res) => {
              toast.success(res.data.message);
              // setAdminData(initialState);
              // navigate("/")
            })
            .catch((err) => {
              toast.error(err.response.data.message);
            });
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
      getIdByData(_id,setAdminData);
  },[]);

  return (
    <Box
      sx={{
        minHeight: "200px",
        p: 4,
        bgcolor: "white",
        borderRadius: "16px",
        boxShadow: 3,
      }}
    >
      <form onSubmit={handleOnSubmit}>
        <h2 className="text-center mb-8 font-semibold text-2xl">Update profile</h2>
        <Grid container spacing={4}>
          {/* First Name */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="First Name"
              name="firstName"
              value={adminData.firstName}
              onChange={handleOnChange}
              required
            />
          </Grid>

          {/* Last Name */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Last Name"
              name="lastName"
              value={adminData.lastName}
              onChange={handleOnChange}
              required
            />
          </Grid>

          {/* Display Name */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type="text"
              label="Display Name"
              name="displayName"
              value={adminData.displayName}
              onChange={handleOnChange}
              required
            />
          </Grid>

          {/* Designation */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type="text"
              label="category"
              name="category"
              value={adminData.category}
              onChange={handleOnChange}
              required
            />
          </Grid>
          <div className="w-full flex justify-between items-center py-5 mt-3  px-6 ">
            <h2 className=" text-2xl font-semibold text-gray-800 ">
              Qualification
            </h2>
          </div>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type="text"
              label="UgDegree"
              name="UgDegree"
              value={adminData.UgDegree}
              onChange={handleOnChange}
              required
            />
          </Grid>

          {/* Last Name */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type="text"
              label="PgDegree"
              name="PgDegree"
              value={adminData.PgDegree}
              onChange={handleOnChange}
            />
          </Grid>

          {/* Email */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type="text"
              label="UgCompletedAt"
              name="UgCompletedAt"
              value={adminData.UgCompletedAt}
              onChange={handleOnChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type="text"
              label="PgCompletedAt"
              name="PgCompletedAt"
              value={adminData.PgCompletedAt}
              onChange={handleOnChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type="number"
              label="Ugyear"
              name="Ugyear"
              value={adminData.Ugyear}
              onChange={handleOnChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type="number"
              label="Pgyear"
              name="Pgyear"
              value={adminData.Pgyear}
              onChange={handleOnChange}
              required
            />
          </Grid>
          <div className="w-full flex justify-between items-center py-5 mt-3  px-6 ">
            <h2 className=" text-2xl font-semibold text-gray-800 ">
              Experience
            </h2>
          </div>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type="text"
              label="Experience1"
              name="experience1"
              value={adminData.experience1}

              onChange={handleOnChange}
              required
            />
          </Grid>

          {/* Last Name */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type="text"
              label="Experience2"
              name="experience2"
              value={adminData.experience2}
              onChange={handleOnChange}
            />
          </Grid>

          {/* Email */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type="text"
              label="Location"
              name="location"
              value={adminData.location}
              onChange={handleOnChange}
              required
            />
          </Grid>

          {/* Phone Number */}
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Employement</InputLabel>
              <Select
                name="employement"
                value={adminData.employement}
                onChange={handleOnChange}
                required
              >
                <MenuItem value="FullTime">FullTime</MenuItem>
                <MenuItem value="PartTime">PartTime</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="About"
              name="about"
              multiline
              rows={4}
              value={adminData.about}
              onChange={handleOnChange}
              required
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleOnChange}
              className="mt-4"
            />
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ fontSize: "1.2rem", py: 1 }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default AdminInfoForm;
