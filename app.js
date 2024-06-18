let listaNumeros = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Famale', {rate:1.2});
}

function mensagemInicial(){
exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

mensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela ('h1', 'Acertou');
        let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa'
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativa} ${palavraTentativa} `
        exibirTextoNaTela ('p', mensagemTentativas);
        document.getElementById ('reiniciar').removeAttribute('disabled');
} else {
    if (chute > numeroSecreto) {
    exibirTextoNaTela ('p', 'O número secreto é menor');
} else {
    exibirTextoNaTela ('p', 'O número secreto é maior');
     }
     tentativa++;
     limparCampo();
  }
}


function gerarNumeroAleatorio() {
  let numeroSorteado = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeElements = listaNumeros.length;

  if(quantidadeElements == numeroLimite) {
    listaNumeros = [];
  }
  
  if (listaNumeros.includes(numeroSorteado)) {
    return gerarNumeroAleatorio();
  } else {
    listaNumeros.push(numeroSorteado);
    console.log(numeroSorteado)
    return numeroSorteado; 
  }
}

function limparCampo() {
  chute = document.querySelector('input');
  chute.value = '';
}

function reiniciarJogo() {
   numeroSecreto = gerarNumeroAleatorio();     
   limparCampo();
   tentativa = 1;
   mensagemInicial();
   document.getElementById('reiniciar').setAttribute('disabled', true);
} 
