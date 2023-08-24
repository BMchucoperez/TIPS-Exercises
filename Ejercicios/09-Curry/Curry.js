function calcAllFour(var1, var2, var3, var4) {
  return var1 + var2 - var3 * var4;
}

function curry (fn) {
  // Your code here:

  // crear una memo de los argumentos
  // y cuando tengamos todos los argumentos, recién allí si ejecutar -> calcAllFour(var1, var2, var3, var4)
  // cantParams <- function x cb   === cantArguments recibidos
  console.log(fn);
  const memoArguments = [];
  const paramsFunction = fn.length; // la cantidad de params declarados que tiene la function creada
  console.log(paramsFunction);
  return function curried(...args) {
    // args => [] -> ...args
    memoArguments.push(...args);
    if (paramsFunction === memoArguments.length) return fn(...memoArguments);
    else return curried;
  };
}

const curriedDoSomething = curry(calcAllFour); //argumentos -> []
// curriedDoSomething -> function curried(...args) {memoArguments.push(...args)if(paramsFunction === memoArguments.length){
const firstReturn = curriedDoSomething(1); // argumentos -> [1] // curried(2,3)
// memoArguments = [1]  <-> firstReturn -> function curried(...args) {memoArguments.push(...args)if(paramsFunction === memoArguments.length){
const secondReturn = firstReturn(2); // argumentos -> [1, 2]
// memoArguments = [1, 2]  <-> secondReturn -> function curried(...args) {memoArguments.push(...args)if(paramsFunction === memoArguments.length){
console.log(secondReturn);
const thirdReturn = secondReturn(3); // argumentos -> [1, 2, 3]
// memoArguments = [1, 2, 3]  <->  thirdReturn -> function curried(...args) {memoArguments.push(...args)if(paramsFunction === memoArguments.length){
const fourthReturn = thirdReturn(4); // -9 -> (1 + 2 - 3 * 4)
// memoArguments = [1, 2, 3, 4] <-> fourthReturn -> fn(...memoArguments)
console.log(fourthReturn);

module.exports = curry


naaa_naa_naa_na_na_na_na = "hey jude";

function curryOptimus(fn) {
  const memoArguments = [];
  const paramsFunction = fn.length; // la cantidad de params declarados que tiene la function creada
  return function curried() {
    memoArguments.push(...arguments);
    return paramsFunction === memoArguments.length
      ? fn(...memoArguments)
      : curried;
  };
}
const curriedDoSomething2 = curryOptimus(calcAllFour); //argumentos -> []
// curriedDoSomething -> function curried(...args) {memoArguments.push(...args)if(paramsFunction === memoArguments.length){
const firstReturn2 = curriedDoSomething2(1); // argumentos -> [1] // curried(2,3)
// memoArguments = [1]  <-> firstReturn -> function curried(...args) {memoArguments.push(...args)if(paramsFunction === memoArguments.length){
const secondReturn2 = firstReturn2(2); // argumentos -> [1, 2]
// memoArguments = [1, 2]  <-> secondReturn -> function curried(...args) {memoArguments.push(...args)if(paramsFunction === memoArguments.length){
console.log(secondReturn2);
const thirdReturn2 = secondReturn2(3); // argumentos -> [1, 2, 3]
// memoArguments = [1, 2, 3]  <->  thirdReturn -> function curried(...args) {memoArguments.push(...args)if(paramsFunction === memoArguments.length){
const fourthReturn2 = thirdReturn2(4); // -9 -> (1 + 2 - 3 * 4)
// memoArguments = [1, 2, 3, 4] <-> fourthReturn -> fn(...memoArguments)
console.log(fourthReturn2);


function sum(a,b){
  return a+b
}
var juju = sum(8,9)
// juju -> 17 

var juju = sum
// juju -> f()

/*
funciones anidadas
​
{{{{{{}}}}}}
*/