// Higher Order Function - Function which takes another function as argument OR returns a function out of them
// Call back Function - Function which is passed as parameter to another function to be called upon later in code

// Below is simple approach of function creation for calculating areas

const radiusList = [3, 7, 2, 8];

const calculateArea = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(Math.PI * radius[i] * radius[i]);
  }
  return output;
};

var res = calculateArea(radiusList);
console.log(`Area of Circle`, res);

const calculateCircumference = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(2 * Math.PI * radius[i]);
  }
  return output;
};

var res2 = calculateCircumference(radiusList);
console.log(`Circumference of Circle`, res2);
