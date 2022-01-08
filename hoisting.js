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

// Arrow function and creating function with assignment will be treated as Variable during Memory phase

var getName2 = () => {
  console.log("Hello world 2");
};

var getName3 = function () {
  console.log("Hello world 3");
};

// As X is not allocated memory and is being accessed here, will get error
// Reference error -> X is not defined

console.log("different number", x);
