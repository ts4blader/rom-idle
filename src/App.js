import Header from "./components/Header";
import Section from "./components/Section";
import PSP from "./data/psp";
import "./scss/main.scss";

function App() {
  return (
    <div className="app" id="app">
      <div className="wrapper">
        <Header />
        <Section content={PSP} gear="psp" />
      </div>
    </div>
  );
}

export default App;
