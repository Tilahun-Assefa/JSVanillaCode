// Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.

// function sumTo(n) {
//     sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum += i;
//     }
//     return sum;
// }

// function sumTo(n) {
//     if(n==1){
//         return 1;
//     }else{
//         return n + sumTo(n-1);
//     }
// }

function sumTo(n) {
    return n * (n + 1) / 2;
}

console.log(sumTo(1)); //= 1
console.log(sumTo(2)); //= 2 + 1 = 3
console.log(sumTo(3)); //= 3 + 2 + 1 = 6
console.log(sumTo(4)); //= 4 + 3 + 2 + 1 = 10
console.log(sumTo(100)); //= 100 + 99 + ... + 2 + 1 = 5050

// write a function factorial(n) that calculates n! using recursive calls.
function factorial(n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(5)); // 120

// Write a function fib(n) that returns the n-th Fibonacci number.
// function fib(n) {
//     if(n <= 1){
//         return 1;
//     }
//     return fib(n-2) + fib(n-1);
// }

function fib(n) {
    let n1 = 1;
    let n2 = 1;
    for (let i = 3; i <= n; i++) {
        let sum = n1 + n2;
        n1 = n2;
        n2 = sum;
    }
    return n2;
}


console.log(fib(3)); // 2
console.log(fib(7)); // 13
console.log(fib(77)); // 5527939700884757

// Write a function printList(list) that outputs list items one-by-one.
function printList(list) {
    //using loop
    // let tmp=list;
    // while (tmp != null) {
    //     console.log(tmp.value);
    //     tmp = tmp.next;
    // }
    //using recursion
    if (list == null) {
        return;
    }
    console.log(list.value);
    printList(list.next);
}

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};
printList(list);

// Output a single-linked list from the previous task. Output a single-linked list in the reverse order.
function printReverseList(list) {
    //using loop
    // let tmp=list;
    // let arr =[];
    // while (tmp != null) {
    //     arr.push(tmp.value);
    //     tmp = tmp.next;
    // }
    // while(arr.length >0){
    //     console.log(arr.pop());
    // }
    //using recursion
    if(list == null){
        return;
    }
    printReverseList(list.next);
    console.log(list.value);
}
printReverseList(list);
