import React from "react";
import { StoreContext } from "../Store";
import { popUp } from "../Action";

function PopUp() {
  const [state, dispatch] = React.useContext(StoreContext);

  return (
    <div className="pop-up" state={state.showPopUp ? "show" : "hide"}>
      {/* <p className="pop-up__title">Title</p> */}
      <p className="pop-up__message">Thank for visited!</p>
      <div className="ok-btn" onClick={() => dispatch({ type: popUp.hide })}>
        OK
      </div>
    </div>
  );
}

export default PopUp;
