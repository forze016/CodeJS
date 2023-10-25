//////////////////////////////////////////////////////////////////////////////////////////////////////////

/* El propósito de este ejercicio es transformar una cadena en una nueva cadena en la que cada carácter aparezca
solo una vez si ese carácter es único en la cadena original, o aparezca más de una vez si ese carácter
se repite en la cadena original. Además, debes realizar esta operación sin tener en cuenta si las letras son mayúsculas o minúsculas, es decir, 
debes tratar las letras en mayúsculas y minúsculas como idénticas. */

/* Ejemplo:
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("  */

function duplicateEncode(word){
    // TU SOLUCIÓN AQUI
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Dada una matriz de números enteros, encuentre el que aparece un número impar de veces.

Siempre habrá un solo número entero que aparezca un número impar de veces.

Ejemplos
[7] debería devolver, porque ocurre 1 vez (lo cual es impar).
debería devolver, porque ocurre 1 vez (lo cual es impar).
debería devolver, porque ocurre 1 vez (lo cual es impar).
debería devolver, porque ocurre 3 veces (lo cual es impar).
debería devolver , porque aparece 1 vez (lo cual es impar).7[0]0[1,1,2]2[0,1,0,1,0]0[1,2,2,3,3,3,4,3,3,3,2,2,1]4 */

function findOdd(A) {
    //TU CODIGO AQUI
    return 0;
  }

//////////////////////////////////////////////////////////////////////////////////////////////////////////

/*En esta pequeña tarea, se le da una cadena de números separados por espacios y
 tiene que devolver el número más alto y el más bajo.

Ejemplos
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notas
Todos los números son válidos, no es necesario validarlos.Int32
Siempre habrá al menos un número en la cadena de entrada.
La cadena de salida debe ser dos números separados por un solo espacio, y el número más alto es el primero. */

function highAndLow(numbers){
    //TU SOLUCIÓN AQUI
  }

//////////////////////////////////////////////////////////////////////////////////////////////////////////

//NO MODIFICAR
module.exports = duplicateEncode
module.exports = findOdd
module.exports = highAndLow
//////////////////////////////////////////////////////////////////////////////////////////////////////////