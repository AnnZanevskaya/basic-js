module.exports = class DepthCalculator {
    lengthArr = [];
    length = 1;
    
    calculateDepth(arr) {
        arr.forEach(element => {
            if (Array.isArray(element)) {
                this.length += 1;
                this.calculateDepth(element);
            }
        });

        this.lengthArr.push(this.length);
        this.length = 1;

        return Math.max(...this.lengthArr);
    }
};