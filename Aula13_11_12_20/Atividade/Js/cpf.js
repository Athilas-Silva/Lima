function cpf() {
    let cpf = document.getElementById("entrada").value
    let num = cpf[10]
    let resultado

    switch(num) {
        case "0":
            resultado = "Rio Grande do Sul"
        break;

        case "1":
            resultado = "Distrito Federal, Goiás, Mato Grosso do Sul e Tocantins"
        break;

        case "2":
            resultado = "Amazonas, Pará, Roraima, Amapá, Acre e Rondônia"
        break;

        case "3":
            resultado = "Ceará, Maranhão, Piauí"
        break;

        case "4":
            resultado = "Paraíba, Pernambuco, Alagoas e Rio Grande do Norte"
        break;

        case "5":
            resultado = "Bahia e Sergipe"
        break;

        case "6":
            resultado = "Minas Gerais"
        break;

        case "7":
            resultado = "Rio de Janiero e Espírito Santo"
        break;

        case "8":
            resultado = "São Paulo"
        break;
        
        case "9":
            resultado = "Paraná e Santa Catarina"
        break;
    }
    document.getElementById("res_cpf").textContent = resultado
}