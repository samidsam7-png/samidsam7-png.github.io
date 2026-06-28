document.addEventListener('DOMContentLoaded', () => {
    
    const toggleBtn = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.overlay');
    const menuLink = document.querySelectorAll('.sidebar ul li a');
    const halaman = document.querySelectorAll('.halaman');

    // 1. BUKA TUTUP SIDEBAR
    toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
    });

    // 2. KLIK OVERLAY = TUTUP SIDEBAR
    overlay.addEventListener('click', () => {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    });

    // 3. GANTI HALAMAN PAS KLIK MENU
    menuLink.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Ambil id dari href="#about" -> "about"
            const targetId = link.getAttribute('href').substring(1);

            // Sembunyiin semua halaman
            halaman.forEach(h => h.classList.remove('aktif'));
            // Munculin halaman yg diklik
            document.getElementById(targetId).classList.add('aktif');

            // Hapus active dari semua menu
            menuLink.forEach(l => l.classList.remove('active-link'));
            // Kasih active ke menu yg diklik
            link.classList.add('active-link');

            // Tutup sidebar abis klik
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
        });
    });
});