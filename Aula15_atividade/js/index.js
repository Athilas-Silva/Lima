/*
Código que grava o nome do usuário no localstorage, na primeira visita do usuário, entrará no primeiro
If para salvar o nome da pessoa e se for a segunda visita, ele perguntará se é o usuario anterior, se sim, exibirá
outra mensagem dando boas vindas de novo e se nao for irá perguntar o nome da nova pessoa.
*/

var nomesalvo = localStorage.getItem("nome")

if(nomesalvo == null){
    var nome = prompt("Bem Vindo ao Quiz de Animes, por favor informe seu nome: ");
    if(nome != null){
        alert(`Obrigado ${nome}, conheça as regras do jogo`);
        localStorage.setItem("nome", nome);
    }
    else{
        alert("Obrigado, conheça as regras do jogo");
    }

}
else{
    nome = prompt(`Você é o(a) ${nomesalvo} (S ou N)`)
        if(nome == "S" || nome == "Sim" || nome == "s" || nome == "sim"){
            nome = nomesalvo;
            alert(`Bem vindo de volta ${nomesalvo}`)
        }
        else if(nome == "N" || nome == "Nao" || nome == "n" || nome == "nao"){
            nome = prompt("Digite seu nome: ");
            nomesalvo = nome;
            alert(`Bem vindo ${nomesalvo}`)
            alert("Conheça as regras do jogo")
        }
        else{
            alert("Nome não informado :(")
        }
}