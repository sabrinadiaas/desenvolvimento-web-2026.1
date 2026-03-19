// incrementar e decrementar
let incrementar = document.getElementById('incrementar')
let decrementar = document.getElementById('decrementar')
let contador =  document.getElementById('contador')
let contadorNumero = Number(contador.innerText);
contador.textContent = contadorNumero
incrementar.addEventListener('click', function(){
    contadorNumero += 1
    contador.textContent = contadorNumero
})
decrementar.addEventListener('click', function(){
    if (contadorNumero === 0){
        alert('O contador já está em 0.')
    }
    else {
        contadorNumero -= 1
        contador.textContent = contadorNumero
    }
})

// textos + contador de caracteres
let campoTexto = document.getElementById('campoTexto')
let contadorLetras = document.getElementById('contadorLetras')
let mensagens = document.getElementById('mensagens')

campoTexto.addEventListener('input', function() {
            let textoAtual = campoTexto.value;
            let textoSemEspacos = textoAtual.replace(/ /g, "");
            contadorLetras.textContent = textoSemEspacos.length;
        });

campoTexto.addEventListener('keydown', function(event){
    if(event.key == 'Enter'){
        let novoParagrafo = document.createElement('p')
        novoParagrafo.textContent = campoTexto.value
        mensagens.append(novoParagrafo)
        campoTexto.value = ''
        contadorLetras.textContent = '0'
    }
    
})

// criar lista ordenada ou não ordenada
let tipoLista = document.getElementById('tipoLista');
let adicionar = document.getElementById('adicionar');
let areaLista = document.getElementById('areaLista');

adicionar.addEventListener('click', function(){
    let numeroDoItem = 1;
    let novaLista;
    if (tipoLista.value === 'ordenada') {
        novaLista = document.createElement('ol');
    } else {
        novaLista = document.createElement('ul');
    }

    for (let i = 1; i <= 3; i++) {
        let novoItem = document.createElement('li');
        novoItem.textContent = 'Item ' + numeroDoItem;
        
        novaLista.append(novoItem); 
        
        numeroDoItem++;
    }
    areaLista.append(novaLista);
});

// botão reset
let reset = document.getElementById('reset')

reset.addEventListener('click', function(){
    contadorNumero = 0
    contador.textContent = contadorNumero;

    campoTexto.value = '';
    contadorLetras.textContent = '0';
    mensagens.innerHTML = '';

    areaLista.innerHTML = '';
    numeroDoItem = 1;
    tipoLista.selectedIndex = 0;
})