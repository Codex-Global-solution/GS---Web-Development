var slideAtual = 0;
var timerSlideshow;

function mostrarSlide(numero) {
    var slides = document.querySelectorAll('.slide');
    var indicadores = document.querySelectorAll('.indicador');
    if (slides.length === 0) return;
    if (numero >= slides.length) {
        slideAtual = 0;
    } else if (numero < 0) {
        slideAtual = slides.length - 1;
    } else {
        slideAtual = numero;
    }
    for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove('ativo');
        indicadores[i].classList.remove('ativo');
    }
    slides[slideAtual].classList.add('ativo');
    indicadores[slideAtual].classList.add('ativo');
}
function mudarSlide(direcao) {
    clearInterval(timerSlideshow);
    mostrarSlide(slideAtual + direcao);
    iniciarTimerSlideshow();
}
function irParaSlide(numero) {
    clearInterval(timerSlideshow);
    mostrarSlide(numero);
    iniciarTimerSlideshow();
}
function iniciarTimerSlideshow() {
    timerSlideshow = setInterval(function() {
        mostrarSlide(slideAtual + 1);
    }, 3000);
}
function iniciarSlideshow() {
    mostrarSlide(0);
    iniciarTimerSlideshow();
}
function validarFormulario() {
    var nome = document.getElementById('nome').value.trim();
    var email = document.getElementById('email').value.trim();
    var assunto = document.getElementById('assunto').value;
    var mensagem = document.getElementById('mensagem').value.trim();
    var formularioValido = true;
    if (nome === '') {
        mostrarErro('nome', 'Por favor, digite seu nome completo.');
        formularioValido = false;
    } else {
        removerErro('nome');
    }
    if (email === '') {
        mostrarErro('email', 'Por favor, digite seu e-mail.');
        formularioValido = false;
    } else {
        removerErro('email');
    }
    if (assunto === '') {
        mostrarErro('assunto', 'Por favor, selecione um assunto.');
        formularioValido = false;
    } else {
        removerErro('assunto');
    }
    if (mensagem === '') {
        mostrarErro('mensagem', 'Por favor, escreva sua mensagem.');
        formularioValido = false;
    } else if (mensagem.length < 10) {
        mostrarErro('mensagem', 'A mensagem deve ter pelo menos 10 caracteres.');
        formularioValido = false;
    } else {
        removerErro('mensagem');
    }
    if (formularioValido) {
        mostrarSucesso();
    }
}