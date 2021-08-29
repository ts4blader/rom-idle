import { gsap, SteppedEase } from "gsap";

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

export const CompleteLoading = (endFunction = null) => {
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
        top: "90%",
        ease: "Expo.easeOut",
      },
      "0.5"
    )
    .to(".loaded", {
      duration: 0.5,
      opacity: 1,
    });
};

export const Start = (complete) => {
  const tl = gsap.timeline({ onComplete: complete });
  tl.to(".loading .text, .loaded", {
    duration: 1.5,
    opacity: 0,
    y: -300,
    ease: "Expo.easeOut",
  }).to(
    ".loading",
    {
      duration: 1,
      height: 0,
      ease: "Expo.easeOut",
    },
    "0.5"
  );
};

export const Blink = () => {
  const tl = gsap.timeline({ repeat: -1 });
  tl.to(".loaded", {
    duration: 1,
    opacity: 0,
    ease: SteppedEase.config(1),
  }).to(".loaded", {
    duration: 0.5,
    opacity: 1,
    ease: SteppedEase.config(1),
  });
};
export const SpeedyBlink = (complete) => {
  const tl = gsap.timeline({ repeat: 5, onComplete: complete });
  tl.to(".loaded", {
    duration: 0.1,
    opacity: 0,
    ease: SteppedEase.config(1),
  }).to(".loaded", {
    duration: 0.1,
    opacity: 1,
    ease: SteppedEase.config(1),
  });
};

export const LoadingFree = () => {
  tl.clear();
};

export default LoadingAnimation;
