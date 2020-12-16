function temperatura(){
    let celsius = parseFloat(document.getElementById("temperatura").value)

    let fahrenheit = (9 * celsius + 160) / 5

    let resultado = `Temperatura em fahrenheit é ${fahrenheit}`
    
    document.getElementById("res_temperatura").textContent = resultado
}