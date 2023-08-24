function MaxValue (shares) {
  // Your code here:

  if(shares.length < 2){
    return 0;
  }

  let max = 0;

  //Fuerza bruta
  // shares: [3,20,4,3,1,15,2,17]
  //                 i
  //                           x
  // max: 17
  for(let i=0; i < shares.length; i++){
    for(let x = i + 1; x < shares.length; x++){
      let potencial = shares[x] - shares[i];
      if(potencial > max){
        max = potencial;
      }
    }
  }

  // shares.forEach((element) => {}); ----> Optimizarlo a 1 solo recorrido

  return max;
}

function MaxValue(shares) {
  if(shares.length < 2){
    return 0;
  }

  let max = 0;
  let min = shares[0]; //4

  // shares: [...4,3,15,2,17,3,20]
  //          >       i

  for(let i = 1; i < shares.length; i++){
    let potencial = shares[i] - min;
    max = Math.max(potencial, max);
    min = math.min(shares[i], min);
  }

  return max;

}

module.exports = MaxValue
