function calcular(event){
    let num1 = Number(document.getElementById("numero1").value)
    let num2 = Number(document.getElementById("numero2").value)
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
            console.log("multiplicacao");
            resultado = num1 * num2
            break;
        case "/":
            console.log("divisao");
            resultado = num1 / num2
            break;        
        default:
            console.log("Não é uma Operação");
            break;
    }
    document.getElementById("resultado").textContent = resultado
}