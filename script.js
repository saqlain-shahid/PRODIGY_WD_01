const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = "#040680"; // Change background color on scroll
    navbar.style.color = "#1a5449"; // Change font color on scroll
  } else {
    navbar.style.backgroundColor = "#015d81";
    navbar.style.color = "#1a5449";
  }
});

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    link.style.backgroundColor = "#1a4054"; // Change background color on hover
  });
  link.addEventListener("mouseleave", () => {
    link.style.backgroundColor = "#015d81"; // Restore background color on hover out
  });
});