function salvar(){
    var nome = document.getElementById("usuario").value

    localStorage.setItem("usuario", nome)
}
