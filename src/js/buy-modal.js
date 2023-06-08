(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-open-buy-modal]"),
        closeModalBtn: document.querySelector("[data-close-buy-modal]"),
        hideModal: document.querySelector("[data-hide-buy-modal]"),
        modal: document.querySelector("[data-buy-modal]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    refs.hideModal.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
    }
})();
