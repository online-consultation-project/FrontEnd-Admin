import axios from "axios";
import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { MdOutlinePhone } from "react-icons/md";

import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const initialState = {
  userName: "",
  email: "",

  phonenum: "",
};

export const Signup = () => {
  const [inputdata, setInputdata] = useState(initialState);

  const navigate = useNavigate();

  const HandleChange = (event) => {
    const { value, name } = event.target;
    setInputdata((prevstate) => ({ ...prevstate, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(inputdata);

    try {
      await axios
        .post("http://localhost:7000/auth/signup", inputdata)
        .then((res) => {
          toast.success(res.data.message);
          navigate("/signin");
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
      className="absolute inset-0 bg-cover bg-no-repeat  bg-center"
      style={{
        backgroundImage: 'url("https://img.freepik.com/free-photo/modern-keyboard-mouse-with-medicines-surface_23-2148213965.jpg?uid=R162550578&ga=GA1.1.1879351381.1714019097&semt=ais_hybrid")',
        filter: 'blur(8px)',
      }}
    ></div>

    <div className="relative w-full max-w-md bg-white border-2 border-blue-400 py-5 rounded-2xl shadow-lg">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center space-y-6 px-6"
      >
        <h1 className="text-3xl font-semibold py-3 text-gray-800">
         REGISTER AN ACCOUNT
        </h1>
  
        <div className="field-cont flex items-center w-full h-[50px]  px-3 space-x-3 rounded-md">
        <FaRegUser className="text-gray-700 text-xl" />
        <input
          type="text"
          name="userName"
          value={inputdata.userName}
          placeholder="ENTER YOUR NAME"
          onChange={HandleChange}
          required
          className="w-full px-4 py-3 text-sm  border-b-2 border-gray-700 focus:outline-none focus:ring-2 focus:ring-gradient-to-r from-[#002578] to-[#0E82FD] focus:rounded-lg focus:border-none    placeholder:text-gray-700"
        />
  </div>
        <div className="field-cont flex items-center w-full h-[50px]  px-3 space-x-3 rounded-md">
        <IoMailOutline className="text-gray-700 text-2xl" />
        <input
          type="email"
          name="email"
          value={inputdata.email}
          placeholder="ENTER YOUR EMAIL"
          onChange={HandleChange}
          required
          className="w-full px-4 py-3 text-sm  border-b-2 border-gray-700 focus:outline-none focus:ring-2 focus:ring-gradient-to-r from-[#002578] to-[#0E82FD] focus:rounded-lg focus:border-none    placeholder:text-gray-700"
        />
  </div>
       
   
  <div className="field-cont flex items-center w-full h-[50px]  px-3 space-x-3 rounded-md">
  <MdOutlinePhone className="text-gray-700 text-2xl"  />
        <input
          type="number"
          name="phonenum"
          value={inputdata.phonenum}
          placeholder="ENTER A MOBILE NUMBER"
          onChange={HandleChange}
        className="w-full px-4 py-3 text-sm  border-b-2 border-gray-700 focus:outline-none focus:ring-2 focus:ring-gradient-to-r from-[#002578] to-[#0E82FD] focus:rounded-lg focus:border-none    placeholder:text-gray-700"
        />
        <div>
</div>
        </div>
        <button
          type="submit"
          className="w-full py-3  bg-[#0E82FD] text-white font-medium rounded-md  transition duration-200 focus:outline-none focus:ring-2 focus:ring-orange-300"
        >
       REGISTER
        </button>
        <p className="text-gray-700">
          Already have an account?
          <Link to={"/signin"}>
            <span className="text-blue-400">login</span>
          </Link>
      
        
        </p>
      </form>
    </div>
  </div>
  );
};

export default Signup;
