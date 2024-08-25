/*function sumInput() {
    let arr = [];
    while (true) {
        let num = prompt("Enter number, please?", 0);
        if (num === null || !isFinite(num) || num === "") {
            break;
        }
        arr.push(+num);
    }
    let sum = 0;
    for (let elem of arr) {
        sum += elem;
    }
    return sum;
}
alert(sumInput());

function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;

    for (let num of arr) {
        partialSum += num;
        if (partialSum > maxSum) {
            maxSum = partialSum;
        }
        if (partialSum < 0) {
            partialSum = 0;
        }
    }
    return maxSum;
}

console.log(getMaxSubSum([-1, 2, 3, -9]) === 5); //== 5 (the sum of highlighted items)
console.log(getMaxSubSum([2, -1, 2, 3, -9]) === 6);// == 6
console.log(getMaxSubSum([-1, 2, 3, -9, 11]) === 11) //== 11
console.log(getMaxSubSum([-2, -1, 1, 2]) === 3)// == 3
console.log(getMaxSubSum([100, -9, 2, -3, 5]) === 100) //== 100
console.log(getMaxSubSum([1, 2, 3]) === 6)//== 6 (take all)
console.log(getMaxSubSum([-1, -2, -3]) === 0) //=0

function filterRange(arr, a, b) {
    return arr.filter((elem) => elem >= a && elem <= b);
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert(filtered); // 3,1 (matching values)

alert(arr); // 5,3,8,1 (not modified)

function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];

        // remove if outside of the interval
        if (val < a || val > b) {
            arr.splice(i, 1);
            i--;
        }
    }
}

let myArr = [5, 5, 3, 8, 1];

filterRangeInPlace(myArr, 1, 4); // removed the numbers except from 1 to 4

alert(myArr); // [3, 1]

let arr = [5, 2, 1, -10, 8];

// ... your code to sort it in decreasing order

alert( arr ); // 8, 5, 2, 1, -10

//sort in decreasing order
let arr = [5, 2, 1, -10, 8];

// ... your code to sort it in decreasing order
arr.sort((a, b) => b - a);

console.log(arr); // 8, 5, 2, 1, -10

//copy and sort array
let arr1 = ["HTML", "JavaScript", "CSS"];
function copySorted(arr) {
    return arr.slice().sort();
}

let sorted = copySorted(arr1);

console.log("sorted array: ", sorted); // CSS, HTML, JavaScript
console.log("unsorted array: ", arr1); // HTML, JavaScript, CSS (no changes)



//Write the code that converts it into an array of names.
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

let names = users.map(obj => obj.name);

alert(names); // John, Pete, Mary

//Write the code to create another array from it, of objects with id and fullName, 
//where fullName is generated from name and surname
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

let usersMapped = users.map(user => (
    { fullName: `${user.name} ${user.surname}`, id: user.id }
));


// usersMapped = [
//   { fullName: "John Smith", id: 1 },
//   { fullName: "Pete Hunt", id: 2 },
//   { fullName: "Mary Key", id: 3 }
// ]


alert(usersMapped[0].id) // 1
alert(usersMapped[0].fullName) // John Smith

//Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age
function sortByAge(users) {
    return users.sort((a, b) => a.age - b.age)
}
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [pete, john, mary];

sortByAge(arr);

// now: [john, mary, pete]
console.log(arr);

//Write the function shuffle(array) that shuffles (randomly reorders) elements of the array
function shuffle(myArr) {
    for (let i = myArr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        console.log("j", j);
    }

    return myArr.sort(() => Math.random() - 0.5);

}

let arrShuffle = [1, 2, 3];

console.log(shuffle(arrShuffle));
// arr = [3, 2, 1]

console.log(shuffle(arrShuffle));
// arr = [2, 1, 3]

console.log(shuffle(arrShuffle));
// arr = [3, 1, 2]
// ...

//Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.
function getAverageAge(users) {
    let sum = users.reduce((accum, cur) => accum += cur.age, 0)
    return sum / users.length
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [john, pete, mary];

console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28
*/
//Create a function groupById(arr) that creates an object from array
let users = [
    { id: 'john', name: "John Smith", age: 20 },
    { id: 'ann', name: "Ann Smith", age: 24 },
    { id: 'pete', name: "Pete Peterson", age: 31 },
];

function groupById(arr) {
    return arr.reduce((accum, cur) => {
        accum[cur.id] = cur;
        return accum;
    }, {});
}

let usersById = groupById(users);

console.log(usersById);
/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/