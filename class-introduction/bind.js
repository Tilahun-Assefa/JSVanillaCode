function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
}

let user = {
    name: 'John',
    loginOk() {
        console.log(`${this.name} logged in`);
    },

    loginFail() {
        console.log(`${this.name} failed to log in`);
    },
};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// Partial application for login
function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
}

let user1 = {
    name: 'John',

    login(result) {
        console.log(this.name + (result ? ' logged in' : ' failed to log in'));
    }
};

askPassword(() => user1.login(true), () => user1.login(false)); // ?

