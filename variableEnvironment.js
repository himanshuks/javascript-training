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
