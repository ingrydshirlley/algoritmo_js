var opcao

do {
    opcao = prompt(
        "Escolha um programa de TV/Internet:\n" +
        "1. Stranger Things\n" +
        "2. Game of Thrones\n" +
        "3. The Mandalorian\n" +
        "4. Sair"
    );

    switch (opcao) {
        case '1':
            console.log("Stranger Things: Uma série de ficção científica e horror que se passa nos anos 80. Um grupo de crianças enfrenta eventos sobrenaturais em sua cidade.");
            break;
        case '2':
            console.log("Game of Thrones: Uma série épica de fantasia que se passa nos continentes fictícios de Westeros e Essos. A história gira em torno das lutas pelo Trono de Ferro.");
            break;
        case '3':
            console.log("The Mandalorian: Uma série ambientada no universo de Star Wars. Segue as aventuras de um caçador de recompensas solitário nos confins da galáxia.");
            break;
        case '4':
            break;
        default:
            console.log("Opção inválida. Por favor, escolha uma opção válida do menu.");
            break;
    }
} while (opcao !== "4")