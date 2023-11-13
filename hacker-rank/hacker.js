/*
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s
 *  2. INTEGER t
 *  3. INTEGER a
 *  4. INTEGER b
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 */

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let numApples = 0;
    let numOrange = 0;
    const appPositions = apples.map((ap) => ap + a);
    appPositions.forEach((ad) => {
        if (ad >= s && ad <= t) {
            numApples++;
        }
    });
    const orPositions = oranges.map((or) => or + b);
    orPositions.forEach((od) => {
        if (od >= s && od <= t) {
            numOrange++;
        }
    });
    console.log(numApples);
    console.log(numOrange);
}


function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    let posFirstK = x1;
    let posSecondK = x2;
    let numJump = 0;
    let status = true;
    if (posFirstK === posSecondK) {
        return "YES";
    }
    if ((posFirstK > posSecondK && v1 >= v2) || (posSecondK > posFirstK && v2 >= v1)) {
        return "NO";
    }

    if (posFirstK > posSecondK && v2 > v1) {
        while (status) {
            posFirstK += v1;
            posSecondK += v2;
            numJump++;
            if (posFirstK === posSecondK) {
                status = false;
                return "YES";
            }
            if (posFirstK < posSecondK) {
                return "NO";
            }
        }
    }

    if (posFirstK < posSecondK && v2 < v1) {
        while (status) {
            posFirstK += v1;
            posSecondK += v2;
            numJump++;
            if (posFirstK === posSecondK) {
                status = false;
                return "YES";
            }
            if (posFirstK > posSecondK) {
                return "NO";
            }
        }
    }

}


// console.log(kangaroo(0, 3, 4, 2));
// console.log(kangaroo(0, 2, 5, 3));


/*
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function getTotalX(a, b) {
    let flagA = true;
    let flagB = true;
    let gcf = [];
    // Write your code here
    for (let num = a[a.length - 1]; num <= b[0]; num++) {
        for (let k = 0; k < a.length; k++) {
            if (num % a[k] > 0) {
                flagA = false;
            }
        }
        for (let j = 0; j < b.length; j++) {
            if (b[j] % num > 0) {
                flagB = false;
            }
        }
        if (flagA && flagB) {
            gcf.push(num);
        }
        flagA = true;
        flagB = true;
    }
    return gcf.length;
}

/*
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */
function breakingRecords(scores) {
    // Write your code here
    let max = 0, min = 0;
    let maxScore = scores[0], minScore = scores[0];
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] > maxScore) {
            maxScore = scores[i];
            max++;
        }
        if (scores[i] < minScore) {
            minScore = scores[i];
            min++;
        }
    }
    return [max, min];
}

/*
 * Complete the 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d
 *  3. INTEGER m
 */

function birthday(s, d, m) {
    // Write your code here
    let cnt = 0;
    for (let i = 0; i <= s.length - m; i++) {
        let sum = 0;
        for (let j = i; j < m + i; j++) {
            sum += s[j];
        }
        if (sum == d) {
            cnt++;
        }
    }
    return cnt;
}

/*
 * Complete the 'divisibleSumPairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER_ARRAY ar
 */

function divisibleSumPairs(n, k, ar) {
    // Write your code here
    let cnt = 0;
    for (let i = 0; i < ar.length; i++) {
        for (let j = i + 1; j < ar.length; j++) {
            if ((ar[i] + ar[j]) % k == 0) {
                cnt++;
            }
        }
    }
    return cnt;
}

/*
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr) {
    // Write your code here
    let mostRecurrent = 0;
    let recurElem;

    for (let i = 1; i <= 5; i++) {
        let cnt = 0;
        let elem = i;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] == elem) {
                cnt++;
            }
        }
        if (cnt > mostRecurrent) {
            mostRecurrent = cnt;
            recurElem = elem;
        }
    }
    return recurElem;
}

/*
 * Complete the 'dayOfProgrammer' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER year as parameter.
 */

function dayOfProgrammer(year) {
    // Write your code here
    let monthString = "09";
    let yearString = year.toString();
    let day;

    if (year < 1918 && year % 4 === 0) {
        day = 12
    } else if (year === 1918) {
        day = 26;
    }
    else if (year > 1918 && (year % 4 == 0 && year % 100 != 0)) {
        day = 12;
    } else if (year > 1918 && (year % 400 == 0)) {
        day = 12
    } else {
        day = 13;
    }
    return (day.toString() + "." + monthString + "." + yearString);
}

// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c, k) {
    let e = 100;
    let n = c.length;
    let cnt = 1;
    let i = 0
    do {
        e--;
        if (c[(i + k) % n] === 1) {
            e -= 2;
        }
        i += k;
        console.log("jump", cnt, "Energy", e);
        cnt++;
    } while (i % n != 0)
    return e;
}

// console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0], 2));
// console.log(jumpingOnClouds([1, 1, 1, 0, 1, 1, 0, 0, 0, 0], 3));

/*
 * Complete the 'findDigits' function below.
/*
 * Complete the 'bonAppetit' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY bill
 *  2. INTEGER k
 *  3. INTEGER b
 */

function bonAppetit(bill, k, b) {
    // Write your code here
    let bCharged = b;
    let bActual = 0;
    let totalBill = 0;
    let printMessage;
    for (let i = 0; i < bill.length; i++) {
        totalBill += bill[i];
    }
    bActual = (totalBill - bill[k]) / 2;
    if (bCharged === bActual) {
        printMessage = "Bon Appetit";
    } else {
        printMessage = bCharged - bActual;
    }
    console.log(printMessage);
}


/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, ar) {
    // Write your code here
    let distinctSocks = ar.filter((item, index) => {
        return ar.indexOf(item) === index;
    });
    let pairs = 0;

    for (let i = 0; i < distinctSocks.length; i++) {
        let cnt = 0;
        let sock = distinctSocks[i];
        for (let j = 0; j < ar.length; j++) {
            if (ar[j] === sock) {
                cnt++;
            }
        }
        pairs += parseInt(cnt / 2);
    }
    return pairs;
}

/*
 * Complete the 'pageCount' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER p
 */

function pageCount(n, p) {
    // Write your code here
    let minTurn = parseInt(p / 2);
    let numBack = 0;
    if (n % 2 === 0) {
        numBack = parseInt((n + 1 - p) / 2);
    } else {
        numBack = parseInt((n - p) / 2);
    }
    if (numBack < minTurn) {
        minTurn = numBack;
    }

    return minTurn;
}

/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {
    // Write your code here
    let level = 0;
    let numValleys = 0
    let arrPath = path.split("");

    arrPath.forEach(element => {
        if (element === "U") {
            level++;
        }
        if (element === "D") {
            if (level == 0) {
                numValleys++;
            }
            level--;

        }
    });
    return numValleys;
}

//countingValleys(8, "UDDDUDUU");

/*
 * Complete the getMoneySpent function below.
 */
function getMoneySpent(keyboards, drives, b) {
    /*
     * Write your code here.
     */
    let expensive = -1;
    let sum;
    keyboards.forEach((elem) => {
        for (let i = 0; i < drives.length; i++) {
            sum = elem + drives[i];
            if ((sum > expensive) && (sum <= b)) {
                expensive = sum;
            }
        }
    });
    return expensive;
}

// Complete the catAndMouse function below.
function catAndMouse(x, y, z) {
    let catADist = Math.abs(z - x);
    let catBDist = Math.abs(z - y);
    let result;
    if (catADist < catBDist) {
        result = "Cat A";
    } else if (catBDist < catADist) {
        result = "Cat B";
    } else {
        result = "Mouse C";
    }
    return result;
}

/*
 * Complete the 'formingMagicSquare' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY s as parameter.
 */

function formingMagicSquare(s) {
    // Write your code here

    let x1 = Math.abs(s[0][0] - 8) + Math.abs(s[0][1] - 1) + Math.abs(s[0][2] - 6) +
        Math.abs(s[1][0] - 3) + Math.abs(s[1][1] - 5) + Math.abs(s[1][2] - 7) +
        Math.abs(s[2][0] - 4) + Math.abs(s[2][1] - 9) + Math.abs(s[2][2] - 2);

    let x2 = Math.abs(s[0][0] - 6) + Math.abs(s[0][1] - 1) + Math.abs(s[0][2] - 8) +
        Math.abs(s[1][0] - 7) + Math.abs(s[1][1] - 5) + Math.abs(s[1][2] - 3) +
        Math.abs(s[2][0] - 2) + Math.abs(s[2][1] - 9) + Math.abs(s[2][2] - 4);

    let x3 = Math.abs(s[0][0] - 4) + Math.abs(s[0][1] - 3) + Math.abs(s[0][2] - 8) +
        Math.abs(s[1][0] - 9) + Math.abs(s[1][1] - 5) + Math.abs(s[1][2] - 1) +
        Math.abs(s[2][0] - 2) + Math.abs(s[2][1] - 7) + Math.abs(s[2][2] - 6);

    let x4 = Math.abs(s[0][0] - 8) + Math.abs(s[0][1] - 3) + Math.abs(s[0][2] - 4) +
        Math.abs(s[1][0] - 1) + Math.abs(s[1][1] - 5) + Math.abs(s[1][2] - 9) +
        Math.abs(s[2][0] - 6) + Math.abs(s[2][1] - 7) + Math.abs(s[2][2] - 2);

    let x5 = Math.abs(s[0][0] - 2) + Math.abs(s[0][1] - 9) + Math.abs(s[0][2] - 4) +
        Math.abs(s[1][0] - 7) + Math.abs(s[1][1] - 5) + Math.abs(s[1][2] - 3) +
        Math.abs(s[2][0] - 6) + Math.abs(s[2][1] - 1) + Math.abs(s[2][2] - 8);

    let x6 = Math.abs(s[0][0] - 4) + Math.abs(s[0][1] - 9) + Math.abs(s[0][2] - 2) +
        Math.abs(s[1][0] - 3) + Math.abs(s[1][1] - 5) + Math.abs(s[1][2] - 7) +
        Math.abs(s[2][0] - 8) + Math.abs(s[2][1] - 1) + Math.abs(s[2][2] - 6);

    let x7 = Math.abs(s[0][0] - 6) + Math.abs(s[0][1] - 7) + Math.abs(s[0][2] - 2) +
        Math.abs(s[1][0] - 1) + Math.abs(s[1][1] - 5) + Math.abs(s[1][2] - 9) +
        Math.abs(s[2][0] - 8) + Math.abs(s[2][1] - 3) + Math.abs(s[2][2] - 4);

    let x8 = Math.abs(s[0][0] - 2) + Math.abs(s[0][1] - 7) + Math.abs(s[0][2] - 6) +
        Math.abs(s[1][0] - 9) + Math.abs(s[1][1] - 5) + Math.abs(s[1][2] - 1) +
        Math.abs(s[2][0] - 4) + Math.abs(s[2][1] - 3) + Math.abs(s[2][2] - 8);

    let arr = [x1, x2, x3, x4, x5, x6, x7, x8];
    let minCost = x1;

    arr.forEach((elem) => {
        if (elem < minCost) {
            minCost = elem;
        }
    });

    return minCost;
}

let sArr = [[5, 3, 4], [1, 5, 8], [6, 4, 2]];
let mArr = [[4, 9, 2], [3, 5, 7], [8, 1, 5]];
let dArr = [[4, 8, 2], [4, 5, 7], [6, 1, 6]];

// console.log(formingMagicSquare(sArr));
// console.log(formingMagicSquare(mArr));
// console.log(formingMagicSquare(dArr));

/*
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function pickingNumbers(a) {
    // Write your code here
    let longestSubArray = 0;
    let arr = a.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        let cnt = 0;
        for (let j = i; j < arr.length; j++) {
            if (Math.abs(arr[i] - arr[j]) <= 1) {
                cnt++;
            }
        }
        if (cnt > longestSubArray) {
            longestSubArray = cnt;
        }
    }

    return longestSubArray;
}

// console.log(pickingNumbers([1, 1, 2, 2, 4, 4, 5, 5, 5]));
// console.log(pickingNumbers([4, 6, 5, 3, 3, 1]));

/*
 * Complete the 'climbingLeaderboard' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY ranked
 *  2. INTEGER_ARRAY player
 */
// function climbingLeaderboard(ranked, player) {
//     // Write your code here
//     let result = [];
//     player.forEach((score) => {
//         ranked.push(score);
//         let newRanked = ranked.sort((a, b) => b - a);
//         let r = 1;
//         let ranks = newRanked.map((el, i) => {
//             if (i > 0 && el < ranked[i - 1]) {
//                 r++;
//             }
//             return r;
//         });
//         let index = newRanked.indexOf(score);
//         let rank = ranks[index];
//         result.push(rank)
//     });

//     return result;
// }

function climbingLeaderboard(ranked, player) {
    // Write your code here
    let result = [];
    let uniqueRanked = [...new Set(ranked)];
    let index = uniqueRanked.length - 1;
    player.forEach((score) => {
        while (uniqueRanked[index] < score) {
            index--;
        }
        if (score === uniqueRanked[index]) {
            result.push(index + 1);
        } else {
            result.push(index + 2);
        }
    });
    return result;
}

// console.log(climbingLeaderboard([100, 100, 90, 90, 80], [70, 80, 105]));
// console.log(climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120]));
// console.log(climbingLeaderboard([100, 90, 90, 80, 75, 60], [50, 65, 77, 90, 102]));

/*
 * Complete the 'hurdleRace' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY height
 */

function hurdleRace(k, height) {
    // Write your code here
    let dose = 0;
    height.forEach((h) => {
        if (h > k && (h - k) > dose) {
            dose = h - k;
        }
    });
    return dose;
}

// console.log(hurdleRace(7, [2, 5, 4, 5, 2]));

/*
 * Complete the 'designerPdfViewer' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY h
 *  2. STRING word
 */

function designerPdfViewer(h, word) {
    // Write your code here
    let maxHeight = h[0];
    let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    word.split("").forEach((w) => {
        let index = letters.indexOf(w);
        if (h[index] > maxHeight) {
            maxHeight = h[index];
        }
    });
    return word.length * maxHeight;
}

// console.log(designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7], "zaba"));

/*
 * Complete the 'utopianTree' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function findDigits(n) {
    // Write your code here
    let arrNum = n.toString().split("");
    let cnt = 0;
    arrNum.forEach(el => {
        if (n % parseInt(el) === 0) {
            cnt++;
        }
    });
    return cnt;
}

// console.log(findDigits(12));
// console.log(findDigits(1012));

function utopianTree(n) {
    // Write your code here
    let height = 1
    if (n == 0) {
        return height;
    }
    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            height *= 2;
        } else {
            height += 1;
        }
    }
    return height;
}

// console.log(utopianTree(4));

/*
 * Complete the 'angryProfessor' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY a
 */

function angryProfessor(k, a) {
    // Write your code here
    let cnt = 0;
    a.forEach((m) => {
        if (m <= 0) {
            cnt++;
        }
    });
    if (cnt >= k) {
        return "NO";
    }
    return "YES";
}

// console.log(angryProfessor(3, [-2, -1, 0, 1, 2]));


/*
 * Complete the 'beautifulDays' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER i
 *  2. INTEGER j
 *  3. INTEGER k
 */

function beautifulDays(i, j, k) {
    // Write your code here
    let cnt = 0;
    for (let num = i; num <= j; num++) {
        let rev = num.toString().split('').reverse().join('');
        if ((num - parseInt(rev)) % k == 0) {
            cnt++;
        }
    }
    return cnt;
}

// console.log(beautifulDays(20, 23, 6));

/*
 * Complete the 'viralAdvertising' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function viralAdvertising(n) {
    // Write your code here
    let cumlative = 0;
    let start = 5;
    for (let i = 0; i < n; i++) {
        cumlative += Math.floor(start / 2);
        start = Math.floor(start / 2) * 3;
    }
    return cumlative;
}

// console.log(viralAdvertising(1));
// console.log(viralAdvertising(2));
// console.log(viralAdvertising(3));
// console.log(viralAdvertising(4));
// console.log(viralAdvertising(5));


/*
 * Complete the 'saveThePrisoner' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER m
 *  3. INTEGER s
 */

function saveThePrisoner(n, m, s) {
    // Write your code here  
    return (m + s - 1) % n || n;
}

// console.log(saveThePrisoner(7, 20, 1));
// console.log(saveThePrisoner(3, 7, 3));
// console.log(saveThePrisoner(352926151, 380324688, 94730870)); //122129406
// console.log(saveThePrisoner(94431605, 679262176, 5284458));//23525398



/*
 * Complete the 'circularArrayRotation' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER k
 *  3. INTEGER_ARRAY queries
 */

function circularArrayRotation(a, k, queries) {
    // Write your code here
    let q = [];
    for (let i = 0; i < k; i++) {
        const el = a.pop();
        a.unshift(el);
    }
    queries.forEach((m) => {
        q.push(a[m]);
    });
    return q;
}
// console.log(circularArrayRotation([1, 2, 3], 2, [0, 1, 2]));
// console.log(circularArrayRotation([3, 4, 5], 2, [1, 2]));

/*
 * Complete the 'permutationEquation' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY p as parameter.
 */

function permutationEquation(p) {
    // Write your code here
    let arr = [];
    for (let i = 0; i < p.length; i++) {
        const el = p.indexOf(i + 1);
        arr.push(el);
    }
    let y = arr.map((n) => (n + 1));

    let result = y.map((v) => p.indexOf(v) + 1);
    return result;
}

// console.log(permutationEquation([5, 2, 1, 3, 4]));


/*
 * Complete the 'extraLongFactorials' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function extraLongFactorials(n) {
    // Write your code here
    // if (n === 1) {
    //     return 1;
    // }
    // return extraLongFactorials(n - 1) * n;
    let factorial = 1n;
    for (let i = n; n > 0; n--) {
        factorial *= BigInt(n);
    }
    console.log(factorial.toString());
}

console.log(extraLongFactorials(25));



// Javascript program to compute factorial of big numbers

// This function finds factorial of large numbers
// and prints them
function factorial(n) {
    let res = new Array(200);

    // Initialize result
    res[0] = 1;
    let res_size = 1;

    // Apply simple factorial formula n! = 1 * 2 * 3 * 4...*n
    for (let x = 2; x <= n; x++)
        res_size = multiply(x, res, res_size);

    let display = [];
    for (let i = res_size - 1; i >= 0; i--) {
        display.push(res[i]);
    }
    console.log(display.join(''));
}

// This function multiplies x with the number 
// represented by res[].
// res_size is size of res[] or number of digits in the 
// number represented by res[]. This function uses simple 
// school mathematics for multiplication.
// This function may value of res_size and returns the 
// new value of res_size
function multiply(x, res, res_size) {
    let carry = 0; // Initialize carry

    // One by one multiply n with individual digits of res[]
    for (let i = 0; i < res_size; i++) {
        let prod = res[i] * x + carry;

        // Store last digit of 'prod' in res[] 
        res[i] = prod % 10;

        // Put rest in carry
        carry = Math.floor(prod / 10);
    }

    // Put carry in res and increase result size
    while (carry) {
        res[res_size] = carry % 10;
        carry = Math.floor(carry / 10);
        res_size++;
    }
    return res_size;
}

// Driver program
// factorial(5);

/*
 * Complete the 'appendAndDelete' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. STRING t
 *  3. INTEGER k
 */

function appendAndDelete(s, t, k) {
    // Write your code here

}

/*
 * Complete the 'libraryFine' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER d1
 *  2. INTEGER m1
 *  3. INTEGER y1
 *  4. INTEGER d2
 *  5. INTEGER m2
 *  6. INTEGER y2
 */

function libraryFine(d1, m1, y1, d2, m2, y2) {
    // Write your code here

    if (y1 < y2) {
        return 0;
    }
    if (y1 > y2) {
        return 10000;
    }
    if (y1 === y2) {
        if (m1 < m2) {
            return 0;
        }
        if (m1 > m2) {
            return (m1 - m2) * 500;
        }
        if (m1 === m2) {
            return d1 <= d2 ? 0 : (d1 - d2) * 15;
        }

    }
    // return y1 > y2 ? 10000 : m1 > m2 ? (m1 - m2) * 500 : d1 > d2 ? ((d1 - d2) * 15) : 0;

}
// console.log(libraryFine(9, 6, 2015, 6, 6, 2015)); //45
// console.log(libraryFine(14, 7, 2018, 5, 7, 2018)); //135
// console.log(libraryFine(14, 7, 2019, 5, 7, 2018));  //10000

/*
 * Complete the 'cutTheSticks' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function cutTheSticks(arr) {
    // Write your code here

}

/*
 * Complete the 'nonDivisibleSubset' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY s
 */

function nonDivisibleSubsetTil(k, a) {
    // Write your code here
    let s = [...new Set(a)];
    let lenSubset = 0;
    let arr = [];
    for (let i = 0; i < s.length; i++) {
        arr[i] = [];
        arr[i].push(s[i]);
        for (let j = 0; j < s.length; j++) {
            if (j === i) {
                continue;
            }
            let flag = true;
            arr[i].forEach((el) => {
                if ((el + s[j]) % k === 0) {
                    flag = false;
                }
            });
            if (flag) {
                arr[i].push(s[j]);
            }
        }
        if (arr[i].length > lenSubset) {
            lenSubset = arr[i].length;
        }
        console.log(arr[i]);
    }
    return lenSubset;
}

function nonDivisibleSubset(k, s) {
    // Write your code here
    let result = 0;
    let arr = [...new Set(s)];
    let mod = [];
    for (let i = 0; i < k; i++) {
        mod.push((arr.filter((el) => el % k === i)).length);
    }
    for (let j = 0; j < (parseInt(k / 2 + 1)); j++) {
        if (j === 0 || j === k / 2) {
            result += mod[j] > 0 ? 1 : 0;
        } else {
            result += Math.max(mod[j], mod[k - j]);
        }
    }
    console.log(mod);
    return result;
}

// console.log(nonDivisibleSubset(1, [1])); //s1= [1], 1
// console.log(nonDivisibleSubset(4, [19, 10, 12, 10, 24, 22, 25])); //s1= [10,2,25], 3
// console.log(nonDivisibleSubset(3, [1, 7, 2, 4])); //s=[1,7,4], 3
// console.log(nonDivisibleSubset(5, [770528134, 663501748, 384261537, 800309024, 103668401, 538539662, 385488901,
//     101262949, 557792122, 46058493])); //6
// console.log(nonDivisibleSubset(11, [582740017, 954896345, 590538156, 298333230, 859747706, 155195851,
// 331503493, 799588305, 164222042, 563356693, 80522822, 432354938, 652248359])); //11


/*
* Complete the 'repeatedString' function below.
*
* The function is expected to return a LONG_INTEGER.
* The function accepts following parameters:
*  1. STRING s
*  2. LONG_INTEGER n
*/

function repeatedString(s, n) {
    // Write your code here
    let counta = 0;
    let freq = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'a') {
            freq++;
        }
    }
    counta = parseInt(n/s.length)*freq;

    return counta;
}

console.log(repeatedString('aba',10)); //7
console.log(repeatedString('a',10000)); //10000