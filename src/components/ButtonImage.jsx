import React from "react";
import Icon from "../components/Icon";

function ButtonImage({ src, position, text }) {
  return (
    <div className="button-img" position={position}>
      <div className="text">{text}</div>
      <Icon src={src} />
    </div>
  );
}

export default ButtonImage;
