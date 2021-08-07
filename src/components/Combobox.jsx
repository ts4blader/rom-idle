import React from "react";

function Combobox({ items }) {
  return (
    <div className="combobox">
      <select name="problem">
        {items.map((item, index) => (
          <option value={item.value} key={index}>
            {item.string}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Combobox;
