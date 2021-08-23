import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const showBG = (gear, widths) => {
  let showTL;
  showTL = gsap.timeline({});
  let width = "0";
  // get width from data
  if (window.innerWidth <= 480) width = widths.mobile;
  else if (window.innerWidth >= 1024) width = widths.desktop;
  else width = widths.tablet;

  showTL
    .fromTo(
      `.${gear}-section .section__bg`,
      1,
      {
        width: 0,
        ease: "Expo.easeOut",
      },
      {
        width: width,
        ease: "Expo.easeOut",
      }
    )
    .fromTo(
      `.${gear}-section .section__rom-name .text`,
      1,
      {
        y: "-100%",
        opacity: 0,
        ease: "Expo.easeOut",
      },
      {
        y: "0%",
        opacity: 1,
        ease: "Expo.easeOut",
      },
      "0"
    );

  return showTL;
};

export const hideBG = (gear, onComplete) => {
  let hideTL;
  hideTL = gsap.timeline({ onComplete: onComplete });
  hideTL
    .to(`.${gear}-section .section__bg`, 6, {})
    .to(`.${gear}-section .section__bg`, 0.5, {
      width: "0%",
      ease: "Expo.easeOut",
    })
    .to(
      `.${gear}-section .section__rom-name .text`,
      0.5,
      {
        y: "100%",
        opacity: 0,
        ease: "Expo.easeOut",
      },
      "-=0.5"
    );
  return hideTL;
};

export const IndicatorActive = (gear) => {
  gsap.from(`.${gear}-dot`, {
    scrollTrigger: {
      scroller: ".main",
      trigger: `.${gear}-section`,
      start: "top 10%",
      end: "center 40%",
      toggleClass: {
        targets: `.${gear}-dot`,
        className: "active",
      },
    },
  });
};

// Animation with each section
const scrollTrigger = (trigger) => {
  return {
    trigger: trigger,
    scroller: ".main",
    start: "top 10%",
    end: "center 40%",
    toggleActions: "play reverse play reverse",
  };
};

export const moveIn = (trigger) => {
  //container

  gsap.from(`${trigger} .section__inner`, {
    duration: 2.5,
    opacity: 0,
    y: 500,
    ease: "Expo.easeOut",
    scrollTrigger: scrollTrigger(trigger),
  });
  //Content
  gsap.from(`${trigger} .section__title`, {
    duration: 1,
    opacity: 0,
    y: 500,
    ease: "Expo.easeOut",
    scrollTrigger: scrollTrigger(trigger),
  });
  gsap.from(`${trigger} .section__subtitle`, {
    duration: 1.5,
    opacity: 0,
    y: 300,
    ease: "Expo.easeOut",
    scrollTrigger: scrollTrigger(trigger),
    delay: 0.5,
  });
  gsap.from(`${trigger} .section__description`, {
    duration: 1,
    opacity: 0,
    y: 500,
    ease: "Expo.easeOut",
    scrollTrigger: scrollTrigger(trigger),
    delay: 0.2,
  });
  gsap.from(`${trigger} .button`, {
    duration: 1,
    opacity: 0,
    y: 1000,
    ease: "Expo.easeOut",
    scrollTrigger: scrollTrigger(trigger),
    delay: 0.3,
  });

  //gallery animation
  gsap.from(`${trigger} .section__gallery__item`, {
    duration: 0.8,
    opacity: 0,
    y: 1500,
    ease: "Expo.easeOut",
    scrollTrigger: scrollTrigger(trigger),
    stagger: 0.3,
  });
  gsap.from(`${trigger} .section__gallery`, {
    duration: 0.5,
    opacity: 0,
    scrollTrigger: scrollTrigger(trigger),
    delay: 0.3,
  });
  //rom name animation
  gsap.from(`${trigger} .section__rom-name .bar`, {
    duration: 1,
    y: 300,
    opacity: 0,
    scrollTrigger: scrollTrigger(trigger),
    delay: 0.2,
    stagger: 0.2,
  });
};
