import React, { useContext, useEffect, useState } from "react";
import VerifyPhone from "../forms/VerifyPhone";
import LoginImage from "../../images/login.svg";
import VerifyOTP from "../forms/VerifyOTP";
import VerifyName from "../forms/VerifyName";
import { AnimatePresence } from "framer-motion";
import { UserContext } from "../../libs/userContext";
import { useHistory } from "react-router-dom";
import { FaLeaf } from "react-icons/fa";
import SvgComponent from "../../images/SvgComponent";
import Header from "../common/Header";

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
    <div className=" w-full h-screen  ">
      <Header />

      <div className="flex h-80 px-0 sm:px-10 max-w-full sm:max-w-screen-2xl mx-auto  justify-between items-center flex-wrap sm:flex-nowrap">
        <div className="left  mx-auto  ">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold">Signup</h1>
            <p className="text-sm text-gray-500 mt-1 md:mt-3 font-medium">
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
                <VerifyName setSignupState={setSignupState} history={history} />
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="right w-full ">
          <img src={LoginImage} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Home;
