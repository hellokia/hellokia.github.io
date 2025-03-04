
document.addEventListener("DOMContentLoaded", function () {
    const savedTheme = localStorage.getItem("theme") || "pink";
    document.documentElement.setAttribute("data-theme", savedTheme);

    document.querySelectorAll(".dropcont").forEach(item => {
        item.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default anchor behavior
            const selectedTheme = this.getAttribute("data-theme");

            document.documentElement.setAttribute("data-theme", selectedTheme);
            
            localStorage.setItem("theme", selectedTheme);
        });
    });
});

function showPopup() {
    document.getElementById("popup-container").style.display = "flex";
}

document.getElementById("close-popup").addEventListener("click", function () {
    document.getElementById("popup-container").style.display = "none";
});

