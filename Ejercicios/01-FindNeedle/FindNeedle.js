function FindNeedle(haystack, needle) {
  // Your code here:

  // Pseudocodigo === "en palabras para un niño de 11 años".

  // Recorrer las palabras (1,2? ahora vemos)
  // Separar las palabras (en que?) en un array
  // Comparar

  // Recorremos el haystack
  for (let i = 0; i < haystack.length; i++) {
    // Preguntamos si haystack[i] === needle[0]
    if (haystack[i] === needle[0]) {
      // El valor de i es "un posible resultado".
      // Dependerá de si existe toda la palabra... (o no)
      for (let x = 1; x < needle.length; x++) {
        if (haystack[i + x] !== needle[x]) {
          break;
        }

        // preguntamos si llegamos al final del needle
        if (x + 1 === needle.length) return i;
      }

      // como podria saber que el for se corto porque llego al final y NO POR EL BREAK
      // x --> ya no existe acá
    }
  }

  return -1;

  // haystack: reduxhreduxhreduxh
  // needle: html
}

// N(n*m) --> O(1)

function FindNeedle(haystack, needle) {
  // Your code here:

  // Pseudocodigo === "en palabras para un niño de 11 años".

  // Recorrer las palabras (1,2? ahora vemos)
  // Separar las palabras (en que?) en un array
  // Comparar

  // Recorremos el haystack
  for (let i = 0; i < haystack.length; i++) {
    // Preguntamos si haystack[i] === needle[0]
    if (haystack[i] === needle[0]) {
      if (haystack.slice(i, i + needle.length) === needle) {
        return i;
      }
    }
  }

  return -1;
}

// N(n*n) --> O(1)

module.exports = FindNeedle;
