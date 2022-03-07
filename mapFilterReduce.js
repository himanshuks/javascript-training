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
