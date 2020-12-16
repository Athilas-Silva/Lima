  
function triangulo() {
    let a = parseFloat(document.getElementById("triangulo1").value)
    let b = parseFloat(document.getElementById("triangulo2").value)
    let c = parseFloat(document.getElementById("triangulo3").value)
    let op = event.target.textContent
    let resultado

        if (a < b + c && b < a + c && c < a + b)
            {
                if (a == b && b == c)
                    {
                        resultado = "É um triângulo equilátero"
                    }
                else if (a == b || a == c || b == c)
                    {
                        resultado = "É um triângulo isósceles"
                    }
                else
                    {
                        resultado = "É um triângulo escaleno"
                    }
            }
        else
            {
                resultado = "As medidas não formam um triângulo"
            }
    document.getElementById("res_triangulo").textContent = resultado
}