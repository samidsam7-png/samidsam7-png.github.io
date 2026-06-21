function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.overlay');
    
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

// Fungsi ganti halaman
function showPage(pageId) {
    // Sembunyiin semua page
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Munculin page yg diklik
    document.getElementById(pageId).classList.add('active');
    
    // Tutup sidebar abis klik menu
    toggleSidebar();
}

// Pas klik menu, panggil showPage
document.querySelectorAll('.sidebar a').forEach(link => {
    link.onclick = function(e) {
        e.preventDefault(); // Biar gak scroll
        const pageId = this.getAttribute('href').substring(1); // Ambil "home" dari "#home"
        showPage(pageId);
    }
});
