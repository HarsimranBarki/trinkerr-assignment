import { motion } from "framer-motion";
import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
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
    <nav className=" py-5 w-full font-semibold text-sm  ">
      <div className="container max-w-screen-2xl mx-auto flex justify-between items-center">
        <div className="links space-x-10 flex items-center  ">
          <motion.button whileHover={{ scale: 1.0 }} whileTap={{ scale: 0.9 }}>
            <NavLink
              to="/"
              exact
              className="py-2  font-medium"
              activeClassName="border-b-2 border-blue-600 hover:border-blue-900"
            >
              HOME
            </NavLink>
          </motion.button>
          <motion.button whileHover={{ scale: 1.0 }} whileTap={{ scale: 0.9 }}>
            <NavLink
              to="/survey"
              exact
              className="py-2  font-medium"
              activeClassName="border-b-2 border-blue-600 hover:border-blue-900"
            >
              SURVEY
            </NavLink>
          </motion.button>
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
