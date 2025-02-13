document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const hamburgerOptions = document.querySelector('.hamburger-options');
    hamburgerMenu.addEventListener('click', () => {
        hamburgerOptions.style.display = hamburgerOptions.style.display === 'block' ? 'none' : 'block';
    });
});
