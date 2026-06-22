document.getElementById('signupForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const nama = document.getElementById('nama').value;
  const email = document.getElementById('email').value;
  localStorage.setItem('sam7_user', JSON.stringify({nama, email}));
  alert('Sign Up berhasil! Silakan Login');
  window.location.href = 'login.html';
});