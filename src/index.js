const burger = document.querySelector(".burger");
const drawer = document.querySelector(".drawer");
const cross = document.querySelector(".cross");

burger.addEventListener("click", () => {
    drawer.classList.add("show");
});

cross.addEventListener("click", () => {
    drawer.classList.remove("show");
});
