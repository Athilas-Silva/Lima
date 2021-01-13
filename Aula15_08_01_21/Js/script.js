//LocalStorage - JSON
function cadastrar(){
    //Dados do formulario
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value

    localStorage.setItem(username, password)

    document.getElementById("status").textContent = `O usuário ${username} foi cadastrado.`

    console.log(`O usuário: ${username} foi cadastrado.`)
}

function validar(){
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    
    if(localStorage.getItem(username) == password){
        document.getElementById("status").textContent = `Usuário e senha estão corretos`
        }
        else{
            document.getElementById("status").textContent = `Usuário ou senha incorretos`
        }

        console.log("Função validar...")
}