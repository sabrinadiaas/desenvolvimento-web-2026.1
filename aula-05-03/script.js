// alert("Sofia Starling")

// variáveis
var animal = 'gato'
console.log(animal)

let nomeCompleto  = 'Sofia Starling'
console.log(nomeCompleto)

const valor1 = 30
console.log(valor1)

var valor0 = 2
var valor0 = 30 //permite reatribuição pois é VAR ou LET
// valor0 = 30 não é permitido pois é CONST

// verrificar o tipo de da variável
console.log(typeof valor0)

// impressão
// console.log
// template literal
console.log(`Seja bem-vinda ${nomeCompleto}. Aproveite a estadia`)

// algoritmo: entrada - processamento - saída
// entrada de dados
var nome = window.prompt("Digite seu nome:")
document.writeln(`Seja bem-vinda ${nome}. Aproveite a estadia.`)

// operadores aritméticos
// + - * / % **

// operadores de comparação
// == === != !== > < >= <=
console.log(2 == '2') // commpara apenas o valor
console.log(2 === '2') // compara o valor e o tipo de dado

// Sistema que realize a soma de dois números informados pelo usuário
var num1 = parseFloat(window.prompt("Digite o primeiro número:"))
var num2 = parseFloat(window.prompt("Digite o segundo número:"))
var resultado = num1 + num2
document.writeln(`O resultado da soma é: ${resultado}`)

// estrutura de controle (if - else)
if (resultado >= 18) {
    console.log("Você é maior de idade.")
} else {
    console.log("Você é menor de idade.")
}

// estrutura de repetição (for - while - do while)
for (let i=0; i<10; i++) {
    console.log('Iteração: ' + i)
}

while (i<5) {
    console.log('Iteração: ' + i)
    i++
}