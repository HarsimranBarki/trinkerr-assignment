import { motion } from "framer-motion";
import React, { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { UserContext } from "../../libs/userContext";

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
        className="form-input px-4 py-2 border-gray-300 rounded mt-2 shadow-inner"
        placeholder="Enter Your Number"
        value={phone}
        onChange={(e) => onlyNumbers(e, "phone")}
        autoFocus
      />
      <br />
      <button
        type="submit"
        className="bg-indigo-600 text-indigo-50 px-5 py-2  font-medium rounded mt-5 hover:bg-indigo-700 transition"
      >
        Get OTP
      </button>
    </motion.form>
  );
};

export default VerifyPhone;
