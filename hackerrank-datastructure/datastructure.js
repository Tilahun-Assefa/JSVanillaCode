/*
 * Complete the 'hourglassSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function hourglassSum(a) {
    // Write your code here
    let maxSumHourGlass = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < a.length - 2; i++) {
        let sum = 0;
        for (let j = 0; j < a.length - 2; j++) {
            sum = a[i][j] + a[i][j + 1] + a[i][j + 2] + a[i + 1][j + 1] + a[i + 2][j] + a[i + 2][j + 1] + a[i + 2][j + 2];
            maxSumHourGlass = sum > maxSumHourGlass ? sum : maxSumHourGlass;
        }
    }
    return maxSumHourGlass;
}

// console.log(hourglassSum([[-9, -9, -9, 1, 1, 1], [0, -9, 0, 4, 3, 2], [-9, -9, -9, 1, 2, 3], [0, 0, 8, 6, 6, 0], [0, 0, 0, -2, 0, 0], [0, 0, 1, 2, 4, 0]]) === 28);
// console.log(hourglassSum([[1, 1, 1, 0, 0, 0], [0, 1, 0, 0, 0, 0], [1, 1, 1, 0, 0, 0], [0, 0, 2, 4, 4, 0], [0, 0, 0, 2, 0, 0], [0, 0, 1, 2, 4, 0]]) === 19);

/*
 * Complete the 'dynamicArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

function dynamicArray(n, queries) {
    // Write your code here
    let lastAnswer = 0;
    const answers = [];
    let arr = [];
    for (let i = 0; i < n; i++) {
        const el = [];
        arr.push(el);
    }
    for (let i = 0; i < queries.length; i++) {
        if (queries[i][0] === 1) {
            let idx = (queries[i][1] ^ lastAnswer) % n;
            arr[idx].push(queries[i][2]);
        } else if (queries[i][0] === 2) {
            let idx = (queries[i][1] ^ lastAnswer) % n;
            lastAnswer = arr[idx][queries[i][2] % arr[idx].length];
            answers.push(lastAnswer);
        }
    }
    return answers;
}

// console.log(dynamicArray(2, [[1, 0, 5], [1, 1, 7], [1, 0, 3], [2, 1, 0], [2, 1, 1]]));  //[7,3]

/*
 * Complete the 'rotateLeft' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER d
 *  2. INTEGER_ARRAY arr
 */

function rotateLeft(d, arr) {
    // Write your code here
    for (let i = 0; i < d; i++) {
        let el = arr.shift();
        arr.push(el);
    }
    return arr;
}

// console.log(rotateLeft(2, [1, 2, 3, 4, 5]));    //[3,4,5,1,2]
// console.log(rotateLeft(4, [1, 2, 3, 4, 5]));    //[5,1,2,3,4]

/*
 * Complete the 'matchingStrings' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY stringList
 *  2. STRING_ARRAY queries
 */

function matchingStrings(stringList, queries) {
    // Write your code here
    let result = [];
    for (let i = 0; i < queries.length; i++) {
        let cnt = 0;
        for (let j = 0; j < stringList.length; j++) {
            if (queries[i] === stringList[j]) {
                cnt++;
            }
        }
        result.push(cnt);
    }
    return result;
}

// console.log(matchingStrings(["aba", "baba", "aba", "xzxb"], ["aba", "xzxb", "ab"]));    //[2,1,0]
// console.log(matchingStrings(["def", "de", "fgh"], ["de", "lmn", "fgh"]));       //[1, 0, 1]
// console.log(matchingStrings(["abcde", "sdaklfj", "asdjf", "na", "basdn", "sdaklfj", "asdjf", "na", "asdjf", "na", "basdn", "sdaklfj", "asdjf"],
// ["abcde", "sdaklfj", "asdjf", "na", "basdn"]));     //[1, 3, 4, 3, 2]

/*
 * Complete the 'arrayManipulation' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

function arrayManipulation(n, queries) {
    // Write your code here
    let maxValue = 0;
    const arr = Array(n).fill(0);
    for (let i = 0; i < queries.length; i++) {
        const elem = queries[i];
        for (let k = elem[0] - 1; k < elem[1]; k++) {
            arr[k] += elem[2];
            if (arr[k] > maxValue) {
                maxValue = arr[k];
            }
        }
    }
    return maxValue;
}

console.log(arrayManipulation(10, [[1, 5, 3], [4, 8, 7], [6, 9, 1]]));  //10
console.log(arrayManipulation(5, [[1, 2, 100], [2, 5, 100], [3, 4, 100]])); //200
