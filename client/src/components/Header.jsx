import React from "react";
import Logo from "../assets/logo.png";

function Header() {
  return (
    <nav className="navbar bg-light mb-4 p-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          <div className="d-flex">
            <img src={Logo} alt="logo" />
            <div>Project Mgmt - React</div>
          </div>
        </a>
      </div>
    </nav>
  );
}

export default Header;
