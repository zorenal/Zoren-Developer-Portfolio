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

//navbar for media;
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("sticky", window.scrollY > 100);
  console.log(window.scrollY);
});

// gsap animations
const tl = gsap.timeline({ duration: 3 });
tl.from("#SeeQR", {
  scrollTrigger: {
    trigger: "SeeQR",
    start: "top 100%",
    end: "center 95%",
    scrub: 1.5,
    toggleActions: "play none reverse none",
  },
  x: 1500,
})
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
  })
  .from("#MoneyVerse", {
    scrollTrigger: {
      trigger: "#MoneyVerse",
      start: "top 95%",
      end: "center 95%",
      scrub: 1.5,
      toggleActions: "play none reverse none",
    },
    x: 1500,
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

