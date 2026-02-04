let message;
message = 'Hello!';

alert(message); // shows the variable content



let user = 'John', age = 25, message = 'Hello';


let user = 'John';
let age = 25;
let message = 'Hello';

let user = 'John',
  age = 25,
  message = 'Hello';

let user = 'John'
  , age = 25
  , message = 'Hello';

var message = 'Hello';

let message;

message = 'Hello!';

message = 'World!'; // value changed

alert(message);

let hello = 'Hello world!';

let message;

// copy 'Hello world' from hello into message
message = hello;

// now two variables hold the same data
alert(hello); // Hello world!
alert(message); // Hello world!

let message = "This";

// repeated 'let' leads to an error
let message = "That"; // SyntaxError: 'message' has already been declared


let userName;
let test123;

let $ = 1; // declared a variable with the name "$"
let _ = 2; // and now a variable with the name "_"

alert($ + _); // 3


let 1a; // cannot start with a digit

let my-name; // hyphens '-' aren't allowed in the name

let имя = '...';
let 我 = '...';

let let = 5; // can't name a variable "let", error!
let return = 5; // also can't name it "return", error!

// note: no "use strict" in this example

num = 5; // the variable "num" is created if it didn't exist

alert(num); // 5

"use strict";

num = 5; // error: num is not defined

const myBirthday = '18.04.1982';

const myBirthday = '18.04.1982';

myBirthday = '01.01.2001'; // error, can't reassign the constant!

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
let color = COLOR_ORANGE;
alert(color); // #FF7F00

const pageLoadTime = /* time taken by a webpage to load */;

const birthday = '18.04.1982';

const age = someCode(birthday);

const BIRTHDAY = '18.04.1982'; // make birthday uppercase?

const AGE = someCode(BIRTHDAY); // make age uppercase?
