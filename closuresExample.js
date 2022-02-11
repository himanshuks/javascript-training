// Importance of closures in SET TIMEOUTS

// setTimeout creates a function having closure -> timer is attached to this function which is stored separately -> this function gets executed once timer gets expired -> when timer is attached to function, variables present in it points to the reference instead of value at that time -> control moves after creating timer to the next line

function x() {
  var i = 1;
  console.log("X function code START...");
  setTimeout(function () {
    console.log(`i in SET TIMEOUT after 3 seconds`, i);
  }, 3000);
  console.log("X function code END...");
}
x();

// Output ->
// X function code START...
// X function code END...
// i in SET TIMEOUT after 3 seconds 1

// As we see from sequence, all CONSOLE gets printed and timer starts too, but gets executed only when timer got expired
// If we change timer from 3000 -> 0, then also the setTimeout is called later after all immediate executions are done

function y() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log("Value of i", i); // setTimeout closure function points to reference of updated I, so value is 6 here
    }, i * 1000); // However, I is received in sequential manner due to for loop getting executed
  }
}
y();

// Output ->
// Value of i 6
// Value of i 6
// Value of i 6
// Value of i 6
// Value of i 6

// Flow is like -> FOR loop has created 5 timers to be executed after (1 to 5) seconds, after creating all timers, I==6 because I is VAR having GLOBAL scope and control goes to next line. After 1 second, first timer gets executed, it prints 6 coz I==6. Similarly, after 2, 3, 4 and 5 seconds, same result gets printed

function z() {
  for (let j = 1; j <= 5; j++) {
    setTimeout(function () {
      console.log("Value of j", j);
    }, j * 1000);
  }
}
z();

// Output ->
// Value of j 1
// Value of j 2
// Value of j 3
// Value of j 4
// Value of j 5

// Flow is like -> FOR loop has created 5 timers to be executed after (1 to 5) seconds, while creating all timers, value of I increases by 1 as LET is used which has Block scope and control goes to next line. After 1 second, first timer gets executed, it prints 1 coz I==1 for that closure function. Similarly, after 2, 3, 4 and 5 seconds, timer gets executed and different value gets printed because LET creates separate values for each closure function
