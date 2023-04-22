const refs = {
    openModalBtn: document.querySelector("[data-open-reviews-modal]"),
    closeModalBtn: document.querySelector("[data-close-reviews-modal]"),
    backdrop: document.querySelector("[data-reviews-modal]"),
};

document
    .querySelector("[data-open-reviews-modal]")
    .addEventListener("click", toggleModal);
refs.closeModalBtn.addEventListener("click", toggleModal);

refs.backdrop.addEventListener("click", logBackdropClick);

function toggleModal() {
    refs.backdrop.classList.toggle("is-hidden");
}

function logBackdropClick() {
    console.log("Це клік в бекдроп");
}
