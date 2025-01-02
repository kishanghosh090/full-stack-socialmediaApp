import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { getMessageSuccess, getMessageError } from "../../Hooks/popUpMessage";
import { Toaster } from "react-hot-toast";

function Login() {
  const [data, setData] = useState({
    email: "",
    phoneNumber: "",
    password: "",
  });
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "" && phoneNumber === "") {
      getMessageError("Email or phone Number is required");
      return;
    }
    if (password === "") {
      getMessageError("Password is required");
      return;
    }

    axios
      .post("api/v1/users/login", data)
      .then((res) => {
        getMessageSuccess("user login successfully");
        setEmail("");
        setPhoneNumber("");
        setPassword("");
        window.location.href = "/";
        console.log(res);
      })
      .catch((err) => {
        // console.log(err.response.data.message);
        getMessageError(err.response.data.message);
        return;
      });
  };
  return (
    <div className="loginContainer flex flex-col gap-4 justify-center items-center h-screen ">
      <Toaster />
      <div className="loginForm flex flex-col gap-4 bg-slate-600 w-[90%] text-white md:w-[30%] rounded-2xl shadow-xl">
        <form
          onSubmit={handleSubmit}
          className="login flex flex-col gap-4 px-4 py-2"
        >
          <h1 className="text-3xl text-center font-extrabold">Login</h1>

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
          <h2 className="text-center ">Or</h2>
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
      <div className="flex justify-center items-center gap-4 w-[90%] mx-auto">
        <NavLink
          to="/Register"
          className="text-slate-600 w-full md:w-[30%] border-1 border-black px-4 py-2 rounded-full flex justify-center items-center"
        >
          Create an account
        </NavLink>
      </div>
    </div>
  );
}

export default Login;
