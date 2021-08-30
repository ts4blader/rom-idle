import React from "react";

const RadioButton = ({ id, label, register }) => {
  id = React.useMemo(() => {
    return "rate-" + id;
  }, [id]);

  return (
    <div className="radio-button">
      <input
        type="radio"
        name="radio-grp"
        id={id}
        value={id}
        defaultChecked
        {...register("rate")}
      />
      <div className="circle"></div>
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default RadioButton;
