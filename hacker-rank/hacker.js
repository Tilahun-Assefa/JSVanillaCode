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

console.log(kangaroo(0, 3, 4, 2));
console.log(kangaroo(0, 2, 5, 3));

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
