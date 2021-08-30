import React from "react";
import { useForm } from "react-hook-form";
import problems from "../data/feedback";
import { StoreContext } from "../Store";
import RadioButton from "../components/RadioButton";
import Combobox from "../components/Combobox";
import Icon from "../components/Icon";
import ACTION from "../Action";

const image = require("../res/images/game-over.jpg").default;
const bg = {
  backgroundImage: `url(${image})`,
  backgroundSize: "cover",
  backgroundPosition: "0% 0%",
};

function FeedBack() {
  const [state, dispatch] = React.useContext(StoreContext);

  const showPopup = React.useCallback(() => {
    dispatch({ type: ACTION.popUp.show });
    dispatch({ type: ACTION.overlay.open });
    dispatch({
      type: ACTION.overlay_action.set,
      payload: () => {
        dispatch({ type: ACTION.overlay.close });
        dispatch({ type: ACTION.popUp.hide });
      },
    });
  }, []);
  //* React hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  //* submit function
  const submit = React.useCallback((data) => {
    reset();
    showPopup();
  }, []);

  return (
    <div className="section feedback-section">
      <div className="section__bg" style={bg}>
        <div className="section__bg__overlay"></div>
      </div>

      <div
        className="container"
        style={{
          marginTop: state.headerHeight + "px",
        }}
      >
        <form className="form" onSubmit={handleSubmit(submit)}>
          {/* Problem combobox  */}
          <div className="field">
            <p>Your problem</p>
            <div className="input">
              <Combobox items={problems} register={register} />
            </div>
          </div>
          {/* Text Area  */}
          <div className="field">
            <p>Description</p>
            <div className="input">
              <textarea
                {...register("description", { required: true })}
                name="description"
                cols="30"
                rows="10"
                placeholder="ROM name - Your problems with that"
              ></textarea>
              {/* Eater Egg */}
              <div className="avatar hide-on-sm" onClick={showPopup}>
                <div className="caret"></div>
                <Icon src="avatar.png" />
              </div>
              <p className="error">
                {errors.description && "Description is required"}
              </p>
            </div>
          </div>
          {/* Radio button - Rate  */}
          <div className="field">
            <p>Rate us</p>
            <div id="radio-grp" className="input">
              <RadioButton id="ok" label="OK" register={register} />
              <RadioButton id="good" label="Good" register={register} />
              <RadioButton
                id="excellent"
                label="Excellent"
                register={register}
              />
            </div>
          </div>
          <button type="submit" className="button">
            <p>Submit</p>
            <div className="rect"></div>
          </button>
        </form>
      </div>
    </div>
  );
}

export default FeedBack;
