import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion";

import React from "react";

const ImageCard = ({ url, name, handleImage }) => {
  const x = useMotionValue(0);
  const xRange = [-200, -100, 100, 200];
  const opacityRange = [0, 1, 1, 0];
  const opacity = useTransform(x, xRange, opacityRange);
  // Framer animation hook
  const animControls = useAnimation();

  return (
    <motion.img
      src={url}
      center
      // Card can be drag only on x-axis
      data-testid="cardImage"
      style={{ opacity, x }}
      drag="x"
      name={name}
      alt={name}
      dragElastic={1}
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={(event, info) => {
        // If the card is dragged only upto 150 on x-axis
        // bring it back to initial position
        if (Math.abs(info.point.x) <= 150) {
          animControls.start({ x: 0 });
          handleImage("left");
          console.log("Left", info.point.x);
        } else {
          // If card is dragged beyond 150
          // make it disappear

          // Making use of ternary operator
          console.log("Right", info.point.x);
          animControls.start({ x: info.point.x < 0 ? -200 : 200 });

          handleImage("right");
        }
      }}
      className="  max-h-sm w-100 sm:max-w-sm  bg-blue-100 p-5 mt-5 shadow-md swipe-image"
    />
  );
};

export default ImageCard;
