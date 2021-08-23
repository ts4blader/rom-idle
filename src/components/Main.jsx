import React from "react";
import Section from "../components/Section";
import Indicator from "../components/Indicator";
import FeedBack from "../components/FeedBack";
import PSP from "../data/psp";
import SNES from "../data/snes";
import N3DS from "../data/n3ds";

function Main() {
  const main = React.useRef(null);
  const content = [PSP, SNES, N3DS];

  const scroll = (n) => {
    main.current.scrollTo({
      top: n * main.current.clientHeight,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <main ref={main} className="main">
      {content.map((item, index) => (
        <Section content={item} key={index} />
      ))}
      <FeedBack />
      <Indicator scrollTo={scroll} />
    </main>
  );
}

export default Main;
