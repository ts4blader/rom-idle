import React from "react";
import Icon from "../components/Icon";
import Nav from "../components/Nav";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="logo">
          <Icon src="logo.png" alt="LOGO" />
          <Icon src="logo.png" alt="LOGO" />
        </div>
        <Nav />
      </div>
    </div>
  );
}

export default Header;
