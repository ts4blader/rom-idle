import { gsap } from "gsap";

var hideTL;
var showTL;

export const showBg = () => {
  showTL = gsap.timeline({});
  showTL.to(".psp-section .section__bg", 1, {
    width: "50%",
    ease: "Expo.easeOut",
  });
};

export const hideBg = (onComplete) => {
  hideTL = gsap.timeline({ onComplete: onComplete });
  hideTL
    .to(".psp-section .section__bg", 9, {})
    .to(".psp-section .section__bg", 1, {
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
