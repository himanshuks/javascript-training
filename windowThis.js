// Window object gets created along with Javascript execution context

var a = 10;

function b() {
  var x = 10;
}

// We can access the global variable A by any following means

console.log("window.a", window.a);
console.log("this.a", this.a);
console.log("a", a);

// Local variable X

console.log("window.x", window.x);
console.log("this.x", this.x);
console.log("x", x);
