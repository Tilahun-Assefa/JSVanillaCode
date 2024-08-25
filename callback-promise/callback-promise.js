//defining or registering the math operation callback functions
function opr(num1, num2, callback) {
    let res = 0;
    setTimeout(() => {
        res = callback(num1, num2);
        console.log("callback result: ", res)
    }, 2000);
}

//running the function with sum callback
opr(5, 9, function (x, y) {
    return x + y;
});

//running the function with multiply callback
opr(5, 9, function (x, y) {
    return x * y;
});

//defining the promise function
function addPromise(number1, number2) {
    let sum = number1 + number2;
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(sum), 4000);
        setTimeout(() => reject(new Error("Promise Error")), 4000);
    });
}
addPromise(89, 65).then(result => console.log("promise sum: ", result)).catch(err => console.error(err));

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise Resolve"), 1000);
    setTimeout(() => reject(new Error("Promise Error")), 1000);
});

myPromise.then(result => console.log("result: ", result)).catch(err => console.error(err));