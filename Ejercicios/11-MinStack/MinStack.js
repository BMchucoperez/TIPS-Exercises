function Node(value) { // 5
  // Your code here:
  this.min = Infinity; // 
  this.value = value; // 5
  this.next = null;
}

function MinStack() {
  // Your code here:
  this.top = null; // top: Node{min: 5, value:7, next: Node{min: 5, value:5, next: null}}
}

MinStack.prototype.push = (value) => { // 3
  const previousTop = this.top; // Node{min: 5, value:7, next: Node{min: 5, value:5, next: null}}
  this.top = new Node(value); // Node{min: Infinity, value: 3, next: null}
  this.top.next = previousTop;// Node{min: Infinity, value: 3, next: Node{min: 5, value:7, next: Node{min: 5, value:5, next: null}}}

  if(!previousTop) this.top.min = value;
  else if(value < previousTop.min) this.top.min = value;
  else this.top.min = previousTop.min;
}

MinStack.prototype.pop = () => {
  const popped = this.top.value; // 2
  this.top = this.top.next;// 
  return popped; // 2
}

MinStack.prototype.min = () => {
  return this.top.min;
}

MinStack.prototype.peek = () => {
  return this.top.value;
}

const miStack = new MinStack();
miStack.push(5);
miStack.push(7);
miStack.push(3);
console.log(miStack.pop()); // 3
console.log(miStack.peek()); // 7
console.log(miStack.min()); // 5


module.exports = {
  Node,
  MinStack
}
