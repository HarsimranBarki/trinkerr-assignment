import React, { useState } from "react";
import VerifyPhone from "../forms/VerifyPhone";
import LoginImage from "../../images/login.svg";
import VerifyOTP from "../forms/VerifyOTP";
import VerifyName from "../forms/VerifyName";
import { AnimatePresence } from "framer-motion";

const Home = () => {
  const [signupState, setSignupState] = useState("phone");

  return (
    <div className=" w-screen flex h-screen  justify-between items-center">
      <div className="left mx-auto ">
        <h1 className="text-5xl font-bold">Signup</h1>
        <p className="text-sm text-gray-800 mt-3 font-medium">
          We use OTP for signin into your account
        </p>
        <AnimatePresence>
          {signupState === "phone" && (
            <VerifyPhone setSignupState={setSignupState} />
          )}
          {signupState === "otp" && (
            <VerifyOTP setSignupState={setSignupState} />
          )}
          {signupState === "name" && (
            <VerifyName setSignupState={setSignupState} />
          )}
        </AnimatePresence>
      </div>
      <div className="right ">
        <img src={LoginImage} alt="loginImage" className="h-screen w-full" />
      </div>
    </div>
  );
};

export default Home;
