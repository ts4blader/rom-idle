import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const scrollTrigger = (trigger) => {
  return {
    trigger: trigger,
    scroller: ".main",
    start: "top 10%",
    end: "center 40%",
    toggleActions: "play reverse play reverse",
  };
};

const moveIn = (trigger) => {
  gsap.from(`${trigger} .section__title`, {
    duration: 1,
    opacity: 0,
    y: 500,
    ease: "Expo.easeOut",
    scrollTrigger: scrollTrigger(trigger),
  });
  gsap.from(`${trigger} .section__subtitle`, {
    duration: 1,
    opacity: 0,
    y: 300,
    ease: "Expo.easeOut",
    scrollTrigger: scrollTrigger(trigger),
    delay: 0.5,
  });
  gsap.from(`${trigger} .button`, {
    duration: 1,
    opacity: 0,
    y: 500,
    ease: "Expo.easeOut",
    scrollTrigger: scrollTrigger(trigger),
    delay: 0.3,
  });

  //gallery animation
  gsap.from(`${trigger} .section__gallery__item`, {
    duration: 1,
    opacity: 0,
    y: 500,
    ease: "Expo.easeOut",
    scrollTrigger: scrollTrigger(trigger),
    stagger: 0.3,
  });
  gsap.from(`${trigger} .section__gallery`, {
    duration: 1,
    opacity: 0,
    scrollTrigger: scrollTrigger(trigger),
    delay: 0.3,
  });
  //rom name animation
  gsap.from(`${trigger} .section__rom-name .text`, {
    duration: 1,
    y: 300,
    opacity: 0,
    scrollTrigger: scrollTrigger(trigger),
    delay: 0.2,
  });
};
