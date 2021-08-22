import { gsap } from "gsap";

export const DelayMove = (x, y) => {
  gsap.to(".shape", {
    x: x,
    y: y,
    stagger: 0.05,
  });
};

export const Rotation = () => {
  const tl1 = gsap.timeline({ repeat: -1, yoyo: true });
  const tl2 = gsap.timeline({ repeat: -1, yoyo: true });

  tl1.to(".cursor .diamond-1", {
    rotation: 360,
    duration: 5,
    ease: "Expo.easeInOut",
  });

  tl2.to(".cursor .diamond-2", {
    rotation: 405,
    duration: 3,
  });
};
