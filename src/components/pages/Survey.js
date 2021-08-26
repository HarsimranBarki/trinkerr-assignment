import { motion } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../libs/userContext";
import ImageCard from "../card/ImageCard";
import Header from "../common/Header";
import { imageCollection } from "../../libs/imageCollection";
import toast, { Toaster } from "react-hot-toast";

const Survey = () => {
  const { user, setUser } = useContext(UserContext);
  let history = useHistory();
  const [swipedCount, setSwipeCount] = useState(user.totalSwiped);
  const [currentImage, setCurrentImage] = useState(() => {
    if (swipedCount === 0) return imageCollection[0];
    if (swipedCount !== 5) return imageCollection[swipedCount];
    return null;
  });
  const toastGenerate = (message) => toast.success(message);

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

  const handleImage = (direction) => {
    if (swipedCount === 5) return;
    let message = "";
    if (direction === "left") message = "selected";
    if (direction === "right") message = "rejected";
    if (direction === "skipped") message = "skipped";

    toastGenerate(`${user.name} you have ${message} the image`);
    setSwipeCount((prev) => prev + 1);
    setUser({ ...user, totalSwipedSwiped: swipedCount + 1 });
    updateLocalStorage();
    setCurrentImage(imageCollection[swipedCount + 1]);
  };

  const updateLocalStorage = () => {
    let localUser = JSON.parse(localStorage.getItem("user"));
    let localCollection = JSON.parse(localStorage.getItem("userCollection"));

    localUser.totalSwiped = swipedCount + 1;
    localCollection.map((e) => {
      if (e.phone === user.phone) e.totalSwiped = swipedCount + 1;
    });

    localStorage.setItem("user", JSON.stringify(localUser));
    localStorage.setItem("userCollection", JSON.stringify(localCollection));
  };

  const handleKeyPress = (event) => {
    if (event.keyCode === 37) {
      event.stopPropagation();
      handleImage("left");
    } else if (event.keyCode === 39) {
      event.stopPropagation();
      handleImage("right");
    } else {
      return null;
    }
  };

  useEffect(() => {
    if (!user) history.push("/");
    let timer = setTimeout(() => {
      handleImage("skipped");
    }, 5000);
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      clearTimeout(timer);
    };
  }, [user, history]);

  return (
    <div className="p-10">
      <Header />
      <Toaster position="bottom-center" reverseOrder={false} />
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
            <p className="mt-10 text-xl">
              {user.name}, you have rated all the images. Thank You!
            </p>
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
