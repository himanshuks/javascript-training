// Callback functions -
// Using it we can achieve async operations in javascript

// If argument is passed and consumed in function, callback can be used
function a(z) {
  console.log("Function A");
  z(); // Calling the callback function
}

// Below code will execute A function simply
a(function b() {
  console.log("This is callback function");
});
