const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
   return this.chain.length;
  },
  addLink(value) {
    if (arguments.length === 0) {
      this.chain.push('( )');
      return this;
    }
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
   if (arguments.length === 0 || (typeof position !== 'number') || ((position ^ 0) !== position) || (position > this.getLength())  || (position <= 0) ) { // this.getLength() === this.chain.length
    this.deleteChain(); // or this.chain.length = 0;
    throw new Error ("You can't remove incorrect link!");
   }
   this.chain.splice(--position, 1);
   return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = this.chain.join('~~');
    this.deleteChain(); // or this.chain.length = 0;
    return result;
  },
  deleteChain() {
     this.chain.length = 0;
  }
};

module.exports = {
  chainMaker
};
