/*
Livro: JavaScript O Guia Definitivo
Página: 4
*/

// Tudo que vem após barras normais duplas é um comentário em liguagem natual.
// Leia os comentários atentamente: eles explicam o código JavaScript.

// Variável é um nom simbólico para um valor.
// As variáveis são declaradas com a palavra-chave var:
var x;              // Declara uma variável chamada x.

// Valores podem ser atribuídos às variáveis com o sinal =
x = 0;              // Agora a variável x tem o valor 0
x                   // => 0: Uma variável é avaliada com seu valor.

// JavaScript aceita vários tipos de valores.
x = 1;              //  Números.
x = 0.01            // Apenas um tipo Number para inteiros e reais.
x = "hello world";  // Strings de texto entre aspas.
x = 'JavaScript';   // Apóstrofos também delimitam strings.
x = true;           // Valores booleanos.
x = false;          // O outro valor booleano.
x = null;           // Null é um valor especial que significa "nenhum valor".
x = undefined;      // Undefined é como null.

// O tipo de dados mais importante de JavaScript é o objeto.
// Um objeto é um coleção de pares nome/valor ou uma string para mapa de valores.
var book = {                // Objetos são colocados entre chaves.
    topic: "JavaScript",    // A propriedade "topic" tem o valor "JavaScript".
    fat: true               // A propriedade "fat" tem o valor true.
};                          // A chave marca o fim do objeto.

// Acesse as propriedades de um objeto com . ou []:
book.topic                  // => "JavaScript"
book["fat"]                 // => true: outro modo de acessar valores de propriedade.
book.author = "Flanagan";   // Crie novas propriedades por meio de atribuição.
book.contents = {};         // {} é um objeto vazio sem qualquer propriedade.

// JavaScript também aceita arrayas (listas indexadas numericamente) de valores.
var primes = [2, 3, 5, 7];  // Um array de 4 valores, delimitados com [ e ].
primes[0]                   // => 2: o primeiro elemento (índice 0) do array.
primes.length               // => 4: quantidade de elementos no array.
primes[primes.length-1]     // => 7: o último elemento do array.
primes[4] = 9;              // Adiciona um novo elemento por meio de atribuição.
primes[4] = 11;             // Ou altera um elemento existente por meio de atribuição.
var empty = [];             // [] é um array vazio, sem qualquer elemento.
empty.length                // => 0

// Os arrays e objetos podem conter outros arrays e objetos:
var points = [              // Um array com 2 elementos.
    {x:0, y:0},             // Cada elemento é um objeto.
    {x:1, y:1}
];
var data = {                // Um objeto com 2 propriedades.
    trial1: [[1,2], [3,4]], // O valor de cada propriedade é um array.
    trial2: [[2,3], [4,5]], // Os elementos dos arrays são arrays.
};

//=================================================================================
// Expressões em JavaScript

// Os operadores atuam sobre os valores (operandos) para produzir um novo valor.
// Os operadores aritiméticos são os mais comuns:
3 + 2                       // => 5: adição
3 - 2                       // => 1: subtração
3 * 2                       // => 6: multiplicação
3 / 2                       // => 1.5: divisão
points[1].x - points[0].x   // => 1: operandos mais complicados também funcionam
"3" + "2"                   // => "32": + soma números, ou concatena strings

// JavaScript define alguns operadores aritméticos de forma abreviada
var count = 0;              // Define uma variável
count++;                    // Incrementa a variável
count--;                    // Decrementa a variável
count += 2;                 // Soma 2: o mesmo que count = count + 2;
count *= 3;                 // Multiplica por 3: o mesmo que count = count * 3;
count                       // => 6: nomes de variáveis também são expressões.

// Os operadores de igualdade e relacionais testam se dois valores são iguais,
// desiguais, menores que, maiores que, etc. São avaliados como verdadeiros ou falsos.
var x = 2, y = 3;           // Esses sinais = são atribuições e não testes de igualdade.

x == y                      // => falso: igualdade
x != y                      // => verdadeiro: desigualdade
x < y                       // => verdadeiro: menor que
x <= y                      // => verdadeiro: menor ou igual a
x > y                       // => falso: maior que
x >= y                      // => falso: maior ou igual a
"two" == "three"            // => falso: as duas strings são diferentes
"two" > "three"             // => verdadeiro: "tw" é alfabeticamente maior do que "th"
false == (x > y)            // => verdadeiro: falso é igual a falso

// Os operadores lógicos combinam ou invertem valores booleanos
(x == 2) && (y == 3)        // => verdadeiro: as duas comparações são verdadeiras. && é E
(x > 3) || (y < 3)          // => falso: nenhuma das comparações é verdadeira. || é OU
!(x == y)                   // => verdadeiro: ! inverte um valor booleano

// Se as frases em JavaScript são expressões, então as sentnças completas são instruções.
// *As linhas que terminam com ponto e vírgula são instruções.
/* 
Em linhas gerais, uma expressão é algo que calcula um valor, mas não faz nada: ela não altera o estado do 
programa de modo algum. As instruções, por outro lado, não têm um valor (ou não têm um valor com que nos 
preocupemos), mas alteram o estado.
*/

// *Estruturas de Controle: são instruções condicionais e os laços.
//=================================================================================

//=================================================================================
// Funções em JavaScript