function showPage(pageId) {
  // Sembunyiin semua page
  document.querySelectorAll(".page").forEach((page) => {
    page.classList.remove("active");
  });

  // Munculin page yg diklik
  document.getElementById(pageId).classList.add("active");

  // Hapus class 'active' di semua menu
  document.querySelectorAll(".navbar a").forEach((link) => {
    link.classList.remove("active");
  });

  // Kasih class 'active' ke menu yg diklik
  document
    .querySelector(`.navbar a[onclick="showPage('${pageId}')"]`)
    .classList.add("active");
}

// Pas pertama buka, kasih 'active' ke Home
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".navbar a").classList.add("active");
});
