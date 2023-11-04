let num = 0x96;
console.log((num).toString(16));
console.log(num.toString(2));
console.log((num >> 1).toString(2));
console.log(ReverseBits(num).toString(16));
console.log(ReverseBits(num).toString(2));

// for (let i = 0; i < data.Length; i++) {
//     data[i] = ReverseBits(data[i]);
// }

function ReverseBits(value) {
    // Just mask out each bit in turn and work out where it should end up.
    return (((value & 0x01) << 7) |
        ((value & 0x02) << 5) |
        ((value & 0x04) << 3) |
        ((value & 0x08) << 1) |
        ((value & 0x10) >> 1) |
        ((value & 0x20) >> 3) |
        ((value & 0x40) >> 5) |
        ((value & 0x80) >> 7));
}

class Byte {
    constructor(Value) {
        this.Number = new Uint8Array(1);
        this.Number[0] = Value;
    }
    get Get() {
        return this.Number[0];
    }
    set Set(newValue) {
        this.Number[0] = newValue;
    }
};

let value = new Uint8Array(1);
value[0]=255;
console.log(value[0].toString(2));
console.log(value[1].toString(2));