import { AnimatePresence, motion } from "framer-motion";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../libs/userContext";
import ImageCard from "../card/ImageCard";
import Header from "../common/Header";
import { imageCollection } from "../../libs/imageCollection";
import toast, { Toaster } from "react-hot-toast";
import { ThemeContext } from "../../libs/themeContext";

const Survey = () => {
  const { user, setUser } = useContext(UserContext);
  const { theme } = React.useContext(ThemeContext);
  let history = useHistory();
  const [swipedCount, setSwipeCount] = useState(user.totalSwiped);
  const [currentImage, setCurrentImage] = useState(() => {
    if (swipedCount === 0) return imageCollection[0];
    if (swipedCount !== 5) return imageCollection[swipedCount];
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

  const updateLocalStorage = useCallback(() => {
    let localUser = JSON.parse(localStorage.getItem("user"));
    let localCollection = JSON.parse(localStorage.getItem("userCollection"));

    localUser.totalSwiped = swipedCount + 1;
    localCollection.forEach((e) => {
      if (e.phone === user.phone) {
        return (e.totalSwiped = swipedCount + 1);
      }
    });

    localStorage.setItem("user", JSON.stringify(localUser));
    localStorage.setItem("userCollection", JSON.stringify(localCollection));
  }, [swipedCount, user.phone]);

  const handleImage = useCallback(
    (direction) => {
      if (swipedCount >= 5) return;
      let message = "";
      if (direction === "left") message = "selected";
      if (direction === "right") message = "rejected";
      if (direction === "skipped") message = "skipped";

      toast.success(`${user.name} you have ${message} the image`, {
        style: {
          borderRadius: "10px",
          background: theme === "dark" ? "#333" : "#FFF",
          color: theme === "dark" ? "#FFF" : "#333",
        },
      });
      setSwipeCount((prev) => prev + 1);
      setUser({ ...user, totalSwipedSwiped: swipedCount + 1 });
      updateLocalStorage();
      setCurrentImage(imageCollection[swipedCount + 1]);
    },
    [
      updateLocalStorage,
      setSwipeCount,
      setUser,
      setCurrentImage,
      swipedCount,
      user,
      theme,
    ]
  );

  const handleKeyPress = useCallback(
    (event) => {
      if (event.keyCode === 37) {
        event.stopPropagation();
        handleImage("left");
      } else if (event.keyCode === 39) {
        event.stopPropagation();
        handleImage("right");
      } else {
        return null;
      }
    },
    [handleImage]
  );

  useEffect(() => {
    if (!user) history.push("/");
    let timer = null;
    if (swipedCount <= 5) {
      timer = setTimeout(() => {
        handleImage("skipped");
      }, 5000);
    }
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      clearTimeout(timer);
    };
  }, [user, history, handleImage, handleKeyPress, swipedCount]);

  return (
    <div>
      <Header />
      <Toaster position="top-center" reverseOrder={false} />
      <div className="container max-w-screen-2xl m-auto flex  flex-col lg:flex-row py-4 px-6 py-10 ">
        <motion.div
          className="flex-1 mb-10 "
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.1 }}
          variants={variants}
        >
          <h2 className="text-4xl font-semibold">Hi {user?.name}</h2>
          <p className="text-sm mt-1">Welcome to the survey</p>

          <AnimatePresence>
            {currentImage ? (
              <ImageCard
                id={currentImage.id}
                url={currentImage.imageUrl}
                name={currentImage.name}
                handleImage={handleImage}
              />
            ) : (
              <p
                className="mt-10 text-xl"
                id="thank-you-message"
                data-testid="thank-you-message"
              >
                {user.name}, you have rated all the images. Thank You!
              </p>
            )}
          </AnimatePresence>
        </motion.div>
        <motion.div
          className="flex-1 dark:bg-gray-700 bg-blue-100 rounded p-5 h-full"
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={variants}
        >
          <h3 className="text-2xl font-medium">Instructions</h3>
          <div className="flex font-semobold flex-col space-y-1 mt-3 text-sm ">
            <p>
              Press Left Arrow Or Swipe Left To{" "}
              <span className="dark:text-green-200 text-green-800">Accept</span>
            </p>
            <p>
              Press Rigth Arrow Or Swipe Right To{" "}
              <span className="dark:text-red-200 text-red-800">Reject</span>
            </p>
            <p>Images Will Autoskip If Not Interacted</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Survey;
