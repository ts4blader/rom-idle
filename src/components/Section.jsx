import React from "react";
import Button from "../components/Button";
import Image from "../components/Image";

function Section({ content, gear }) {
  const [current, setCurrent] = React.useState(0);

  const image = require("../res/images/" + content.images[current]).default;

  const bg = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: ` ${content.coodinates[current]}`,
  };

  return (
    <div className={`${gear}-section section`}>
      <div className="section__bg" style={bg}>
        <div className="section__bg__overlay"></div>
      </div>
      <div className="container">
        {/* Background section  */}

        <div className="row section__caption">
          <p className="section__subtitle">{content.subtitle}</p>
          <h3 className="section__title">{content.title}</h3>
        </div>

        <p className="section__description">{content.description}</p>

        <Button text={content.cta} />

        <div className="row bottom">
          {/* gallery  */}
          <div className="section__gallery row">
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
            <div className="bar"></div>
            <p className="text">{content.roms[current]}</p>
            <div className="bar"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
