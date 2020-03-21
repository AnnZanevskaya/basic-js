module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw Error();
    }

    let result = [];

    for (let index = 0; index < arr.length; index++) {
        switch (arr[index]) {
            case '--discard-next':
                index++;

                break;
            case '--discard-prev':
                result.pop();

                break;
            case '--double-next':
                if ((index + 1) < arr.length) {
                    result.push(arr[index + 1]);
                }

                break;
            case '--double-prev':
                if (index !== 0) {
                    result.push(arr[index - 1]);
                }

                break;
            default:
                result.push(arr[index]);
        }
    }

    return result;
};