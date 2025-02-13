document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.getElementById("login-btn");
    const userMenu = document.getElementById("user-menu");
    const logoutBtn = document.getElementById("logout-btn");
    const solicitudModal = document.getElementById("solicitud-modal");
    const cerrarModal = document.getElementById("cerrar-modal");
    const solicitudForm = document.getElementById("solicitud-form");
    const creadorNombre = document.getElementById("creador-nombre");

    let usuarioAutenticado = false;

    loginBtn.addEventListener("click", () => {
        usuarioAutenticado = true;
        loginBtn.style.display = "none";
        userMenu.classList.remove("hidden");
    });

    logoutBtn.addEventListener("click", () => {
        usuarioAutenticado = false;
        loginBtn.style.display = "block";
        userMenu.classList.add("hidden");
    });

    document.querySelectorAll(".solicitar-btn").forEach(btn => {
        btn.addEventListener("click", (event) => {
            const creador = event.target.parentElement.dataset.name;
            creadorNombre.textContent = creador;
            solicitudModal.classList.remove("hidden");
        });
    });

    cerrarModal.addEventListener("click", () => {
        solicitudModal.classList.add("hidden");
    });

    solicitudForm.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Solicitud enviada correctamente.");
        solicitudModal.classList.add("hidden");
    });
});
