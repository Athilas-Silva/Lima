/*function salvar(){
    var nome = document.getElementById("usuario").value
    localStorage.setItem("usuario", nome)
    if(salvar = nome){
        alert(`Bem Vindo ${nome}, Nome Salvo com Sucesso`)
    }
    else if(nome == " "){
        alert("Nome não informado :(")
    }
}*/

var nomesalvo = localStorage.getItem("nome")

if(nomesalvo == null){
    var nome = prompt("Bem Vindo ao Quiz de Animes, por favor informe seu nome: ");
    alert(`Obrigado ${nome}, conheça as regras do jogo`);

    localStorage.setItem("nome", nome);
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