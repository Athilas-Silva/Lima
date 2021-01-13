var modal = document.getElementById("modal")
var conteudo = document.getElementById("conteudo-modal")
var imagem = document.createElement("img")
var nome = localStorage.getItem("usuario")

//Array para pegar as imagens no HTML e mostra-las ao usuário com as perguntas
var cartas = [
    {
        imagem: "./imagem/Bleach.png",
    },
    {
        imagem: "./imagem/Boku-no-Hero.png",
    },
    {
        imagem: "./imagem/black-clover.jpeg",
    },
    {
        imagem: "./imagem/Dragon-ball-super.png",
    },
    {
        imagem: "./imagem/goblin.jpg",
    },
    {
        imagem: "./imagem/jujutsu-kaisen.png",
    },
    {
        imagem: "./imagem/Naruto-Shippuden.png",
    },
    {
        imagem: "./imagem/One-Piece.png",
    },
    {
        imagem: "./imagem/opm2.png",
    },
    {
        imagem: "./imagem/Shingeki-no-kyojin.png",
    }
];


function pergunta(n){
    imagem.setAttribute("src", cartas[n].imagem);
    conteudo.appendChild(imagem);
    modal.style.display = "block";
}

function fechar(){
    modal.style.display = "none"
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}