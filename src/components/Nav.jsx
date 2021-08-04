import React from "react";

const NavLink = ({ text, active }) => {
  return (
    <li className={active ? "nav__link active" : "nav__link"}>
      <p>{text}</p>
      <p>{text}</p>
    </li>
  );
};

function Nav() {
  return (
    <div className="nav">
      <ul>
        <NavLink text="home" active={true} />
        <NavLink text="about" />
        <NavLink text="contact" />
      </ul>
    </div>
  );
}

export default Nav;
