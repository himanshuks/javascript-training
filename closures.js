// Closure - combination of function along with it's lexical environment
// They are created during along with function creation

function x() {
  var a = 10;
  function y() {
    console.log(`a`, a);
  }
  y();
}
x();

// Closure - when a function is returned by a function, the received item is not only the function but it's combination of function + lexical scope

function m() {
  var b = 5;
  function n() {
    console.log(`b`, b);
  }
  return n; //function N is being returned along with lexical env i.e. variable B
}

var p = m(); // executing M returns function N which is stored in P
console.log(`p`, p);

p(); // when we execute function P, function N which is stored is executed along with lexical data
