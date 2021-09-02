import { motion } from "framer-motion";
import React, { useContext } from "react";
import { FaLeaf } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../libs/userContext";

function Header() {
  const { user, setUser } = useContext(UserContext);
  const history = useHistory();

  const logoutUser = () => {
    localStorage.setItem("user", null);
    setUser(null);
    history.push("/");
  };

  return (
    <nav className=" w-full font-semibold text-sm  ">
      <div className="flex justify-between flex-row text-left  py-4 px-6 bg-white shadow  w-full items-center ">
        <div className="links space-x-10 flex items-center  ">
          <div className="flex items-center font-medium cursor-pointer">
            <FaLeaf className=" text-2xl  text-blue-800 mr-3" />
            Simple Survey
          </div>
        </div>
        <div className="access">
          {user && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="rounded bg-blue-900 font-medium  text-white px-5 py-2"
              onClick={logoutUser}
            >
              LOGOUT
            </motion.button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
