let buffer = new ArrayBuffer(16); // create a buffer of length 16
console.log(buffer.byteLength); // 16

let view = new Uint16Array(buffer); // treat buffer as a sequence of 16-bit integers
console.log(view);
console.log(Uint16Array.BYTES_PER_ELEMENT); // 2 bytes per integer

console.log(view.length); // 8, it stores that many integers
console.log(view.byteLength); // 16, the size in bytes

// let's write a value
view[0] = 123456;

// iterate over values
for(let num of view) {
  console.log(num); // 57920, then 0, 0, 0 ,0,0,0,0(8 values total)
}

let arr8 = new Uint8Array(buffer);
console.log(arr8);
console.log(arr8.length); 
console.log(arr8[0] ); // 1
console.log(arr8[1] ); // 232, tried to copy 1000, but can't fit 1000 into 8 bits (explanations below)

let myarr = new Uint8Array([0, 81, 2, 3]);
console.log("my new byte arr8", myarr);
console.log(new TextDecoder().decode(myarr) );
// another view on the same data
let arr16 = new Uint16Array(myarr.buffer);
console.log("my new byteArr 16", arr16);

// binary array of 4 bytes, all have the maximal value 255
let newbuffer = new Uint8Array([255, 255, 255, 255]).buffer;

let dataView = new DataView(newbuffer);

// get 8-bit number at offset 0
alert( dataView.getUint8(0) ); // 255

// now get 16-bit number at offset 0, it consists of 2 bytes, together interpreted as 65535
alert( dataView.getUint16(0) ); // 65535 (biggest 16-bit unsigned int)

// get 32-bit number at offset 0
alert( dataView.getUint32(0) ); // 4294967295 (biggest 32-bit unsigned int)

dataView.setUint32(0, 0); // set 4-byte number to zero, thus setting all bytes to 0

let encoder = new TextEncoder();

let uint8Array = encoder.encode("Hello");
console.log(uint8Array); // 72,101,108,108,111