// Execution context -> memory phase -> execution phase

getName();
console.log("number", number);

var number = 5;

getName();
console.log("getName", getName);
console.log("getName2", getName2);
console.log("getName3", getName3);

// Defining function as below will be treated as function during Memory phase

function getName() {
  console.log("Hello world");
}
