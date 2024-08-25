const getStudent = () => {
    let student = { name: "John", age: 23, courses: ["Maths", "Biology", "English"] };
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(student), 3000)
    });
};

getStudent().then(res => console.log(res));

let myPromise = new Promise(resolve => setTimeout(resolve, 7000));

myPromise.then(()=>console.log("test")).catch(err=>console.log(err)).finally(console.log("Finally go here"));

//write a function that returns a promise that resolves after a number of milliseconds
function delay(ms) {
    // Please note that in this task resolve is called without arguments. We don’t return any value from delay, just ensure the delay.
    return new Promise(resolve => setTimeout(resolve, ms));
}

delay(3000).then(() => console.log('runs after 3 seconds'));

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
        }, 500);

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

