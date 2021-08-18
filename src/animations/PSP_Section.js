import { gsap } from "gsap";

//show background image
var showTL;

export const showBG = (gear, width) => {
  showTL = gsap.timeline({});
  showTL.to(`.psp-section .section__bg`, 1, {
    width: "50%",
    ease: "Expo.easeOut",
  });
};
export const clearShowTL = () => {
  showTL.clear();
};
