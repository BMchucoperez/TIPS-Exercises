function intersection (arr1, arr2) {
  //Your code here:
  
  // FUERZA BRUTA:

  //  [1, 3, 5, 7, 10]
  //   ^
  //  [2, 3, 6, 8, 10, 20]
  //   ^
  const result = []; // []

  for(const num1 of arr1){ // n
    for(const num2 of arr2){ // m
      if(num1 === num2) result.push(num1);
    }
  }
  return result;
}


//   // Refactor -> se mantiene la complejidad
// function intersection (arr1, arr2) {
//   //  [1, 3, 5, 7, 10]
//   //   ^
//   //  [2, 3, 6, 8, 10, 20]
//   //   ^
//   const result = [];

//   for(const num1 of arr1){
//     if(arr2.includes(num1)) result.push(num1);
//   }
//   return result;
// }


//   // Refactor2 -> se mantiene la complejidad
// function intersection (arr1, arr2) {
//   //  [1, 3, 5, 7, 10]
//   //   ^
//   //  [2, 3, 6, 8, 10, 20]
//   //   ^
//   return arr1.filter(num => arr2.includes(num));
// }


// // Refactor3 -> bajando la complejidad
// function intersection (arr1, arr2) {
//   let i = 0;
//   let j = 0;
//   const result = [];

//   while(i < arr1.length && j < arr2.length){
//     if(arr1[i] === arr2[j]) {
//       result.push(arr1[i]);
//       i++;
//       j++;
//     }
//     else if(arr1[i] < arr2[j]) i++;
//     else j++;
//   }
//   return result;
// }

//   // Refactor 4 -> se mantiene la complejidad
// function intersection (arr1, arr2) {
//   const hashMap = new Map; // {1: true, 3: true, 5:true, 7:true, 10:true}
//   for(const num1 of arr1) hashMap.set(num1, true);
//   return arr2.filter(num2 => hashMap.get(num2)) // [3]
// }


console.log(intersection([1, 3, 5, 7, 10], [2, 3, 6, 8, 10, 20]));


module.exports = intersection
