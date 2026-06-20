document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.overlay');
    const menuLink = document.querySelectorAll('.sidebar ul li a');
    const halaman = document.querySelectorAll('.halaman');

    toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
    });

    overlay.addEventListener('click', () => {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    });

    menuLink.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            halaman.forEach(h => h.classList.remove('aktif'));
            document.getElementById(targetId).classList.add('aktif');
            menuLink.forEach(l => l.classList.remove('active-link'));
            link.classList.add('active-link');
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
        });
    });
});
// Auto update tahun copyright
document.getElementById('tahun').textContent = new Date().getFullYear();
