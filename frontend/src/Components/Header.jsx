import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-gray-500 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-bold">
          <Link to="/" className="text-white text-xl">Problems Tool</Link>
        </div>
        <div className="flex space-x-4">
          <Link
            to="/dashboard"
            className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
          >
            Dashboard
          </Link>
          <Link
            to="/about"
            className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
