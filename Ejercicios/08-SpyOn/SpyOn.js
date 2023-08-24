function adder(n1, n2) {
  return n1 + n2;
}

function spyOn(fnCb) {
  // Your code here:
  // fnCb <- analiza
  let count = 0;
  let params = [];
  let returned = [];
  const spy = function (...args) {
    count++;
    args.forEach((a) => params.push(a));
    const result = fnCb(...args);
    returned.push(result);
    return result;
  };
  spy.getCallCount = () => count;
  spy.wasCalledWith = (val) => {
    let result = params.find((e) => {
      return e === val;
    });
    if (result) return true;
    else return false;
  };
  spy.returned = (val) => {
    let result = returned.find((e) => {
      return e === val;
    });
    if (result) return true;
    else return false;
  };
  return spy;
}

const adderSpy = spyOn(adder); // adderSpy -> adder
console.log(adderSpy(2, 3));
console.log(adderSpy.getCallCount()); // 1
console.log(adderSpy(1, 5));
console.log(adderSpy.getCallCount());
console.log(adderSpy.wasCalledWith(7)); // true
console.log(adderSpy.wasCalledWith(0)); // false
console.log(adderSpy.returned(6)); // true
console.log(adderSpy.returned(9)); // false

/*
CLOSURE -> caché

1. Function que retorna otra function
2. La function retornada debe interactuar con alguna variable o params de la function padre
*/

function closureTest(obj) {
  var num = 0;
  return function (key, value) {
    obj[key] = value;
    num++;
  };
}

function closureTest2(obj) {
  var num = 0;
  function dede(key, value) {
    obj[key] = value;
    num++;
    return obj;
  }
  return dede;
}
const test = closureTest({});
test("name", "mau");
test("name", "mau");

module.exports = spyOn;

function spyOnOptima(fnCb) {
  let count = 0;
  let params = new Set();
  let returned = new Set();
  const spy = function (...args) {
    count++;
    args.forEach((a) => params.add(a));
    const result = fnCb(...args);
    returned.add(result);
    return result;
  };
  spy.getCallCount = () => count;
  spy.wasCalledWith = (val) => params.has(val);
  spy.returned = (val) => returned.has(val);
  return spy;
}
//? new Set()  -> .add()   .has()
const adderSpy2 = spyOnOptima(adder); // adderSpy -> adder
console.log(adderSpy2(2, 3));
console.log(adderSpy2.getCallCount()); // 1
console.log(adderSpy2(1, 5));
console.log(adderSpy2.getCallCount());
console.log(adderSpy2.wasCalledWith(7)); // true
console.log(adderSpy2.wasCalledWith(5)); // false
console.log(adderSpy2.returned(6)); // true
console.log(adderSpy2.returned(9)); // false

/*
RECURSION

QUEUE || STACK
DICTIONARY ->  {key:value}
*/


function spyOnOptimaGPT(fnCb) {
  const callQueue = [];
  const callCounts = {};
  const calledWith = {};
  const returnedValues = new Set();
  const spy = function (...args) {
    callQueue.push(args);
    callCounts[args] = (callCounts[args] || 0) + 1;
    args.forEach((a) => {
      calledWith[a] = true;
    });
    const result = fnCb(...args);
    returnedValues.add(result);
    return result;
  };
  spy.getCallCount = (...args) => {
    if (args.length === 0) {
      return callQueue.length;
    }
    return callCounts[args] || 0;
  };
  spy.wasCalledWith = (val) => !!calledWith[val];
  spy.returned = (val) => returnedValues.has(val);
  return spy;
}

const adderSpyGPT = spyOnOptimaGPT(adder);
console.log(adderSpyGPT(2, 3));
console.log(adderSpyGPT.getCallCount()); // 1
console.log(adderSpyGPT(1, 5));
console.log(adderSpyGPT.getCallCount());
console.log(adderSpyGPT.wasCalledWith(7)); // true
console.log(adderSpyGPT.wasCalledWith(0)); // false
console.log(adderSpyGPT.returned(6)); // true
console.log(adderSpyGPT.returned(9));



module.exports = spyOn
