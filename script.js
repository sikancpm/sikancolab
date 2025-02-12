document.addEventListener("DOMContentLoaded", () => {
    const optionButtons = document.querySelectorAll(".option-button");
    const loginButton = document.getElementById("loginButton");
    const loginModal = document.getElementById("loginModal");
    const closeLogin = document.getElementById("closeLogin");

    optionButtons.forEach(button => {
        button.addEventListener("click", () => {
            const creator = button.getAttribute("data-creator");
            window.location.href = `${creator}.html`;
        });
    });

    // Funcionalidad del botón de Iniciar Sesión
    loginButton.addEventListener("click", (e) => {
        e.preventDefault();
        loginModal.style.display = "flex";
    });

    closeLogin.addEventListener("click", () => {
        loginModal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === loginModal) {
            loginModal.style.display = "none";
        }
    });
});
