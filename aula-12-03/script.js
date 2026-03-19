// Buscar o elemento HTML
let meuElemento = document.getElementById('paragrafo') //id
console.log(meuElemento)
console.log(meuElemento.textContent) // puxando o conteúdo da tag

let paragrafo1 = document.getElementsByClassName('paragrafo')
console.log(paragrafo1)

// Imprimir conteudo da tag
// console.log(paragrafo1.textContent)
for (let i = 0; i < paragrafo1.length; i++) {
    console.log(paragrafo1[i].textContent)
}

let paragrafo2 = document.getElementsByTagName('p')
console.log(paragrafo2)

// Criar um elemento via JavaScript
let destino = document.getElementById('elemento') // Busca elemento HTML
let p = document.createElement('p') // Cria o novo elemento HTML
p.textContent = 'Paragrafo criado via JavaScript' // Insere o conteúdo no elemento
destino.append(p) // Adiciona ao DOM

let lista = document.getElementById('lista')
let ul = document.createElement('ul')
let itens = ['item 1', 'item 2']
for (let i = 0; i < itens.length; i++) {
    let li = document.createElement('li')
    li.textContent = itens[i]
    ul.append(li)
}
lista.append(ul)

// Função somar
function somar() {
    let n1 = parseFloat(document.getElementById('num1').value)
    let n2 = parseFloat(document.getElementById('num2').value)
    let soma = n1 + n2
    console.log(soma)
    let saida = `Resultado: <b>${soma}</b>`
    document.getElementById('resultado').innerHTML = saida
}