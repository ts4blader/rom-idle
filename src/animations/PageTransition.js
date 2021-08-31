import { gsap } from "gsap";

export const ShowTransition = () => {
  gsap
    .set(".transition", {
      left: 0,
      top: 0,
      height: "100vh",
    })
    .to(".transition", {
      duration: 0.5,
      width: "100%",
      ease: "Expo.easeOut",
    });
};
export const HideTransition = () => {
  gsap
    .set(".transition", {
      right: 0,
      top: 0,
      height: "100vh",
    })
    .to(".transition", {
      duration: 0.5,
      width: "0%",
      ease: "Expo.easeOut",
    });
};
