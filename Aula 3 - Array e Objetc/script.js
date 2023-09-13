// vetores e array

//declaracao de array
let array = ['string', 1, true]
console.log(array);

//declaracao de array
let array1 = ['string', 1, true, [array1]]
console.log(array1);
console.log(array[2])

//Manipulando Array

//forEach
array1.array(function(item, index){
    console.log(item, index);
})

//push
array1.push( 'novo item no final');
console.log(array1);

//Pop -> remove o item final do array
array.pop();
console.log(array);

// shift -> remove um item do inicio do array
array.shift();
console.log(array);

// array.Unshift -> adiciona um elemento no inicio do array
array1.unShift('novo item no inicio');
console.log(array1);

// array.indexOf -> retorna qual indice o elemento esta
console.log(array.indexOf(true));

// array.splice - remove ou substitui um item pelo índice
array.splice(0, 3);
console.log(array);

// array.slice - retorna uma parte de um array existente
let novoArray = array1.splice(0, 3);
console.log(novoArray);

// *********************************** objetos ********************************

let object = { 
    string: 'string', 
    number: 1, 
    boolean: true,
    Array: [array1],
    objetoInterno:{objetoInterno: 'objeto aqui dentro'}
    }

    console.log(object);
    console.log(object.objetoInterno);

    //destruturação
    var string = object.string;
    console.log(string)

    var { string, boolean, objetoInterno } = object;
    console.log(string, boolean, objetoInterno)