const lerp = (x, y, a) => x * (1 - a) + y * a;
/* ===( Creative By : CODE AASHU )=== */
function cursorAnim() {
  const crsr = document.querySelector(".cursor");
  const main = document.querySelector(".main");
  const nav = document.querySelector("nav");
  const h1s = document.querySelectorAll(".hero h1");

  h1s.forEach((h1) => {
    h1.addEventListener("mouseenter", () => {
      gsap.to(crsr, {
        scale: 8,
      });
    });
    h1.addEventListener("mouseleave", () => {
      gsap.to(crsr, {
        scale: 1,
      });
    });
  });

  main.addEventListener("mousemove", (e) => {
    gsap.to(crsr, {
      x: e.x + "px",
      y: e.y + "px",
      duration: 0.2,
      ease: Expo,
    });
  });
  nav.addEventListener("mouseenter", () => {
    gsap.to(crsr, {
      opacity: 0,
      scale: 0,
    });
  });
  nav.addEventListener("mouseleave", () => {
    gsap.to(crsr, {
      opacity: 1,
      scale: 1,
    });
  });
  main.addEventListener("mouseenter", () => {
    gsap.to(crsr, {
      opacity: 1,
      scale: 1,
    });
  });
  main.addEventListener("mouseleave", () => {
    gsap.to(crsr, {
      opacity: 0,
      scale: 0,
    });
  });
}

function servicePageAnim() {
  const servicePage = document.querySelector(".services");
  const aboutPage = document.querySelector(".about");
  const projectsPage = document.querySelector(".projects");
  const hoverText = document.querySelector(".services .hover-texts .hover-top");
  const hoverText1 = document.querySelector(
    ".services .hover-texts1 .hover-top1"
  );

  const firstWord = document.querySelector(
    ".services .hover-texts .hover-top .first"
  );
  const secondWord = document.querySelector(
    ".services .hover-texts .hover-top .second"
  );
  const thirdWord = document.querySelector(
    ".services .hover-texts .hover-top .third"
  );
  const fourthWord = document.querySelector(
    ".services .hover-texts .hover-top .fourth"
  );
  const fifthWord = document.querySelector(
    ".services .hover-texts .hover-top .fifth"
  );
  const sixthWord = document.querySelector(
    ".services .hover-texts .hover-top .sixth"
  );
  const seventhWord = document.querySelector(
    ".services .hover-texts .hover-top .seventh"
  );
  const eightWord = document.querySelector(
    ".services .hover-texts .hover-top .eight"
  );

  const firstWord1 = document.querySelector(
    ".services .hover-texts1 .hover-top1 .first1"
  );
  const secondWord1 = document.querySelector(
    ".services .hover-texts1 .hover-top1 .second1"
  );
  const thirdWord1 = document.querySelector(
    ".services .hover-texts1 .hover-top1 .third1"
  );
  const fourthWord1 = document.querySelector(
    ".services .hover-texts1 .hover-top1 .fourth1"
  );
  const fifthWord1 = document.querySelector(
    ".services .hover-texts1 .hover-top1 .fifth1"
  );
  const sixthWord1 = document.querySelector(
    ".services .hover-texts1 .hover-top1 .sixth1"
  );
  const seventhWord1 = document.querySelector(
    ".services .hover-texts1 .hover-top1 .seventh1"
  );
  const eightWord1 = document.querySelector(
    ".services .hover-texts1 .hover-top1 .eight1"
  );

  hoverText.addEventListener("mouseenter", () => {
    servicePage.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    aboutPage.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    projectsPage.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    hoverText.style.color = "White";
    firstWord.style.transform = "translate(-6vw,-6vw) rotate(-10deg)";
    secondWord.style.transform = "translate(-2vw,-3vw) rotate(-10deg)";
    thirdWord.style.transform = "translate(-1vw,3vw) rotate(10deg)";
    fourthWord.style.transform = "translate(0vw,0vw) rotate(-10deg)";
    fifthWord.style.transform = "translate(-1vw,5vw) rotate(10deg)";
    sixthWord.style.transform = "translate(-1vw,-1vw) rotate(6deg)";
    seventhWord.style.transform = "translate(-1vw,1vw) rotate(-8deg)";
    eightWord.style.transform = "translate(-1vw,1vw) rotate(-10deg)";
  });
  hoverText.addEventListener("mouseleave", () => {
    servicePage.style.backgroundColor = "white";
    aboutPage.style.backgroundColor = "white";
    projectsPage.style.backgroundColor = "white";
    hoverText.style.color = "Black";
    firstWord.style.transform = "translate(0vw,0vw) rotate(0deg)";
    secondWord.style.transform = "translate(0vw,0vw) rotate(0deg)";
    thirdWord.style.transform = "translate(0vw,0vw) rotate(0deg)";
    fourthWord.style.transform = "translate(0vw,0vw) rotate(0deg)";
    fifthWord.style.transform = "translate(0vw,0vw) rotate(0deg)";
    sixthWord.style.transform = "translate(0vw,0vw) rotate(0deg)";
    seventhWord.style.transform = "translate(0vw,0vw) rotate(0deg)";
    eightWord.style.transform = "translate(0vw,0vw) rotate(0deg)";
  });
  hoverText1.addEventListener("mouseenter", () => {
    servicePage.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    aboutPage.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    projectsPage.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    hoverText1.style.color = "White";
    firstWord1.style.transform = "translate(-6vw,-6vw) rotate(-10deg)";
    secondWord1.style.transform = "translate(-2vw,-3vw) rotate(-10deg)";
    thirdWord1.style.transform = "translate(-1vw,3vw) rotate(10deg)";
    fourthWord1.style.transform = "translate(0vw,0vw) rotate(-10deg)";
    fifthWord1.style.transform = "translate(-1vw,5vw) rotate(10deg)";
    sixthWord1.style.transform = "translate(-1vw,-1vw) rotate(6deg)";
    seventhWord1.style.transform = "translate(-1vw,1vw) rotate(-8deg)";
    eightWord1.style.transform = "translate(-1vw,1vw) rotate(-10deg)";
  });
  hoverText1.addEventListener("mouseleave", () => {
    servicePage.style.backgroundColor = "white";
    aboutPage.style.backgroundColor = "white";
    projectsPage.style.backgroundColor = "white";
    hoverText1.style.color = "Black";
    firstWord1.style.transform = "translate(0vw,0vw) rotate(0deg)";
    secondWord1.style.transform = "translate(0vw,0vw) rotate(0deg)";
    thirdWord1.style.transform = "translate(0vw,0vw) rotate(0deg)";
    fourthWord1.style.transform = "translate(0vw,0vw) rotate(0deg)";
    fifthWord1.style.transform = "translate(0vw,0vw) rotate(0deg)";
    sixthWord1.style.transform = "translate(0vw,0vw) rotate(0deg)";
    seventhWord1.style.transform = "translate(0vw,0vw) rotate(0deg)";
    eightWord1.style.transform = "translate(0vw,0vw) rotate(0deg)";
  });
}

function navAnim() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

  window.onscroll = () => [
    sections.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 550;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");
      if (top >= offset && top < offset + height) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          document
            .querySelector(`nav a[href*=` + id + `]`)
            .classList.add("active");
        });
      }
    }),
  ];
}

function magneticEffect() {
  const starIcon = document.querySelector(".about .about-text p img");
  const crsr = document.querySelector(".cursor");

  starIcon.addEventListener("mousemove", (e) => {
    const dim = starIcon.getBoundingClientRect();
    const xstart = dim.x;
    const xend = dim.x + dim.width;

    const ystart = dim.y;
    const yend = dim.y + dim.height;

    const zeroone = gsap.utils.mapRange(xstart, xend, 0, 1, e.clientX);
    const zerotwo = gsap.utils.mapRange(ystart, yend, 0, 1, e.clientY);

    gsap.to(crsr, {
      scale: 3,
    });
    gsap.to(starIcon, {
      x: lerp(-20, 20, zeroone),
      y: lerp(-20, 20, zerotwo),
      duration: 0.6,
    });
  });
  starIcon.addEventListener("mouseleave", () => {
    gsap.to(crsr, {
      scale: 1,
    });
    gsap.to(starIcon, {
      x: 0,
      y: 0,
      duration: 0.6,
    });
  });
}

function magneticEffectTag() {
  const tag = document.querySelector(".tag ");
  const crsr = document.querySelector(".cursor");

  tag.addEventListener("mousemove", (e) => {
    const dim = tag.getBoundingClientRect();
    const xstart = dim.x;
    const xend = dim.x + dim.width;

    const ystart = dim.y;
    const yend = dim.y + dim.height;

    const zeroone = gsap.utils.mapRange(xstart, xend, 0, 1, e.clientX);
    const zerotwo = gsap.utils.mapRange(ystart, yend, 0, 1, e.clientY);

    gsap.to(crsr, {
      scale: 3,
    });
    gsap.to(tag, {
      x: lerp(-20, 20, zeroone),
      y: lerp(-20, 20, zerotwo),
      duration: 0.6,
    });
  });
  tag.addEventListener("mouseleave", () => {
    gsap.to(crsr, {
      scale: 1,
    });
    gsap.to(tag, {
      x: 0,
      y: 0,
      duration: 0.6,
    });
  });
}

function loaderAnim() {
  const tl = gsap.timeline();
  tl.from(".loader .box h1", {
    y: 150 + "%",
    duration: 0.5,
    delay: 1,
    opacity:0
  });
  tl.to(".loader .box h1", {
    y: -150 + "%",
    duration: .6,
    delay:.5,
     opacity:1
  });
  tl.to(".loader", {
    left:"-100%",
    display: "none",
  });
  tl.from(".home nav",{
    y:-100+"%",
    opacity:0,
    duration:.5,
    delay:-.5
  })
  tl.from(".home .hero .full",{
    y:150+"%",
    opacity:0,
    duration:1,
    delay:-.6
  })
}

function simplePageAnims(){
  gsap.from("#trans,.about .upper-text .about-box", {
    y: 100 + "%",
    duration: 0.3,
    scrollTrigger: {
      trigger: "#trans, .about .upper-text .about-box",
      start: "top 90%",
      end: "top 75%",
      // markers:true,
      scrub: true,
    },
  });
   gsap.to(".about .border-div", {
     width: 90.5 + "%",
     duration: 0.3,
     scrollTrigger: {
       trigger: ".about .border-div",
       start: "top 90%",
       end: "top 75%",
       // markers:true,
       scrub: true,
     },
   });
  gsap.to(".about .about-text p", {
    backgroundPositionX: "0%",
    stagger: 1,
    scrollTrigger: {
      trigger: ".about .about-text p",
          start: "top 60%",
          end: "top 30%",
          scrub:true,
          // markers:true
    },
  });
  gsap.to(".about .about-text p .line", {
    width:"100px",
    duration:1,
    scrollTrigger: {
      trigger: ".about .about-text p .line",
          start: "top 77%",
          end: "top 70%",
          scrub:true,
          // markers:true
    },
  });
  gsap.from(".about .about-text p img", {
    x:-100,
    duration:1,
    opacity:0,
    scrollTrigger: {
      trigger: ".about .about-text p img",
          start: "top 72%",
          end: "top 68%",
          scrub:true,
          // markers:true
    },
  });
  gsap.from(".services .upper-text h4", {
    y: 100 + "%",
    duration: 0.3,
    scrollTrigger: {
      trigger: ".services .upper-text h4",
      start: "top 90%",
      end: "top 75%",
      // markers:true,
      scrub: true,
    },
  });
  gsap.to(".services .border-div", {
    width: 90.5 + "%",
    duration: 0.3,
    scrollTrigger: {
      trigger: ".services .border-div",
      start: "top 90%",
      end: "top 75%",
      // markers:true,
      scrub: true,
    },
  });
  gsap.from(".services .hover-texts", {
    x: -100 + "%",
    duration: 1.2,
    scrollTrigger: {
      trigger: ".services .hover-texts",
      start: "top 75%",
      end: "top 55%",
      // markers:true,
      scrub: true,
    },
  });
  gsap.from(".services .hover-texts1", {
    x: 100 + "%",
    duration: 1.2,
    scrollTrigger: {
      trigger: ".services .hover-texts1",
      start: "top 75%",
      end: "top 55%",
      // markers:true,
      scrub: true,
    },
  });
  gsap.from(".projects .upper-text h4", {
    y: 100 + "%",
    duration: 0.3,
    scrollTrigger: {
      trigger: ".projects .upper-text h4",
      start: "top 90%",
      end: "top 75%",
      // markers:true,
      scrub: true,
    },
  });
  gsap.to(".projects .border-div", {
    width: 90.5 + "%",
    duration: 0.3,
    scrollTrigger: {
      trigger: ".projects .border-div",
      start: "top 90%",
      end: "top 75%",
      // markers:true,
      scrub: true,
    },
  });
  gsap.from(".projects h1", {
    x: -100 + "%",
    duration: 0.8,
    scrollTrigger: {
      trigger: ".projects h1",
      start: "top 75%",
      end: "top 55%",
      // markers:true,
      scrub: true,
    },
  });
  gsap.from(".contact .upper-text h4", {
    y: 100 + "%",
    duration: 0.3,
    scrollTrigger: {
      trigger: ".contact .upper-text h4",
      start: "top 90%",
      end: "top 75%",
      // markers:true,
      scrub: true,
    },
  });
  gsap.to(".contact .border-div", {
    width: 90.5 + "%",
    duration: 0.3,
    scrollTrigger: {
      trigger: ".contact .border-div",
      start: "top 90%",
      end: "top 75%",
      // markers:true,
      scrub: true,
    },
  });
  gsap.from(".contact .contact-texts h1", {
    y: 100 + "%",
    duration: .8,
    scrollTrigger: {
      trigger: ".contact .contact-texts h1",
      start: "top 100%",
      end: "top 85%",
      // markers: true,
      scrub: true,
    },
  });
}


servicePageAnim();
cursorAnim();
navAnim();
magneticEffect();
magneticEffectTag();
loaderAnim();
simplePageAnims();


/* ===( Creative By : CODE AASHU )=== */