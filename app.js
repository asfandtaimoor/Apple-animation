gsap.to(".ts-iphone--1", {
  y: -400,

  scrollTrigger: {
    trigger: ".ts-hero-section",
    start: "top top", // when the top of the trigger hits the top of the viewport
    // end: "+=500", // end after scrolling 500px beyond the start
    scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    markers: true,
  },
});
gsap.to(".ts-iphone--5", {
  y: -400,

  scrollTrigger: {
    trigger: ".ts-hero-section",
    start: "top top", // when the top of the trigger hits the top of the viewport
    // end: "+=500", // end after scrolling 500px beyond the start
    scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    markers: true,
  },
});

// 2 , 4
gsap.to(".ts-iphone--2", {
  y: -250,

  scrollTrigger: {
    trigger: ".ts-hero-section",
    start: "top top", // when the top of the trigger hits the top of the viewport
    // end: "+=500", // end after scrolling 500px beyond the start
    scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    markers: true,
  },
});
gsap.to(".ts-iphone--4", {
  y: -250,

  scrollTrigger: {
    trigger: ".ts-hero-section",
    start: "top top", // when the top of the trigger hits the top of the viewport
    // end: "+=500", // end after scrolling 500px beyond the start
    scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    markers: true,
  },
});

// 3
gsap.to(".ts-iphone--3", {
  y: -150,

  scrollTrigger: {
    trigger: ".ts-hero-section",
    start: "top top", // when the top of the trigger hits the top of the viewport
    // end: "+=500", // end after scrolling 500px beyond the start
    scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    markers: true,
  },
});

// Section 2
gsap.from(".ts-section-2__title", {
  y: 50,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".ts-section-2__title",
  },
});
gsap.from(".ts-section-2__subtitle", {
  y: 50,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".ts-section-2__subtitle",
  },
});
