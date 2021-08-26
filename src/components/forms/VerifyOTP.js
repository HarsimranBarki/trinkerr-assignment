import { motion } from "framer-motion";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const VerifyOTP = ({ setSignupState }) => {
  const [otp, setOTP] = useState("");
  const toastGenerate = (message) => toast.error(message);

  // Regex For Formatting Input Should Be Number
  const onlyNumbers = (e) => {
    e.preventDefault();
    let value = e.target.value.replace(/[^\d]/g, "");
    setOTP(value);
  };

  const validateInput = (e) => {
    e.preventDefault();
    if (otp.length !== 4) return toastGenerate("OTP should be 4 Digits");
    if (otp !== "0000") return toastGenerate("Wrong OTP");
    setSignupState("name");
  };

  return (
    <motion.form
      className="mt-10 "
      onSubmit={(e) => validateInput(e)}
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 10 }}
    >
      <Toaster position="bottom-center" reverseOrder={false} />
      <input
        type="text"
        className="form-input px-4 py-2 border-gray-300 rounded mt-2 shadow-inner"
        placeholder="Enter Your OTP"
        value={otp}
        onChange={(e) => onlyNumbers(e)}
        autoFocus
      />
      <br />
      <button
        type="submit"
        className="bg-blue-600 text-indigo-50 px-5 py-2  font-medium rounded mt-5 hover:bg-blue-700 transition"
      >
        Submit OTP
      </button>
    </motion.form>
  );
};

export default VerifyOTP;
