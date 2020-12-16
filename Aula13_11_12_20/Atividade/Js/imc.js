function imc(event)
{
    let peso, altura, imc, resultado

    peso = parseFloat(document.getElementById("peso").value)
    altura = parseFloat(document.getElementById("altura").value)

    imc = peso / (altura ** 2)
    
    switch (true) 
    {
        case (imc <= 17):
        resultado = `Seu IMC é ${imc.toFixed(2)} e você está muito abaixo do peso`
        break;

        case (imc > 17) && (imc <= 18.49):
        resultado = `Seu IMC é ${imc.toFixed(2)} e você está abaixo do peso`
        break;

        case (imc >= 18.5) && (imc <= 24.99):
        resultado = `Seu IMC é ${imc.toFixed(2)} e você está com o peso normal`
        break;

        case (imc >= 25) && (imc <= 29.99):
        resultado = `Seu IMC é ${imc.toFixed(2)} e você está acima do peso`
        break;

        case (imc >= 30) && (imc <= 34.99):
        resultado = `Seu IMC é ${imc.toFixed(2)} e você está com Obesidade I`
        break;

        case (imc >= 35) && (imc <= 39.99):
        resultado = `Seu IMC é ${imc.toFixed(2)} e você está com obesidade II (severa)`
        break;
        
        case (imc > 40):
        resultado = `Seu IMC é ${imc.toFixed(2)} e você está com obesidade III (mórbida)`
        break;
    }
    document.getElementById("res_imc").textContent = resultado
}