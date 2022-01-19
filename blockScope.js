// Block - Compound statements
// Group of statements to be used as single statement in code

if (true) true;

if (true) {
  var a = 10;
  console.log(`a`, a); // 10
}

// IF expects only one single statement but we use {} for multiple statements

{
  var x = 2;
  let y = 3;
  const z = 4;

  console.log(`x in Block`, x); // 2
  console.log(`y in Block`, y); // 3
  console.log(`z in Block`, z); // 4
}

console.log(`x in Global`, x); // 2
// console.log(`y in Global`, y);  // ReferenceError: y is not defined
// console.log(`z in Global`, z);  // ReferenceError: z is not defined
