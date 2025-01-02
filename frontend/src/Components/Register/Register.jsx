import React, { useState } from "react";
import axios from "axios";
import { getMessageSuccess, getMessageError } from "../../Hooks/popUpMessage";
import { Toaster } from "react-hot-toast";
function Register() {
  const [data, setData] = useState({
    fullName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
  });
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      fullName === "" ||
      userName === "" ||
      email === "" ||
      phoneNumber === "" ||
      password === ""
    ) {
      getMessageError("User All Fields Are Required");
      return;
    }
    const res = await axios.post("api/v1/users/register", data);
    getMessageSuccess("user register successfully");
    window.location.href = "/";
    console.log(res);
  };
  return (
    <div className="loginContainer flex flex-col gap-4 justify-center items-center h-screen ">
      <Toaster />
      <div className="loginForm flex flex-col gap-4 bg-slate-600 w-[90%] text-white md:w-[30%] rounded-2xl shadow-xl">
        <form
          onSubmit={handleSubmit}
          className="login flex flex-col gap-4 px-4 py-2"
        >
          <h1 className="text-3xl text-center font-extrabold">Register</h1>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            className=" bg-slate-700 px-2 py-1 rounded-xl focus:outline-none h-10"
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
              setData({ ...data, fullName: e.target.value });
            }}
          />
          <label htmlFor="userName">User Name</label>
          <input
            type="text"
            id="userName"
            className=" bg-slate-700 px-2 py-1 rounded-xl focus:outline-none h-10"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
              setData({ ...data, userName: e.target.value });
            }}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className=" bg-slate-700 px-2 py-1 rounded-xl focus:outline-none h-10"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setData({ ...data, email: e.target.value });
            }}
          />
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="number"
            id="phoneNumber"
            className=" bg-slate-700 px-2 py-1 rounded-xl focus:outline-none h-10 "
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
              setData({ ...data, phoneNumber: e.target.value });
            }}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className=" bg-slate-700 px-2 py-1 rounded-xl focus:none h-10 "
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setData({ ...data, password: e.target.value });
            }}
          />
          <button
            type="submit"
            className="bg-slate-500 w-[30%] text-white py-2 rounded"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
