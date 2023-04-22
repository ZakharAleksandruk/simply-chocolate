const burger = document.querySelector(".burger");
const drawer = document.querySelector(".drawer");
const cross = document.querySelector(".cross");

burger.addEventListener("click", () => {
    drawer.classList.add("show");
});

cross.addEventListener("click", () => {
    drawer.classList.remove("show");
});

// swiper

const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "vertical",
    loop: true,

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
        el: ".swiper-scrollbar",
    },
});
