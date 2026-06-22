window.onload = function() {
  if (localStorage.getItem('sam7_login') !== 'true') {
    window.location.href = 'login.html';
    return;
  }
  const user = JSON.parse(localStorage.getItem('sam7_user'));
  document.getElementById('userName').textContent = user.nama;
};

document.getElementById('logoutBtn').addEventListener('click', function() {
  localStorage.removeItem('sam7_login');
  window.location.href = 'login.html';
});