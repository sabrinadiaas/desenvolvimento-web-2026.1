const numero = Number(prompt('Digite um numero: '))

console.log(`Tabuada do número ${numero}:`)

for (let i = 1; i <= 10; i++) {
    resultado = numero * i
    console.log(`${numero} x ${i} = ${resultado}`)
}