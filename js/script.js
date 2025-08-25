var navToggler = document.querySelector(".navbar-toggler"),
navTogglerIcon = document.querySelector(".navbar-toggler-icon");
navToggler.addEventListener("click", () => {
    navTogglerIcon.classList.toggle("close-icon");
})


