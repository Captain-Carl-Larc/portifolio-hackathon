document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("nav-links");

    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("active");

        // Toggle hamburger icon between ☰ and ✖
        if (menu.classList.contains("active")) {
            menuToggle.innerHTML = "&#10006;"; // ✖ (Close Icon)
        } else {
            menuToggle.innerHTML = "&#9776;"; // ☰ (Hamburger Icon)
        }
    });
});
