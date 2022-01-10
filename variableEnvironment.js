// Call stack will be created
// Global EC -> function A EC -> Pop A EC -> function B EC -> Pop B EC -> Pop Global EC

var z = 1;
a();
b();
console.log("z in Global", z);

function a() {
  var z = 10;
  console.log("z in A", z);
}

function b() {
  var z = 100;
  console.log("z in B", z);
}

// Undefined is like a placeholder provided to variables when memory is allocated in 1st phase of execution context

console.log(x);

// So here it will be equals to undefined

if (x === undefined) {
  console.log("x is undefined");
} else {
  console.log("x in not undefined");
}

var x = 5;

// Here not, as it's been assigned with 5

if (x === undefined) {
  console.log("x is undefined");
} else {
  console.log("x in not undefined");
}
