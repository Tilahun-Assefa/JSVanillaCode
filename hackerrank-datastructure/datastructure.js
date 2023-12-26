/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
/* eslint-disable linebreak-style */
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
  const arr = [];
  for (let i = 0; i < n; i++) {
    const el = [];
    arr.push(el);
  }
  for (let i = 0; i < queries.length; i++) {
    if (queries[i][0] === 1) {
      const idx = (queries[i][1] ^ lastAnswer) % n;
      arr[idx].push(queries[i][2]);
    } else if (queries[i][0] === 2) {
      const idx = (queries[i][1] ^ lastAnswer) % n;
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
    const el = arr.shift();
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
  const result = [];
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
    const a = query[0];
    const b = query[1];
    const k = query[2];
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
  let start = head;
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
  // if head is null create a node and point with head
  const node = new SinglyLinkedListNode(data);
  if (head == null) {
    head = node;
  } else {
    node.next = head;
    head = node;
  }
  return head;
}

let linkedList = insertNodeAtHead(null, "A");
linkedList = insertNodeAtHead(linkedList, "B");
linkedList = insertNodeAtHead(linkedList, "C");
linkedList = insertNodeAtHead(linkedList, "D");
linkedList = insertNodeAtHead(linkedList, "E");

// printLinkedList(linkedList);

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
  const node = new SinglyLinkedListNode(data);
  let cnt = 0;
  if (llist == null) {
    llist = node;
    return llist;
  }
  if (position === 0) {
    node.next = llist;
    llist = node;
    return llist;
  }
  let start = llist;
  while (start.next != null && cnt < position - 1) {
    start = start.next;
    cnt++;
  }
  const temp = start.next;
  start.next = node;
  node.next = temp;

  return llist;
}

// let lk = insertNodeAtPosition(null, 383, 2);
// lk = insertNodeAtPosition(lk, 484, 0);
// lk = insertNodeAtPosition(lk, 392, 1);
// lk = insertNodeAtPosition(lk, 975, 1);
// lk = insertNodeAtPosition(lk, 321, 2);

// printLinkedList(lk); // 484,975,

/*
 * Complete the 'deleteNode' function below.
 *
 * The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
 * The function accepts following parameters:
 *  1. INTEGER_SINGLY_LINKED_LIST llist
 *  2. INTEGER position
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

function deleteNode(llist, position) {
  // Write your code here
  let cnt = 0;
  if (llist == null) {
    return llist;
  }
  let start = llist;
  if (position === 0) {
    llist = llist.next;
    return llist;
  }

  while (start.next != null && cnt < position - 1) {
    start = start.next;
    cnt++;
  }
  if (start.next !== null) {
    const temp = start.next;
    start.next = start.next.next;
  }

  return llist;
}

// lk = deleteNode(lk, 0);
// console.log('After deletion');
// printLinkedList(lk); // 484,975,

/*
 * Complete the 'reversePrint' function below.
 *
 * The function accepts INTEGER_SINGLY_LINKED_LIST llist as parameter.
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

function reversePrint(llist) {
  // Write your code here
  if (llist == null) {
    return;
  }
  reversePrint(llist.next);
  console.log(llist.data);
}

// reversePrint(linkedList);
/*
 * Complete the 'reverse' function below.
 *
 * The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
 * The function accepts INTEGER_SINGLY_LINKED_LIST llist as parameter.
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

function reverse(llist) {
  // Write your code here
  if (llist.next == null) {
    return llist;
  }
  let start = llist;
  while (start.next !== null) {
    start = start.next;
  }
  let temp = llist;
  let pos = llist.next;
  llist = reverse(llist.next);
  pos.next = temp;
  temp.next = null;
  return start;
}

// let reversedLinkedList = reverse(linkedList);

// Complete the CompareLists function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function CompareLists(llist1, llist2) {
  let flagEqual = true;
  while (llist1 !== null || llist2 !== null) {
    if (llist1 === null && llist2 !== null || llist1 !== null && llist2 === null) {
      flagEqual = false;
      break;
    }
    if (llist1.data !== llist2.data) {
      flagEqual = false;
      break;
    }
    llist1 = llist1.next;
    llist2 = llist2.next;
  }
  if (!flagEqual) {
    return 0;
  }
  return 1;
}

let linkedList2 = insertNodeAtHead(null, "A");
linkedList2 = insertNodeAtHead(linkedList2, "B");
linkedList2 = insertNodeAtHead(linkedList2, "C");
linkedList2 = insertNodeAtHead(linkedList2, "D");
linkedList2 = insertNodeAtHead(linkedList2, "E");

console.log(CompareLists(linkedList, linkedList2) == 1);  //1
console.log(CompareLists(linkedList, null) == 0);  //1