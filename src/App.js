import React from "react";
import Header from "./components/Header";
import Overlay from "./components/Overlay";
import Loading from "./components/Loading";
import PopUp from "./components/PopUp";
import Cursor, { CursorAnimation } from "./components/Cursor";
import Main from "./components/Main";

import "./scss/main.scss";

function App() {
  const app = React.useRef(null);

  React.useEffect(() => {
    app.current.onmousemove = (e) => {
      const mousex = e.clientX;
      const mousey = e.clientY;

      CursorAnimation(mousex, mousey);
    };
  });

  return (
    <div className="app" id="app" ref={app}>
      <Cursor />
      <Loading />
      <Overlay />
      <PopUp />
      <div className="wrapper">
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
