import React from "react";
import { StoreContext } from "../Store";

function Loading() {
  const [state, dispatch] = React.useContext(StoreContext);

  return (
    <div className="loading">
      {state.loading ? (
        <div className="loading__wrapper">
          <div className="svg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="100"
              height="100"
              x="0"
              y="0"
              viewBox="0 0 384 384.248"
              style={{ enableBackground: "new 0 0 512 512" }}
            >
              <g>
                <path
                  id="circle"
                  xmlns="http://www.w3.org/2000/svg"
                  d="m299.691406 224.246094c-44.113281 0-80 35.890625-80 80 0 44.113281 35.886719 80 80 80 44.113282 0 80-35.886719 80-80 0-44.109375-35.886718-80-80-80zm0 128c-26.472656 0-48-21.527344-48-48 0-26.46875 21.527344-48 48-48s48 21.53125 48 48c0 26.472656-21.527344 48-48 48zm0 0"
                  fill="#ffffff"
                  data-original="#000000"
                />
                <path
                  id="triangle"
                  xmlns="http://www.w3.org/2000/svg"
                  d="m.125 160.246094h183.144531l-91.578125-160.246094zm55.136719-32 36.429687-63.75 36.433594 63.75zm0 0"
                  fill="#ffffff"
                  data-original="#000000"
                />
                <path
                  id="square"
                  xmlns="http://www.w3.org/2000/svg"
                  d="m219.691406 160.246094h160v-160h-160zm32-128h96v96h-96zm0 0"
                  fill="#ffffff"
                  data-original="#000000"
                />
                <path
                  id="cross"
                  xmlns="http://www.w3.org/2000/svg"
                  d="m35.691406 382.878906 56-56 56 56 22.632813-22.632812-56-56 56-56-22.632813-22.628906-56 56-56-56-22.632812 22.628906 56 56-56 56zm0 0"
                  fill="#ffffff"
                  data-original="#000000"
                />
              </g>
            </svg>
          </div>
          <div className="text">
            <p>Loading...</p>
            <p>ROMidle</p>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Loading;
