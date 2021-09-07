import React from "react";
import gamepad from "../res/images/gamepad.svg";
import ButtonImage from "../components/ButtonImage";
import { Link } from "react-router-dom";
import AnimationLink from "../components/AnimationLink";

function ComingSoon() {
  return (
    <div className="cm-page">
      <main>
        <section>
          <div className="container">
            <div className="left">
              <div className="svg">
                <object type="image/svg+xml" data={gamepad}>
                  svg-animation
                </object>
              </div>
            </div>
            <div className="right">
              <h2 className="cm-page__title">
                Oops! This page is coming soon!
              </h2>
              <div className="to-home-btn">
                <AnimationLink to="/">
                  <ButtonImage
                    text="back to home"
                    src="right-arrow.png"
                    position="start"
                  />
                </AnimationLink>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ComingSoon;
