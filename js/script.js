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
function mostrarErro(campoId, mensagemErro) {
    var campo = document.getElementById(campoId);
    var erroElemento = document.getElementById('erro-' + campoId);
    campo.classList.add('campo-erro');
    erroElemento.textContent = mensagemErro;
    erroElemento.classList.add('visivel');
}
function removerErro(campoId) {
    var campo = document.getElementById(campoId);
    var erroElemento = document.getElementById('erro-' + campoId);
    campo.classList.remove('campo-erro');
    erroElemento.textContent = '';
    erroElemento.classList.remove('visivel');
}
function mostrarSucesso() {
    var sucesso = document.getElementById('formulario-sucesso');
    sucesso.style.display = 'block';

    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('telefone').value = '';
    document.getElementById('assunto').value = '';
    document.getElementById('mensagem').value = '';
    setTimeout(function() {
        sucesso.style.display = 'none';
    }, 4000);
}

var perguntas = [
    {
        texto: "O que é agricultura de precisão?",
        alternativas: [
            "Plantar apenas culturas pequenas",
            "Uso de tecnologia para otimizar recursos e aumentar produtividade no campo",
            "Técnica de irrigação manual",
            "Método de colheita por tração animal"
        ],
        correta: 1
    },
    {
        texto: "Qual tecnologia o Agro Space usa para monitorar as lavouras?",
        alternativas: [
            "Drones de entregas",
            "Câmeras em postes rurais",
            "Satélites de baixa órbita com sensores",
            "Balonismo científico"
        ],
        correta: 2
    },
    {
        texto: "Segundo o projeto, quanto da água de irrigação é desperdiçada por falta de controle?",
        alternativas: [
            "10%",
            "25%",
            "40%",
            "60%"
        ],
        correta: 2
    },
    {
        texto: "Qual é o impacto anual estimado das perdas agrícolas no Brasil por manejo inadequado?",
        alternativas: [
            "R$ 10 bilhões",
            "R$ 80 bilhões",
            "R$ 5 bilhões",
            "R$ 200 bilhões"
        ],
        correta: 1
    },
    {
        texto: "O que faz a IA de Recomendação do Agro Space?",
        alternativas: [
            "Controla tratores automaticamente",
            "Faz pagamentos rurais",
            "Cruza dados históricos e climáticos para gerar recomendações precisas",
            "Monitora o preço das commodities"
        ],
        correta: 2
    },
    {
        texto: "O que é telemetria em tempo real no contexto do Agro Space?",
        alternativas: [
            "Envio de imagens de câmeras locais",
            "Transmissão de dados dos satélites para servidores em nuvem",
            "Comunicação por rádio entre fazendeiros",
            "Leitura manual de medidores de solo"
        ],
        correta: 1
    },
    {
        texto: "Qual é o primeiro passo do ciclo de uso do Agro Space no dia a dia?",
        alternativas: [
            "O agricultor instala sensores no solo",
            "A IA processa os dados climáticos",
            "O satélite coleta temperatura, umidade e reflectância do solo",
            "O app envia notificações para o celular"
        ],
        correta: 2
    },
    {
        texto: "Qual benefício de água o Agro Space promete entregar?",
        alternativas: [
            "Aumento de 50% no consumo de água",
            "Redução de até 35% no desperdício de irrigação",
            "Eliminação total do uso de água",
            "Coleta de água da chuva automatizada"
        ],
        correta: 1
    },
    {
        texto: "Qual destes é um dos públicos-alvo do Agro Space?",
        alternativas: [
            "Mineradoras de grande porte",
            "Pequenos e Médios Agricultores",
            "Empresas de logística urbana",
            "Indústrias de software"
        ],
        correta: 1
    },
    {
        texto: "Qual é a missão principal do Agro Space?",
        alternativas: [
            "Vender satélites para o governo",
            "Substituir todos os agricultores por robôs",
            "Democratizar a tecnologia espacial para o campo brasileiro",
            "Criar um banco de dados meteorológicos pagos"
        ],
        correta: 2
    }
];
var perguntaAtual = 0;   
var pontuacao = 0;       
var respondeu = false;   