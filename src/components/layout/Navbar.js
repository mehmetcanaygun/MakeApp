import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar text-center">
      <div className="container">
        <Link className="brand" to="/">
          MakeApp
        </Link>
        <Link className="about" to="/about">
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
