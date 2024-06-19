var userName = prompt("Por favor, insira seu nome:");

// inicializa um vetor p armazenar as notas
var notas = [];
var nota;

// solicita 4 notas e adiciona ao vetor
for (var i = 1; i <= 4; i++) {
    do {
        nota = parseFloat(prompt("Por favor, insira sua " + i + "ª nota:"));
        
        if (isNaN(nota)) {
            alert("Por favor, insira um valor numérico válido para a nota.");
        }
    } while (isNaN(nota));

    notas.push(nota);
}

// calcula a média das notas
var soma = 0;
for (var i = 0; i < notas.length; i++) {
    soma += notas[i];
}
var media = soma / notas.length;

// exibe o resultado no console
var resultado;
if (media <= 5) {
    resultado = userName + ", você está reprovado(a)! Sua média é: " + media;
} else {
    resultado = userName + ", você está aprovado(a)! Sua média é: " + media;
}
console.log(resultado);