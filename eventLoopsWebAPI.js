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
