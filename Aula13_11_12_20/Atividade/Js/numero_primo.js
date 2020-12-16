  
function numero_primo(){
    let num = parseInt(document.getElementById("numeroprimo").value)

    let divisores = 0

    let resultado1 = "Este número é primo"
    let resultado2 = "Este número não é primo"

    for (let i = 0; i <= num; i++ ){
        if (num % i == 0) {
            divisores++
            
        }

        
    }

    if (divisores == 2) {
        document.getElementById("res_numero_primo").textContent = resultado1
    }

    else{
        document.getElementById("res_numero_primo").textContent = resultado2
    }
}