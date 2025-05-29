import axios from "axios";
import React, { useState } from "react";
import { IoMailOutline } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const initialState = {
  email: "",
  password: "",
};

export const Signin = () => {
  const [inputdata, setInputdata] = useState(initialState);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { value, name } = event.target;
    setInputdata((prevstate) => ({ ...prevstate, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(inputdata);

    try {
      await axios
        .post("http://localhost:7000/admin/adminsigin", inputdata)
        .then((res) => {
          console.log(res.data);
          console.log(res.data.token);

          localStorage.setItem("token", res.data.token);
          localStorage.setItem("adminId", res.data.findEmail._id);
          toast.success(res.data.message);
          navigate("/admin");
          setInputdata(initialState);
        })
        .catch((err) => {
          toast.error(err.response.data.message);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative w-full h-screen flex justify-center items-center px-5">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://img.freepik.com/free-photo/frame-medical-equipment-desk_23-2148519742.jpg?uid=R162550578&ga=GA1.1.1879351381.1714019097&semt=ais_hybrid")',
          filter: "blur(8px)",
        }}
      ></div>

      <div className="relative w-full max-w-md bg-white border-2 border-blue-400 py-10 rounded-2xl shadow-lg">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center space-y-5 px-6"
        >
          <h1 className="text-3xl font-semibold py-5 text-gray-800">
            LOGIN INTO ACCOUNT
          </h1>

          <div className="field-cont flex items-center w-full h-[50px]  px-3 space-x-3 rounded-md">
            <IoMailOutline className="text-gray-700 text-2xl" />
            <input
              type="email"
              name="email"
              value={inputdata.email}
              placeholder="  ENTER YOUR EMAIL"
              onChange={handleChange}
              required
              className="w-full px-4 py-3 text-sm  border-b-2 border-gray-700 focus:outline-none focus:ring-2 focus:ring-gradient-to-r from-[#002578] to-[#0E82FD] focus:rounded-lg focus:border-none    placeholder:text-gray-700"
            />
          </div>
          <div className="field-cont flex items-center w-full h-[50px]  px-3 space-x-3 rounded-md">
            <RiLockPasswordLine className="text-gray-700 text-2xl" />

            <input
              type="password"
              name="password"
              value={inputdata.password}
              placeholder="ENTER YOUR PASSWORD"
              onChange={handleChange}
              required
              className="w-full px-4 py-3 text-sm  border-b-2 border-gray-700 focus:outline-none focus:ring-2 focus:ring-gradient-to-r from-[#002578] to-[#0E82FD] focus:rounded-lg focus:border-none    placeholder:text-gray-700"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-4 bg-[#0E82FD] text-white font-medium rounded-md  transition duration-200 focus:outline-none focus:ring-2 focus:ring-orange-300"
          >
            LOGIN
          </button>
          <Link to={"/forgot-password"}>
            <p className="text-[#0E82FD]">ForgetPassword ?</p>
          </Link>
          <p className="text-gray-700">
            Don't have an account?
            <Link to={"/signup"}>
              <span className="text-blue-400">Create an account</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signin;
