import React from "react";
import { ShowTransition } from "../animations/PageTransition";
import { Link } from "react-router-dom";

function AnimationLink({ to, children }) {
  const handleClick = () => {
    ShowTransition();
  };

  return (
    <div onClick={handleClick}>
      <Link to={to}>{children}</Link>
    </div>
  );
}

export default AnimationLink;
