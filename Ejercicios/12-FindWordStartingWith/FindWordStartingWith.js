/*
Dado un "libro" y un string para buscar, devolver todos los indices donde la palabra empieza con ese string.
​
El libro vendrá con dos cosas: un id y un texto. La búsqueda tiene que ser case insensitive.
​
*/
const book = {
  id: 1,
  text: "Erase una vez un libro de palabras que era un poco aburrido pero tenia mucho aunque algunas palabras locas",
};


function FindWordStartingWith (book, query) {
  // Your code here:

  // query = "un"
  // Your code here:
  const text = book.text.toLowerCase();
  const finds = [];
  const str = query.toLowerCase();
  for (let i = 0; i < text.length; i++) {
    if ((str[0] === text[i] && text[i - 1] === " ") || i === 0) {
      if (text.slice(i, i + str.length) === str) {
        finds.push(i);
      }
    }
  }
  return finds;
}

console.log(FindWordStartingWith(book, "de")); // output: [23]
console.log(FindWordStartingWith(book, "un")); //  output: [ 6, 14, 43]
console.log(FindWordStartingWith(book, "era")); //  output: [ 6, 14, 43]​

module.exports = FindWordStartingWith

const bookComplejo = {
  id: 1,
  text: 'Erase una vez un libro de palabras que era,un poco:"aburrido pero tenia" mucho aunque algunas palabras locas',
};

function FindWordStartingWithB(book, query) {
  // query = "un"
  // Your code here:
  const separators = {
    " ": true,
    ",": true,
    ":": true,
    '"': true,
    ";": true
  };
  const text = book.text.toLowerCase();
  const finds = [];
  const str = query.toLowerCase();
  for (let i = 0; i < text.length; i++) {
    if ((str[0] === text[i] && separators[text[i-1]]) || i === 0) {
      if (text.slice(i, i + str.length) === str) {
        finds.push(i);
      }
    }
  }
  return finds;
}

console.log(FindWordStartingWithB(bookComplejo, "de")); // output: [23]
console.log(FindWordStartingWithB(bookComplejo, "un")); //  output: [ 6, 14, 43]
console.log(FindWordStartingWithB(bookComplejo, "era")); //  output: [ 6, 14, 43]

/*
​
El uso interno, herramienta extra creada a fin de dar una solución:
​
CLOSURE <- memo-cache
​
RECURSION
​
CLASES <- ESTRUCTURAS DE DATOS 
​
STACK   []
QUEUE   []
​
HASH-DICTIONARY  {key:value}
​
*/

const separators = {
  " ": true,
  ",": true,
  ":": true,
  '"': true,
  ";": true
};

console.log(separators[";"])