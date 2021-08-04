import React from "react";
import Button from "../components/Button";
import Image from "../components/Image";

const Gallery = ({ images, current }) => {
  return (
    <div className="section__gallery row">
      {images.map((item, index) => {
        const className =
          current === index
            ? "col section__gallery__item active"
            : "col section__gallery__item";
        return (
          <div className={className} key={index}>
            <Image src={item} />
          </div>
        );
      })}
    </div>
  );
};

function Section({ content, console }) {
  const [current, setCurrent] = React.useState(0);
  const image = require("../res/images/" + content.images[current]).default;
  const bg = {
    backgroundImage: `url(${image}) cover no-repeat ${content.coodinates[current]}`,
  };

  return (
    <div className={`section ${console}-section`}>
      <div className="container">
        {/* Background section  */}
        <div className="section__bg" style={bg}>
          <div className="section__bg__overlay"></div>
        </div>

        <div className="row section__caption">
          <p className="section__subtitle">{content.subtitle}</p>
          <h3 className="section__title">{content.title}</h3>
        </div>

        <p className="section__description">{content.description}</p>

        <Button text={content.cta} />

        <div className="row bottom">
          {/* gallery  */}
          <Gallery images={content.images} current={current} />
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
