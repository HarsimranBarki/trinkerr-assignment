import { motion } from "framer-motion";
import React from "react";

const ImageCard = ({ url, name }) => {
  return (
    <motion.div className="h-96 w-96 rounded bg-blue-100 p-5 mt-5">
      <motion.img src={url} alt={name} />
    </motion.div>
  );
};

export default ImageCard;
