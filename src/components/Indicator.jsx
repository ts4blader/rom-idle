import React from "react";

function Indicator({ length, scrollTo }) {
  const list = [];
  const sectionList = ["psp", "snes", "n3ds", "feedback"];
  for (let i = 0; i <= length; i++) {
    list.push(
      <div
        className={`indicator__dot ${sectionList[i]}-dot`}
        key={i}
        onClick={() => scrollTo(i)}
      ></div>
    );
  }

  return <div className="indicator">{list}</div>;
}

export default Indicator;
