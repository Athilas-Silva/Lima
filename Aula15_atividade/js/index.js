function salvar(){
    let nome = document.getElementById("usuario").value

    localStorage.setItem("usuario", nome)
}
