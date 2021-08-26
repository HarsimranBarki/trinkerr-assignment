import { motion } from "framer-motion";
import React, { useContext } from "react";
import { UserContext } from "../../libs/userContext";
import Header from "../common/Header";

function Survey() {
  const { user } = useContext(UserContext);
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
}

export default Survey;
