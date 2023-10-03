import { gsap } from "gsap";

export const scrollAnimation = (position, target, onUpdate) => {
  const tl = gsap.timeline();

  tl.to(position, {
    x: -3.38,
    y: -10.74,
    z: -5.93,
    scrollTrigger: {
      trigger: ".offresSection",
      start: "top bottom",
      end: "top top",
      scrub: 2,
      immediateRender: false,
    },
    onUpdate,
  })
    .to(target, {
      x: 1.52,
      y: 0.77,
      z: -1.08,
      scrollTrigger: {
        trigger: ".offresSection",
        start: "top bottom",
        end: "top top",
        scrub: 2,
        immediateRender: false,
      },
    })
    .to(".Landing", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".offresSection",
        start: "top bottom",
        end: "top top",
        scrub: 2,
        immediateRender: false,
      },
    });

  // Your GSAP and ScrollTrigger setup code here
};
