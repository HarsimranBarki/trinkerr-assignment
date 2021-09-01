import { motion } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import { UserContext } from "../../libs/userContext";
import { FaChevronCircleRight } from "react-icons/fa";

const VerifyName = ({ history }) => {
  const [name, setName] = useState("");
  const toastGenerate = (message) => toast.error(message);
  const { user, setUser } = useContext(UserContext);

  // Regex For Formatting Input Should Be Number
  const onlyAplhabets = (e) => {
    e.preventDefault();
    let value = e.target.value.replace(/[^a-zA-Z, ]/, "");
    setName(value);
  };

  const validateInput = (e) => {
    e.preventDefault();
    if (name.length === "") return toastGenerate("Name can't be empty");
    setUser({ ...user, name: name, totalSwiped: 0 });
    localStorage.setItem(
      "user",
      JSON.stringify({ ...user, name: name, totalSwiped: 0 })
    );
    updateUserCollection();
    history.push("/survey");
  };

  const updateUserCollection = () => {
    let userCollection =
      JSON.parse(localStorage.getItem("userCollection")) || [];
    let current = { ...user, name: name, totalSwiped: 0 };
    userCollection.push(current);
    localStorage.setItem("userCollection", JSON.stringify(userCollection));
  };

  useEffect(() => {
    let userCollection =
      JSON.parse(localStorage.getItem("userCollection")) || [];
    let local = JSON.parse(localStorage.getItem("user"));
    let findUser = userCollection.find((e) => e.phone === local.phone);

    if (findUser) {
      localStorage.setItem("user", JSON.stringify(findUser));
      setUser(findUser);
      history.push("/survey");
    }
  }, [history, setUser]);

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
        data-testid="input"
      />
      <br />
      <button
        type="submit"
        data-testid="button"
        className="bg-blue-600 text-indigo-50 px-5 py-2  font-medium rounded mt-5 hover:bg-blue-700 transition flex items-center"
      >
        Submit <FaChevronCircleRight className="inline ml-2" />
      </button>
    </motion.form>
  );
};

export default VerifyName;
