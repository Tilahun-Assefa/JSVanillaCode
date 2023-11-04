//write a function that return the largest number index
function getLargestNumberIndex(arr) {
    let tempNum = arr[0];
    let maxIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > tempNum) {
            tempNum = arr[i];
            maxIndex = i;
        }
    }
    return maxIndex;
}

console.log("getLargestNumberIndex", getLargestNumberIndex([7, 3, 100, 4, 12, 9, 67]))//expect 3

//write a function that returns a promise that resolves after a number of milliseconds
function delay(n) {
    return new Promise(resolve => setTimeout(resolve, n));
}

(async () => {
    console.time("testing delay");
    await delay(5000).then(() => console.log("Delay result"));
    console.timeEnd("testing delay");
})();

//define function that use promise for asynchronus call
function showCircle(cX, cY, radius) {
    const div = document.createElement("div");
    div.style.width = 0;
    div.style.height = 0;
    div.style.left = cX + 'px';
    div.style.top = cY + 'px';
    div.className = 'circle';
    document.body.append(div);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            div.style.width = 2 * radius + 'px';
            div.style.height = 2 * radius + 'px';
            div.addEventListener('transitionend', function handler() {
                div.removeEventListener('transitionend', handler);
                resolve(div);
            });
        }, 0);

        setTimeout(() => reject(new Error("Promise error")), 3000)
    });
}

//calling the promise
showCircle(150, 160, 100).then((result) => {
    result.classList.add("message-ball");
    result.append("Hello World!");
}).catch((err) => console.error(err));

//define the function with callback
function displayCircle(cX, cY, r, callback) {
    const div = document.createElement("div");
    div.style.width = 0;
    div.style.height = 0;
    div.style.left = cX + 'px';
    div.style.top = cY + 'px';
    div.className = 'circle';
    setTimeout(() => {
        div.style.width = 2 * r + 'px';
        div.style.height = 2 * r + 'px';
        div.addEventListener('transitionend', function handler() {
            div.removeEventListener('transitionend', handler);
            callback(div);
        });
    }, 0);
    document.body.append(div);
}

//calling the function with callback
// displayCircle(100, 100, 60, (div) => {
//     div.classList.add("message-ball");
//     div.append("Hello World!");
// });


//detect exact location of user
const button = document.querySelector("button");

button.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(pos => {
        //getting latitude and longitude from position object
        const { latitude, longitude } = pos.coords;
        //getting location of passed coordinates using geocoding API
        const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
        fetch(url).then(res => res.json()).then(data => {
            console.table(data.address);
        }).catch(() => {
            console.log("Error fetching data from API")
        })
    });
});

