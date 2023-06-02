// mobile nav menu
const mobileMenu = document.querySelector(".mobile-menu");
const navContainer = document.querySelector(".navbar-container");

mobileMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  navContainer.classList.toggle("active");
});
document.querySelectorAll(".nav").forEach((e) =>
  e.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    navContainer.classList.remove("active");
  })
);

function openPopup() {
  document.getElementById("image-carousel").style.display = "block";
}

function closePopup() {
  document.getElementById("image-carousel").style.display = "none";
}

//navbar for media;
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("sticky", window.scrollY > 100);
  console.log(window.scrollY);
});

// gsap animations
const tl = gsap.timeline({ duration: 3 });
tl.from("#FitMatch", {
  scrollTrigger: {
    trigger: "#FitMatch",
    start: "top 95%",
    end: "center 95%",
    scrub: 1.5,
    toggleActions: "play none reverse none",
  },
  x: -1500,
})
  .from("#FitnessWebsite", {
    scrollTrigger: {
      trigger: "#FitnessWebsite",
      start: "top 95%",
      end: "center 95%",
      scrub: 1.5,
      toggleActions: "play none reverse none",
    },
    x: 1500,
  })
  .from("#EFTGuessr", {
    scrollTrigger: {
      trigger: "#EFTGuessr",
      start: "top 95%",
      end: "center 95%",
      scrub: 1.5,
      toggleActions: "play none reverse none",
    },
    x: -1500,
  });
gsap.to(".coa-container", {
  scrollTrigger: {
    trigger: "#coa",
    start: "bottom 50%",
    end: "top 50%",
    toggleActions: "play none reverse none",
  },
  opacity: 0,
  duration: 0.2,
});
gsap.to("#navbar", {
  scrollTrigger: {
    trigger: "#coa",
    start: "center 50%",
    end: "center 10%",
    scrub: true,
    toggleActions: "play none reverse none",
  },
  padding: 16,
  fontSize: 20,
});
gsap.to("#image-carousel", {});

// modal
const buttons = document.querySelectorAll(".carousel-button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

// coa container animation
// window.addEventListener("scroll", () => {
//   const coaContainer = document.querySelector(".coa-container");
//   coaContainer.classList.toggle("fadeOut", window.scrollY > 600);
// });

// project animations
// window.addEventListener("scroll", () => {
//   const FitMatch = document.getElementById("FitMatch");
//   const FitnessWebsite = document.getElementById("FitnessWebsite");
//   const EFTGuessr = document.getElementById("EFTGuessr");
//   FitMatch.classList.toggle("slideFrLeft", window.scrollY > 200);
//   FitMatch.classList.toggle("slideFrLeftReverse", window.scrollY < 250);
//   FitnessWebsite.classList.toggle("slideFrRight", window.scrollY > 400);
//   FitnessWebsite.classList.toggle("slideFrRightReverse", window.scrollY < 450);
//   EFTGuessr.classList.toggle("slideFrLeft", window.scrollY > 600);
//   EFTGuessr.classList.toggle("slideFrLeftReverse", window.scrollY < 700);
// });
