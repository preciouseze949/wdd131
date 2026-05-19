// Hamburger Menu
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const temp = document.querySelector(".temp");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");

    // change icon
    menuBtn.textContent = navMenu.classList.contains("open") ? "✖" : "☰";
});

// Footer Year
document.getElementById("year").textContent = new Date().getFullYear();

// Last Modified
document.getElementById("lastModified").textContent = document.lastModified;