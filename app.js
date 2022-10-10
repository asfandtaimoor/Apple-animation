gsap.to(".ts-iphone--1", {
  y: -200,
  scrollTrigger: {
    trigger: ".ts-hero-section",
    start: "top top", // when the top of the trigger hits the top of the viewport
    scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
  },
});
gsap.to(".ts-iphone--5", {
  y: -200,
  scrollTrigger: {
    trigger: ".ts-hero-section",
    start: "top top", // when the top of the trigger hits the top of the viewport
    scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
  },
});
// 2 , 4
gsap.to(".ts-iphone--2", {
  y: -600,
  scrollTrigger: {
    trigger: ".ts-hero-section",
    start: "top top", // when the top of the trigger hits the top of the viewport
    scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
  },
});
gsap.to(".ts-iphone--4", {
  y: -600,
  scrollTrigger: {
    trigger: ".ts-hero-section",
    start: "top top", // when the top of the trigger hits the top of the viewport
    scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
  },
});

// 3
gsap.to(".ts-iphone--3", {
  y: -300,
  scrollTrigger: {
    trigger: ".ts-hero-section",
    start: "top top", // when the top of the trigger hits the top of the viewport
    scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
  },
});

// Section 2
gsap.from(".ts-section-2__title", {
  y: 50,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".ts-section-2__title",
    toggleActions: "play pause restart reset",
  },
});
gsap.from(".ts-section-2__subtitle", {
  y: 50,
  opacity: 0,
  duration: 0.8,
  scrollTrigger: {
    trigger: ".ts-section-2__subtitle",
    toggleActions: "play pause restart reset",
  },
});
