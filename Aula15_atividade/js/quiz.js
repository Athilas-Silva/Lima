var modal = document.getElementById("modal"); // variavel para usar o modal no Js
var conteudo = document.getElementById("conteudo-modal"); //variavel com o conteudo da modal
var imagem = document.createElement("img"); // adicionando as imagens em Js
var nome = localStorage.getItem("nome"); //variavel para receber o nome salvo do localstorage
var questi = document.getElementById("questionario"); //paragrafo com as perguntas
var input0 = document.getElementById("input0"); // primeira alternativa das perguntas
var input1 = document.getElementById("input1"); // segunda alternativa das perguntas
var input2 = document.getElementById("input2"); // terceira alternativa das perguntas
var label0 = document.getElementById("label0"); // legenda das alternativas
var label1 = document.getElementById("label1"); // legenda das alternativas
var label2 = document.getElementById("label2"); // legenda das alternativas
var botaoR = document.getElementById("botaoR"); // botão de responder
var pontuacaoAtual = 0; // iniciando pontuação com 0
var users = document.getElementsByClassName("user"); // Array com os nomes dos jogadores
var ponto = document.getElementsByClassName("ponto"); // Array com os pontos dos jogadores
var dadosSalvos = localStorage.getItem("recorde"); // variavel com recorde salvo no localstorage  
var novoRecorde = []; //Array iniciando vazia

//Array para adicionar as imagens no HTML e mostra-las ao usuário com as perguntas e alternativas
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
        questionario: "Qual o nome da mestra do Yusuke Urameshi?",
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

//funçao que incrementa imagem, texto alternativo, conteudo do modal, perguntas e as alternativas e botao de resposta
//if com o código para ficar responsivo em telas menores (Celular, Tablet)
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
//função que acrescenta os pontos caso a resposta esteja correta
function responder(n){
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
//função que falta falta os pontos e exige a mensagem após clicar em salvar
function salvar(){
    alert(`Parabéns ${nome}, sua pontuação foi de ${pontuacaoAtual}`);
    let ranking = {
        userName: nome,
        record: pontuacaoAtual
    }
    if(dadosSalvos == null){
        novoRecorde.push(ranking)
        localStorage.setItem("recorde",JSON.stringify(novoRecorde))
    }
    else{
        novoRecorde = JSON.parse(dadosSalvos)
        novoRecorde.push(ranking)

        localStorage.setItem("recorde", JSON.stringify(novoRecorde))
    }

    dadosSalvos = localStorage.getItem("recorde")
    loadRecord()
}
//função que carrega o recorde anterior salvo no localstorage
function loadRecord(){
    if(dadosSalvos != undefined || dadosSalvos != null){
        novoRecorde = JSON.parse(dadosSalvos);
        
        for(let i = 0; i <= novoRecorde.length; i++){
            if(novoRecorde[i].record >= 100){
                users[0].textContent = novoRecorde[i].userName
                ponto[0].textContent = novoRecorde[i].record
            }
            else if(novoRecorde[i].record <= 70 && novoRecorde[i].record >= 50){
                users[1].textContent = novoRecorde[i].userName
                ponto[1].textContent = novoRecorde[i].record
            }
            else{
                users[2].textContent = novoRecorde[i].userName
                ponto[2].textContent = novoRecorde[i].record
            }

        }
    }
}

loadRecord()
//função que permite climar fora da imagem para fechar, sem precisar clicar no X
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}