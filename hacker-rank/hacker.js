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

// console.log(extraLongFactorials(25));



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
    let indexa = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'a') {
            freq++;
        }
        indexa.push(freq);
    }
    console.log(indexa);
    if (n % s.length === 0) {
        counta = parseInt(n / s.length) * freq;
    } else {
        counta = parseInt(n / s.length) * freq + indexa[n % s.length - 1];
    }

    return counta;
}

// console.log(repeatedString('aba', 11)); //7
// console.log(repeatedString('a', 10000)); //10000

/*
 * Complete the 'jumpingOnClouds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY c as parameter.
 */

function jumpingOnClouds(c) {
    // Write your code here
    let cntJump = 0;
    let i = 0;
    while (i < c.length - 1) {
        if (c[i + 2] === 0) {
            i += 2;
        } else if (c[i + 1] === 0) {
            i++;
        } else {
            break;
        }
        cntJump++;
    }
    return cntJump;
}

// console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0])); //4
// console.log(jumpingOnClouds([0, 0, 0, 0, 1, 0])); //3
// console.log(jumpingOnClouds([0, 1, 0, 0, 0, 1, 0])); //3

/*
 * Complete the 'equalizeArray' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function equalizeArray(arr) {
    // Write your code here
    let unArr = [... new Set(arr)];
    let maxLen = 0;
    for (let i = 0; i < unArr.length; i++) {
        let cnt = 0;
        arr.forEach(el => {
            if (el === unArr[i]) {
                cnt++;
            }
        });
        if (cnt > maxLen) {
            maxLen = cnt;
        }
    }
    return (arr.length - maxLen);
}

// console.log(equalizeArray([1, 2, 2, 3])); //2
// console.log(equalizeArray([3, 3, 2, 1, 3])); //2

/*
 * Complete the 'queensAttack' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER r_q
 *  4. INTEGER c_q
 *  5. 2D_INTEGER_ARRAY obstacles
 */

function queensAttack(n, k, r_q, c_q, obstacles) {
    // Write your code here
    let numSquare;
    let row, col;

    //same row left side
    let minColLeftDiff = c_q - 1;

    //same row right side
    let minColRightDiff = n - c_q;

    //same column top side
    let minRowTopDiff = n - r_q;

    //same column bottom side
    let minRowBottomDiff = r_q - 1;

    //obstacles at right top diagonal
    let minDiagRightTop = n - c_q < n - r_q ? n - c_q : n - r_q;

    //obstacles at right bottom diagonal
    let minDiagRightBottom = n - c_q < r_q - 1 ? n - c_q : r_q - 1;

    //obstacles at left top diagonal
    let minDiagLeftTop = c_q - 1 < n - r_q ? c_q - 1 : n - r_q;

    //obstacles at left bottom diagonal
    let minDiagLeftBottom = c_q - 1 < r_q - 1 ? c_q - 1 : r_q - 1;

    //first calculate with no obstacles
    if (k === 0) {
        row = minColRightDiff + minColLeftDiff;
        col = minRowTopDiff + minRowBottomDiff;
        numSquare = row + col + minDiagRightTop + minDiagLeftBottom + minDiagRightBottom + minDiagLeftTop;
        return numSquare;
    }

    //substract for obstacles
    obstacles.forEach(ob => {
        if (ob[0] === r_q) {    //same row with the queen
            //left side
            if (ob[1] < c_q && c_q - ob[1] < minColLeftDiff) {
                minColLeftDiff = c_q - ob[1] - 1;
            }
            //right side
            if (c_q < ob[1] && ob[1] - c_q < minColRightDiff) {
                minColRightDiff = ob[1] - c_q - 1;
            }
        } else if (ob[1] === c_q) {     //same column with queen
            //top
            if (r_q < ob[0] && ob[0] - r_q < minRowTopDiff) {
                minRowTopDiff = ob[0] - r_q - 1;
            }
            if (ob[0] < r_q && r_q - ob[0] < minRowBottomDiff) {
                minRowBottomDiff = r_q - ob[0] - 1;
            }
        } else if ((ob[0] - r_q > 0 && ob[1] - c_q > 0) && (ob[0] - r_q === ob[1] - c_q) && ob[0] <= n & ob[1] <= n) {    //diag right top
            if (ob[0] - r_q < minDiagRightTop) {
                minDiagRightTop = ob[0] - r_q - 1;
            }
        } else if ((r_q - ob[0] > 0 && c_q - ob[1] > 0) && (r_q - ob[0] === c_q - ob[1]) && ob[0] >= 1 & ob[1] >= 1) {    //diag left bottom
            if (r_q - ob[0] < minDiagLeftBottom) {
                minDiagLeftBottom = r_q - ob[0] - 1;
            }
        } else if ((r_q - ob[0] > 0 && ob[1] - c_q > 0) && (r_q - ob[0] === ob[1] - c_q) && ob[0] >= 1 & ob[1] <= n) {    //diag right bottom
            if (r_q - ob[0] < minDiagRightBottom) {
                minDiagRightBottom = r_q - ob[0] - 1;
            }
        } else if ((c_q - ob[1] > 0 && ob[0] - r_q > 0) && (ob[0] - r_q === c_q - ob[1]) && ob[0] <= n & ob[1] >= 1) {    //diag left top
            if (ob[0] - r_q < minDiagLeftTop) {
                minDiagLeftTop = ob[0] - r_q - 1;
            }
        }
    });
    row = minColLeftDiff + minColRightDiff;
    col = minRowTopDiff + minRowBottomDiff;

    numSquare = row + col + minDiagRightTop + minDiagRightBottom + minDiagLeftBottom + minDiagLeftTop;

    console.log("Row: ", row, " Column: ", col, " DiagRT: ", minDiagRightTop, " DiagLB: ", minDiagRightBottom, " DiagRB: ", minDiagLeftBottom, " DiagLT: ", minDiagLeftTop);
    return numSquare;
}

// console.log(queensAttack(8, 0, 4, 4, []));  //9
// console.log(queensAttack(4, 0, 4, 4, []));  //9
// console.log(queensAttack(5, 3, 4, 3, [[5, 5], [4, 2], [2, 3]]));    //10
// console.log(queensAttack(1, 0, 1, 1, []));  //0

// console.log(queensAttack(100, 100, 48, 81, [[54, 87], [64, 97], [42, 75], [32, 65], [42, 87], [32, 97], [54, 75], [64, 65], [48, 87],
// [48, 75], [54, 81], [42, 81], [45, 17], [14, 24], [35, 15], [95, 64], [63, 87], [25, 72], [71, 38], [96, 97], [16, 30], [60, 34], [31, 67],
// [26, 82], [20, 93], [81, 38], [51, 94], [75, 41], [79, 84], [79, 65], [76, 80], [52, 87], [81, 54], [89, 52], [20, 31], [10, 41], [32, 73], [83, 98],
// [87, 61], [82, 52], [80, 64], [82, 46], [49, 21], [73, 86], [37, 70], [43, 12], [94, 28], [10, 93], [52, 25], [50, 61], [52, 68], [52, 23],
// [60, 91], [79, 17], [93, 82], [12, 18], [75, 64], [69, 69], [94, 74], [61, 61], [46, 57], [67, 45], [96, 64], [83, 89], [58, 87], [76, 53],
// [79, 21], [94, 70], [16, 10], [50, 82], [92, 20], [40, 51], [49, 28], [51, 82], [35, 16], [15, 86], [78, 89], [41, 98], [70, 46], [79, 79],
// [24, 40], [91, 13], [59, 73], [35, 32], [40, 31], [14, 31], [71, 35], [96, 18], [27, 39], [28, 38], [41, 36], [31, 63], [52, 48], [81, 25],
// [49, 90], [32, 65], [25, 45], [63, 94], [89, 50], [43, 41]]));  //40

/*
 * Complete the 'acmTeam' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts STRING_ARRAY topic as parameter.
 */

function acmTeam(topic) {
    // Write your code here
    let maxNumTopics = 0;
    let numTeams = 0;
    let maxNumTopicsArr = [];

    for (let i = 0; i < topic.length; i++) {
        for (let j = i + 1; j < topic.length; j++) {
            let cntTopic = 0;
            for (let k = 0; k < topic[i].length; k++) {
                if (topic[i][k] | topic[j][k]) {
                    cntTopic++;
                }
            }
            if (cntTopic >= maxNumTopics) {
                maxNumTopics = cntTopic;
                maxNumTopicsArr.push(maxNumTopics);
            }
        }
    }
    maxNumTopicsArr.forEach(el => {
        if (el === maxNumTopics) {
            numTeams++;
        }
    })
    return [maxNumTopics, numTeams];
}

// console.log(acmTeam(["10101", "11110", "00010"]));  //[5,1]
// console.log(acmTeam(["10101", "11100", "11010", "00101"])); //[5,2]
// console.log(acmTeam([
//     "1001101111101011011100101100100110111011111011000100111100111110111101011011011100111001100011111010",
//     '1111010101101010011101101101011101111111111011110010001001100111000111011111101110010111110111110010',
//     '0011111011111010111101111110101101111001111111100011111101101100100011010011111011111110110011111000',
//     '0011111001001100111111011110011110100111111100010100111111101011111010101111111011111010111001111111',
//     '1101011101110010011001110111111100101100011001000111111111110010100111111101110100010001011110111111',
//     '1111111000011111111111110111010001001011111011110101101111110001111111101100010111100100010101101100',
//     '100011010001011011111101111010101111101110101111011110111010110001101110011100100000110',
//     '0011101111110010001011110000110111111111100000100110010011010110101001100100000100101001110001100001',
//     '1110011111110101111011111010111010011111111011010011100001100101011111101110001111111101111101001000'])); //[5,2]



/*
 * Complete the 'taumBday' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER b
 *  2. INTEGER w
 *  3. INTEGER bc
 *  4. INTEGER wc
 *  5. INTEGER z
 */

function taumBday(b, w, bc, wc, z) {
    // Write your code here
    if (bc === wc || bc === wc + z || wc === bc + z) {
        return (BigInt(b) * BigInt(bc) + BigInt(w) * BigInt(wc));
    }
    if (bc > wc) {
        if (bc > wc + z) {
            return ((BigInt(b) + BigInt(w)) * BigInt(wc) + BigInt(b) * BigInt(z));
        }
        if (bc < wc + z) {
            return (BigInt(b) * BigInt(bc) + BigInt(w) * BigInt(wc));
        }
    }

    if (wc > bc) {
        if (wc > bc + z) {
            return ((BigInt(b) + BigInt(w)) * BigInt(bc) + BigInt(w) * BigInt(z));

        }
        if (wc < bc + z) {
            return (BigInt(b) * BigInt(bc) + BigInt(w) * BigInt(wc));
        }
    }
}

// console.log(taumBday(10, 10, 1, 1, 1)); //20
// console.log(taumBday(5, 9, 2, 3, 4));   //37
// console.log(taumBday(3, 6, 9, 1, 1));   //12
// console.log(taumBday(7, 7, 4, 2, 1));   //35
// console.log(taumBday(3, 3, 1, 9, 2));   //12
// console.log(taumBday(443463982, 833847400, 429734889, 628664883, 610875522));   //714782523241122198
// console.log(taumBday(623669229, 435417504, 266946955, 600641444, 515391879));   // 428016399954183471
// console.log(taumBday(763364819, 37220400, 711640763, 34378393, 655626808));     // 528005272909240819
// console.log(taumBday(177742229, 51792729, 358392247, 642296973, 158448705));    // 90470040201136571
// console.log(taumBday(402332409, 253667421, 384186676, 728988281, 883897044));   // 339491328041275785
// console.log(taumBday(962555475, 753433321, 20275090, 23915540, 815412555));     // 37534663611326090
// console.log(taumBday(853918694, 319895873, 649259954, 136169934, 948560755));   // 597975411899462458
// console.log(taumBday(112651828, 759839162, 236494610, 379598782, 212996957));    // 315075570539747764
// console.log(taumBday(751886489, 142963601, 250217357, 463527251, 29858345));    // 228175680952112475
// console.log(taumBday(905844164, 493785831, 81651073, 116752762, 136082804));    // 131614007567103194


/*
 * Complete the 'organizingContainers' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts 2D_INTEGER_ARRAY container as parameter.
 */

function organizingContainers(container) {
    // Write your code here
    let sumBallContainerArr = [];
    let totalBallsByTypeArr = [];
    let flag = true;
    for (let i = 0; i < container.length; i++) {
        let sumBallContainer = 0
        for (let j = 0; j < container[i].length; j++) {
            sumBallContainer += container[i][j];
        }
        sumBallContainerArr.push(sumBallContainer);
    }
    for (let k = 0; k < container.length; k++) {
        let totalBallsByType = 0;
        container.forEach(el => {
            totalBallsByType += el[k];
        });
        totalBallsByTypeArr.push(totalBallsByType);
    }
    console.log("By Container", sumBallContainerArr, "By Type ", totalBallsByTypeArr);

    for (let ind = 0; ind < sumBallContainerArr.length; ind++) {
        if (!totalBallsByTypeArr.includes(sumBallContainerArr[ind])) {
            flag = false;
        }
    }
    if (flag) {
        return "Possible";
    }
    return "Impossible";
}

// console.log(organizingContainers([[1, 4], [2, 3]]));    //Impossible
// console.log(organizingContainers([[1, 1], [1, 1]]));    //Possible
// console.log(organizingContainers([[0, 2], [1, 1]]));    //Impossible
// console.log(organizingContainers([[1, 3, 1], [2, 1, 2], [3, 3, 3]]));    //Impossible
// console.log(organizingContainers([[0, 2, 1], [1, 1, 1], [2, 0, 0]]));    //Possible

/*
 * Complete the 'encryption' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function encryption(s) {
    // Write your code here
    //remove the spaces from the string
    const strNoSpace = s.trim().split(" ").join("");

    //get the width and length of the intermediate double string array
    let row = Math.floor(Math.sqrt(strNoSpace.length));
    const column = Math.ceil(Math.sqrt(strNoSpace.length));
    if (row * column < strNoSpace.length) {
        row++;
    }

    //fill the double array with letters
    let k = 0;
    let intermediateStrArr = [];
    for (let i = 0; i < row; i++) {
        let tempArr = []
        for (let j = 0; j < column; j++) {
            if (k < strNoSpace.length) {
                tempArr[j] = strNoSpace[k];
                k++;
            } else {
                tempArr[j] = " ";
            }
        }
        intermediateStrArr.push(tempArr.join(""));
    }
    console.log(intermediateStrArr);

    //select each corresponding column values and merge
    let encriptedArr = [];
    for (let i = 0; i < intermediateStrArr[0].length; i++) {
        let tempStr = " ";
        for (let j = 0; j < intermediateStrArr.length; j++) {
            tempStr += intermediateStrArr[j][i];

        }
        encriptedArr.push(tempStr.trim());
    }
    return encriptedArr.join(" ");
}

// console.log(encryption("if man was meant to stay on the ground god would have given us roots"));
// console.log(encryption("chillout"));


/*
 * Complete the 'biggerIsGreater' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING w as parameter.
 */

function biggerIsGreater(w) {
    // Write your code here
    //declare pointer to traverse the string
    let pnt = w.length - 2;
    if (pnt < 0 || pnt > 100) {
        return "no answer";
    }

    while (pnt > -1) {
        //locate the first character that is higher to change to the least higher
        if (w[pnt + 1] > w[pnt]) {
            //isolate parts that to be reorder
            let right = w.substring(pnt + 1).trim();
            let left = w.substring(0, pnt + 1).trim();
            //swap with the nearest greater character
            let temp = w[pnt];
            let k = right.length - 1;
            while (right[k] <= temp) {
                k--;
            }
            let rightArr = right.split("");
            let leftArr = left.split("");
            leftArr[leftArr.length - 1] = right[k];
            rightArr[k] = temp;

            //sort the character after the pointer
            return [...leftArr, ...rightArr.sort()].join("");
        } else {
            //move the pointer back 
            pnt--;
        }
    }
    return "no answer";
}

// console.log(biggerIsGreater("abcd") === "abdc");
// console.log(biggerIsGreater("imllmmcslslkyoegymoa") === "imllmmcslslkyoegyoam"); //
// console.log(biggerIsGreater("ab") === "ba");
// console.log(biggerIsGreater("bb") === "no answer");
// console.log(biggerIsGreater("hefg") === "hegf");
// console.log(biggerIsGreater("dhck") === "dhkc");
// console.log(biggerIsGreater("dkhc") === "hcdk");
// console.log(biggerIsGreater("lmno") === "lmon");
// console.log(biggerIsGreater("dcba") === "no answer");
// console.log(biggerIsGreater("dcbb") === "no answer");
// console.log(biggerIsGreater("abdc") === "acbd");
// console.log(biggerIsGreater("fedcbabcd") === "fedcbabdc");
// console.log(biggerIsGreater("ocsmerkgidvddsazqxjbqlrrxcotrnfvtnlutlfcafdlwiismslaytqdbvlmcpapfbmzxmftrkkqvkpflxpezzapllerxyzlcf") === "ocsmerkgidvddsazqxjbqlrrxcotrnfvtnlutlfcafdlwiismslaytqdbvlmcpapfbmzxmftrkkqvkpflxpezzapllerxyzlfc");
// console.log(biggerIsGreater("zyyxwwtrrnmlggfeb") === "no answer");
/*
 * Complete the 'kaprekarNumbers' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER p
 *  2. INTEGER q
 */

function kaprekarNumbers(p, q) {
    // Write your code here
    let kaprekarArr = [];
    let left;
    let right;
    for (let i = p; i <= q; i++) {
        let numDigit = i.toString().length;
        let sqr = i * i;
        let sqrStr = sqr.toString()
        let sqrDigit = sqrStr.length;
        if (sqrDigit === 2 * numDigit || sqrDigit === 2 * numDigit - 1) {
            right = sqrStr.substring(sqrDigit - numDigit);
            left = (sqrDigit - numDigit) > 0 ? sqrStr.substring(0, sqrDigit - numDigit) : 0;
            if (parseInt(left) + parseInt(right) === i) {
                kaprekarArr.push(i);
            }
        }
    }
    if (kaprekarArr.length > 0) {
        console.log(kaprekarArr.join(" "));
    } else {
        console.log("INVALID RANGE");
    }
}

// console.log(kaprekarNumbers(1, 100)); //"1 9 45 55 99";

// console.log(kaprekarNumbers(1, 99999)); // 1 9 45 55 99 297 703 999 2223 2728 4950 5050 7272 7777 9999 17344 22222 77778 82656 95121 99999

/*
 * Complete the 'beautifulTriplets' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER d
 *  2. INTEGER_ARRAY arr
 */

function beautifulTriplets(d, arr) {
    // Write your code here
    let numTriplets = 0;
    for (let i = 0; i < arr.length - 2; i++) {
        let cnt = 1;
        let k = i;
        for (let j = i + 1; j < arr.length; j++) {
            if ((arr[j] - arr[k]) > d) {
                break;
            }
            if ((arr[j] - arr[k]) % d === 0 && arr[j] > arr[k]) {
                cnt++;
                k = j;
            }
            if (cnt === 3) {
                numTriplets++;
                break;
            }
        }
    }
    return numTriplets;
}

// console.log(beautifulTriplets(1, [2, 2, 3, 4, 5]) === 3); //3
// console.log(beautifulTriplets(3, [1, 2, 4, 5, 7, 8, 10]) === 3);  //3
// console.log(beautifulTriplets(3, [1, 6, 7, 7, 8, 10, 12, 13, 14, 19]) === 2); //2
// console.log(beautifulTriplets(5, [0, 1, 2, 4, 5, 11, 14, 15, 16, 17, 18, 19, 21, 23, 26, 27, 29, 31, 33, 34, 36, 37, 38, 39, 41, 43, 44, 45, 46, 47, 48, 50, 51, 53, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 66, 67, 68, 69, 70, 71, 73, 74, 78, 79, 80, 81, 82, 83, 84, 85, 86, 90, 92, 93, 96, 97, 98, 99, 100])); //30

/*
 * Complete the 'minimumDistances' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function minimumDistances(a) {
    // Write your code here
    let minDistance = a.length;
    for (let i = 0; i <= a.length - 2; i++) {
        for (let j = i + 1; j < a.length; j++) {
            if (a[j] === a[i]) {
                if (j - i < minDistance) {
                    minDistance = j - i;
                }
                break;
            }
        }
    }
    if (minDistance === a.length) {
        return "-1";
    } else {
        return minDistance;
    }
}

// console.log(minimumDistances([3, 2, 1, 2, 3]) === 2); //2
// console.log(minimumDistances([7, 1, 3, 4, 1, 7]) === 3); //3

/*
 * Complete the 'howManyGames' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER p
 *  2. INTEGER d
 *  3. INTEGER m
 *  4. INTEGER s
 */

function howManyGames(p, d, m, s) {
    // Return the number of games you can buy
    let numGames = 0;
    let sum = 0;
    while (sum + p <= s) {
        sum += p;
        numGames++;
        if (p >= m + d) {
            p -= d;
        } else {
            p = m;
        }
    }
    return numGames;
}
// console.log(howManyGames(20, 3, 6, 70) === 5);
// console.log(howManyGames(20, 3, 6, 80) === 6);
// console.log(howManyGames(20, 3, 6, 85) === 7);

/*
 * Complete the 'timeInWords' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER h
 *  2. INTEGER m
 */

function timeInWords(h, m) {
    // Write your code here
    let str = "";
    const cmnStrArr = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"];
    const hourStrArr = [...cmnStrArr, "one"]
    const minuteArr = [...cmnStrArr, "thirteen", "fourteen", "quarter", "sixteen", "seventeen", "eighteen", "nineteen", "twenty",
        "twenty one", "twenty two", "twenty three", "twenty four", "twenty five", "twenty six", "twenty seven", "twenty eight", "twenty nine", "half"];
    let strHour = m <= 30 ? hourStrArr[h - 1] : hourStrArr[h];
    let strMinutes = m < 30 ? minuteArr[m - 1] : minuteArr[60 - m - 1];
    if (0 <= m && m <= 30) {
        if (m === 0) {
            str = strHour + " o' clock";
        } else if (m === 1) {
            str = strMinutes + " minute past " + strHour;
        } else if (m === 15 || m === 30) {
            str = strMinutes + " past " + strHour;
        } else {
            str = strMinutes + " minutes past " + strHour;
        }
    } else {
        if (m === 45) {
            str = strMinutes + " to " + strHour;
        } else if (m === 59) {
            str = strMinutes + " minute to " + strHour;
        } else {
            str = strMinutes + " minutes to " + strHour;
        }
    }
    return str;
}
// console.log(timeInWords(5, 0) === "five o' clock");
// console.log(timeInWords(5, 1) === "one minute past five");
// console.log(timeInWords(5, 10) === "ten minutes past five");
// console.log(timeInWords(5, 15) === "quarter past five");
// console.log(timeInWords(5, 30) === "half past five");
// console.log(timeInWords(5, 40) === "twenty minutes to six");
// console.log(timeInWords(5, 45) === "quarter to six");
// console.log(timeInWords(5, 47) === "thirteen minutes to six");
// console.log(timeInWords(5, 28) === "twenty eight minutes past five");
// console.log(timeInWords(3, 0) === "three o' clock");
// console.log(timeInWords(7, 15) === "quarter past seven");
// console.log(timeInWords(12, 45) === "quarter to one");
// console.log(timeInWords(1, 1) === "one minute past one");
// console.log(timeInWords(1, 59) === "one minute to two"); 

/*
 * Complete the 'chocolateFeast' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER c
 *  3. INTEGER m
 */

function chocolateFeast(n, c, m) {
    // Write your code here
    //number of chocolate the money can buy
    let numChocolate = parseInt(n / c);
    //number of wrapper in hand
    let numWrapper = numChocolate;
    let turnInChocolate = 0;
    let leftoverWrapper = 0;
    while (numWrapper >= m) {
        // number of wrapper turn in for a free chocolate
        turnInChocolate = parseInt(numWrapper / m);
        numChocolate += turnInChocolate;
        leftoverWrapper = numWrapper % m;
        numWrapper = turnInChocolate + leftoverWrapper;
    }

    return numChocolate;
}

// console.log(chocolateFeast(15, 3, 2) === 9);
// console.log(chocolateFeast(10, 2, 5) === 6);
// console.log(chocolateFeast(12, 4, 4) === 3);
// console.log(chocolateFeast(6, 2, 2) === 5);
// console.log(chocolateFeast(15, 3, 2) === 9);

/*
 * Complete the 'serviceLane' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY cases
 */

function serviceLane(n, cases) {
    // Write your code here
    let arrMinWidth = [];
    for (let i = 0; i < cases.length; i++) {
        let entry = cases[i][0];
        let exit = cases[i][1];
        let minWidth = n[entry];
        for (let j = entry; j <= exit; j++) {
            if (n[j] < minWidth) {
                minWidth = n[j];
            }
        }
        arrMinWidth.push(minWidth);
    }
    return arrMinWidth;
}

// console.log(serviceLane([2, 3, 2, 1], [[0, 1], [1, 3]]));   //[2, 1];
// console.log(serviceLane([2, 3, 1, 2, 3, 2, 3, 3], [[0, 3], [4, 6], [6, 7], [3, 5], [0, 7]]));   //[1, 2, 3, 2, 1];

/*
 * Complete the 'workbook' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER_ARRAY arr
 */

function workbook(n, k, arr) {
    // Write your code here
    let numSpecialProblems = 0;
    let numPagesPerChapter = 0;
    let pageNum = 0;

    for (let i = 0; i < arr.length; i++) {
        console.log("Chapter", i + 1);
        numPagesPerChapter = Math.ceil(arr[i] / k);
        let numProblemsInChapter = arr[i];
        let problemNum = 0;
        for (let j = 0; j < numPagesPerChapter; j++) {
            pageNum++;
            let numProblemsInPage = numProblemsInChapter - k > 0 ? k : numProblemsInChapter;
            for (let m = 0; m < numProblemsInPage; m++) {
                problemNum++;
                console.log("Page Number", j + 1, "Problem No", problemNum);
                if (problemNum === pageNum) {
                    numSpecialProblems++;
                }
            }
            numProblemsInChapter -= k;
            console.log("Book page number", pageNum);
        }
    }
    return numSpecialProblems;
}
// console.log(workbook(2, 3, [4, 2]) === 1);
// console.log(workbook(5, 3, [4, 2, 6, 1, 10]) === 4);

// Complete the flatlandSpaceStations function below.
function flatlandSpaceStations(n, c) {
    let maxDistance = 0;
    for (let i = 0; i < n; i++) {
        //calculating distance from each city(i) to all spacestations(j) and determine the nearest
        let nearestSpaceStationToCity = n;
        for (let j = 0; j < c.length; j++) {
            const dist = Math.abs(i - c[j]);
            if (dist < nearestSpaceStationToCity) {
                nearestSpaceStationToCity = dist;
            }
        }
        //taking all nearest space station for all city and determine the farthest one
        if (nearestSpaceStationToCity > maxDistance) {
            maxDistance = nearestSpaceStationToCity;
        }
    }
    return maxDistance;
}

// console.log(flatlandSpaceStations(3,[1])===1);
// console.log(flatlandSpaceStations(3,[0,4])===2);
// console.log(flatlandSpaceStations(3,[0,1,2,4,3,5])===0);

/*
 * Complete the 'fairRations' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER_ARRAY B as parameter.
 */

function fairRations(B) {
    // Write your code here
    let minNumLoaves = 0;
    for (let i = 0; i < B.length - 1; i++) {
        if (B[i] % 2 !== 0) {
            B[i] += 1;
            B[i + 1] += 1;
            minNumLoaves += 2;
        }
    }
    if (B[B.length - 1] % 2 !== 0) {
        return "NO";
    }
    return minNumLoaves.toString();
}
// console.log(fairRations([4, 5, 6, 7]) === "4");
// console.log(fairRations([2, 3, 4, 5, 6]) === "4");
// console.log(fairRations([1, 2]) === "NO");

/*
 * Complete the 'cavityMap' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING_ARRAY grid as parameter.
 */

function cavityMap(grid) {
    // Write your code here
    let modifiedGrid = [];
    let finalGrid = [];
    for (let k = 0; k < grid.length; k++) {
        const element = grid[k].split('');
        modifiedGrid.push(element);
    }
    for (let i = 0; i < modifiedGrid.length; i++) {
        for (let j = 0; j < modifiedGrid.length; j++) {
            let el = +modifiedGrid[i][j];
            if (i !== 0 && j !== 0 & i !== modifiedGrid.length - 1 && j !== modifiedGrid.length - 1) {
                if (+modifiedGrid[i - 1][j] < el && +modifiedGrid[i][j - 1] < el
                    && +modifiedGrid[i + 1][j] < el && +modifiedGrid[i][j + 1] < el) {
                    modifiedGrid[i][j] = "X";
                }
            }
        }
    }
    for (let k = 0; k < modifiedGrid.length; k++) {
        const elem = modifiedGrid[k].join('');
        finalGrid.push(elem);
    }
    return finalGrid;
}

// console.log(cavityMap(["989", "191", "111"]));  //["989", "1X1", "111"]
// console.log(cavityMap(['1112', '1912', '1892', '1234']));   //["1112","1X12","18X2","1234"]

/*
 * Complete the 'stones' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER a
 *  3. INTEGER b
 */

function stones(n, a, b) {
    // Write your code here
    const result = [];
    const minSum = (n - 1) * (a < b ? a : b);
    const maxSum = (n - 1) * (a > b ? a : b);
    const diff = Math.abs(b - a);
    let total = minSum;
    while (total <= maxSum) {
        result.push(total);
        if (diff <= 0) {
            break;
        } else {
            total += diff;
        }
    }
    return result;
}

// console.log(stones(3, 1, 2));   //[2,3,4]
// console.log(stones(4, 10, 100));    //[30, 120, 210, 300]
// console.log(stones(4, 10, 10));    //[30]
// console.log(stones(58, 69, 24));    //[30]
// console.log(stones(83, 86, 81));    //[30]
// console.log(stones(73, 25, 25));    //[1800]
// console.log(stones(12, 73, 82));    //[803, 812, 821, 830, 839, 848, 857, 866, 875, 884, 893, 902]
// console.log(stones(5, 3, 23));    //[12, 32, 52, 72, 92]



/*
 * Complete the 'gridSearch' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING_ARRAY G
 *  2. STRING_ARRAY P
 */

function gridSearch(G, P) {
    // Write your code here
    if (P.length > G.length) {
        return "NO";
    }
    let rowGrid = 0;
    let col = 0;
    let rowPattern = 0;
    let gridElem;
    let patternElem;
    while (rowGrid <= G.length - P.length) {
        gridElem = G[rowGrid];
        patternElem = P[rowPattern];
        col = 0;
        while (col <= gridElem.length - patternElem.length) {
            if (gridElem.substring(col, patternElem.length + col) === patternElem) {
                console.log("row: ", rowGrid, " ", "column: ", col);
                break;
            }
            col++;
        }
        rowGrid++;
    }
    // P.forEach(el => {

    //     for (let i = 0; i < G.length; i++) {
    //         const gridElem = G[i];
    //         for (let j = 0; j <= gridElem.length - el.length; j++) {
    //             // console.log(gridElem.substring(j, el.length + j));
    //             if (gridElem.substring(j, el.length + j) === el) {
    //                 console.log("row: ", i, " ", "column: ", j);
    //                 i = i;
    //                 break;
    //             }
    //         }
    //     }
    // });

    return "NO";
}
console.log(gridSearch(['1234567890', '0987654321', '1111111111', '1111111111', '2222222222'],
    ['876543', '111111', '111111']));  //YES

console.log(gridSearch(['7283455864', '6731158619', '8988242643', '3830589324', '2229505813',
    '5633845374', '6473530293', '7053106601', '0834282956', '4607924137'], ['9505', '3845', '3530']));  //YES

console.log(gridSearch(['400453592126560', '114213133098692', '474386082879648', '522356951189169', '887109450487496',
    '252802633388782', '502771484966748', '075975207693780', '511799789562806', '404007454272504', '549043809916080',
    '962410809534811', '445893523733475', '768705303214174', '650629270887160'], ['99', '99']));  //No

/*
 * Complete the 'happyLadybugs' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING b as parameter.
 */

function happyLadybugs(b) {
    // Write your code here

}









