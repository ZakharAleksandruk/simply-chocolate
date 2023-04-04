const burger = document.querySelector(".burger");
const drawer = document.querySelector(".drawer");

burger.addEventListener("click", () => {
    drawer.classList.add("show");
});
