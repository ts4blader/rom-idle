import React from "react";
import { StoreContext } from "../Store";
import ACTION from "../Action";
import LoadingAnimation, {
  CompleteLoading,
  Blink,
  SpeedyBlink,
  Start,
} from "../animations/Loading";
import Icon from "../components/Icon";

function Loading() {
  const [state, dispatch] = React.useContext(StoreContext);
  const [loaded, setLoaded] = React.useState("loaded");
  const loading = React.useRef(null);

  React.useEffect(() => {
    // init loading animation
    LoadingAnimation();
    // onload event
    window.addEventListener("load", () => {
      CompleteLoading(() => {
        //* on complete function
        Blink();
        setLoaded("touch or click left mouse to start");
        // onClick function for loading
        loading.current.onclick = (e) => {
          setLoaded("started");
          SpeedyBlink(() => {
            Start(() => {
              dispatch({ type: ACTION.loader.hide });
            });
          });
        };
      });
    });
  }, []);

  return (
    <div className="loading" ref={loading}>
      {state.loading ? (
        <div className="loading__wrapper">
          <div className="text">
            <p className="loading__text">
              <span className="dot">.</span>
              <span className="dot">.</span>
              <span className="dot">.</span>
            </p>
            <div className="logo">
              <Icon src="buttons.png" alt="logo" />
              <p>ROMidle</p>
            </div>
          </div>
          <p className="loaded">{loaded}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Loading;
