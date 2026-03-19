// eventos: propriedade

// on click
let botao1 = document.getElementById('botao1')

// manipulador (comporramento para esse botão)
botao1.onclick = function(){
    console.log('Primeiro evento')
    alert('Primeiro evento')
}

botao1.onclick = function(){
    botao1.textContent = 'Texto alterado'
}

// mouseover
let botao2 = document.getElementById('botao2')
botao2.onmouseover = function(){
    botao2.style.backgroundColor = 'red'
}

// mouseout
botao2.onmouseout = function(){
    botao2.style.backgroundColor = ''
}

// doubleclick
botao2.ondblclick = function(){
    botao2.textContent = 'Duplo clique'
}

// onkeypress
let campoEntrada = document.getElementById('input')
let resultado = document.getElementById('resultado')
campoEntrada.onkeydown = function(event){
    if(event.key == 'Enter'){
        console.log('teste')
        resultado.innerHTML = campoEntrada.value
        campoEntrada.value = ''
    }
}

// multiplos eventos
let botao3 = document.getElementById('botao3')
let mensagem1 = document.getElementById('mensagem1')
let mensagem2 = document.getElementById('mensagem2')
botao3.addEventListener('click', function(){
    mensagem1.textContent = 'Primeiro evento'
})

botao3.addEventListener('click', function(){
    //alert('Segundo evento')
    mensagem2.textContent = 'Segundo evento'
})