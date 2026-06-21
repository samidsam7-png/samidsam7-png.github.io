// Fungsi buka tutup sidebar
function toggleSidebar() {
    document.querySelector('.sidebar').classList.toggle('active');
    document.querySelector('.overlay').classList.toggle('active');
}

// Tunggu HTML selesai load dulu, baru jalanin kode
document.addEventListener('DOMContentLoaded', function() {
    
    // Fungsi ganti halaman
    function showPage(pageId) {
        // Sembunyiin semua page
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });
        
        // Munculin page yg diklik
        document.getElementById(pageId).classList.add('active');
        
        // Tutup sidebar
        document.querySelector('.sidebar').classList.remove('active');
        document.querySelector('.overlay').classList.remove('active');
    }

    // Kalo klik menu di sidebar
    document.querySelectorAll('.sidebar a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Biar gak loncat
            const pageId = this.getAttribute('href').replace('#', ''); // Ambil "home" dari "#home"
            showPage(pageId);
        });
    });
});
