import { gsap } from "gsap";

var tl = gsap.timeline({ repeat: -1, yoyo: false, repeatDelay: 0.25 });
const LoadingAnimation = () => {
  tl.staggerTo(
    ".text .dot",
    0.5,
    {
      y: -50,
      ease: "back",
    },
    0.25
  );
  tl.staggerTo(
    ".text .dot",
    0.5,
    {
      y: 0,
      ease: "Bounce.easeOut",
    },
    0.25
  );
};

export const CompleteLoading = (endFunction) => {
  let complete = gsap.timeline({ onComplete: endFunction });
  complete
    .to(".loading .logo, .loading__text", 1, {
      yPercent: "-100",
      ease: "Expo.easeOut",
    })
    .to(
      ".loaded",
      1,
      {
        opacity: 1,
        top: "80%",
        ease: "Expo.easeOut",
      },
      "0.5"
    )
    .to(".loading .text, .loaded", 1, {
      opacity: 0,
      y: -300,
      ease: "Expo.easeOut",
    })
    .to(
      ".loading",
      1,
      {
        height: 0,
        ease: "Expo.easeOut",
      },
      "2"
    );
};

export const LoadingPause = () => {
  tl.pause();
};

export default LoadingAnimation;
