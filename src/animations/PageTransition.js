import { gsap } from "gsap";

export const ShowTransition = (onComplete) => {
  const tl = gsap.timeline();
  tl.to(".transition", {
    duration: 0,
    y: "-100vh",
    height: "100vh",
  })
    .to(".transition", {
      duration: 0.5,
      y: 0,
      ease: "Expo.easeOut",
    })
    .to(
      ".wrapper",
      {
        duration: 0,
        opacity: 0,
      },
      "0"
    )
    .to(".transition", {
      duration: 0.5,
      y: "100vh",
      ease: "Expo.easeOut",
    })
    .to(
      ".wrapper",
      {
        duration: 0.25,
        opacity: 1,
      },
      "0.5"
    );
};
// export const HideTransition = () => {
//   gsap
//     .to(".transition", {
//       right: 0,
//       top: 0,
//       height: "100vh",
//     })
//     .to(".transition", {
//       duration: 0.5,
//       width: "0%",
//       ease: "Expo.easeOut",
//     });
// };
