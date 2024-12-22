document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const openModalBtn = document.getElementById("openModalBtn");
    const closeBtn = document.querySelector(".close-btn");

    // Open modal when button is clicked
    openModalBtn.addEventListener("click", () => {
        modal.style.display = "flex";
    });

    // Close modal when the close button is clicked
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Close modal when clicking outside the modal content
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
