const btnLogin = document.getElementById('btn-login');
const btnCriarConta = document.getElementById('btn-criar-conta');
const btnHeroSection = document.getElementById('btn-hero-section');

btnLogin.addEventListener('click', e => {
    alert("Clicou btn-login");
});

btnCriarConta.addEventListener('click', e => {
    alert("Clicou btn-criar-conta");
});

btnHeroSection.addEventListener('click', e => {
    alert("Clicou btn-hero-section");
    window.location.href = "pages/page1.html";
});