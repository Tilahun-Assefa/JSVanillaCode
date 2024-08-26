async function f() {
    return 1;
}

f().then((res) => {
    console.log(res);
    console.log("=======================================================================================");
}); // 1

async function myfun() {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 3000);
        setTimeout(() => reject(new Error("Throw error")), 3000);
    });

    let result = await promise; // wait until the promise resolves (*)

    console.log(result); // "done!"
    console.log("=======================================================================================");

}

myfun();

class Thenable {
    constructor(num) {
        this.num = num;
    }
    then(resolve, reject) {
        console.log(resolve);
        // resolve with this.num*2 after 1000ms
        setTimeout(() => resolve(this.num * 2), 4000); // (*)
        setTimeout(() => reject(new Error("Throw error")), 4000); // (*)

    }
}

async function newfun() {
    // waits for 1 second, then result becomes 2
    let result = await new Thenable(8);
    console.log(result);
    console.log("=======================================================================================");

    //wait for 3 seconds
    await new Promise((resolve) => setTimeout(resolve, 3000));

    console.log("wait for a time")
}

newfun();

// Rewrite this example code from the chapter Promises chaining using async/await instead of .then/catch
function loadJson(url) {
    return fetch(url)
        .then(response => {
            if (response.status == 200) {
                return response.json();
            } else {
                throw new Error(response.status);
                console.log("=======================================================================================");
            }
        });
}

loadJson('https://javascript.info/no-such-user.json')
    .catch((err) => console.log("Promise: ", err)); // Error: 404


async function asyncloadJson(url) {
    let response = await fetch(url);
    if (response.status == 200) {
        let result = await response.json();
        return result;
    }
    await Promise.reject(new Error(response.status));
    console.log("=======================================================================================");
}

asyncloadJson('https://javascript.info/no-such-user.json')
    .catch((err) => console.log("Async Wait: ", err)); // Error: 404


//Below you can find the “rethrow” example. Rewrite it using async/await instead of .then/catch.
// And get rid of the recursion in favour of a loop in demoGithubUser: with async/await that becomes easy to do.

class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}

function newloadJson(url) {
    return fetch(url)
        .then(response => {
            if (response.status == 200) {
                return response.json();
            } else {
                throw new HttpError(response);
            }
        });
}

// Ask for a user name until github returns a valid user
function demoGithubUser() {
    let name = prompt("Enter a name?", "iliakan");

    return newloadJson(`https://api.github.com/users/${name}`)
        .then(user => {
            console.log(`Full name: ${user.name}.`);
            console.log("=======================================================================================");
            return user;
        })
        .catch(err => {
            if (err instanceof HttpError && err.response.status == 404) {
                console.log("No such user, please reenter.");
                return demoGithubUser();
            } else {
                throw err;
            }
        });
}

demoGithubUser();

async function asyncnewloadJson(url) {
    let response = await fetch(url);

    if (response.status == 200) {
        return response.json();
    }
    throw new HttpError(response);

}

async function asyncdemoGithubUser() {
    let name = prompt("Async Enter a name?", "iliakan");
    try {
        let user = await asyncnewloadJson(`https://api.github.com/users/${name}`);
        console.log(`Async Full name: ${user.name}.`);
        return user;
    } catch (err) {
        if (err instanceof HttpError && err.response.status == 404) {
            console.log("Async No such user, please reenter.");
            return asyncdemoGithubUser();
        } else {
            throw err;
        }
    }
}

asyncdemoGithubUser();

// Call async from non-async. We have a “regular” function called lastFun. How can you call the async function wait() and use its result inside of f?

async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));

    return 10;
}

function lastFun() {
    // ...what should you write here?
    // we need to call async wait() and wait to get 10
    // remember, we can't use "await"
    wait().then(res => console.log("lastfun", res)).catch(err => console.log(err));
}

lastFun();