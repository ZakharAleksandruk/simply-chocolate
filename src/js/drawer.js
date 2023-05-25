(() => {
    const burger = document.querySelector(".burger");
    const drawer = document.querySelector(".drawer");
    const cross = document.querySelector(".cross-btn");

    burger.addEventListener("click", () => {
        drawer.classList.remove("hide");
    });

    cross.addEventListener("click", () => {
        drawer.classList.add("hide");
    });
})();