import React from "react";
import { StoreContext } from "../Store";
import LoadingAnimation, { CompleteLoading } from "../animations/Loading";
import Icon from "../components/Icon";

function Loading() {
  const [state, dispatch] = React.useContext(StoreContext);

  React.useEffect(() => {
    CompleteLoading();
  }, []);

  return (
    <div className="loading">
      {state.loading ? (
        <div className="loading__wrapper">
          <div className="text">
            <p className="loading__text">
              Loading
              <span className="dot">.</span>
              <span className="dot">.</span>
              <span className="dot">.</span>
            </p>
            <div className="logo">
              <Icon src="buttons.png" alt="logo" />
              <p>ROMidle</p>
            </div>
          </div>
          <p className="loaded">loaded</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Loading;
