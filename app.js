
let listaDeAmigos = [];

const campoNome = document.getElementById('amigo');
const listaDeNomesNaTela = document.getElementById('listaAmigos');
const areaDeResultado = document.getElementById('resultado');


function adicionarAmigo() {
   
    const nomeDigitado = campoNome.value.trim();
    
    if (nomeDigitado !== '' && !listaDeAmigos.includes(nomeDigitado)) {
        
        listaDeAmigos.push(nomeDigitado);
        
        const itemDaLista = document.createElement('li');
        itemDaLista.textContent = nomeDigitado;
        listaDeNomesNaTela.appendChild(itemDaLista);
    
        campoNome.value = '';
    } else if (listaDeAmigos.includes(nomeDigitado)) {
       
        alert('Este nome já foi adicionado!');
    } else {
       
        alert('Por favor, insira um nome!');
    }
}


function sortearAmigo() {
    
    listaDeNomesNaTela.innerHTML = '';
    
    areaDeResultado.innerHTML = '';
    
    if (listaDeAmigos.length < 2) {
        alert('Adicione pelo menos 2 amigos para o sorteio!');
        return;
    }
    
    const Aleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    const amigoSorteado = listaDeAmigos[Aleatorio];
  
    const resultadoItem = document.createElement('li');
    resultadoItem.textContent = `O amigo sorteado é: ${amigoSorteado}`;
    areaDeResultado.appendChild(resultadoItem);
}
function novoSorteio() {
    
    listaDeAmigos = [];
    
    listaDeNomesNaTela.innerHTML = '';
    areaDeResultado.innerHTML = '';
    campoNome.value = '';
}


campoNome.addEventListener('keyup', function(evento) {
    if (evento.key === 'Enter') {
        adicionarAmigo();
    }
});