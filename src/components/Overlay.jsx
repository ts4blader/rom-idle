import React from "react";
import { StoreContext } from "../Store";
import ACTION from "../Action";

function Overlay() {
  const [state, dispatch] = React.useContext(StoreContext);

  return (
    <div
      className={state.showOverlay ? "overlay show" : "overlay"}
      onClick={() => {
        state.overlayAction();
        dispatch({ type: ACTION.overlay.close });
      }}
    ></div>
  );
}

export default Overlay;
