function SolveGraph (graph, start, end, visited = {}) {
  // Your code here:

  // Pregunto si ya visité ese nodo (start)
  if (visited[start]) return false;
  // Si no lo he visitado: lo registro como vistado ✅
  visited[start] = true; //  {s: true, a: true, c:true}.  -> ["s", "a", "c"].length()
​
  // Iterar sobre los vertices de ese "start"
  // graph[start] // --> DEBERIA SER UN ARRAY . 1 que este vacio --- 2 que no este vacio
​
  // deberiamos comenzar a preguntarle a las conexiones de "start" - "s"
  for (let i = 0; i < graph[start].length; i++) {
    // pregunto si puedo llegar al final
    if (end === graph[start][i]) {
      // podemos llegar al end desde donde estoy!
      return true;
    } else if (SolveGraph(graph, graph[start][i], end, visited)) {
      //  hubo un camino hacia el end
      return true;
    }
  }
​
  return false;
}
​
// SolveGraph --> O(N) recursivo
​


module.exports = SolveGraph

// const ejemploGrafo = {
//   a: ["c"],
//   b: ["c"],
//   c: ["s", "r"],
//   d: ["a"],
//   s: ["a", "c"],
//                  i
//   r: ["d"],
//   z: [],
// };