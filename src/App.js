import React from "react";
import Header from "./components/Header";
import Overlay from "./components/Overlay";
import Loading from "./components/Loading";
import PopUp from "./components/PopUp";
import Cursor, { CursorAnimation } from "./components/Cursor";
import Home from "./pages/Home";
import ComingSoon from "./pages/ComingSoon";
import { Route, Switch } from "react-router-dom";

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
      <Header />
      <PopUp />
      <div className="wrapper">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/rom" component={ComingSoon} exact />
          <Route path="/emulator" component={ComingSoon} exact />
          <Route path="*" component={ComingSoon} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
