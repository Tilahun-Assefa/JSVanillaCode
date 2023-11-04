let arrBuffer;
let data = [];
function readFile(input) {
    let file = input.files[0];

    console.log(`File name: ${file.name}`); // e.g my.png
    console.log(`Last modified: ${file.lastModified}`); // e.g 1552830408824

    let reader = new FileReader();

    reader.readAsArrayBuffer(file);
    reader.onload = function () {
        arrBuffer = reader.result;
        // console.log(arrBuffer.byteLength);
        let view = new Uint8Array(arrBuffer); // treat buffer as a sequence of 16-bit integers
        // console.log(view);

        view.slice(0, 16).forEach(el => {
            console.log(el.toString(16));
            data.push(el.toString(2));
        })
        console.log(data);
    };

    reader.onerror = function () {
        console.log(reader.error);
    };
}

