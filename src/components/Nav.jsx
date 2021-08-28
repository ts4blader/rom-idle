import React from "react";
import { Link } from "react-router-dom";

const NavLink = ({ text, active = false, link }) => {
  return (
    <li className={active ? "nav__link active" : "nav__link"}>
      <Link to={link}>
        <p>{text}</p>
        <p>{text}</p>
      </Link>
    </li>
  );
};

function Nav() {
  return (
    <div className="nav">
      <ul>
        <NavLink text="home" active={true} link="/" />
        <NavLink text="about" link="/about" />
        <NavLink text="contact" link="/contact" />
      </ul>
    </div>
  );
}

export default Nav;
