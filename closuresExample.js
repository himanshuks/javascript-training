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
