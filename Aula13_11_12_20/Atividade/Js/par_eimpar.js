  
function par_e_impar(){
    let num = parseInt(document.getElementById("par&impar").value)
    let resultado

    

    

        if (num % 2 == 0) {
            resultado = "Este número é par"
        }
        
        else  
        {
            
            resultado = "Este número é ímpar"
        }
    
        
        
    document.getElementById("res_par_e_impar").textContent = resultado
}