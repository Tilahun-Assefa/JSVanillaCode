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
    let maxValue = Number.NEGATIVE_INFINITY;
    const arr = Array(n).fill(0);
    let cur = 0;
    for (let i = 0; i < queries.length; i++) {
        const query = queries[i];
        let a = query[0];
        let b = query[1];
        let k = query[2];
        arr[a - 1] += k;
        if (b < n) {
            arr[b] -= k;
        }
    }
    for (let j = 0; j < arr.length; j++) {
        cur += arr[j];
        maxValue = Math.max(cur, maxValue);
    }
    return maxValue;
}

// console.log(arrayManipulation(10, [[1, 5, 3], [4, 8, 7], [6, 9, 1]]));  //10
// console.log(arrayManipulation(5, [[1, 2, 100], [2, 5, 100], [3, 4, 100]])); //200

// Complete the printLinkedList function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function Node(data) {
    this.data = data;
    this.next = null;
}

function printLinkedList(head) {
    var start = head;
    while (start) {
        console.log(start.data);
        start = start.next;
    }
}

// Complete the insertNodeAtHead function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

const SinglyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

function insertNodeAtHead(head, data) {
    //if head is null create a node and point with head
    var node = new SinglyLinkedListNode(data);
    if (head == null) {
        head = node;
    } else {
        node.next = head;
        head = node;
    }
    return head;
}

// let lk = insertNodeAtHead(null, 383);
// lk = insertNodeAtHead(lk, 484);
// lk = insertNodeAtHead(lk, 392);
// lk = insertNodeAtHead(lk, 975);
// lk = insertNodeAtHead(lk, 321);

// printLinkedList(lk);

/*
 * Complete the 'insertNodeAtPosition' function below.
 *
 * The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
 * The function accepts following parameters:
 *  1. INTEGER_SINGLY_LINKED_LIST llist
 *  2. INTEGER data
 *  3. INTEGER position
 */

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

function insertNodeAtPosition(llist, data, position) {
    // Write your code here
    var node = new SinglyLinkedListNode(data);
    let cnt = 0;
    if (llist == null) {
        llist = node;
        return llist;
    }

    var start = llist;
    while (start.next != null && cnt < position) {
        start = start.next;
        cnt++;
    }
    start = node;
    node.next = llist;
    return llist;
}