import React, { useState } from "react";
import BackNavigation from "../BackNavigationBar/BackNavigation";

function ForgetPassword() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  const [dataGetOTP, setDataGetOTP] = useState({
    email: "",
  });

  const [emailForVerify, setEmailForVerify] = useState("");
  const [dataForVerify, setDataForVerify] = useState({
    email: "",
    otp: "",
  });

  const getOTP = (e) => {
    e.preventDefault();
    setIsOpen(true);
    setEmailForVerify(email);
    setEmail("");
    console.log(dataGetOTP);
  };

  const verifyOTP = (e) => {
    e.preventDefault();
    console.log(dataForVerify);
  };
  return (
    <div>
      <BackNavigation forgetPassword="Forget Password" />
      <div className="mt-[4rem] px-3">
        <div className="form mt-3 pt-7">
          <form onSubmit={getOTP}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setDataGetOTP({ ...dataGetOTP, email: e.target.value });
                }}
                required
              />
            </div>
            <div className="mb-6">
              <button
                className="w-full bg-pink-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Send Reset Link
              </button>
            </div>
          </form>
        </div>
      </div>
      {isOpen && (
        <div className=" bg-slate-200 px-3 py-2 mx-3 w-auto">
          <h1 className="text-slate-600">
            OTP is sent to your email <span>{emailForVerify}</span>
          </h1>
          <div className="mt-9  h-[50vh] z-50 text-black">
            <form onSubmit={verifyOTP} className="flex flex-col gap-2">
              <label htmlFor="otp">Enter OTP</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="otp"
                type="text"
                placeholder="Enter your OTP"
                value={otp}
                onChange={(e) => {
                  setOtp(e.target.value);
                  setDataForVerify({
                    ...dataForVerify,
                    email: emailForVerify,
                    otp: e.target.value,
                  });
                }}
              />
              <button
                className="w-full bg-pink-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-3"
                type="submit"
              >
                Verify OTP
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ForgetPassword;
