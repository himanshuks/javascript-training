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
