function buscar(){
    let cpf = document.getElementById("cpf").value
    let num = cpf[8];
    switch (num) {
        case "0":
            alert("Seu CPF é do Rio Grande do Sul");
            break;
        case "1":
            alert("Seu CPF é do Distrito Federal, Goiás, Mato Grosso do Sul ou Tocantins");
            break;
        case "2":
            alert("Amazonas, Pará, Roraima, Amapá, Acre, Rondônia");
            break;
        case "3":
            alert("Ceará, Maranhão e Piauí");
            break;
        case "4":
            alert("Paraíba Pernambuco, Alagoras ou Rio Grande do Norte");
            break;
        case "5":
            alert("Bahia ou Sergipe");
            break;
        case "6":
            alert("Minas Gerais");
            break;
        case "7":
            alert("Rio de Janeiro ou Espírito Santo");
            break;
        case "8":
            alert("São Paulo");
            break;
        case "9":
            alert("Paraná ou Santa Catarina");
            break;                                
        default:
            alert("CPF não encontrado")
            break;
    }
}