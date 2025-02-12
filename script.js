document.addEventListener("DOMContentLoaded", () => {
    const optionButtons = document.querySelectorAll(".option-button");

    optionButtons.forEach(button => {
        button.addEventListener("click", () => {
            const creator = button.getAttribute("data-creator");
            window.location.href = `${creator}.html`;
        });
    });
});
