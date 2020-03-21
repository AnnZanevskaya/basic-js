module.exports = function repeater(str, options) {
    if (!options.separator) {
        options.separator = '+';
    }

    if (!options.repeatTimes) {
        options.repeatTimes = 1;
    }

    if (options.addition === null) {
        options.addition = 'null';
    }

    let additionString = new Array(options.additionRepeatTimes)
        .fill(options.addition)
        .join(options.additionSeparator);

    let result = new Array(options.repeatTimes)
        .fill(str + additionString)
        .join(options.separator);

    return result;
};