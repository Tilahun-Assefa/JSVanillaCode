fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
    .then(response => {
        for (let [key, value] of response.headers) {
            console.log(`${key} = ${value}`);
        }
        return response.json();
    })
    .then(commits => console.log(commits[0].author.login));

fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
    .then(response => response.text())
    .then(text => console.log(text.slice(0, 80) + '...'));


(async () => {
    try {
        let response = await fetch('http://article/fetch/logo-fetch.svg');

        let blob = await response.blob(); // download as Blob object

        // create <img> for it
        let img = document.createElement('img');
        img.style = 'position:fixed;top:10px;left:10px;width:100px';
        document.body.append(img);

        // show it
        img.src = URL.createObjectURL(blob);

        setTimeout(() => { // hide after three seconds
            img.remove();
            URL.revokeObjectURL(img.src);
        }, 3000);
    } catch (err) {
        console.log("Fetch Error: ", err);
    }
})();

let user = {
    name: 'John',
    surname: 'Smith'
};
console.log(JSON.stringify(user));

canvasElem.onmousemove = function (e) {
    let ctx = canvasElem.getContext('2d');
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
};

async function submit() {
    let blob = await new Promise(resolve => canvasElem.toBlob(resolve, 'image/png'));
    let response = await fetch('/article/fetch/post/image', {
        method: 'POST',
        body: blob
    });

    // the server responds with confirmation and the image size
    let result = await response.json();
    console.log(result.message);
}