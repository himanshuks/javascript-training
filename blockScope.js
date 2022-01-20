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

// Variables defined inside BLOCK has separate scope and memory location
// They are different from Global scope
// Block scope gets destroyed once control gets outside it

var abc = 2;
{
  let abc = 3;
  console.log(`abc IN`, abc); // 3
}
console.log(`abc OUT`, abc); // 2
// This won't give error as ABC is defined both in Global & Block scope respectively and separately

var adef = 2;
{
  var adef = 3;
  console.log(`adef IN`, adef); // 3
}
console.log(`adef OUT`, adef); // 3
// This won't give error as ABC is defined as VAR which is always in Global scope
// Due to same memory location, value of ABC gets updated irrespective of scope

let ahij = 21;
{
  let ahij = 31;
  console.log(`ahij IN`, ahij); // 31
}
console.log(`ahij OUT`, ahij); // 21
// This won't give error as ABC is defined both in Script & Block scope respectively and separately
// Since block scope get deleted, first 31 will print then 21
