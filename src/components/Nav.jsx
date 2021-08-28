import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

const NavLink = ({ text, link, exact = false }) => {
  const match = useRouteMatch({
    path: link,
    exact: exact,
  });

  return (
    <li className={match ? "nav__link active" : "nav__link"}>
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
        <NavLink text="home" link="/" exact={true} />
        <NavLink text="ROM" link="/rom" />
        <NavLink text="emulator" link="/emulator" />
      </ul>
    </div>
  );
}

export default Nav;
