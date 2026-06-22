document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const user = JSON.parse(localStorage.getItem('sam7_user'));
  if (user && user.email === email) {
    localStorage.setItem('sam7_login', 'true');
    window.location.href = 'dashboard.html';
  } else {
    alert('Email tidak terdaftar. Sign Up dulu!');
  }
});