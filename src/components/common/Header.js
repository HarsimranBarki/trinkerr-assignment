import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../libs/userContext";

function Header() {
  const { user, setUser } = useContext(UserContext);
  const history = useHistory();

  const logoutUser = () => {
    setUser(null);
    history.push("/");
  };
  return (
    <nav className="px-4 py-5 w-full font-medium">
      <div className="container max-w-screen-2xl mx-auto flex justify-between items-center">
        <div className="links space-x-10 flex items-center  ">
          <p>
            <Link to="/">Home</Link>
          </p>
          <p>
            <Link to="/about">About</Link>
          </p>
        </div>
        <div className="access">
          {user && (
            <button
              className="rounded-md bg-blue-600 font-medium  text-white px-5 py-1"
              onClick={() => logoutUser}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
