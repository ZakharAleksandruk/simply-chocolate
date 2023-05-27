// (() => {
//     const burger = document.querySelector(".burger");
//     const drawer = document.querySelector(".drawer");
//     const cross = document.querySelector(".cross-btn");

//     burger.addEventListener("click", () => {
//         drawer.classList.remove("hide");
//     });

//     cross.addEventListener("click", () => {
//         drawer.classList.add("hide");
//     });
// })();

(() => {
    const mobileMenu = document.querySelector(".drawer");
    const openMenuBtn = document.querySelector(".burger");
    const closeMenuBtn = document.querySelector(".cross-btn");

    const toggleMenu = () => {
        const isMenuOpen =
            openMenuBtn.getAttribute("aria-expanded") === "true" || false;
        openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
        mobileMenu.classList.toggle("hide");

        const scrollLockMethod = !isMenuOpen
            ? "disableBodyScroll"
            : "enableBodyScroll";
        bodyScrollLock[scrollLockMethod](document.body);
    };

    openMenuBtn.addEventListener("click", toggleMenu);
    closeMenuBtn.addEventListener("click", toggleMenu);

    // Close the mobile menu on wider screens if the device orientation changes
    window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
        if (!e.matches) return;
        mobileMenu.classList.remove("hide");
        openMenuBtn.setAttribute("aria-expanded", false);
        bodyScrollLock.enableBodyScroll(document.body);
    });
})();

