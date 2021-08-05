import React from "react";

function Indicator({ length }) {
  const list = [];
  for (let i = 0; i <= length; i++) {
    list.push(<div className="indicator__dot"></div>);
  }

  return <div className="indicator">{list}</div>;
}

export default Indicator;
