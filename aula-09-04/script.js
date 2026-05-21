const Pessoa = {
    nome: 'Sofia',
    idade: 30
}
console.log(Pessoa)

const Pessoa2 = {}
Pessoa2.nome = 'Natália'
Pessoa2.email = 'nataliarosa@gmail.com'
console.log(Pessoa2)

const Carro = new Object()
Carro.marca = 'Porsche'
Carro.ano = '2026'
console.log(Carro)

Carro.marca = 'BYD'
Carro.ano = '2025'
console.log(Carro)

// criando com o construtor
function Carro2(marca, ano) {
    this.marca = marca
    this.ano = ano
}

// criar instancias do objeto
const c1 = new Carro2('Porsche', '2026')
const c2 = new Carro2('BYD', '2025')
console.log(c1)
console.log(c2)

//usando uma classe
class Animal {
    constructor(tipo, nome) {
        this.tipo = tipo
        this.nome = nome
    }

    // métodos
    emitirSom(){
        return `${this.nome} faz um som`
    }
}

const gato = new Animal('Felino', 'Lua')
console.log(gato.emitirSom())

// modificadores de acesso
class ContaBancaria {
    #saldo = 0

    constructor(saldoInicial){
        this.#saldo = saldoInicial
    }

    getSaldo(){
        return this.#saldo
    }
}

const conta = new ContaBancaria(50)
console.log(conta.getSaldo())

// Arrays
let itens = [] //array
let itens2 = {} //objeto
itens[0] = 'Sofia'
itens[1] = 'Natália'
console.log(itens)
console.log(itens[0])
itens.push('Natalie') //adicionar no final
itens.push('Rosamaria')
itens.unshift('.') //adicionar no inicio 
itens.splice(3,0,'Letícia') // adicionar em uma posição específica
console.log(itens)

// remover
itens.pop() //remove do final
itens.shift() //remove a primeira posição
itens.splice(1,1) //remove em uma posição específica

let numeros = [1, 2, 3, 4, 5]

