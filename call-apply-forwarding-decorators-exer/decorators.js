// Create a decorator spy(func) that should return a wrapper that saves all calls to function in its calls property.
function work(a, b) {
    alert(a + b); // work is an arbitrary function or method
}

function spy(func) {

    // return function () {
    //     // func.call(this, ...arguments);
    //     func.apply(this, arguments);
    // }

    let wrapper = function (...args) {
        wrapper.calls.push(args);
        return func.apply(this, arguments);
    }
    wrapper.calls = [];
    return wrapper;
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
    alert('call:' + args.join()); // "call:1,2", "call:4,5"
}

// Create a decorator delay(f, ms) that delays each call of f by ms milliseconds
function f(x) {
    alert(x);
}

function delay(f, ms) {
    return function () {
        // setTimeout(()=>f(str), ms);
        setTimeout(() => f.apply(this, arguments), ms);
    }
}

// create wrappers
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // shows "test" after 1000ms
f1500("test"); // shows "test" after 1500ms

// It waits the given time after the last call, and then runs its function, that can process the result.
// The task is to implement debounce decorator.
function debounce(f, ms) {
    let timeout;
    let wrapper = function () {
        clearTimeout(timeout);
        timeout = setTimeout(() => f.apply(this, arguments), ms);
    }
    return wrapper;
}

f = debounce(f, 1000);
f("a");
setTimeout(() => f("b"), 200);
setTimeout(() => f("c"), 500);

// Create a “throttling” decorator throttle(f, ms) – that returns a wrapper.