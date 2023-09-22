import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.scss";

function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <h1 className="nav-logo">
          get<span className="logo">linked</span>
        </h1>
      </div>

      <div className="nav-links">
        <Link className="link" to="/">
          Timeline
        </Link>
        <Link className="link" to="">
          Overview
        </Link>
        <Link className="link" to="">
          FAQs
        </Link>
        <Link className="link" to="">
          Contact
        </Link>
      </div>

      <div className="nav-btn">
        <Link to="/register">
          <button className="register">Register</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
