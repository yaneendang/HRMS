// =========================================
// HRMS - SCRIPT
// Milestone 2
// =========================================

const menuToggle = document.getElementById("menuToggle");
const sidebar = document.querySelector(".sidebar");

if (menuToggle) {
    menuToggle.addEventListener("click", function () {
        sidebar.classList.toggle("show");
    });
}


// Menutup sidebar ketika menu diklik pada mobile
const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach(function (item) {

    item.addEventListener("click", function () {

        if (window.innerWidth <= 768) {
            sidebar.classList.remove("show");
        }

    });

});