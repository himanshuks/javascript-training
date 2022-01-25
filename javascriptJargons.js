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
