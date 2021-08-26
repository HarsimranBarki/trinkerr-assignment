import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="px-4 py-2 w-full shadow">
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
          <button className="rounded-md bg-gray-100 px-5 py-1">Login</button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
