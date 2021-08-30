import React from "react";
import Icon from "../components/Icon";
import Nav from "../components/Nav";
import Social from "../components/Social";
import { StoreContext } from "../Store";
import ACTION from "../Action";

function Menu() {
  const [state, dispatch] = React.useContext(StoreContext);

  const closeMenu = React.useCallback(() => {
    dispatch({ type: ACTION.menu.close });
    dispatch({ type: ACTION.overlay.close });
  }, []);

  return (
    <div className={state.showMenu ? "menu" : "menu hide"}>
      <div className="menu__close hide-on-lg" onClick={closeMenu}>
        <Icon src="close.png" />
      </div>
      <Nav />
      <Social />
    </div>
  );
}

export default Menu;
