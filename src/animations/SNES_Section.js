import { gsap } from "gsap";

//show background image
var showTL;

export const showBG = () => {
  showTL = gsap.timeline({});
  showTL.to(`.snes-section .section__bg`, 1, {
    width: "55%",
    ease: "Expo.easeOut",
  });
};
export const clearShowTL = () => {
  showTL.clear();
};
