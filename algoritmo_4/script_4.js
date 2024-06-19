// precisa abrir no index.html
var userName = prompt("Por favor, insira seu nome:");

var nota1 = parseFloat(prompt("Por favor, insira sua 1ª nota:"));
var nota2 = parseFloat(prompt("Por favor, insira sua 2ª nota:"));
var nota3 = parseFloat(prompt("Por favor, insira sua 3ª nota:"));
var nota4 = parseFloat(prompt("Por favor, insira sua 4ª nota:"));


var media = (nota1 + nota2 + nota3 + nota4) / 4

if (media <= 5) {
    console.log(userName + ", você está reprovado (a)! Sua média é: " + media)
} else {
    console.log(userName + ", você está aprovado (a)! Sua média é: " + media)
}
