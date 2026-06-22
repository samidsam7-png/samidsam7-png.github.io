function togglePassword(fieldId){
    const input=document.getElementById(fieldId);
    const eyeIcon=input.nextElementSibling.querySelector('.eye');
    if(input.type==='password'){
        input.type='text';
        eyeIcon.textContent='🙈';
    }else{
        input.type='password';
        eyeIcon.textContent='👁️';
    }
}

const form=document.getElementById('form');
const message=document.getElementById('message');

window.addEventListener('DOMContentLoaded',()=>{
    const savedEmail=localStorage.getItem('loginEmail');
    if(savedEmail){
        document.getElementById('email').value=savedEmail;
        document.getElementById('remember').checked=true;
    }
});

form.addEventListener('submit',function(e){
    e.preventDefault();
    message.textContent='';
    message.style.color='#ffcccc';
    const email=document.getElementById('email').value.trim();
    const password=document.getElementById('password').value;
    const remember=document.getElementById('remember').checked;
    
    if(!email||!password){
        message.textContent='Harap isi email dan password';
        return;
    }
    if(!email.includes('@')||!email.includes('.')){
        message.textContent='Masukkan email yang valid';
        return;
    }
    
    if(remember){
        localStorage.setItem('loginEmail',email);
    }else{
        localStorage.removeItem('loginEmail');
    }
    
    message.textContent='Login berhasil!';
    message.style.color='#6bcb77';
    setTimeout(()=>{window.location.href='dashboard.html'},1500);
});