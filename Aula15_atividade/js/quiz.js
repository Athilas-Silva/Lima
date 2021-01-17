var modal = document.getElementById("modal");
var conteudo = document.getElementById("conteudo-modal");
var imagem = document.createElement("img");
var nome = localStorage.getItem("usuario");
var questi = document.getElementById("questionario"); //paragrafo com as perguntas
var input0 = document.getElementById("input0"); 
var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var label0 = document.getElementById("label0");
var label1 = document.getElementById("label1");
var label2 = document.getElementById("label2");
var botaoR = document.getElementById("botaoR");
var pontuacaoAtual = 0;

//Array para pegar as imagens no HTML e mostra-las ao usuário com as perguntas
var cartas = [
    {
        imagem: "./imagem/Bleach.png",
        questionario: "Qual o nome do pai do Protagonista?",
        alter: ["Urahara Kisuke", "Isshin Kurosaki", "Masaki Kurosaki"],
        resposta: 1,
        pontos: 10
    },
    {
        imagem: "./imagem/Boku-no-Hero.png",
        questionario: "Quanto de poder do One for All Midoriya consegue suportar atualmente?",
        alter: ["10%", "15%", "20%"],
        resposta: 2,
        pontos: 10
    },
    {
        imagem: "./imagem/black-clover.jpeg",
        questionario: "Qual o nome do Rei Mago do reino de Clover?",
        alter: ["Augustus Kira Clover XIII", "Julius Novachrono", "Lemiel Silvamillion Clover"],
        resposta: 1,
        pontos: 10
    },
    {
        imagem: "./imagem/Dragon-ball-super.png",
        questionario: "Qual guerreiro do universo 7 foi o quarto eliminado do Torneio do Poder?",
        alter: ["Mestre Kame", "Nº18", "Piccolo"],
        resposta: 2,
        pontos: 10
    },
    {
        imagem: "./imagem/goblin.jpg",
        questionario: "O que o Goblin Slayer é?",
        alter: ["Humano", "Elfo", "Goblin"],
        resposta: 0,
        pontos: 10
    },
    {
        imagem: "./imagem/jujutsu-kaisen.png",
        questionario: "Qual o nome da maldição que Yuji Itadori engole?",
        alter: ["Mahito", "Nanami", "Sukuna"],
        resposta: 2,
        pontos: 10
    },
    {
        imagem: "./imagem/Naruto-Shippuden.png",
        questionario: "Quem é conhecido como Sábio dos Seis caminhos?",
        alter: ["Indra Otsutsuki", "Ashura Otsutsuki", "Otsutsuki Hagoromo"],
        resposta: 2,
        pontos: 10
    },
    {
        imagem: "./imagem/One-Piece.png",
        questionario: "Qual o nome da fruta que Luffy comeu?",
        alter: ["Gomu Gomu no Mi", "Gura Gura no Mi", "Ope Ope no Mi"],
        resposta: 0,
        pontos: 10
    },
    {
        imagem: "./imagem/opm2.png",
        questionario: "Qual a classificação do Saitama na Associação de Heróis? (Segunda Temporada)",
        alter: ["A-39", "B-7", "B-1"],
        resposta: 1,
        pontos: 10
    },
    {
        imagem: "./imagem/Shingeki-no-kyojin.png",
        questionario: "Quanto tempo de vida tem um portador de Titan?",
        alter: ["13 anos", "14 anos", "15 anos"],
        resposta: 0,
        pontos: 10
    },
    {
        imagem: "./imagem/yu-yu-hakusho.png",
        questionario: "Qual o nome da metra do Yusuke Urameshi?",
        alter: ["Genkai", "Toguro", "Hiei"],
        resposta: 0,
        pontos: 10
    },
    {
        imagem: "./imagem/dr-stone.jpg",
        questionario: "Qual é o nome desse personagem?",
        alter: ["Tsukasa Shishio", "Chrome", "Senku Ishigami"],
        resposta: 2,
        pontos: 10
    }
];


function pergunta(n){
    imagem.setAttribute("src", cartas[n].imagem);
    imagem.setAttribute("alt", "Poster dos Animes");
    conteudo.appendChild(imagem);
    questi.innerText = cartas[n].questionario;
    label0.innerText = cartas[n].alter[0];
    label1.innerText = cartas[n].alter[1];
    label2.innerText = cartas[n].alter[2];
    botaoR.setAttribute("onclick", `responder(${n})`);
    if(screen.width < 640 || screen.height < 480){
        imagem.style.width = "75%"
    }
    else{
        imagem.removeAttribute("style");
    }
    modal.style.display = "block";
}

function fechar(){
    modal.style.display = "none"
}

function responder(n){
    alert("respondeu");
    if(input0.checked){
        pontuacaoAtual = input0.value == cartas[n].resposta ? pontuacaoAtual + 10 : pontuacaoAtual + 0;
    }
    else if(input1.checked){
        pontuacaoAtual = input1.value == cartas[n].resposta ? pontuacaoAtual + 10 : pontuacaoAtual + 0;
    }
    else if(input2.checked){
        pontuacaoAtual = input2.value == cartas[n].resposta ? pontuacaoAtual + 10 : pontuacaoAtual + 0;
    }
    fechar();
}

function salvar(){
    if(nome == localStorage.getItem("usuario")){
        alert(`Parabéns ${nome}, sua pontuação foi de ${pontuacaoAtual}`)
    }
    else{
        alert(`Sua pontuação foi de ${pontuacaoAtual}`)
    }
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
