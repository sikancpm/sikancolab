document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        const users = {
            "salazar": "password123",
            "gallo": "password456"
        };

        if (users[username] && users[username] === password) {
            alert("Inicio de sesión exitoso.");
            window.location.href = "index.html";
        } else {
            alert("Usuario o contraseña incorrectos.");
        }
    });
});
