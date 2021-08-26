import React from "react";
import VerifyPhone from "../forms/VerifyPhone";
import LoginImage from "../../images/login.svg";

const Home = () => {
  return (
    <div className=" w-screen flex h-screen  justify-between items-center">
      <div className="left mx-auto ">
        <h1 className="text-5xl font-bold">Signup</h1>
        <p className="text-sm text-gray-800 mt-3 font-medium">
          We use OTP for signin into your account
        </p>
        <VerifyPhone />
      </div>
      <div className="right ">
        <img src={LoginImage} alt="loginImage" className="h-screen w-full" />
      </div>
    </div>
  );
};

export default Home;
