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

// Re-declaration is not allowed for LET and CONST in same scope

// let y = 10;

let z;
z = 12;
console.log(`z`, z);

// CONST - needs to be initialized in same line of declaration

const a = 3;
// a = 77;

console.log(`a`, a);

// Best practice - avoid using VAR
// Const & Let should be used and declared on top of code scope to avoid un-necessary errors
// This way we reduce the time duration of temporal dead zone to zero

var him = 62;
// let him = 45;

console.log(`him`, him);
// This returns error as VARIABLE name is already declared
