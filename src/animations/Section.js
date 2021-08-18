import { gsap } from "gsap";

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
