// Browser - Chrome, Firefox, Safari
// Provides various Web APIs - setTimeout(), DOM APIs, LocalStorage, Console, Fetch(), Location
// has JS engine along with these -> JS Engine runs the call stack
// JS engine can access these Web APIs using WINDOW keyword

console.log("Start");

setTimeout(function XYZ() {
  console.log("Timer called");
}, 4000);

console.log("End");

// When JS reaches setTimeout line, Callback function XYZ gets registered in Web API environment, and control moves to next line
// Simultaneously, timer is started with countdown provided in callback function
// Global Execution gets popped out from call stack after all JS work
// When timer expires, XYZ moves into the CALLBACK queue

// EVENTLOOP monitors the CALLBACK queue and puts the XYZ into the JS call stack
// EVENTLOOP puts call function from CALLBACK queue only when JS call stack is empty
// That's why -> setTimeout(function(){},0) -> Executes at last as it's waiting for JS call stack to get empty

console.log("Big start");

setTimeout(function cbT() {
  console.log("Timer 2 called");
}, 5000);

fetch("https://api.netflix.com").then(function cbF() {
  console.log("Netflix called");
});

console.log("Big end");

// MicroTask queue - Similar to CALLBACK queue but has HIGHER priority
// Call back functions from PROMISES and Mutation Observer

// When tasks are present both in MicroTask and CALLBACK queue, EVENTLOOP executes all functions present in MicroTask first when JS call stack is empty. Then CALLBACK queue's functions are executed
