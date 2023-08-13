//Create a function readNumber which prompts for a number until the visitor enters a valid numeric value.
function readNumber() {
    let num;
    do {
        num = prompt("Enter valid number");

    } while (!isFinite(num))

    if (num === "" || num === null) {
        return null
    }
    return +num;
}

console.log(readNumber());

//Write the function random(min, max) to generate a random floating-point number from min to max (not including max)
function random(min, max){
    return min + Math.random()*(max-min);
}

alert( random(1, 5) ); // 1.2345623452
alert( random(1, 5) ); // 3.7894332423
alert( random(1, 5) ); // 4.3435234525