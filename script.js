document.addEventListener('DOMContentLoaded', () => {
    const viewMenuBtn = document.getElementById('view-menu-btn');
    const menuSection = document.getElementById('menu');

    if (viewMenuBtn && menuSection) {
        viewMenuBtn.addEventListener('click', (e) => {
            // Prevent the default instant jump
            e.preventDefault();

            // Smoothly scroll to the menu section
            menuSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
});
