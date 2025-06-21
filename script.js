document.addEventListener("DOMContentLoaded", () => {
  // Theme Toggle
  const themeToggle = document.querySelector(".theme-toggle");
  const body = document.body;

  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");
    localStorage.setItem(
      "theme",
      body.classList.contains("dark-mode") ? "dark" : "light"
    );
  });

  // Load saved theme
  const savedTheme = localStorage.getItem("theme") || "light";
  body.classList.add(savedTheme + "-mode");

  // Typing Animation
  const typingText = document.querySelector(".typing-animation");
  const text = typingText.textContent;
  typingText.textContent = "";
  let i = 0;

  function type() {
    if (i < text.length) {
      typingText.textContent += text.charAt(i);
      i++;
      setTimeout(type, 100);
    }
  }
  type();

  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(anchor.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});

function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  const toggleIcon = document.getElementById("menuToggle").firstElementChild;

  navLinks.classList.toggle("active");

  // Toggle hamburger <-> cross
  if (navLinks.classList.contains("active")) {
    toggleIcon.classList.remove("fa-bars");
    toggleIcon.classList.add("fa-times");
  } else {
    toggleIcon.classList.remove("fa-times");
    toggleIcon.classList.add("fa-bars");
  }
}

// Auto-close menu on link click (mobile only)
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    const navLinks = document.getElementById("navLinks");
    const toggleIcon = document.getElementById("menuToggle").firstElementChild;

    if (window.innerWidth <= 768) {
      navLinks.classList.remove("active");
      toggleIcon.classList.remove("fa-times");
      toggleIcon.classList.add("fa-bars");
    }
  });
});
