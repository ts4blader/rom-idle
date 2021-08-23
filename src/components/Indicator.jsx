import React from "react";
import { IndicatorActive } from "../animations/Section";

const sections = ["psp", "snes", "n3ds", "feedback"];
function Indicator({ scrollTo }) {
  React.useEffect(() => {
    sections.forEach((item) => {
      IndicatorActive(item);
    });
  });

  return (
    <div className="indicator">
      {sections.map((item, index) => (
        <div
          className={`indicator__dot ${item}-dot`}
          key={index}
          onClick={() => scrollTo(index)}
        ></div>
      ))}
    </div>
  );
}

export default Indicator;
