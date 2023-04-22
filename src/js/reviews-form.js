// (() => {
// const refs = {
//     openModalBtn: document.querySelector("[data-open-reviews-form]"),
//     closeModalBtn: document.querySelector("[data-close-reviews-form]"),
//     backdrop: document.querySelector("[data-reviews-form]"),
// };

// document
//     .querySelector("[data-open-reviews-form]")
//     .addEventListener("click", toggleModal);
// refs.closeModalBtn.addEventListener("click", toggleModal);

// refs.backdrop.addEventListener("click", logBackdropClick);

// function toggleModal() {
//     refs.backdrop.classList.toggle("is-hidden");
// }

// function logBackdropClick() {
//     console.log("Це клік в бекдроп");
//     }
//   })();

(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-open-reviews-form]"),
        closeModalBtn: document.querySelector("[data-close-reviews-form]"),
        hideModal: document.querySelector("[data-hide-reviews-form]"),
        modal: document.querySelector("[data-reviews-form]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    refs.hideModal.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
    }
})();
