module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw Error();
    }

    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];

        if (element === "--discard-next") {
            arr = discardNext(arr, index);
        }

        if (element === "--discard-prev") {
            arr = discardPrev(arr, index);
        }

        if (element === "--double-next") {
            arr = doubleNext(arr, index);
        }

        if (element === "--double-prev") {
            arr = doublePrev(arr, index);
        }
    }

    return arr;
};

function discardNext(array, index) {
    if (array[index + 1] !== undefined) {
        array.splice(index + 1, 1);
    }

    array.splice(index, 1);

    return array;
}

function doubleNext(array, index) {
    if (array[index + 1] !== undefined) {
        array.splice(index + 1, 0, array[index + 1]);
    }

    array.splice(index, 1);

    return array;
}

function discardPrev(array, index) {
    if (array[index - 1] !== undefined) {
        array.splice(index - 1, 1);
    }

    array.splice(index, 1);

    return array;
}

function doublePrev(array, index) {
    if (array[index - 1] !== undefined) {
        array.splice(index - 1, 0, array[index - 1]);
    }

    array.splice(index + 1, 1);

    return array;
}