String.prototype.userConvert = function() {
    let originalString = this;
    originalString = originalString.split('-').join('');

    if (originalString.length % 2) return null;

    let arr = [];

    while (originalString.length) {
        arr.push(originalString.slice(0, 2));
        originalString = originalString.slice(2);
    }

    return arr.join(' ');
};

console.log('422d454d-1b9d-f16f-c81b-4e54929c9cc9'.userConvert()); // 42 2d 45 4d 1b 9d f1 6f c8 1b 4e 54 92 9c 9c c9