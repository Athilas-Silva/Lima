  
function potenciacao() {
    let denominador = parseInt(document.getElementById("denominador").value)
    let expoente = parseInt(document.getElementById("expoente").value)
    let resultado

    resultado = Math.pow(denominador, expoente);

    document.getElementById("res_potenciacao").textContent = resultado
}