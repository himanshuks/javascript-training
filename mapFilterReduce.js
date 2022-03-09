// MAP function is used to transform an array

const arr = [5, 7, 2, 9, 3, 1, 6];

function double(x) {
  return x * 2;
}

function binary(x) {
  return x.toString(2);
}

// All elements of arr gets transformed as per logic provided

console.log(`Double array`, arr.map(double));
console.log(`Binary array`, arr.map(binary));

// We can put the function definition in MAP too

console.log(
  `Triple array`,
  arr.map(function triple(x) {
    return x * 3;
  })
);

// We can use arrow function in MAP too

console.log(
  `Cube array`,
  arr.map((x) => x * x * x)
);

// FILTER function is used to filter out items from an array
// We can use Arrow function and Function definition inside FILTER too

function isEven(x) {
  return x % 2 === 0;
}

console.log(`Even elements in array`, arr.filter(isEven));
console.log(
  `Elements greater than 5 in array`,
  arr.filter((x) => x > 5)
);

// REDUCE function is used to get single element/ value from an array
// Used mainly for finding sum, max, min

function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

console.log(`Sum of elements in array`, findSum(arr));

// Reduce take 2 parameters - Function and initial value of result
// Function itself takes 2 parameters - ACC and CURR

// ACC - accumulator which hold RESULT of previous items traversed in array
// CURR - denotes the current item in array

const out1 = arr.reduce(function (acc, curr) {
  acc = acc + curr; // acc will hold sum of all values traversed till now as we are summing it up
  return acc; // curr will be the current element
}, 0);

console.log(`Sum of elements in array using REDUCE`, out1);

const out2 = arr.reduce(function (acc, curr) {
  if (curr > acc) {
    // check if CURR is greater than value present in ACC
    // here we are just replacing a single value
    acc = curr;
  }
  return acc;
}, 0);

console.log(`Maximum element in array using REDUCE`, out2);

// Below are more real life examples for MAP, FILTER and REDUCE

const people = [
  {
    firstName: "Himanshu",
    lastName: "Singh",
    age: 27,
  },
  {
    firstName: "Barak",
    lastName: "Obama",
    age: 58,
  },
  {
    firstName: "Sheldon",
    lastName: "Cooper",
    age: 35,
  },
  {
    firstName: "Pawn",
    lastName: "Stars",
    age: 65,
  },
  {
    firstName: "Storage",
    lastName: "Wars",
    age: 65,
  },
];

const outName = people.map((x) => x.firstName + " " + x.lastName);
console.log(`outName`, outName);

const outEqualAge = people.reduce(function (acc, curr) {
  // Traverse each row in object and check if AGE is present in ACC object
  // If PRESENT, increase by 1, else ASSIGN with 1
  if (acc[curr.age]) {
    acc[curr.age] = acc[curr.age] + 1;
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(`outEqualAge`, outEqualAge);
