class VigenereCipheringMachine {
    constructor(direct) {
        this.isDirect = direct;
    }
    encrypt(message, key) {
        checkParams(message, key);
    }

    decrypt(message, key) {
        checkParams(message, key);
    }
}

function checkParams(message, key) {
    if (message === undefined ||  key === undefined)
        throw new Error();
}


module.exports = VigenereCipheringMachine;