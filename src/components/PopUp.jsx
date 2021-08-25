import React from "react";
import { StoreContext } from "../Store";
import ACTION from "../Action";

function PopUp() {
  const [state, dispatch] = React.useContext(StoreContext);

  const close = React.useCallback(() => {
    dispatch({ type: ACTION.popUp.hide });
    dispatch({ type: ACTION.overlay.close });
  }, []);

  return (
    <div className="pop-up" state={state.showPopUp ? "show" : "hide"}>
      {/* <p className="pop-up__title">Title</p> */}
      <p className="pop-up__message">Thank for visited!</p>
      <div className="ok-btn" onClick={close}>
        OK
      </div>
    </div>
  );
}

export default PopUp;
