  // Your code here:
  // Ya trabajamos con arreglos de una única dimensión, ahora subiremos un escalón e iremos por arreglos
// de dos dimensiones, es decir, un arreglo de arreglos de enteros.
// En este caso, el objetivo es encontrar la suma de todos los elementos del arreglo.

//? multi-dimensional <->  muchas dimensiones  <->  dos dimensiones    ->  {{{{{{}}}}}}    [[[]][[]]] <- profundidad

// mdArray: [1,2,3,4] | output: 10
// mdArraySum: [ [2,4] , [1], [4,2,1] ] | output: 14
// mdArraySum: [ 2, [3,4], 5, [-3, [6 , [ 4,5 ] ] ] ] | output: 26

//! IMPORTANTE
//! Para la resolución de este ejercicio no se puede utilizar el método Array.flat()

console.log([2, [3, 4], 5, [-3, [6, [4, 5]]]].flat().flat().flat());

//* RECURSION

//             i
function mdArraySum(arr) {
  // [[2, 4], 3, [6]]
  // Your code here: * array.isarray
  var sum = 0; //  sum -> 0  + mdArraySum([2, 4])   ->  sum = 6  + 3  -> sum = 9  + mdArraySum([6])  -> 15
  //                                   6                       9                           6
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) sum = sum + mdArraySum(arr[i]);
    else sum = sum + arr[i];
  }
  return sum;
}
console.log(mdArraySum([[2, 4], 3, [6]])); // 15
console.log(mdArraySum([[2, 4], [1], [4, 2, 1]])); // 14
console.log(mdArraySum([2, [3, 4], 5, [-3, [6, [4, 5]]]])); // 26

module.exports = mdArraySum;

/*
 * QUEUE || STACK
 * {} <- hash-Dictionary
 * CLOSURE <- memo caché
 * RECURSIÓN   {{{{}}}}   [[[]]]
 * Clases constructoras -> LinkedList - Tree
 */

/*
* STEPS

[[[[[[[[[]]]]]]]]]
1. Leer consigna
2. Input proceso output
mdArray: [1,2,3,4] | output: 10
mdArraySum: [ [2,4] , [1], [4,2,1] ] | output: 14
3. NO se puede utilizar el método Array.flat() 
4. ¿¿???
  a) se puede usar isArray? SI
  b) se puede usar flay.map? NO
  c) se puede RECURSION? SI
5. Pseudo code  || CICLO

*/



/*
//todo: chat GPT -> TypeScript + Class solution:

class MdArraySumCalculator {
  static calculate(arr: (number | number[])[]): number {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        sum += MdArraySumCalculator.calculate(arr[i] as number[]);
      } else {
        sum += arr[i] as number;
      }
    }

    return sum;
  }
}

console.log(MdArraySumCalculator.calculate([[2, 4], 3, [6]])); // 15
console.log(MdArraySumCalculator.calculate([[2, 4], [1], [4, 2, 1]])); // 14
console.log(MdArraySumCalculator.calculate([2, [3, 4], 5, [-3, [6, [4, 5]]]])); // 26
*/

