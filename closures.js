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

// Another way of writing -> returning function directly
function outer() {
  var c = 10;
  return function inner() {
    console.log(`c`, c);
  };
}
var catchFunction = outer();
catchFunction();

function one() {
  var d = 100;
  function two() {
    console.log(`d`, d);
  }
  d = 600; // function TWO is returned along with lexical environment, so variable D points to the reference here whose value is updated to 600 now
  return two;
}
var func1 = one();
func1(); // 600 -> function is returned but lexical has all the updated values

// Lexical of all parents are passed to return function in closures
function mostOuter() {
  var z1 = 333;
  function outer() {
    var z2 = 444;
    function inner() {
      console.log("z1 and z2", z1, z2);
    }
    // return inner;
    inner();
  }
  //   return outer;
  outer();
}

// var func2 = mostOuter();
// func2();
mostOuter(); // z1 and z2 333 444

// Uses of Closures:
// - Module design pattern
// - currying
// - memoize
// - maintaining state in async world
// - setTimeouts
// - iterators
