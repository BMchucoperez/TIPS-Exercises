function HasBalancedBrackets (string) {
  // Your code here:

  //Vemos los brackets que ABREN
  let openers = [];
  // Cuando nos encontramos un bracket que "CIERRA", debemos validar que corresponda al que habia abierto ultimo

    for(let i = 0; i < string.length; i++){
      // Validamos si es de apertura (existe un valor para esa prop donde estoy?)
      if(diccionario[string[i]]){
        // Si es de apertura lo pusheamos
        openers.push(string[i]);
      } else if(string[i] !== diccionario[openers.pop()]){
        // Si es diferente retornamos falso
        return false;
      }
    }

    return true;
}

module.exports = HasBalancedBrackets
