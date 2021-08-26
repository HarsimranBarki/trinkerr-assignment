import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="px-4 py-4 w-full">
      <div className="container max-w-screen-2xl mx-auto flex justify-between">
        <div className="links space-x-10 flex">
          <p>
            <Link to="/">Home</Link>
          </p>
          <p>
            <Link to="/about">About</Link>
          </p>
        </div>
        <div className="access">
          <button className="rounded bg-gray-100 px-5 py-2">Login</button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
