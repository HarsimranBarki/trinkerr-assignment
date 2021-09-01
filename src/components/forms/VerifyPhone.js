import { motion } from "framer-motion";
import React, { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { UserContext } from "../../libs/userContext";
import { FaChevronCircleRight } from "react-icons/fa";

const VerifyPhone = ({ setSignupState }) => {
  const [phone, setPhone] = useState("");
  const toastGenerate = (message) => toast.error(message);
  const { user, setUser } = useContext(UserContext);

  // Regex For Formatting Input Should Be Number
  const onlyNumbers = (e) => {
    e.preventDefault();
    let value = e.target.value.replace(/[^\d]/g, "");
    setPhone(value);
  };

  const validateInput = (e) => {
    e.preventDefault();
    if (phone.length !== 10) return toastGenerate("Number should be 10 Digits");
    setUser({ ...user, phone: phone });
    localStorage.setItem("user", JSON.stringify({ phone: phone }));
    setSignupState("otp");
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
        className="form-input -1 px-3 py-2 md:px-4 md:py-2 border-gray-300 rounded mt-2 shadow-inner"
        placeholder="Enter Your Number"
        value={phone}
        data-testid="input"
        onChange={(e) => onlyNumbers(e, "phone")}
        id="phoneInput"
        autoFocus
      />
      <br />
      <button
        type="submit"
        id="verifyPhoneButton"
        data-testid="button"
        className="bg-blue-600 text-indigo-50 px-3 py-2 md:px-5 md:py-2  font-medium rounded mt-5 hover:bg-blue-700 transition flex items-center"
      >
        Get OTP <FaChevronCircleRight className="inline ml-2" />
      </button>
    </motion.form>
  );
};

export default VerifyPhone;
