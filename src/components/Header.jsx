import React from "react";
import Icon from "../components/Icon";
import Menu from "../components/Menu";
import ACTION from "../Action";
import { StoreContext } from "../Store";

function Header() {
  const [state, dispatch] = React.useContext(StoreContext);
  const header = React.useRef();

  const openMenu = () => {
    dispatch({ type: ACTION.menu.open });
    dispatch({ type: ACTION.overlay.open });
    dispatch({
      type: ACTION.overlay_action.set,
      payload: () => dispatch({ type: ACTION.menu.close }),
    });
  };

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
        <div className="header__menu hide-on-lg" onClick={openMenu}>
          <Icon src="menu.png" alt="Menu" />
        </div>
        <Menu />
      </div>
    </div>
  );
}

export default Header;
