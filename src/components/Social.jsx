import React from "react";
import Icon from "../components/Icon";
import social from "../data/social";

function Social() {
  return (
    <div className="social">
      {social.map((item, index) => (
        <a className="social__item" href={item.link} key={index}>
          <Icon src={item.icon} />
        </a>
      ))}
    </div>
  );
}

export default Social;
