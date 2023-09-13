// tipos primitivos

//boolean
var vOuF = false;
console.log(typeof(vOuF));

// number
var numbQualquer = 1;
console.log(typeof(numbQualquer));

// string
var nome = 'Valar';
console.log(typeof(nome));

 var escopoGlobal = 'global';
 console.log(escopoGlobal);

 function escopoLocal(){
    let escopoLocalInterno = 'local'
    console.log(escopoLocalInterno);
 }
 escopoLocal();


 //atribuição
var atribuicao = 'valar';

//comparacao
var comparacao = '0' == 0;
console.log(comparacao);

//comparacao identica -> valida também o tipo e não só o valor
var comparacaoIdent = '0' === 0;
console.log(comparacaoIdent);


// operadores matematicos
var adicao = 1 + 1;
console.log(adicao);

var subtracao = 2 - 1;
console.log(subtracao);

var multiplicacao = 2 * 2;
console.log(multiplicacao);

var divisaoReal = 6 / 3;
console.log(divisaoReal);

var divisaoInteira = 5 % 2;
console.log(divisaoInteira);

// potencialização
var potencializacao = 2 ** 10;
console.log(potencializacao);

//maior que
var maiorQue = 5 > 2;
console.log(maiorQue);

//menor que
var menorQue = 5 > 2;
console.log(menorQue);

//maior ou igual a
var maiorOuIgual = 5 >= 10;
console.log(maiorOuIgual);

//operadores logicos

var e = true && false;
console.log(e);

var ou = true || false;
console.log(ou);

var not = !true;
console.log(not);