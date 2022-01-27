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
