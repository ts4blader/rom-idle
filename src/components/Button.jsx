import React from "react";

function Button({ text }) {
  return (
    <div className="button">
      <p>{text}</p>
      <div className="rect"></div>
    </div>
  );
}

export default Button;
