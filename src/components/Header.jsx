import React from "react";
import Icon from "../components/Icon";
import Nav from "../components/Nav";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <a className="logo" href="#app">
          <Icon src="logo.png" alt="LOGO" />
          <Icon src="logo.png" alt="LOGO" />
        </a>
        <Nav />
      </div>
    </div>
  );
}

export default Header;
