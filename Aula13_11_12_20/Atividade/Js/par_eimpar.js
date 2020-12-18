function par_e_impar(){
    let num = parseInt(document.getElementById("par&impar").value)
    let resultado

    

    

        if (num % 2 == 0) {
            resultado = "Este número é par"
        }
        
        else if (num % 2 >= 1) {    
            resultado = "Este número é ímpar"
        }

        else {
            resultado = "Insira um número"
        }
    
        
        
    document.getElementById("res_par_e_impar").textContent = resultado
}