// Call, apply and bind methods in javascript

let nameOne = {
  firstName: "Himanshu",
  lastName: "Singh",

  // THIS keyword points to the current object i.e. nameOne
  printName: function (homeTown) {
    console.log(
      "Name is",
      this.firstName + " " + this.lastName + " lives in " + homeTown
    );
  },
};

// Since, function is defined inside the object, it is being called by object name followed by (.) operator
nameOne.printName();

// If we want to use BORROW above function on different object we can use CALL & APPLY methods

let nameTwo = {
  firstName: "Virat",
  lastName: "Kohli",
};

// CALL - takes 2 parameter
// First, the object on which function will be called. Function's THIS will point to this provided arguments
// Second, list of additional parameters (,) separated

nameOne.printName.call(nameTwo); // undefined is coming as no SECOND argument is provided
nameOne.printName.call(nameTwo, "Delhi");

// Generally, the function is put outside the object for easy use

let printNameOutside = function (homeTown, state) {
  console.log(
    "Name is",
    this.firstName +
      " " +
      this.lastName +
      " lives in " +
      homeTown +
      " of state " +
      state
  );
};

let nameThree = {
  firstName: "Rohit",
  lastName: "Sharma",
};

printNameOutside.call(nameThree); // undefined is coming as no SECOND, THIRD argument are provided
printNameOutside.call(nameThree, "Mumbai"); // undefined is coming as no THIRD argument is provided
printNameOutside.call(nameThree, "Mumbai", "Maharashtra");

// APPLY - works almost similar to the CALL as explained above
// Only difference is that in APPLY, we pass additional arguments in ARRAY form

// printNameOutside.apply(nameThree, "Mumbai", "Maharashtra"); // TypeError: CreateListFromArrayLike called on non-object
printNameOutside.apply(nameThree); // undefined is coming as no SECOND, THIRD argument are provided
printNameOutside.apply(nameThree, ["Mumbai"]); // undefined is coming as no THIRD argument is provided
printNameOutside.apply(nameThree, ["Mumbai", "Maharashtra"]);
