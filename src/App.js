import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Indicator from "./components/Indicator";
import FeedBack from "./components/FeedBack";
import Overlay from "./components/Overlay";
import Loading from "./components/Loading";
import PSP from "./data/psp";
import SNES from "./data/snes";
import N3DS from "./data/n3ds";
import "./scss/main.scss";

function App() {
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
    <div className="app" id="app">
      <Loading />
      <Overlay />
      <div className="wrapper">
        <Header />
        <main ref={main}>
          {content.map((item, index) => (
            <Section content={item} key={index} />
          ))}
          <FeedBack />
          <Indicator length={content.length} scrollTo={scroll} />
        </main>
      </div>
    </div>
  );
}

export default App;
