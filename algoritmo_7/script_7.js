var opcao;

do {
    opcao = prompt(
        "Escolha o tipo de teste a ser realizado:\n" +
        "1. Teste de Tensão (Volts)\n" +
        "2. Teste de Corrente (Amperes)\n" +
        "3. Teste de Resistência (Ohms)\n" +
        "4. Sair"
    );

    switch (opcao) {
        case '1':
            var tensao = parseFloat(prompt("Insira o valor da tensão (V):"));
            if (isNaN(tensao)) {
                alert("Por favor, insira um valor numérico válido para a tensão.");
            } else {
                alert("A tensão medida é: " + tensao + " V");
            }
            break;

        case '2':
            var corrente = parseFloat(prompt("Insira o valor da corrente (A):"));
            if (isNaN(corrente)) {
                alert("Por favor, insira um valor numérico válido para a corrente.");
            } else {
                alert("A corrente medida é: " + corrente + " A");
            }
            break;

        case '3':
            var resistencia = parseFloat(prompt("Insira o valor da resistência (Ω):"));
            if (isNaN(resistencia)) {
                alert("Por favor, insira um valor numérico válido para a resistência.");
            } else {
                alert("A resistência medida é: " + resistencia + " Ω");
            }
            break;

        case '4':
            alert("Desligando o multímetro...");
            break;
            
        default:
            alert("Opção inválida. Por favor, escolha uma opção válida do menu.");
            break;
    }
} while (opcao !== '4');