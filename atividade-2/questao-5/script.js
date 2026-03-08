const termos = Number(prompt('Digite a quantidade de termos: '))

let termoAtual = 1;
let somaTotal = 0;

for (let i = 1; i <= termos; i++) {
    somaTotal += termoAtual;
    termoAtual = (termoAtual * 10) + 1;
}
alert(`A soma dos termos é: ${somaTotal}`);