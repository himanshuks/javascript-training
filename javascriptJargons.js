// Major difference between function statement and expression is HOISTING
// Below 2 functions when called BEFORE declaration

// a();
// c(); // Will give error -> C is not a function because C is treated as variable and during hoisting it assigned as UNDEFINED

// Function statement or Function Declaration
function a() {
  console.log("This is A");
}
a();

// Function expression - when it act as a value
var c = function () {
  console.log("This is B");
};
c();

// Anonymous Function - used when we want function to be used as value
var z = function () {
  console.log("AF called");
};

// Named function expression - function having name and used as value (function expression)
var y = function xyz() {
  console.log("NFX called");
  console.log(xyz);
};

z();
// xyz(); // Will give error -> XYZ is not defined because XYZ is defined in function's local scope and can't be outside in global scope

function display(param1, param2) {
  // These are parameters
  console.log("The name is", param1, param2);
}

display("HKS", 10); // These are arguments

// First Class Function - Ability to pass function as value into another function as arguments which can return functions too
// Also know as First Class Citizens
var abc = function items() {
  return function () {
    console.log("This is retuned function");
  };
};

console.log(`abc Function`, abc());
