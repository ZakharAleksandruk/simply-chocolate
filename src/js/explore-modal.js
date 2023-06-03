(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-open-explore-modal]"),
        closeModalBtn: document.querySelector("[data-close-explore-modal]"),
        hideModal: document.querySelector("[data-hide-explore-modal]"),
        modal: document.querySelector("[data-explore-modal]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    refs.hideModal.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
    }
})();
