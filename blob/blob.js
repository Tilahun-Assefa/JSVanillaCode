// var instead of let because is painful to use let in dev tools console
function showFile(input) {
    var file = input.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    setTimeout(function () {
        document.write(`<img src="${reader.result}">`);
    }, 300);
    // you can use 1ms but then sometimes there is no enough time
    // yes, promises is better way, but I am just beginner, but I promise - one day...
}

// document.clear;
document.open();
document.close();
document.write`<input type="file" onchange="showFile(this)">`;

function showFile(input) {
    var file = input.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function () {
        console.log(reader.result); // you will see base64 encoded text in console
        console.log(`${reader.result}`); // you will see base64 encoded texts
        document.write(`<img src="${reader.result}">`); // you will see image in console
        document.write(reader.result); // you will see base64 encoded text in web page
    };

    reader.onerror = function () {
        console.log(reader.error);
    };
}