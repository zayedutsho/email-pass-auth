import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <Link to="/">home</Link>
      <Link to="/login">LogIn</Link>
      <Link to="/register">Register</Link>
    </nav>
  );
};

export default Header;
