let usarCalculadora = prompt ('Deseja utilzar a calculadora? S/N?');

   while (usarCalculadora !== 'S' && usarCalculadora !== 'N') {
         alert('Por favor responde S para sim ou N para não.'); 
         usarCalculadora = prompt ('Deseja utilzar a calculadora? S/N?');
              
    }
if (usarCalculadora == 'S') {
    calculadora ();
}

function calculadora() {
    let numero1 = parseInt(prompt ('Digite o primeiro número'));
    let operacaoMatematica = prompt ('Digite + para somar , - para subtrair , * para multiplicar ou / para dividir');
    while (operacaoMatematica !== '+'&& operacaoMatematica !== '-' && operacaoMatematica 
        !== '*' && operacaoMatematica !== '/') {
            alert ('Escolha uma operação matemática válida (+,-,*,/)');
            operacaoMatematica = prompt ('Digite + para somar , - para subtrair , * para multiplicar ou / para dividir');
    }
    let numero2 = parseInt(prompt ('Digite o segundo número'));
    if (operacaoMatematica == '+') {
        resultado = numero1 + numero2;
    } else if (operacaoMatematica == '-'){
        resultado = numero1 - numero2;
    } else if (operacaoMatematica == '*'){
        resultado = numero1 * numero2;
    } else if (operacaoMatematica == '/'){
        while (numero2 == 0) {
            alert ('Não é possível dividir por zero!');
            numero2 = parseInt(prompt ('Digite o segundo número'));    
        }
        resultado = numero1 / numero2;
      }
   alert (`O Resultado é ${resultado}`);
   usarCalculadora = prompt ('Deseja utilzar a calculadora? S/N?');
    while (usarCalculadora !== 'S' && usarCalculadora !== 'N') {
         alert('Por favor responde S para sim ou N para não.');
         usarCalculadora = prompt ('Deseja utilzar a calculadora? S/N?');
                
    }
if (usarCalculadora == 'S') {
    calculadora ();
} 

}

function parOuImpar() {
    let numeroParOuImpar = parseInt(prompt('Digite um número por favor'));
    
    if (numeroParOuImpar % 2 == 0 ) {
        alert ('Este número é par.')
    } else {
        alert ('Este número e impar.')
    }
}

parOuImpar();


 
function comprar() {
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);
    // Verificar se a quantidade digitada é válida e superior a zero
    if (isNaN(qtd) || qtd <= 0) {
        alert ('Quantidade inválida! Por favor insira uma quantidade correta');
        return;        
    }

    if (tipo.value == 'pista') {
        comprarPista(qtd);
    } else if(tipo.value == 'superior') {
        comprarSuperior (qtd);
    } else {
        comprarInferior (qtd);
    } 
}

function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (qtd > qtdPista) {
        alert ('Quantidade solicitada indisponível para Pista');
    } else {
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert ('Compra realizada com sucesso!');
    }
}

function comprarSuperior(qtd) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtd > qtdSuperior) {
        alert ('Quantidade solicitada indisponível para Superior');
    } else {
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert ('Compra realizada com sucesso!');
    }
}

function comprarInferior(qtd) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtd > qtdInferior) {
        alert ('Quantidade solicitada indisponível para Inferior');
    } else {
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert ('Compra realizada com sucesso!');
    }
}
//Converter String para Inteiro
function converterInteiro(valorString) {
    return parseInt(valorString);    
}

let valorString = '42';
let valorInteiro = converterInteiro(valorString);
console.log(valorInteiro);