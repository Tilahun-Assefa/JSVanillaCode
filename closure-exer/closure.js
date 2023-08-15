/*function makeWorker() {
    let name = "Pete";

    return function () {
        console.log(name);
    };
}

let name = "John";

// create a function
let work = makeWorker();

// call it
work(); // what will it show?

// Look at the code. What will be the result of the call at the last line?
let phrase = "Hello";

if (true) {
    let user = "John";

    function sayHi() {
        console.log(`${phrase}, ${user}`);
    }
}

sayHi();

// Write function sum that works like this: sum(a)(b) = a+b
function sum(a) {
    return function (b) {
        return a + b;
    }
}
console.log(sum(1)(2)); //= 3
console.log(sum(5)(-1)); //= 4

// What will be the result of this code?
let x = 1;

function func() {
    console.log(x); // ?
    let x = 2;
}

// func();

// Make a set of “ready to use” filters:
// inBetween(a, b) – between a and b or equal to them (inclusively).
// inArray([...]) – in the given array.
function inBetween(a, b) {
    return function (elem) {
        return elem >= a && elem <= b
    }
}

function inArray(arr) {
    return function (elem) {
        return arr.includes(elem);
    }
}

/* .. your code for inBetween and inArray */
/*
let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6

console.log(arr.filter(inArray([1, 2, 10]))); // 1,2

// Write the function byField that can be used for that.
function byField(fieldName) {
    return function (a, b) {
        return a[fieldName] > b[fieldName] ? 1 : -1
    }
}

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

console.log(users.sort(byField('name')));
console.log(users.sort(byField('age')));
*/
// The following code creates an array of shooters.
// Every function is meant to output its number. But something is wrong…
function makeArmy() {
    let shooters = [];

    let i = 0;
    while (i < 10) {
        let j = i;
        let shooter = function () { // create a shooter function,
            console.log(j); // that should show its number
        };
        shooters.push(shooter); // and add it to the array
        i++;
    }

    // ...and return the array of shooters
    return shooters;
}

let army = makeArmy();

// all shooters show 10 instead of their numbers 0, 1, 2, 3...
army[0](); // 10 from the shooter number 0
army[1](); // 10 from the shooter number 1
army[2](); // 10 ...and so on.