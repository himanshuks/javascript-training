// Let & Const are hoisted in temporal dead zone

console.log(x);
// console.log(y);

var x = 5;
let y = 8;

// Temporal dead zone - Time from variable getting hoisted (allocated memory) till variable gets initialized
// LET - variables are allocated memory in different space (Script instead of Global space)
// Error occurred as variable is not yet initialized before accessing it when using LET

console.log("this.x", this.x);
console.log("this.y", this.y);

// console.log("window.x", window.x);
// console.log("window.y", window.y);
