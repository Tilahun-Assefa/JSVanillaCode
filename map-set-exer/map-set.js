function unique(arr) {
    //return new Set(arr); return set
    return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

uniqueValues = unique(values);
console.log(uniqueValues); // Hare, Krishna, :-O

for (let item of uniqueValues) {
    console.log(item);
}

let newArr = [...uniqueValues];
console.log("newArr", newArr);

//Filter anagrams
function aclean(strArr) {
    let anagram = new Map();
    strArr.forEach(str => {
        anagram.set(str.split("").sort().join("").toLowerCase(), str)
    });
    return Array.from(anagram.values());
}
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"

// Iterable keys
let map = new Map();
map.set("name", "John");
let keys = Array.from(map.keys());

// Error: keys.push is not a function
keys.push("more");
console.log(keys);