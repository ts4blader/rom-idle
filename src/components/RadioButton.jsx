import React from "react";

const RadioButton = ({ id, label, checked = true }) => {
  id = "radio-" + id;
  return (
    <div className="radio-button">
      <input
        type="radio"
        checked={checked}
        name="radio-grp"
        id={id}
        value={id}
      />
      <div className="circle"></div>
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default RadioButton;
