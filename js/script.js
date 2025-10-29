// Ambil elemen
const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#hamburger-menu");

// Ketika hamburger diklik
hamburger.addEventListener("click", () => {
  navbarNav.classList.toggle("active");
});

// Klik di luar menu untuk menutup
document.addEventListener("click", (e) => {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
