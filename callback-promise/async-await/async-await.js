async function f() {
    return 1;
}

f().then(console.log); // 1

async function myfun() {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 3000);
        setTimeout(() => reject(new Error("Throw error")), 3000);
    });

    let result = await promise; // wait until the promise resolves (*)

    console.log(result); // "done!"
}

myfun();