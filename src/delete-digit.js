const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = n.toString().split('');
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
  const arrCopy =  arr.slice();
    arrCopy.splice(i, 1); 
    let num = +arrCopy.join('');
    if (max < num) { max = num }
  }
   return max;
}

module.exports = {
  deleteDigit
};
