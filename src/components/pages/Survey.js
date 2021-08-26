import { motion } from "framer-motion";
import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../libs/userContext";
import Header from "../common/Header";

const Survey = () => {
  const { user } = useContext(UserContext);
  let history = useHistory();

  useEffect(() => {
    if (!user) history.push("/");
  }, [user, history]);
  return (
    <div className="p-10">
      <Header />
      <div className="container max-w-screen-2xl m-auto flex  flex-wrap py-10">
        <motion.div
          className="flex-1"
          initial={{
            x: -10,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{ duration: 0.5 }}
          exit={{
            x: 10,
            opacity: 0,
          }}
        >
          <h2 className="text-4xl font-semibold">Hi {user?.name}</h2>
          <p className="text-sm mt-1">Welcome to the survey</p>
        </motion.div>
        <motion.div
          className="flex-1  bg-blue-100 rounded p-5"
          initial={{
            x: -10,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{ duration: 0.5, delay: 0.2 }}
          exit={{
            x: 10,
            opacity: 0,
          }}
        >
          <h3 className="text-2xl font-medium">Instructions</h3>
          <div className="flex font-semobold flex-col space-y-1 mt-3 text-sm ">
            <p>
              Press Left Arrow Or Swipe Left To{" "}
              <span className="text-green-800">Accept</span>
            </p>
            <p>
              Press Rigth Arrow Or Swipe Right To{" "}
              <span className="text-red-800">Reject</span>
            </p>
            <p>Images Will Autoskip If Not Interacted</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Survey;
