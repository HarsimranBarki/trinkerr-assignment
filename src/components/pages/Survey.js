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
    <>
      <Header />
      <div className="container max-w-screen-2xl m-auto">
        <motion.div
          className="py-10"
          initial={{
            x: -10,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          exit={{
            x: 10,
            opacity: 0,
          }}
        >
          <h2 className="text-4xl font-semibold">Hi {user?.name}</h2>
          <p className="text-sm mt-1">Welcome to the survey</p>
        </motion.div>
      </div>
    </>
  );
};

export default Survey;
