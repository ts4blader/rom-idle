import React from "react";
import Button from "../components/Button";
import Image from "../components/Image";
import { StoreContext } from "../Store";
import { showBG, hideBG } from "../animations/Section";

function Section({ content }) {
  const [state, dispatch] = React.useContext(StoreContext);
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    // init all animation
    let show = showBG(content.gear, content.widths);
    let hide = hideBG(content.gear, () => {
      //* On Complete Function
      if (current === content.images.length - 1) setCurrent(0);
      else setCurrent(current + 1);
      //* End On Complete
    });

    return () => {
      //* clear all timeline
      show.clear();
      hide.clear();
    };
  }, [current]);

  const image = require("../res/images/" + content.images[current]).default;

  const bgStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: `${content.coodinates[current]}`,
  };

  return (
    <div className={`${content.gear}-section section`}>
      <div className="section__bg" style={bgStyle}>
        <div className="section__bg__overlay"></div>
      </div>
      <div
        className="container"
        style={{
          marginTop: state.headerHeight + "px",
        }}
      >
        {/* Background section  */}

        <div className="row section__caption">
          <p className="section__subtitle">{content.subtitle}</p>
          <h3 className="section__title">{content.title}</h3>
        </div>

        <p className="section__description">{content.description}</p>

        <Button text={content.cta} />

        <div className="row bottom">
          {/* gallery  */}
          <div className="section__gallery row hide-on-md">
            {content.images.map((item, index) => {
              const className =
                current === index
                  ? "col section__gallery__item active"
                  : "col section__gallery__item";
              return (
                <div
                  className={className}
                  key={index}
                  onClick={() => setCurrent(index)}
                >
                  <Image src={item} />
                </div>
              );
            })}
          </div>
          {/* ROM name  */}
          <div className="section__rom-name">
            <div className="bar hide-on-sm"></div>
            <p className="text">{content.roms[current]}</p>
            <div className="bar hide-on-sm"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
