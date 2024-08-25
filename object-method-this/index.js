"use strict";

function sayHi() {
    console.log(this);
}

sayHi();

function makeUser() {
    return {
        name: "Kol",
        ref: this,
        f() {
            return this;
        }
    };
}

let user = makeUser();

console.log(user.f().name);

//an extendable calculator

function Calculator() {
    this.methods = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b
    };

    this.calculate = function (str) {
        let nums = str.split(" ");
        if (!this.methods[nums[1]] || isNaN(nums[0]) || isNaN(nums[2])) {
            return NaN;
        }
        return this.methods[nums[1]](+nums[0], +nums[2]);
    };
    this.addMethod = function (name, func) {
        this.methods[name] = func
    }
}

let calc = new Calculator;

console.log(calc.calculate("3 + 7")); // 10

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert(result); // 8