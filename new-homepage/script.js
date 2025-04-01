document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("toggle-btn");
    const navLinks = document.getElementById("nav-links");
    const bodyShade = document.getElementById("bodyShade");

    toggleBtn.addEventListener("click", function () {
        navLinks.classList.toggle("active");
        bodyShade.classList.toggle("active");

    });
});