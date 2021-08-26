import { motion } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../libs/userContext";
import ImageCard from "../card/ImageCard";
import Header from "../common/Header";
import { imageCollection } from "../../libs/imageCollection";

const Survey = () => {
  const { user } = useContext(UserContext);
  let history = useHistory();
  const [currentImage, setCurrentImage] = useState(() => {
    if (user.totalSwiped === 0) return imageCollection[0];
    if (user.totalSwiped !== 5) return imageCollection[user.totalSwiped];
    return null;
  });

  const variants = {
    visible: {
      opacity: 1,
      x: 0,
      duration: 1,
      display: "block",
    },
    hidden: {
      opacity: 0,
      x: -10,
      transitionEnd: {
        display: "none",
      },
    },
  };

  useEffect(() => {
    if (!user) history.push("/");
  }, [user, history]);

  return (
    <div className="p-10">
      <Header />
      <div className="container max-w-screen-2xl m-auto flex  flex-wrap py-10">
        <motion.div
          className="flex-1"
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.1 }}
          variants={variants}
        >
          <h2 className="text-4xl font-semibold">Hi {user?.name}</h2>
          <p className="text-sm mt-1">Welcome to the survey</p>
          {currentImage ? (
            <ImageCard url={currentImage.imageUrl} name={currentImage.name} />
          ) : (
            <p>`${user.name}, you have rated all the images. Thank You!`</p>
          )}
        </motion.div>
        <motion.div
          className="flex-1  bg-blue-100 rounded p-5"
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={variants}
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
