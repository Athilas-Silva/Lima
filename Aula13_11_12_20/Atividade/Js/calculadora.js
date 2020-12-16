function calcular(event) {
    let num1 = parseFloat(document.getElementById("numero1").value)
    let num2 = parseFloat(document.getElementById("numero2").value)
    
    let operacao = event.target.textContent
    
    let resultado
    
    switch (operacao) {
        case "+":
            console.log("soma");  
            resultado = num1 + num2
            break;
        case "-":
            console.log("subtração");   
            resultado = num1 - num2
            break;
        case "*":
            console.log("multiplicação");   
            resultado = num1 * num2
            break;
        case "/":
            console.log("divisão");   
            resultado = num1 / num2
            break;
        default:
            console.log("Não é uma Operação");    
    }
    
    document.getElementById("res_calculadora").textContent = resultado
}    