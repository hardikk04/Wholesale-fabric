function loco() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}

loco();

const t1 = gsap.timeline();

t1.from(".page1-heading>h1", {
  y: -100,
  opacity: 0,
  stagger: 0.1,
  duration: 0.4,
});

t1.from(".page1-btn", {
  y: -10,
  opacity: 0,
});

t1.to(".page1>img, .page1-overlay", {
  scale: "1.4",
  scrollTrigger: {
    scroller: ".main",
    trigger: ".page1>img",
    start: "top 0%",
    // markers: true,
    scrub: 0.3,
  },
});

let = clutter = "";
const page2Text = document.querySelector(".page2-text>h1");
page2Text.textContent.split("").forEach((text) => {
  clutter += `<span>${text}</span>`;

  page2Text.innerHTML = clutter;
});

t1.to(".page2-text>h1>span", {
  color: "#000",
  stagger: 0.1,
  scrollTrigger: {
    scroller: ".main",
    trigger: ".page2-text>h1>span",
    start: "top 80%",
    end: "top 20%",
    // markers: true,
    scrub: 1,
  },
});

t1.to(".page3-left>img", {
  top: "-10vh",
  scrollTrigger: {
    scroller: ".main",
    trigger: ".page3-left>img",
    start: "top 80%",
    end: "top 0%",
    // markers: true,
    scrub: 0.4,
  },
});

const page4Text = document.querySelector(".page4>h1");
let clutter2 = "";
page4Text.textContent.split("").forEach((text) => {
  clutter2 += `<span>${text}</span>`;
  page4Text.innerHTML = clutter2;
});

t1.to(".page4>h1>span", {
  color: "rgb(226, 228, 231)",
  stagger: 0.1,
  scrollTrigger: {
    scroller: ".main",
    trigger: ".page4>h1>span",
    start: "top 80%",
    end: "top 20%",
    // markers: true,
    scrub: 1,
  },
});

t1.to(".page6>img", {
  y: -150,
  scrollTrigger: {
    scroller: ".main",
    trigger: ".page6>img",
    start: "top 80%",
    end: "top 0%",
    // markers: true,
    scrub: 0.4,
  },
});

const page7Text = document.querySelector(".page7-text>h1");

let clutter3 = "";
page7Text.textContent.split("").forEach((text) => {
  clutter3 += `<span>${text}</span>`;
  page7Text.innerHTML = clutter3;
});

t1.to(".page7-text>h1>span", {
  color: "#000",
  stagger: 0.1,
  scrollTrigger: {
    scroller: ".main",
    trigger: ".page7-text>h1>span",
    start: "top 80%",
    end: "top 20%",
    // markers: true,
    scrub: 1,
  },
});

t1.from(".page7-btn", {
  y: 50,
  opacity: 0,
  scrollTrigger: {
    scroller: ".main",
    trigger: ".page7-btn",
    start: "top 80%",
    end: "top 50%",
    // markers: true,
    scrub: 1,
  },
});

const page8BtnDiv = document.querySelector(".page8-btn");

page8BtnDiv.addEventListener("mouseenter", () => {
  gsap.to(".page8-overlay", {
    opacity: 0,
  });
  gsap.to(".page8-icon", {
    color: "#fff200",
  });
});

page8BtnDiv.addEventListener("mouseleave", () => {
  gsap.to(".page8-overlay", {
    opacity: 1,
  });
  gsap.to(".page8-icon", {
    color: "#000",
  });
});
