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

// When we call a function A and pass another function B as argument, B is called callback function
// Since we have passed B as parameter to A, B will be called sometime later as per logic of A, hence know as callback function

setTimeout(function () {
  console.log("Timer executed after 3s");
}, 3000);

function getCount() {
  let count = 0;
  document.getElementById("clickMe").addEventListener("click", function xyz() {
    console.log("Button is clicked", ++count);
  });
}

getCount();

// DOM API - these are also call back functions which are present in Web APi environment, and once the action is triggered, function is called
