// Working with setTimeouts
// After expiration of timer, setTimeout callback function is pushed to CALLBACK queue
// Once JS call stack gets empty, EVENT LOOP will put callback function from CALLBACK queue to JS call stack
// Then function gets executed

console.log("Start");

setTimeout(function () {
  console.log("Timer called");
}, 5000);

console.log("End");

let startDate = new Date().getTime();
let endDate = startDate;

// Explicitly while loop is added to engage the JS call stack busy for 10 seconds

while (endDate < startDate + 10000) {
  endDate = new Date().getTime();
}

// Here, the endDate is updated every millisecond till 10 seconds are passed. During this time. browser keeps running as the JS engine is busy.
// Meanwhile, setTimeout gets pushed to CALLBACK queue for execution after 5 seconds
// Once the loop is over, JS call stack gets empty and EVENT LOOP puts the setTimeout function into JS call stack for execution

console.log("While loop ends");
