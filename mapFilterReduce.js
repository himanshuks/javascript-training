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
