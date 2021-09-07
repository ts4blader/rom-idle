import React from "react";
import { useRouteMatch } from "react-router-dom";
import AnimationLink from "../components/AnimationLink";

const NavLink = ({ text, link, exact = false }) => {
  const match = useRouteMatch({
    path: link,
    exact: exact,
  });

  return (
    <li className={match ? "nav__link active" : "nav__link"}>
      <AnimationLink to={link}>
        <p>{text}</p>
        <p>{text}</p>
      </AnimationLink>
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
