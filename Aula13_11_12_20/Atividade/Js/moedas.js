function moedas(){
    let dolar = parseFloat(document.getElementById("moeda").value)
    let cotacao = parseFloat(document.getElementById("cotacao").value)
    let real = dolar * cotacao

    let resultado = `O valor em real é : ${real.toFixed(2)}`

    document.getElementById("res_conversao").textContent = resultado
}