import React from "react";

function FeedBack() {
  const image = require("../res/images/game-over.jpg").default;

  const bg = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "50% 0%",
  };

  return (
    <div className="section feedback-section">
      <div className="section__bg">
        <div className="section__bg" style={bg}>
          <div className="section__bg__overlay"></div>
        </div>
      </div>
    </div>
  );
}

export default FeedBack;
