let i = 0;
while (i < 3) { // shows 0, then 1, then 2
  alert( i );
  i++;
}

let i = 3;
while (i) { // when i becomes 0, the condition becomes falsy, and the loop stops
  alert( i );
  i--;
}

let i = 3;
while (i) alert(i--);

let i = 0;
do {
  alert( i );
  i++;
} while (i < 3);

for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
  alert( i );
}

// for (let i = 0; i < 3; i++) alert(i)

// run begin
let i = 0
// if condition → run body and run step
if (i < 3) { alert(i); i++ }
// if condition → run body and run step
if (i < 3) { alert(i); i++ }
// if condition → run body and run step
if (i < 3) { alert(i); i++ }
// ...finish, because now i == 3

for (let i = 0; i < 3; i++) {
  alert(i); // 0, 1, 2
}
alert(i); // error, no such variable

let i = 0;
for (i = 0; i < 3; i++) { // use an existing variable
  alert(i); // 0, 1, 2
}
alert(i); // 3, visible, because declared outside of the loop

let i = 0; // we have i already declared and assigned
for (; i < 3; i++) { // no need for "begin"
  alert( i ); // 0, 1, 2
}

let i = 0;
for (; i < 3; ) {
  alert( i++ );
}

for (;;) {
  // repeats without limits
}

let sum = 0;
while (true) {
  let value = +prompt("Enter a number", '');
  if (!value) break; // (*)
  sum += value;
}
alert( 'Sum: ' + sum );

for (let i = 0; i < 10; i++) {
  // if true, skip the remaining part of the body
  if (i % 2 == 0) continue;
  alert(i); // 1, then 3, 5, 7, 9
}

for (let i = 0; i < 10; i++) {
  if (i % 2) {
    alert(i);
  }
}

if (i > 5) {
  alert(i);
} else {
  continue;
}

(i > 5) ? alert(i) : continue; // continue isn't allowed here

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt(`Value at coords (${i},${j})`, '');
    // what if we want to exit from here to Done (below)?
  }
}
alert('Done!');

outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt(`Value at coords (${i},${j})`, '');
    // if an empty string or canceled, then break out of both loops
    if (!input) break outer; // (*)
    // do something with the value...
  }
}
alert('Done!');

break label; // jump to the label below (doesn't work)
label: for (...)

label: {
  // ...
  break label; // works
  // ...
}

let i = 3;
while (i) {
  alert( i-- );
}

let i = 0;
while (++i < 5) alert( i );

let i = 0;
while (i++ < 5) alert( i );

for (let i = 0; i < 5; i++) alert( i );

for (let i = 0; i < 5; ++i) alert( i );

for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    alert( i );
  }
}

let i = 0;
while (i < 3) {
  alert( `number ${i}!` );
  i++;
}

let num;
do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);

let n = 10;
nextPrime:
  for (let i = 2; i <= n; i++) { // for each i...
    for (let j = 2; j < i; j++) { // look for a divisor..
      if (i % j == 0) continue nextPrime; // not a prime, go next i
    }
    alert( i ); // a prime
  }