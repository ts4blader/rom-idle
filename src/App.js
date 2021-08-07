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

  return (
    <div className="app" id="app">
      <div className="wrapper">
        <Header />
        <Social />
        <Indicator length={content.length} />
        <main>
          {content.map((item, index) => (
            <Section content={item.data} gear={item.gear} key={index} />
          ))}
          <FeedBack />
        </main>
      </div>
    </div>
  );
}

export default App;
