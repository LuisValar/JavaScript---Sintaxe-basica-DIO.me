var jogador1 = 0;
var jogador2 = 0;
var placar;

jogador1!=-1 && jogador2 !=-1 ? console.log('Os jogadores são validos') :
console.log('jogadores invalidos');
    if(jogador1 > 0 && jogador2 == 0){
        console.log('jogador 1 marcou 1 ponto!');
        placar = jogador1 > jogador2;
    } else if (jogador2 > 0 && jogador1 == 0){
        console.log('jogador 2 marcou 1 ponto!');
        placar = jogador2 > jogador1;
    } else {
        console.log('Ninguém Marcou pontos!');
    }

    switch(placar){
        case placar = jogador1 > jogador2:
            console.log('Jogador 1 ganhou');
            break;
        case placar = jogador2 > jogador2:
            console.log('Jogador 2 ganhou');
            break;
        default:
            console.log('Empate');
    }

// estruturas de repetição
// for  - executa até que o valor seja falso
let array = ['valor0','valor1','valor2','valor3','valor4','valor5'];
let object = { propiedade0: 'valor 0', propiedade1: 'valor 1', propiedade2: 'valor 2', propiedade3: 'valor 3', propiedade4: 'valor 4', propiedade5: 'valor 5',}

for(let indice = 0; indice < array.length; indice++){
    console.log(indice);
}

// for/in
for(let i in array) {
    console.log(i)
}
// com object 
for(let i in object) {
    console.log(i)
}

// for/of
for( i of array) {
    console.log(i) 
}
// com objetos - Não pode ser usado em objetos pois imprime 1 valor por linha
for( i of object.propiedade0) {
    console.log(i) 
}

// while 
var a = 0;
while (a < 10 ) {
    console.log(a);
}

// do while
do {
    a ++;
    console.log(a);
} while (a < 10 );
