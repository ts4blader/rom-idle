import React from "react";
import Header from "./components/Header";
import Social from "./components/Social";
import Section from "./components/Section";
import Indicator from "./components/Indicator";
import FeedBack from "./components/FeedBack";
import PSP from "./data/psp";
import SNES from "./data/snes";
import N3DS from "./data/n3ds";
import "./scss/main.scss";

function App() {
  const main = React.useRef(null);
  const content = [
    {
      gear: "psp",
      data: PSP,
    },
    {
      gear: "snes",
      data: SNES,
    },
    {
      gear: "n3ds",
      data: N3DS,
    },
  ];

  const scroll = (n) => {
    main.current.scrollTo({
      top: n * main.current.clientHeight,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="app" id="app">
      <div className="wrapper">
        <Header />
        <Social />
        <main ref={main}>
          {content.map((item, index) => (
            <Section content={item.data} gear={item.gear} key={index} />
          ))}
          <FeedBack />
          <Indicator length={content.length} scrollTo={scroll} />
        </main>
      </div>
    </div>
  );
}

export default App;
