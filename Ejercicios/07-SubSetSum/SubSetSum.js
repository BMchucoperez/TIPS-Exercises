function subsetSum (nums, target) {
  // Your code here:

  // [1,10,5,3]     target 22
  // Your code here:
  // console.log("params 1 y 2", nums, n);
  const sums = [0]; // sums = [0, 1, 10, 11]
  //                       i
  return nums.some((num) => {
    // [1,10,5,3]
    const copySums = [...sums]; //          j
    for (const j of copySums) {
      // copySums [0, 1, 10, 11]
      const newSum = j + num; //
      if (target === newSum) return true;
      if (newSum < target) sums.push(newSum);
    }
  });
}
console.log(subsetSum([1, 10, 5, 3], 9)); //output: true <= 1 + 5 + 3
console.log(subsetSum([1, 10, 5, 3], 19)); // ; output:true <= add all 4
console.log(subsetSum([1, 10, 5, 3], 10)); // output:true <= 10 + 0 = 10

function subsetSum2(nums, target) {
  // [1,10,5,3]     target 22
  const sums = [0]; // caché de sumas
  for (let i = 0; i < nums.length; i++) {
    const copySums = [...sums];
    for (let j = 0; j < copySums.length; j++) {
      const newSum = copySums[j] + nums[i];
      if (target === newSum) return true;
      if (newSum < target) sums.push(newSum);
    }
  }
  return false;
}

//* Iterador { Iterador } O (n^2)
//* Iterador { Iterador {Iterador} } O (n^3)

console.log(subsetSum2([1, 10, 5, 3], 9)); //output: true <= 1 + 5 + 3
console.log(subsetSum2([1, 10, 5, 3], 19)); // ; output:true <= add all 4
console.log(subsetSum2([1, 10, 5, 3], 10)); // output:true <= 10 + 0 = 10

module.exports = subsetSum;

/*
STEPS:
​
Leer consigna
Definir el INPUT y OUTPUT <- tipo de dato
   CONSOLE
​
​
cahe []  {}  CLOSURE
STACK [] || QUEUE 
{key: value}
​
RECURSION
{{{{{{}}}}}}
[[[[[[]]]]]]     
​
Estructura de Datos
*/

const numeros = [1, 10, 5, 3];
const result = numeros.some((n) => n >= 11); // [false,false,false,false] => false
// [false,false,true,false] false || false || true || false => true
console.log(result);

function pepe() {
  return "hola";
}

pepe.data = [2, 3, 4];
pepe.by = function () {
  return "CHAU";
};

console.log(pepe.by());

// puedes resolver este problema utilizando un enfoque de programación dinámica y un diccionario para almacenar información sobre las sumas parciales posibles. Aquí tienes una posible implementación en JavaScript:

// javascript
// Copy code
function subsetSumMemoDictionary(nums, target) {
  const memo = {}; // Diccionario para almacenar sumas parciales

  function canSum(currentIndex, currentTarget) {
    if (currentTarget === 0) {
      return true;
    }
    if (currentIndex >= nums.length || currentTarget < 0) {
      return false;
    }

    const memoKey = `${currentIndex}-${currentTarget}`;
    if (memo.hasOwnProperty(memoKey)) {
      return memo[memoKey];
    }

    // Incluye el número actual en la suma o no
    const includeCurrent = canSum(
      currentIndex + 1,
      currentTarget - nums[currentIndex]
    );
    const excludeCurrent = canSum(currentIndex + 1, currentTarget);

    // Almacenar el resultado en el diccionario
    memo[memoKey] = includeCurrent || excludeCurrent;
    return memo[memoKey];
  }

  return canSum(0, target);
}


console.log(subsetSumMemoDictionary([1, 10, 5, 3], 9)); // Output: true
console.log(subsetSumMemoDictionary([1, 10, 5, 3], 19)); // Output: true
console.log(subsetSumMemoDictionary([1, 10, 5, 3], 10)); // Output: true
console.log(subsetSumMemoDictionary([1, 10, 5, 3], 20)); // Output: false

module.exports = subsetSum
