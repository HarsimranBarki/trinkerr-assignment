import React, { useContext, useEffect, useState } from "react";
import VerifyPhone from "../forms/VerifyPhone";
import LoginImage from "../../images/login.svg";
import VerifyOTP from "../forms/VerifyOTP";
import VerifyName from "../forms/VerifyName";
import { AnimatePresence } from "framer-motion";
import { UserContext } from "../../libs/userContext";
import { useHistory } from "react-router-dom";
import { FaLeaf } from "react-icons/fa";

const Home = () => {
  const [signupState, setSignupState] = useState("phone");
  const { user } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    if (user && user.name) {
      console.log("user", user);
      history.push("/survey");
    }
  }, [user, history]);

  return (
    <div className=" w-screen ">
      <div className=" absolute left-8 sm:left-20 top-5 sm:top-10 flex">
        <FaLeaf className=" text-2xl text-blue-800 mr-3" />
        Simple Survey
      </div>

      <div className="flex min-h-screen px-0 sm:px-10 max-w-full sm:max-w-screen-2xl mx-auto  justify-between items-center flex-wrap">
        <div className="left  mx-auto  ">
          <div>
            <h1 className="text-3xl sm:text-5xl font-bold">Signup</h1>
            <p className="text-sm text-gray-800 mt-1 sm:mt-3 font-medium">
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
        </div>

        <div className="right w-full sm:w-2/3">
          <img
            src={LoginImage}
            alt="loginImage"
            className=" h-auto lg:h-screen w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
