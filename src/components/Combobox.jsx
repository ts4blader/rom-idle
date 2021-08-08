import React from "react";
import Icon from "../components/Icon";

function Combobox({ items, register }) {
  return (
    <div className="combobox">
      <select name="problem" {...register("problem")}>
        {items.map((item, index) => (
          <option value={item.value} key={index}>
            {item.string}
          </option>
        ))}
      </select>
      <div className="caret">
        <Icon src="arrow.png" alt="drop" />
      </div>
    </div>
  );
}

export default Combobox;
