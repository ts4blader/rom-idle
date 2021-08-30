import React from "react";
import { DelayMove, Rotation } from "../animations/Cursor";

export const CursorAnimation = (x, y) => {
  DelayMove(x, y);
};

function Cursor() {
  // Rotation animation for cursor
  React.useEffect(() => {
    Rotation();
  }, []);

  return (
    <div className="cursor hide-on-md">
      <div className="circle"></div>
      <div className="shape diamond diamond-1"></div>
      <div className="shape diamond diamond-2"></div>
    </div>
  );
}

export default Cursor;
