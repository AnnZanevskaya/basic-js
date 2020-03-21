const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value === "") {
      this.chain.push("( )");
    } else {
      this.chain.push(`( ${value} )`);
    }

    return this;
  },
  removeLink(position) {
    if (position == '' || this.chain[position] === undefined) {
      this.chain = [];
      throw new Error();
    }

    this.chain.splice(position - 1, 1);

    return this;
  },
  reverseChain() {
    this.chain.reverse();

    return this;
  },
  finishChain() {
    let resultChain = '';

    this.chain.map((element, i) => {
      if (i == 0) {
        resultChain += element;
      } else {
        resultChain += `~~${element}`;
      }
    });

    this.chain = [];

    return resultChain;
  }
};

module.exports = chainMaker;