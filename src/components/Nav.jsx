import React from "react";

const NavLink = ({ text }) => {
  return (
    <li className="nav__link">
      <p>{text}</p>
      <p>{text}</p>
    </li>
  );
};

function Nav() {
  return (
    <div className="nav">
      <ul>
        <NavLink text="home" />
        <NavLink text="about" />
        <NavLink text="contact" />
      </ul>
    </div>
  );
}

export default Nav;
