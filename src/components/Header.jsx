import React from "react";
import Icon from "../components/Icon";
import Nav from "../components/Nav";
import ACTION from "../Action";
import { StoreContext } from "../Store";

function Header() {
  const [state, dispatch] = React.useContext(StoreContext);
  const header = React.useRef();

  React.useEffect(() => {
    const height = header.current.offsetHeight + header.current.offsetTop * 1;
    dispatch({ type: ACTION.headerHeight.set, payload: height });
  }, []);

  return (
    <div className="header" ref={header}>
      <div className="container">
        <a className="logo" href="#app">
          <Icon src="logo.png" alt="LOGO" />
          <Icon src="logo.png" alt="LOGO" />
        </a>
        <Nav />
      </div>
    </div>
  );
}

export default Header;
