import { motion } from "framer-motion";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaChevronCircleRight } from "react-icons/fa";
import { ThemeContext } from "../../libs/themeContext";

const VerifyOTP = ({ setSignupState }) => {
  const [otp, setOTP] = useState("");
  const { theme } = React.useContext(ThemeContext);
  const toastGenerate = (message) =>
    toast.error(message, {
      style: {
        borderRadius: "10px",
        background: theme === "dark" ? "#333" : "#FFF",
        color: theme === "dark" ? "#FFF" : "#333",
      },
    });

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
        className="dark:bg-gray-700 dark:border-gray-700 dark:text-gray-100 form-input w-full px-3 py-2 md:px-4 md:py-2  border-gray-300 rounded mt-2 shadow-inner"
        placeholder="Enter Your OTP"
        data-testid="input"
        value={otp}
        onChange={(e) => onlyNumbers(e)}
        autoFocus
      />
      <br />
      <button
        type="submit"
        data-testid="button"
        className="dark:bg-blue-300 dark:text-gray-900 bg-blue-600 text-indigo-50 px-3 py-2 md:px-5 md:py-2  font-medium rounded mt-5 hover:bg-blue-700 transition flex items-center"
      >
        Submit OTP <FaChevronCircleRight className="inline ml-2" />
      </button>
    </motion.form>
  );
};

export default VerifyOTP;
