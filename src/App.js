import React from "react";
import Header from "./components/Header";
import Overlay from "./components/Overlay";
import Loading from "./components/Loading";
import Cursor from "./components/Cursor";
import Main from "./components/Main";
import "./scss/main.scss";

function App() {
  return (
    <div className="app" id="app">
      <Cursor />
      <Loading />
      <Overlay />
      <div className="wrapper">
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
