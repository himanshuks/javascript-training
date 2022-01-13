// Lexical environment gets created along with execution context
// LE is local memory scope + LE memory scope of parent

// Javascript tries to find variable from one lexical scope to another till it reaches the parent of Global LE which is NULL

// Lexical scoping is a type of object oriented programming according to which, a child can access parent scope and global scope. Similarly a function can access global scope.

function a() {
  var beta = 10;
  c();

  function c() {
    console.log("the value of B in LS", beta);
  }
}

a();
console.log("the value of B in GS", beta);
