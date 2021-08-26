import { motion } from "framer-motion";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useHistory } from "react-router-dom";

const VerifyName = () => {
  const [name, setName] = useState("");
  const toastGenerate = (message) => toast.error(message);
  const history = useHistory();

  // Regex For Formatting Input Should Be Number
  const onlyAplhabets = (e) => {
    e.preventDefault();
    let value = e.target.value.replace(/[^a-zA-Z, ]/, "");
    setName(value);
  };

  const validateInput = (e) => {
    e.preventDefault();
    if (name.length === "") return toastGenerate("Name can't be empty");
    history.push("/survey");
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
        placeholder="Enter Your Name"
        value={name}
        onChange={(e) => onlyAplhabets(e)}
        autoFocus
      />
      <br />
      <button
        type="submit"
        className="bg-indigo-600 text-indigo-50 px-5 py-2  font-medium rounded mt-5 hover:bg-indigo-700 transition"
      >
        Submit
      </button>
    </motion.form>
  );
};

export default VerifyName;
