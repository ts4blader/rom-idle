import { gsap } from "gsap";

var hideTL;
var showTL;

export const showBG = (gear, widths) => {
  showTL = gsap.timeline({});
  let width = "0";
  // get width from data
  if (window.innerWidth <= 480) width = widths.mobile;
  else if (window.innerWidth >= 1024) width = widths.desktop;
  else width = widths.tablet;

  showTL
    .from(`.${gear}-section .section__bg`, 0.5, {
      width: 0,
      ease: "Expo.easeOut",
    })
    .to(`.${gear}-section .section__bg`, 1, {
      width: width,
      ease: "Expo.easeOut",
    });

  return showTL;
};

export const hideBG = (gear, onComplete) => {
  hideTL = gsap.timeline({ onComplete: onComplete });
  hideTL
    .to(`.${gear}-section .section__bg`, 6, {})
    .to(`.${gear}-section .section__bg`, 0.5, {
      width: "0%",
      ease: "Expo.easeOut",
    });
};

export const clearHideTL = () => {
  hideTL.clear();
};
export const clearShowTL = () => {
  showTL.clear();
};

export const clearAll = () => {
  hideTL.clear();
  showTL.clear();
};
